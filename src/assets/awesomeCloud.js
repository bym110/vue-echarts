import jQuery from 'jquery';
/*! 
jQuery.awesomeCloud v0.2 indyarmy.com
by Russ Porosky
IndyArmy Network, Inc.

Usage:
    $( "#myContainer" ).awesomeCloud( settings );

    Your container must contain words in the following format:
        <element data-weight="12">Word</element>
    The <element> can be any valid HTML element (for example, <span>), and
    the weight must be a decimal or integer contained in the "data-weight"
    attribute. The content of the <element> is the word that will be
    displayed. The original element is removed from the page (but not the DOM).

Settings:
    "size" {
        "grid" : 8, // word spacing; smaller is more tightly packed but takes longer
        "factor" : 0, // font resizing factor; default "0" means automatically fill the container
        "normalize" : true // reduces outlier weights for a more attractive output
    },
    "color" {
        "background" : "rgba(255,255,255,0)", // default is transparent
        "start" : "#20f", // color of the smallest font
        "end" : "#e00" // color of the largest font
    },
    "options" {
        "color" : "gradient", // if set to "random-light" or "random-dark", color.start and color.end are ignored
        "rotationRatio" : 0.3, // 0 is all horizontal words, 1 is all vertical words
        "printMultiplier" : 1 // 1 will look best on screen and is fastest; setting to 3.5 gives nice 300dpi printer output but takes longer
    },
    "font" : "Futura, Helvetica, sans-serif", // font family, identical to CSS font-family attribute
    "shape" : "circle", // one of "circle", "square", "diamond", "triangle", "triangle-forward", "x", "pentagon" or "star"; this can also be a function with the following prototype - function( theta ) {}

Notes:
    AwesomeCloud uses the HTML5 canvas element to create word clouds
    similar to http://wordle.net/. It may or may not work for you.

    If your words are all fairly evenly weighted and are large compared to
    the containing element, you may need to adjust the size.grid setting
    to make the output more attractive. Conversely, you can adjust the
    size.factor setting instead.

    It should be noted that the more words you have, the smaller the size.grid,
    and the larger the options.printMultiplier, the longer it will take to
    generate and display the word cloud.

Extra Thanks:
    Without Timothy Chien's work (https://github.com/timdream/wordcloud),
    this plugin would have taken much longer and been much uglier. Fate
    smiled and I found his version while I was searching out the equations
    I needed to make a circle-shaped cloud. I've simplified and, in places,
    dumbified his code for this plugin, and even outright copied chunks of
    it since those parts just worked far better than what I had originally
    written. Many thanks, Timothy, for saving some of my wits, sanity and
    hair over the past week.

    Thanks to http://www.websanova.com/tutorials/jquery/jquery-plugin-development-boilerplate
    for providing a great boilerplate I could use for my first jQuery plugin.
    My original layout worked, but this one was much better.
 */


(function ($) {
	"use strict";
	var pluginName = "awesomeCloud", // name of the plugin, mainly for canvas IDs
		defaultSettings = {
			"size": {
				"grid": 8, // word spacing, smaller is more tightly packed
				"factor": 0, // font resize factor, 0 means automatic
				"normalize": true // reduces outliers for more attractive output
			},
			"color": {
				"background": "rgba(255,255,255,0)", // background color, transparent by default
				"start": "#20f", // color of the smallest font, if options.color = "gradient""
                "end": "#e00", // color of the largest font, if options.color = "gradient"
                "colors":['#C90619','#060EC9','#C9C006','#06C99A','#06C90E']
			},
			"options": {
				"color": "gradient", // if "random-light" or "random-dark", color.start and color.end are ignored
				"rotationRatio": 0.3, // 0 is all horizontal, 1 is all vertical
				"printMultiplier": 1, // set to 3 for nice printer output; higher numbers take longer
				"sort": "highest" // "highest" to show big words first, "lowest" to do small words first, "random" to not care
			},
			"font": "Helvetica, Arial, sans-serif", // the CSS font-family string
			"shape": "circle" // the selected shape keyword, or a theta function describing a shape
		};

	$.fn.awesomeCloud = function (option, settings) {
		if (typeof option === "object") {
			settings = option;
		} else if (typeof option === "string") {
			var data = this.data("_" + pluginName);
			if (data) {
				if (defaultSettings[ option ] !== undefined) {
					if (settings !== undefined) {
						data.settings[ option ] = settings;
						return true;
					} else {
						return data.settings[ option ];
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		}

		settings = $.extend(true, {}, defaultSettings, settings || {});

		return this.each(function () {
			var elem = $(this),
				$settings = jQuery.extend(true, {}, settings),
				cloud = new AwesomeCloud($settings, elem);

			cloud.create();

			elem.data("_" + pluginName, cloud);
		});
	};

	function AwesomeCloud(settings, elem) {
		this.bctx = null;
		this.bgPixel = null;
		this.ctx = null;
		this.diffChannel = null;
		this.container = elem;
		this.grid = [];
		this.ngx = null;
		this.ngy = null;
		this.settings = settings;
		this.size = null;
		this.words = [];
		this.linkTable = [];
		this.match = null;
		return this;
	}

	AwesomeCloud.prototype = {
		create: function () {
			var $this = this,
				i = 0,
				ctxID = null,
				runningTotal = 0,
				currentWeight = 0,
				tempCtxID = pluginName + "TempCheck",
				lastWeight = null,
				foundMax = false,
				fontSize = 0,
				jump = 0.1,
				maxWidth = 0,
				maxWord = 0,
				counter = 0,
				width = 0,
				link = null,
				target = null,
				tag = null,
				dimension,
				fctx,
				wdPixel,
				x,
				y;

			this.settings.weightFactor = function (pt) { // 文字的大小
				return pt * $this.settings.size.factor;
			};

			this.settings.gridSize = Math.max(this.settings.size.grid, 4) * this.settings.options.printMultiplier;

			this.settings.color.start = this.colorToRGBA(this.settings.color.start);
			this.settings.color.end = this.colorToRGBA(this.settings.color.end);
			this.settings.color.background = this.colorToRGBA(this.settings.color.background);

			this.settings.minSize = this.minimumFontSize();

			this.settings.ellipticity = 1;

			switch (this.settings.shape) {
				case "square":
					this.settings.shape = function (theta) {
						// A square
						var thetaDelta = ( theta + Math.PI / 4 ) % ( 2 * Math.PI / 4 );
						return 1 / ( Math.cos(thetaDelta) + Math.sin(thetaDelta) );
					};
					break;
				case "diamond":
					this.settings.shape = function (theta) {
						// A diamond
						var thetaDelta = theta % ( 2 * Math.PI / 4 );
						return 1 / ( Math.cos(thetaDelta) + Math.sin(thetaDelta) );
					};
					break;
				case "x":
					this.settings.shape = function (theta) {
						// An X
						var thetaDelta = theta % ( 2 * Math.PI / 4 );
						return 1 / ( Math.cos(thetaDelta) + Math.sin(thetaDelta) - ( 2 * Math.PI / 4 ) );
					};
					break;
				case "triangle":
					this.settings.shape = function (theta) {
						// A triangle
						var thetaDelta = ( theta + Math.PI * 3 / 2 ) % ( 2 * Math.PI / 3 );
						return 1 / ( Math.cos(thetaDelta) + Math.sqrt(3) * Math.sin(thetaDelta) );
					};
					break;
				case "triangle-forward":
					this.settings.shape = function (theta) {
						// A triangle pointing to the right
						var thetaDelta = theta % ( 2 * Math.PI / 3 );
						return 1 / ( Math.cos(thetaDelta) + Math.sqrt(3) * Math.sin(thetaDelta) );
					};
					break;
				case "pentagon":
					this.settings.shape = function (theta) {
						// A pentagon
						var thetaDelta = ( theta + 0.955 ) % ( 2 * Math.PI / 5 );
						return 1 / ( Math.cos(thetaDelta) + 0.726543 * Math.sin(thetaDelta) );
					};
					break;
				case "star":
					this.settings.shape = function (theta) {
						// A 5-pointed star
						var thetaDelta = ( theta + 0.955 ) % ( 2 * Math.PI / 10 );
						if (( theta + 0.955 ) % ( 2 * Math.PI / 5 ) - ( 2 * Math.PI / 10 ) >= 0) {
							return 1 / ( Math.cos(( 2 * Math.PI / 10 ) - thetaDelta) + 3.07768 * Math.sin(( 2 * Math.PI / 10 ) - thetaDelta) );
						} else {
							return 1 / ( Math.cos(thetaDelta) + 3.07768 * Math.sin(thetaDelta) );
						}
					};
					break;
				case "circle":
					this.settings.shape = function (theta) {
						return 1;
					};
					break;
				default:
					this.settings.shape = function (theta) {
						return 1;
					};
					break;
			}

			this.size = {
				"left": this.container.offset().left,
				"top": this.container.offset().top,
				"height": ( this.container.height() * this.settings.options.printMultiplier ),
				"width": ( this.container.width() * this.settings.options.printMultiplier ),
				"screenHeight": this.container.height(),
				"screenWidth": this.container.width()
			};
			this.settings.ellipticity = this.size.height / this.size.width;
			if (this.settings.ellipticity > 2) {
				this.settings.ellipticity = 2;
			}
			if (this.settings.ellipticity < 0.2) {
				this.settings.ellipticity = 0.2;
			}

			this.settings.weight = {
				"lowest": null,
				"highest": null,
				"average": null
			};
			this.container.children().each(function (i, e) {
				link = null;
				tag = null;
				currentWeight = parseInt($(this).attr("data-weight"), 10);
				runningTotal += currentWeight;
				if (!$this.settings.weight.lowest) {
					$this.settings.weight.lowest = currentWeight;
				}
				if (!$this.settings.weight.highest) {
					$this.settings.weight.highest = currentWeight;
				}
				if (currentWeight < $this.settings.weight.lowest) {
					$this.settings.weight.lowest = currentWeight;
				}
				if (currentWeight > $this.settings.weight.highest) {
					$this.settings.weight.highest = currentWeight;
				}
				$this.settings.weight.average = runningTotal / ( i + 1 );
				// While we're here looping anyways, let's hide the originals.
				$(this).css("display", "none");
				// Check whether there is a link
				if ($(this).has("a").length === 0) {
					tag = $(this).html();
				} else {
					var aElement = $(this).children(":first");
					link = aElement.attr("href");
					target = aElement.attr("target");
					tag = aElement.html();
				}
				$this.words.push([ tag , currentWeight, link, target]);
			});
			this.settings.range = this.settings.weight.highest - this.settings.weight.lowest;

			// Normalize the weight distribution if required.
			if (this.settings.size.normalize === true) {
				// Sort the words by weight, ascending.
				this.words.sort(function (a, b) {
					return ( a[ 1 ] - b[ 1 ]);
				});

				for (i = 0; i < this.words.length; i++) {
					if (lastWeight === null) {
						lastWeight = this.words[ i ][ 1 ];
					} else {
						if (this.words[ i ][ 1 ] - lastWeight > this.settings.weight.average) {
							this.words[ i ][ 1 ] -= ( this.words[ i ][ 1 ] - lastWeight ) / ( this.settings.weight.average * 0.38 ) + lastWeight;
						}
					}
				}
			}

			// Either randomize the words, or sort 'em
			this.words.sort(function (a, b) {
				if ($this.settings.options.sort === "random") {
					return 0.5 - Math.random();
				} else if ($this.settings.options.sort === "lowest") {
					return ( a[ 1 ] - b[ 1 ]);
				} else { // "highest"
					return ( b[ 1 ] - a[ 1 ]);
				}
			});

			// Set the font scaling factor if factor is 0.
			if (this.settings.size.factor === parseInt(0, 10)) {
				this.settings.size.factor = 1;
				ctxID = pluginName + "SizeTest";
				foundMax = false;
				fontSize = 0;
				jump = 0.1;
				maxWidth = 0;
				maxWord = 0;
				counter = 0;
				width = 0;
				dimension = Math.min(this.size.width, this.size.height);
				fctx = this.createCanvas({
					"id": ctxID,
					"width": dimension,
					"height": dimension,
					"left": 0,
					"top": 0
				});
				// Find the widest word at normal resolution.
				for (i = 0; i < this.words.length; i++) {
					fctx.font = this.settings.weightFactor(this.words[ i ][ 1 ]) + "px " + this.settings.font;
					width = fctx.measureText(this.words[ i ][ 0 ]).width;
					if (width > maxWidth) {
						maxWidth = width;
						maxWord = this.words[ i ];
					}
				}
				// Keep increasing the font size until we find the largest that will fit in the smallest dimension of the container.
				while (!foundMax) {
					fontSize = this.settings.weightFactor(maxWord[ 1 ]);
					fctx.font = fontSize.toString(10) + "px " + this.settings.font;
					width = fctx.measureText(maxWord[ 0 ]).width;
					if (width > ( dimension * 0.95 )) {
						this.settings.size.factor -= jump;
					} else if (width < ( dimension * 0.9 )) {
						this.settings.size.factor += jump;
					} else {
						foundMax = true;
					}
					counter += 1;
					if (counter > 10000) {
						// Dude, if it takes this many tries to max out the font, set it yourself :)
						foundMax = true;
					}
				}
				this.destroyCanvas(ctxID);
				this.settings.size.factor -= jump;
			}

			// Figure out the color stepping if options.color is "gradient".
			this.settings.color.increment = {
				"r": ( this.settings.color.end.r - this.settings.color.start.r ) / this.settings.range,
				"g": ( this.settings.color.end.g - this.settings.color.start.g ) / this.settings.range,
				"b": ( this.settings.color.end.b - this.settings.color.start.b ) / this.settings.range,
				"a": ( this.settings.color.end.a - this.settings.color.start.a ) / this.settings.range
			};

			// Start drawing words!
			this.ngx = Math.floor(this.size.width / this.settings.gridSize);
			this.ngy = Math.floor(this.size.height / this.settings.gridSize);
			this.grid = [];
			ctxID = pluginName + this.container.attr("id");
			this.ctx = this.createCanvas({
				"parent": this.container,
				"id": ctxID,
				"width": this.size.width,
				"height": this.size.height,
				"left": "0px",
				"top": "0px"
			});
			this.bctx = this.createCanvas({
				"id": tempCtxID,
				"width": 1,
				"height": 1,
				"left": 0,
				"top": 0
			});
			this.bctx.fillStyle = this.settings.color.background.rgba;
			this.bctx.clearRect(0, 0, 1, 1);
			this.bctx.fillStyle = this.settings.color.background.rgba;
			this.bctx.fillRect(0, 0, 1, 1);
			this.bgPixel = this.bctx.getImageData(0, 0, 1, 1).data;
			if (typeof this.settings.options.color !== "function" && this.settings.options.color.substr(0, 6) !== "random" && this.settings.options.color.substr(0, 8) !== "gradient") {
				this.bctx.fillStyle = this.colorToRGBA(this.settings.options.color).rgba;
				this.bctx.fillRect(0, 0, 1, 1);
				wdPixel = this.bctx.getImageData(0, 0, 1, 1).data;
				i = 4;
				while (i--) {
					if (Math.abs(wdPixel[ i ] - this.bgPixel[ i ]) > 10) {
						this.diffChannel = i;
						break;
					}
				}
			} else {
				this.diffChannel = NaN;
			}
			this.destroyCanvas(tempCtxID);
			x = this.ngx;
			while (x--) {
				this.grid[ x ] = [];
				y = this.ngy;
				while (y--) {
					this.grid[ x ][ y ] = true;
				}
			}
			this.ctx.fillStyle = this.settings.color.background.rgba;
			this.ctx.clearRect(0, 0, this.ngx * ( this.settings.gridSize + 1 ), this.ngy * ( this.settings.gridSize + 1 ));
			this.ctx.fillRect(0, 0, this.ngx * ( this.settings.gridSize + 1 ), this.ngy * ( this.settings.gridSize + 1 ));
			this.ctx.textBaseline = "top";
			i = 0;
			window.setImmediate(function loop() {
					if (i >= $this.words.length) {
						return;
                    }
                    
					$this.putWord($this.words[ i ][ 0 ], $this.words[ i ][ 1 ], $this.words[ i ][ 2 ], $this.words[ i ][ 3 ],i);
					i += 1;
					window.setImmediate(loop);
				});
			$this.allDone(ctxID);
			return true;
		},
		allDone: function (canvasID) {
			// $this.linkTable
			var $this = this,
				canvasDOM = document.getElementById(canvasID);
			$( "#" + canvasID ).width( this.size.screenWidth );
			$( "#" + canvasID ).height( this.size.screenHeight );
			$( "#" + canvasID ).css( "display", "block" );
			$( "#" + canvasID ).css( "visibility", "visible" );

			canvasDOM.addEventListener("mousemove", function (ev) {
				var x = 0, y = 0;
				// Get the mouse position relative to the canvas element.
				if (ev.layerX || ev.layerX === 0) { //for firefox
					x = ev.layerX;
					y = ev.layerY;
				}
				x -= canvasDOM.offsetLeft;
				x += $(canvasDOM).position().left;
				x = Math.floor(x * $this.settings.options.printMultiplier);
				y -= canvasDOM.offsetTop;
				y += $(canvasDOM).position().top;
				y = Math.floor(y * $this.settings.options.printMultiplier);

				$this.match = null;
				for (var idx = 0, blocks = $this.linkTable.length; idx < blocks; idx++) {
					var thisWord = $this.linkTable[idx];
					if (x >= thisWord.x && x <= thisWord.x + thisWord.width && y >= thisWord.y && y <= thisWord.y + thisWord.height) {
						// Smaller word will take precedence using this type of lookup.
						$this.match = thisWord;
					}
				}
				if ($this.match !== null) {
					document.body.style.cursor = "pointer";
				} else {
					document.body.style.cursor = "";
				}
			}, false);
			canvasDOM.addEventListener("click", function (ev) {
				if ($this.match !== null) {
					if ($this.match.target) {
						window.open($this.match.link, $this.match.target);
					} else {
						window.location = $this.match.link;
					}
				}
			}, false);
		},
		minimumFontSize: function () {
			var ctxID = pluginName + "FontTest", fontCtx = this.createCanvas({
					"id": ctxID,
					"width": 50,
					"height": 50,
					"left": 0,
					"top": 0
				}), size = 20, hanWidth, mWidth;
			while (size) {
				fontCtx.font = size.toString(10) + "px sans-serif";
				if (fontCtx.measureText("\uFF37").width === hanWidth && fontCtx.measureText("m").width === mWidth) {
					this.destroyCanvas(ctxID);
					return ( size + 1 ) / 2;
				}
				hanWidth = fontCtx.measureText("\uFF37").width;
				mWidth = fontCtx.measureText("m").width;
				size -= 1;
			}
			this.destroyCanvas(ctxID);
			return 0;
		},
		createCanvas: function (options) {
			var canvasID = options.id, canvasDOM, parent = $("body");
			if (options.parent !== undefined) {
				parent = options.parent;
			}
			parent.append("<canvas id=\"" + canvasID + "\" width=\"" + options.width + "\" height=\"" + options.height + "\">.</canvas>");
			$("#" + canvasID).css("visibility", "hidden");
			$("#" + canvasID).css("display", "none");
			$("#" + canvasID).css("position", "relative");
			$("#" + canvasID).css("z-index", 10000);
			$("#" + canvasID).width(options.width);
			$("#" + canvasID).height(options.height);
			$("#" + canvasID).offset({ top: options.top, left: options.left });
			canvasDOM = document.getElementById(canvasID);
			canvasDOM.setAttribute("width", options.width);
			canvasDOM.setAttribute("height", options.height);
			return canvasDOM.getContext("2d");
		},
		destroyCanvas: function (id) {
			$("#" + id).remove();
		},
		putWord: function (word, weight, link, target,num) {
			var $this = this,
				rotate = ( Math.random() < this.settings.options.rotationRatio ),
				fontSize = this.settings.weightFactor(weight),
				h = null,
				w = null,
				mapIndicesX,
				mapIndicesY,
				xIndex,
				yIndex,
				newObj = {},
				font,
				X, Y, gw, gh, center, R, T, r, t, rx, fc, fctx, ctxID, points;
			if (fontSize <= this.settings.minSize) {
				return false;
			}
			this.ctx.font = fontSize.toString(10) + "px " + this.settings.font;
			if (rotate) {
				h = this.ctx.measureText(word).width;
				w = Math.max(fontSize, this.ctx.measureText("m").width, this.ctx.measureText("\uFF37").width);
				if (/[Jgpqy]/.test(word)) {
					w *= 3 / 2;
				}
				w += Math.floor(fontSize / 6);
				h += Math.floor(fontSize / 6);
			} else {
				w = this.ctx.measureText(word).width;
				h = Math.max(fontSize, this.ctx.measureText("m").width, this.ctx.measureText("\uFF37").width);
				if (/[Jgpqy]/.test(word)) {
					h *= 3 / 2;
				}
				h += Math.floor(fontSize / 6);
				w += Math.floor(fontSize / 6);
			}
			w = Math.ceil(w);
			h = Math.ceil(h);
			
			gw = Math.ceil(w / this.settings.gridSize);
			gh = Math.ceil(h / this.settings.gridSize);
			center = [ this.ngx / 2, this.ngy / 2 ];
			R = Math.floor(Math.sqrt(this.ngx * this.ngx + this.ngy * this.ngy));
			T = this.ngx + this.ngy;
            r = R + 1;
			while (r--) {
				t = T;
				points = [];
				while (t--) {
					rx = this.settings.shape(t / T * 2 * Math.PI);
					points.push([ Math.floor(center[ 0 ] + ( R - r ) * rx * Math.cos(-t / T * 2 * Math.PI) - gw / 2), Math.floor(center[ 1 ] + ( R - r ) * rx * this.settings.ellipticity * Math.sin(-t / T * 2 * Math.PI) - gh / 2), t / T * 2 * Math.PI ]);
				}
				if (points.shuffle().some(function (gxy) {
						if ($this.canFitText(gxy[ 0 ], gxy[ 1 ], gw, gh)) {
							X = Math.floor(gxy[ 0 ] * $this.settings.gridSize + ( gw * $this.settings.gridSize - w ) / 2);
							Y = Math.floor(gxy[ 1 ] * $this.settings.gridSize + ( gh * $this.settings.gridSize - h ) / 2);
							if (rotate) {
								ctxID = pluginName + "Rotator";
								fctx = $this.createCanvas({
									"id": ctxID,
									"width": w,
									"height": h,
									"left": 0,
									"top": 0
								});
								fc = document.getElementById(ctxID);
								fctx.fillStyle = $this.settings.color.background.rgba;
								fctx.fillRect(0, 0, w, h);
								fctx.fillStyle = $this.wordcolor(word, weight, fontSize, R - r, gxy[ 2 ]);
								fctx.font = fontSize.toString(10) + "px " + $this.settings.font;
								fctx.textBaseline = "top";
								if (rotate) {
									fctx.translate(0, h);
									fctx.rotate(-Math.PI / 2);
								}
								fctx.fillText(word, Math.floor(fontSize / 6), 0);
								$this.ctx.clearRect(X, Y, w, h);
								$this.ctx.drawImage(fc, X, Y, w, h);
								$this.destroyCanvas(ctxID);
							} else {

								font = fontSize.toString(10) + "px " + $this.settings.font;
								$this.ctx.font = font;
									if (num<=5) {
										$this.ctx.fillStyle = $this.settings.color.colors[num] // 文字颜色
									}else {
										$this.ctx.fillStyle = $this.settings.color.colors[num%5];// 文字颜色
									}
									
								
								
								$this.ctx.fillText(word, X+10, Y+20); // 文字位置
								h = $this.getTextHeight(font).height;
								w = $this.ctx.measureText(word).width;
							}

							// Build Lookup Table
							if (link !== null) {
								$this.linkTable.push({
									"x": X,
									"y": Y,
									"width": w,
									"height": h,
									"word": word,
									"link": link,
									"target": target
								});
							}

							$this.updateGrid(gxy[ 0 ], gxy[ 1 ], gw, gh);

							return true;
						}
						return false;
					})) {
					return true;
				}
			}
			return false;
		},
		canFitText: function (gx, gy, gw, gh) {
			if (gx < 0 || gy < 0 || gx + gw > this.ngx || gy + gh > this.ngy) {
				return false;
			}
			var x = gw, y;
			while (x--) {
				y = gh;
				while (y--) {
					if (!this.grid[ gx + x ][ gy + y ]) {
						return false;
					}
				}
			}
			return true;
		},
		wordcolor: function (word, weight, fontSize, radius, theta) {
            var output = null;
			switch (this.settings.options.color) {
                case "gradient" :
					output = "rgba(" + Math.round(this.settings.color.start.r + ( this.settings.color.increment.r * ( weight - this.settings.weight.lowest ) )) + "," + Math.round(this.settings.color.start.g + ( this.settings.color.increment.g * ( weight - this.settings.weight.lowest ) )) + "," + Math.round(this.settings.color.start.b + ( this.settings.color.increment.b * ( weight - this.settings.weight.lowest ) )) + "," + Math.round(this.settings.color.start.a + ( this.settings.color.increment.a * ( weight - this.settings.weight.lowest ) )) + ")";
                    
                              
                    break;
				case "random-dark" :
					output = "rgba(" + Math.floor(Math.random() * 128).toString(10) + "," + Math.floor(Math.random() * 128).toString(10) + "," + Math.floor(Math.random() * 128).toString(10) + ",1)";
					break;
				case "random-light" :
					output = "rgba(" + Math.floor(Math.random() * 128 + 128).toString(10) + "," + Math.floor(Math.random() * 128 + 128).toString(10) + "," + Math.floor(Math.random() * 128 + 128).toString(10) + ",1)";
					break;
				default :
					if (typeof this.settings.wordColor !== "function") {
						output = "rgba(127,127,127,1)";
					} else {
						output = this.settings.wordColor(word, weight, fontSize, radius, theta);
					}
					break;
            }
			return output;
		},
		updateGrid: function (gx, gy, gw, gh, skipDiffChannel) {
			var x = gw, y, imgData = this.ctx.getImageData(gx * this.settings.gridSize, gy * this.settings.gridSize, gw * this.settings.gridSize, gh * this.settings.gridSize);
			while (x--) {
				y = gh;
				while (y--) {
					if (!this.isGridEmpty(imgData, x * this.settings.gridSize, y * this.settings.gridSize, gw * this.settings.gridSize, gh * this.settings.gridSize, skipDiffChannel)) {
						this.grid[ gx + x ][ gy + y ] = false;
					}
				}
			}
		},
		isGridEmpty: function (imgData, x, y, w, h, skipDiffChannel) {
			var i = this.settings.gridSize, j, k;
			if (!isNaN(this.diffChannel) && !skipDiffChannel) {
				while (i--) {
					j = this.settings.gridSize;
					while (j--) {
						if (this.getChannelData(imgData.data, x + i, y + j, w, h, this.diffChannel) !== this.bgPixel[ this.diffChannel ]) {
							return false;
						}
					}
				}
			} else {
				while (i--) {
					j = this.settings.gridSize;
					while (j--) {
						k = 4;
						while (k--) {
							if (this.getChannelData(imgData.data, x + i, y + j, w, h, k) !== this.bgPixel[ k ]) {
								return false;
							}
						}
					}
				}
			}
			return true;
		},
		getChannelData: function (data, x, y, w, h, c) {
			return data[
				( y * w + x ) * 4 + c
				];
		},
		colorToRGBA: function (color) {
			color = color.replace(/^\s*#|\s*$/g, "");
			if (color.length === 3) {
				color = color.replace(/(.)/g, "$1$1");
			}
			color = color.toLowerCase();
			var namedColors = {
					aliceblue: "f0f8ff",
					antiquewhite: "faebd7",
					aqua: "00ffff",
					aquamarine: "7fffd4",
					azure: "f0ffff",
					beige: "f5f5dc",
					bisque: "ffe4c4",
					black: "000000",
					blanchedalmond: "ffebcd",
					blue: "0000ff",
					blueviolet: "8a2be2",
					brown: "a52a2a",
					burlywood: "deb887",
					cadetblue: "5f9ea0",
					chartreuse: "7fff00",
					chocolate: "d2691e",
					coral: "ff7f50",
					cornflowerblue: "6495ed",
					cornsilk: "fff8dc",
					crimson: "dc143c",
					cyan: "00ffff",
					darkblue: "00008b",
					darkcyan: "008b8b",
					darkgoldenrod: "b8860b",
					darkgray: "a9a9a9",
					darkgreen: "006400",
					darkkhaki: "bdb76b",
					darkmagenta: "8b008b",
					darkolivegreen: "556b2f",
					darkorange: "ff8c00",
					darkorchid: "9932cc",
					darkred: "8b0000",
					darksalmon: "e9967a",
					darkseagreen: "8fbc8f",
					darkslateblue: "483d8b",
					darkslategray: "2f4f4f",
					darkturquoise: "00ced1",
					darkviolet: "9400d3",
					deeppink: "ff1493",
					deepskyblue: "00bfff",
					dimgray: "696969",
					dodgerblue: "1e90ff",
					feldspar: "d19275",
					firebrick: "b22222",
					floralwhite: "fffaf0",
					forestgreen: "228b22",
					fuchsia: "ff00ff",
					gainsboro: "dcdcdc",
					ghostwhite: "f8f8ff",
					gold: "ffd700",
					goldenrod: "daa520",
					gray: "808080",
					green: "008000",
					greenyellow: "adff2f",
					honeydew: "f0fff0",
					hotpink: "ff69b4",
					indianred: "cd5c5c",
					indigo: "4b0082",
					ivory: "fffff0",
					khaki: "f0e68c",
					lavender: "e6e6fa",
					lavenderblush: "fff0f5",
					lawngreen: "7cfc00",
					lemonchiffon: "fffacd",
					lightblue: "add8e6",
					lightcoral: "f08080",
					lightcyan: "e0ffff",
					lightgoldenrodyellow: "fafad2",
					lightgrey: "d3d3d3",
					lightgreen: "90ee90",
					lightpink: "ffb6c1",
					lightsalmon: "ffa07a",
					lightseagreen: "20b2aa",
					lightskyblue: "87cefa",
					lightslateblue: "8470ff",
					lightslategray: "778899",
					lightsteelblue: "b0c4de",
					lightyellow: "ffffe0",
					lime: "00ff00",
					limegreen: "32cd32",
					linen: "faf0e6",
					magenta: "ff00ff",
					maroon: "800000",
					mediumaquamarine: "66cdaa",
					mediumblue: "0000cd",
					mediumorchid: "ba55d3",
					mediumpurple: "9370d8",
					mediumseagreen: "3cb371",
					mediumslateblue: "7b68ee",
					mediumspringgreen: "00fa9a",
					mediumturquoise: "48d1cc",
					mediumvioletred: "c71585",
					midnightblue: "191970",
					mintcream: "f5fffa",
					mistyrose: "ffe4e1",
					moccasin: "ffe4b5",
					navajowhite: "ffdead",
					navy: "000080",
					oldlace: "fdf5e6",
					olive: "808000",
					olivedrab: "6b8e23",
					orange: "ffa500",
					orangered: "ff4500",
					orchid: "da70d6",
					palegoldenrod: "eee8aa",
					palegreen: "98fb98",
					paleturquoise: "afeeee",
					palevioletred: "d87093",
					papayawhip: "ffefd5",
					peachpuff: "ffdab9",
					peru: "cd853f",
					pink: "ffc0cb",
					plum: "dda0dd",
					powderblue: "b0e0e6",
					purple: "800080",
					red: "ff0000",
					rosybrown: "bc8f8f",
					royalblue: "4169e1",
					saddlebrown: "8b4513",
					salmon: "fa8072",
					sandybrown: "f4a460",
					seagreen: "2e8b57",
					seashell: "fff5ee",
					sienna: "a0522d",
					silver: "c0c0c0",
					skyblue: "87ceeb",
					slateblue: "6a5acd",
					slategray: "708090",
					snow: "fffafa",
					springgreen: "00ff7f",
					steelblue: "4682b4",
					tan: "d2b48c",
					teal: "008080",
					thistle: "d8bfd8",
					tomato: "ff6347",
					turquoise: "40e0d0",
					violet: "ee82ee",
					violetred: "d02090",
					wheat: "f5deb3",
					white: "ffffff",
					whitesmoke: "f5f5f5",
					yellow: "ffff00",
					yellowgreen: "9acd32"
				}, colorDefs = [
					{
						re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
						example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), 1
							];
						}
					},
					{
						re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
						example: [ "rgb(123, 234, 45, 1)", "rgb(255,234,245, 0.5)" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), parseFloat(bits[ 4 ])
							];
						}
					},
					{
						re: /^(\w{2})(\w{2})(\w{2})$/,
						example: [ "#00ff00", "336699" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), 1
							];
						}
					},
					{
						re: /^(\w{1})(\w{1})(\w{1})$/,
						example: [ "#fb0", "f0f" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), 1
							];
						}
					}
				], r, g, b, a, key, i, re, processor, bits, channels;
			for (key in namedColors) {
				if (color === key) {
					color = namedColors[ key ];
				}
			}
			// search through the definitions to find a match
			for (i = 0; i < colorDefs.length; i++) {
				re = colorDefs[ i ].re;
				processor = colorDefs[ i ].process;
				bits = re.exec(color);
				if (bits) {
					channels = processor(bits);
					r = channels[ 0 ];
					g = channels[ 1 ];
					b = channels[ 2 ];
					a = channels[ 3 ];
				}
			}
			r = ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r );
			g = ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g );
			b = ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b );
			a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );
			return {
				r: r,
				g: g,
				b: b,
				a: a,
				rgba: "rgba(" + r + ", " + g + ", " + b + ", " + a + ")"
			};
		},
		getTextHeight: function(font) {
			// Get text height inside a canvas
			var text = $("<span style=\"font: " + font + "\">Hg</span>"),
				block = $("<div style=\"display: inline-block; width: 1px; height: 0px;\"></div>"),
				div = $("<div></div>"),
				body = $("body"),
				result = {};
			div.append(text, block);
			body.append(div);
			try {
				result = {};
				block.css({ verticalAlign: "baseline" });
				result.ascent = block.offset().top - text.offset().top;
				block.css({ verticalAlign: "bottom" });
				result.height = block.offset().top - text.offset().top;
				result.descent = result.height - result.ascent;
			} finally {
				div.remove();
			}
			return result;
		}

	};
})(jQuery);

// http://jsfromhell.com/array/shuffle
Array.prototype.shuffle = function () {
    "use strict";
    for ( var j, x, i = this.length; i; j = parseInt( Math.random() * i, 10 ), x = this[ --i ], this[ i ] = this[ j ], this[ j ] = x );
    return this;
};

// setImmediate polyfill.
if ( !window.setImmediate ) {
    window.setImmediate = ( function () {
        "use strict";
        return window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || ( function () {
            // setZeroTimeout: "hack" based on postMessage
            // modified from http://dbaron.org/log/20100309-faster-timeouts
            if ( window.postMessage && window.addEventListener ) {
                var timeouts = [],
                timerPassed = -1,
                timerIssued = -1,
                messageName = "zero-timeout-message",
                // Like setTimeout, but only takes a function argument. There's
                // no time argument (always zero) and no arguments (you have to
                // use a closure).
                setZeroTimeout = function ( fn ) {
                    timeouts.push( fn );
                    window.postMessage( messageName, "*" );
                    return ++timerIssued;
                },
                handleMessage = function ( event ) {
                    // Skipping checking event source, IE confused this window object with another in the presence of iframe
                    if ( /*event.source === window && */event.data === messageName ) {
                        event.stopPropagation();
                        if ( timeouts.length > 0 ) {
                            var fn = timeouts.shift();
                            fn();
                            timerPassed += 1;
                        }
                    }
                },
                fnId;
                window.addEventListener( "message", handleMessage, true );
                window.clearImmediate = function ( timer ) {
                    if ( typeof timer !== "number" || timer > timerIssued ) {
                        return;
                    }
                    fnId = timer - timerPassed - 1;
                    timeouts[ fnId ] = ( function () {} ); // overwrite the original fn
                };
                // Add the one thing we want added to the window object.
                return setZeroTimeout;
            }
        } )() || function ( fn ) {
            // fallback
            window.setTimeout( fn, 0 );
        };
    } )();
}
if ( !window.clearImmediate ) {
    window.clearImmediate = ( function () {
        "use strict";
        return window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function ( timer ) {
            // "clearZeroTimeout" is implement on the previous block ||
            // fallback
            window.clearTimeout( timer );
        };
    } )();
}

