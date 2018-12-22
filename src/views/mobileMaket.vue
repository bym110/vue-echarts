

<template>
    <div class="circle">
        <Row class='content'>
            <Col span="8">
                <div class="list">
                    <div class="left">
                        <span class='title'><span class="title-6">聊天分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="chart-68">
                            <area-chart ref="chart1" id="left_1" :data="chatLineData"></area-chart>
                        </div>
                        <div class="chart-32">
                            <radar-chart ref="chart2" id="left_2" title='各部门聊天对比' :data="chatRadarData"></radar-chart>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="left">
                        <span class='title'><span class="title-10">办公时长分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="chart-68">
                            <bar-chart ref="chart3" id="left_3"></bar-chart>
                        </div>
                        <div class="chart-32">
                            <radar-chart ref="chart4" id="left_4" title='各部门办公时长对比' :data="officeRadarData"></radar-chart>
                        </div>
                    </div>
                </div>
                
            </Col>
            <Col span="8">
                <div class="circlePie">
                    <canvas id="main" width="500" height="500"></canvas>
                    <canvas id="dot" width="500" height="500"></canvas>
                </div>
            </Col>
            <Col span="8">
                <div class="list">
                    <div class="right">
                        <span class='title'><span class="title-10">好友分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="chart-32">
                            <radar-chart ref="chart5" id="right_1" title='各部门好友数量对比' :data="friendRadarData"></radar-chart>
                        </div>
                        <div class="chart-68">
                            <double-bar-chart ref="chart6" id="right_2"></double-bar-chart>
                        </div>
                        
                    </div>
                </div>
                <div class="list">
                    <div class="right">
                        <span class='title'><span class="title-10">微信朋友圈分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                         <div class="chart-32">
                            <radar-chart ref="chart7" id="right_3" title='各部门朋友圈数量对比' :data="momentsRadarData"></radar-chart>
                        </div>
                        <div class="chart-68">
                            <single-area-chart ref="chart8" id="right_4"></single-area-chart>
                        </div>
                    </div>
                </div>
                
            </Col>
        </Row>
        <Row class="bottom-list">
            <Col span="16">
                <div class="list">
                    <div class="bottom">
                        <span class='title'><span class="title-8">违规话术分布趋势</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                       <double-line ref="chart9" id="bottom_1"></double-line>
                    </div>
                </div>
                <div class="list">
                    <div class="bottom">
                        <span class='title'><span class="title-10">各部门违规话术情况对比</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <double-bars ref="chart10" id="bottom_2"></double-bars>
                    </div>
                </div>
                <div class="list">
                    <div class="bottom">
                        <span class='title'><span class="title-10">红包转账分布趋势</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <three-bar-chart ref="chart11" id="bottom_3"></three-bar-chart>
                    </div>
                </div>
            </Col>
            <Col span="8">
                <div class="list right-bottom">
                    <div class="bottom bottom1">
                        <span class='title'><span class="title-10">各部门红包转账对比</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <pie-chart ref="chart12" id="bottom_4"></pie-chart>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts';
import $ from 'jquery';
import areaChart from './components/mobileMaket/areaChart.vue'
import radarChart from './components/mobileMaket/radarChart.vue'
import barChart from './components/mobileMaket/barChart.vue'
import doubleBarChart from './components/mobileMaket/doubleBarChart.vue'
import singleAreaChart from './components/mobileMaket/singleAreaChart.vue'
import doubleLine from './components/mobileMaket/doubleLine.vue'
import threeBarChart from './components/mobileMaket/threeBarChart.vue'
import pieChart from './components/mobileMaket/pieChart.vue'
import doubleBars from './components/mobileMaket/doubleBars.vue'
export default {
    components:{
        areaChart,
        radarChart,
        barChart,
        doubleBarChart,
        singleAreaChart,
        doubleLine,
        threeBarChart,
        pieChart,
        doubleBars
    },
    data () {
        return {
            everyPer:0,
            xOffset:0,
            IsdrawCircled:false,
            circle: {
                x: 250,
                y: 250,
                radius: 218
            },
            title:['累计话术违规个数:456,789','累计办公次数:123,12','累计办公时长:134,23','累计服务好友次数:234,234','累计服务好友数量:123,123','累计设备违规个数:678,123'],
            chatLineData:[
                {
                    name:'聊天次数',
                    color:['158,112,255','110,94,255'],
                    data: [200, 12, 21, 54, 260, 130, 210],
                },
                {
                    name:'聊天人数',
                    color:['72,206,253','83,86,241'],
                    data: [50, 182, 234, 191, 190, 30, 10],
                }
            ],
            chatRadarData:[
                {
                    name:'聊天次数',
                    color:'#0DF5F8',
                    data: [100, 8, 0.40, -80, 2000,332],
                },
                {
                    name:'聊天人数',
                    color:'#7921AD',
                    data: [60, 5, 0.30, -100, 1500,221],
                }
            ],
            officeRadarData:[
                {
                    name:'办公时长',
                    color:'#55D35B',
                    data: [100, 8, 0.40, -80, 2000,332],
                }
            ],
            friendRadarData:[
                {
                    name:'好友总数',
                    color:'#FA8486',
                    data: [100, 8, 0.40, -80, 2000,332],
                }
            ],
            momentsRadarData:[
                 {
                    name:'朋友圈个数',
                    color:'#D91748',
                    data: [100, 8, 0.40, -80, 2000,332],
                }
            ],
            warea: {x: 250, y: 250, max: 700},
            dots: []
        }
    },
    methods: {
        drawDot () {
            let canvas = document.getElementById('dot');
            let ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
             let that = this;


        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组

        var ndots = [that.warea].concat(that.dots);

        that.dots.forEach(function(dot) {




            // 粒子位移

            dot.x += dot.xa;

            dot.y += dot.ya;




            // 遇到边界将加速度反向

            dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;

            dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;




            // 绘制点
              ctx.fillStyle = '#013D7A';
            ctx.beginPath();
            ctx.arc(dot.x - 0.5,dot.y - 0.5, 1, 0, 2*Math.PI, true);
            ctx.closePath();
            ctx.fill();




            // 循环比对粒子间的距离

            for (var i = 0; i < ndots.length; i++) {

                var d2 = ndots[i];
                if (dot === d2 || d2.x === null || d2.y === null) continue;
                var xc = dot.x - d2.x;

                var yc = dot.y - d2.y;




                // 两个粒子之间的距离

                var dis = xc * xc + yc * yc;




                // 距离比

                var ratio;




                // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
               
                if (dis < d2.max) {




                    // 如果是鼠标，则让粒子向鼠标的位置移动

                    if (d2 === that.warea && dis > (d2.max / 2)) {

                        dot.x -= xc * 0.03;

                        dot.y -= yc * 0.03;

                    }




                    // 计算距离比

                    ratio = (d2.max - dis) / d2.max;




                    // 画线

                    ctx.beginPath();

                    ctx.lineWidth = ratio / 2;
                    if (d2 == that.warea) {
                        ctx.strokeStyle = 'rgba(0,0,0,0)';
                    } else {
                        ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
                    }



                    ctx.moveTo(dot.x, dot.y);

                    ctx.lineTo(d2.x, d2.y);

                    ctx.stroke();

                }

            }




            // 将已经计算过的粒子从数组中删除

            ndots.splice(ndots.indexOf(dot), 1);

        });
         window.requestAnimationFrame(this.drawDot);
        },
        rads(x) { // 弧度转换
            return Math.PI * x / 180;
        },
        act(){
            //清空画布
           let context = $("#main").get(0).getContext('2d');
            context.clearRect(0,0,$("#main").get(0).width,$("#main").get(0).height);
            this.drawPie(this.everyPer);
            window.requestAnimationFrame(this.act);
            this.everyPer += Math.PI/180;
            var speed = 0.07; //波浪速度，数越大速度越快
            this.xOffset += speed;
           
        },
        drawPie (everyPer) {
                let context = $("#main").get(0).getContext('2d');
                    context.save();
                    context.fillStyle = 'rgba(18,55,88,.2)';
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 245, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                     context.restore();
                    
                  //外圆
                    context.save();
                    context.shadowBlur=50;
                    context.shadowColor="#123959";
                    context.fillStyle = '#080D27';
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 235, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                     context.restore();
                    for (let i = 0; i < 6; i++){//绘制文字。
                        context.save()
                        this.drawCircularText(this.circle,this.title[i], this.rads(i*60-110), this.rads(i*60-65),i);
                        context.restore();
                    }
                    // 旋转小球
                   var x = 240 * Math.cos(everyPer);
                   var y = 240 * Math.sin(everyPer);
                    context.save();
                    context.fillStyle='rgb(56,252,253)';
                    context.shadowBlur=80;
                    context.shadowColor="#39E9EE";
                    context.translate(this.circle.x,this.circle.y);
                    context.beginPath();
                    // context.arc(x,y,5,0,2*Math.PI);
                    // context.arc(-x,-y,5,0,2*Math.PI);
                    context.closePath();
                    context.fill();
                    context.restore();
                    // 
                    context.save();
                    context.fillStyle = '#153776';
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 200, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();

                    context.fillStyle = "#121535";
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 190, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                    //内圆
                    var nowRange = 36;
                     context.save();
                     if (this.IsdrawCircled == false) {
                         this.drawCircle (context);
                     }
                    
                    this.drawSin(this.xOffset,context,nowRange);
                    this.drawText(context,nowRange);
                    context.restore();
                    for (let i = 0; i < 6; i++){//绘制刻度。
                        context.save();
                        context.translate(this.circle.x,this.circle.y);
                        context.rotate((-Math.PI/2+Math.PI/6)+ i * Math.PI/3);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
                        context.beginPath();
                        context.moveTo(190, 0);
                        context.lineTo(200, 0);
                        context.lineWidth =4;
                        context.strokeStyle ='#0A122D';
                        context.stroke();
                        context.closePath();
                        context.restore();
                    }
        },
        drawCircle (ctx){ // 画圆
            ctx.beginPath();
            ctx.fillStyle = '#209ADF';
            ctx.arc(this.circle.x,this.circle.y, 120, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.circle.x,this.circle.y, 120, 0, 2 * Math.PI);
            ctx.clip();
            
        },
        drawSin (xOffset,ctx,nowRange){ //画sin 曲线函数
            var mW = 240;
             var mH = 240;
            var sX = 0;
            var sY = mH / 2;
            var axisLength = mW; //轴长
            var waveWidth = 0.04 ; //波浪宽度,数越小越宽
            var waveHeight = 12; //波浪高度,数越大越高
            ctx.save();
            ctx.translate(130,130);
            var points=[]; //用于存放绘制Sin曲线的点
            ctx.beginPath();
            //在整个轴长上取点
            for(var x = sX; x < sX + axisLength; x += 20 / axisLength){
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = -Math.sin((sX + x) * waveWidth + xOffset);
                var dY = mH * (1 - nowRange / 100 );
                points.push([x, dY, dY + y * waveHeight]);
                ctx.lineTo(x, dY + y * waveHeight);
            }
            //封闭路径
            ctx.lineTo(axisLength, mH);
            ctx.lineTo(sX, mH);
            ctx.lineTo(points[0][0],points[0][1]);
            ctx.fillStyle = '#2C50B1';
            ctx.fill();
            
            ctx.restore();
        },
        drawText (ctx,nowRange){
            ctx.save();
            ctx.translate(130,130);
            var size = 50;
            ctx.font = size + 'px Microsoft Yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle = "#95EFFF";
            ctx.fillText(nowRange + '%', 120, 120 - size/2 );
           
            
            ctx.restore();
            ctx.save()
             var size = 25;
              ctx.translate(130,130);
            ctx.font = size + 'px Microsoft Yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle = "#95EFFF";
             ctx.fillText("平均营销质量指数", 120, 120 + size );
             ctx.restore();
        },
        drawCircularText (s, string, startAngle, endAngle,n) {
            let context = $("#main").get(0).getContext('2d');
            var radius = s.radius,
                angleDecrement,
                angle = parseFloat(startAngle),
                index = 0,
                character;
                var arr = string.split(':')
               
            context.save();
            context.fillStyle = '#fff';
            context.font = '12px 微软雅黑 ';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            if (n<2 || n==5) {
                while(index < string.length) {
                character = string.charAt(index);
                 if(arr[0].indexOf(character)>=0) {
                     if (arr[0].length>6) {
                         angleDecrement = (startAngle - endAngle) / (string.length -3)
                     }else {
                         angleDecrement = (startAngle - endAngle) / (string.length -1)
                     }
                     
                }else {
                     angleDecrement = (startAngle - endAngle) / (string.length +6)
                }
                context.save();
                context.beginPath();
                context.translate(s.x + Math.cos(angle) * radius,
                    s.y + Math.sin(angle) * radius);
                context.rotate(Math.PI / 2 + angle);
                context.fillText(character, 0, 0);
                angle -= angleDecrement;
                index++;
                context.restore();
            }
            } else {
                while(index < string.length) {
                    character = string.split("").reverse().join("").charAt(index);// 字符串反转
                    if(arr[1].indexOf(character)>=0) {
                        angleDecrement = (startAngle - endAngle) / (string.length +6)
                    }else {
                        if (arr[0].length>6) {
                         angleDecrement = (startAngle - endAngle) / (string.length -3)
                     }else {
                         angleDecrement = (startAngle - endAngle) / (string.length -1)
                     }
                    }
                    context.save();
                    context.beginPath();
                    context.translate(s.x + Math.cos(angle) * radius,
                        s.y + Math.sin(angle) * radius);
                    context.rotate(-Math.PI/2 + angle);// 旋转文字
                    context.fillText(character, 0, 0);
                    angle -= angleDecrement;
                    index++;
                    context.restore();
                }
            }
            context.restore();
        },

    },
    mounted () {
        $("#main").height($(".circlePie").height())
        $("#main").width($(".circlePie").height())
        $("#dot").height($(".circlePie").height())
        $("#dot").width($(".circlePie").height())
            for (let i = 0; i < 200; i++) {

                    let x = Math.random() *$(".circlePie").height();

                    let y = Math.random() * $(".circlePie").height();

                    let xa = Math.random() * 2 - 1;

                    let ya = Math.random() * 2 - 1;




                    this.dots.push({

                        x: x,

                        y: y,

                        xa: xa,

                        ya: ya,

                        max: 60

                    })

                }
                setTimeout(()=> {

                this.drawDot ();

            }, 100);
        this.act();
        let _this = this;
         window.onresize = function () {
                // 通过捕获系统的onresize事件触发我们需要执行的事件
                $("#main").height($(".circlePie").height())
                $("#main").width($(".circlePie").height());
                $("#dot").height($(".circlePie").height())
                $("#dot").width($(".circlePie").height());
                for (let i = 1; i< 13; i++) {
                    _this.$refs['chart'+i].setChart ();
                }
            }
    }
}
</script>

<style lang="less" scoped>
    .circle {
        height: 100%;
        width: 100%;
        padding:80px 50px 30px;
        background: #09102E;
        .header {
            text-align: center;
            height:54px;
        }
        .content {
            height: 65%;
            .ivu-col {
                height: 100%;
            }
            .circlePie {
               height: 100%;
               padding:0 0 40px;
               text-align: center;
               position: relative;
               canvas {
                   position: absolute;
                   left: 50%;
                   top: 0;
                   transform: translate(-50%,0);
               }
               #dot {
                   background: rgba(0,0,0,0);
               }
            }
            .list {
                height:48%;
                .left,.right {
                    background:#0D1341 ;
                }
                .left,.right,.center {
                    width: 100%;
                    height:90%;
                    border:1px solid #0D2451;
                    position: relative;
                    #left1,#left2,#left3,#right1,#right2,#right3,#center2 {
                        height:100%;
                    }
                    .chart-68 {
                        width:68%;
                        height:100%;
                        float: left;
                    }
                   
                    .chart-32 {
                        width: 32%;
                        height:100%;
                        float: left;
                    }
                    .angle1 {
                        display: inline-block;
                        position: absolute;
                        width: 10px;
                        height:10px;
                        top:0;
                        left:0;
                        border-top: 1px solid #1C5AB3;
                        border-left: 1px solid #1C5AB3;

                        }
                    .angle2 {
                        display: inline-block;
                        position: absolute;
                        width: 10px;
                        height:10px;
                        top:0;
                        right:0;
                        border-top: 1px solid #1C5AB3;
                        border-right: 1px solid #1C5AB3;

                    }
                    .angle3 {
                        display: inline-block;
                        position: absolute;
                        width: 10px;
                        height:10px;
                        bottom:0;
                        left:0;
                        border-bottom: 1px solid #1C5AB3;
                        border-left: 1px solid #1C5AB3;

                    }
                    .angle4 {
                        display: inline-block;
                        position: absolute;
                        width: 10px;
                        height:10px;
                        bottom:0;
                        right:0;
                        border-bottom: 1px solid #1C5AB3;
                        border-right: 1px solid #1C5AB3;

                    }
                    .title {
                        position: absolute;
                        display: inline-block;
                        color:#6EDDF1;
                        background: #14418E;
                        left:50%;
                        transform: translate(-50%,-50%);
                    .title-6 {
                            display: inline-block;
                            padding:5px 15px;
                            //border-radius: 5px;
                            background: radial-gradient(60px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                        }
                        .title-8 {
                            display: inline-block;
                            padding:5px 15px;
                            //border-radius: 5px;
                            background: radial-gradient(75px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                        }
                        .title-10 {
                            display: inline-block;
                            padding:5px 15px;
                            //border-radius: 5px;
                            background: radial-gradient(95px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                        }
                        
                    }
                }
            }
        }
         .bottom-list {
            height:35%;
            .ivu-col {
                height: 100%;
                .list {
                    height:100%;
                    width:33.3333%;
                    padding-right:1.5%;
                    float: left;
                    #bottom_4{
                        padding:0 20px;
                    }
                    .bottom {
                        width: 100%;
                        height:100%;
                        border:1px solid #0D2451;
                        position: relative;
                        .angle1 {
                                    display: inline-block;
                                    position: absolute;
                                    width: 10px;
                                    height:10px;
                                    top:0;
                                    left:0;
                                    border-top: 1px solid #1C5AB3;
                                    border-left: 1px solid #1C5AB3;

                                }
                        .angle2 {
                            display: inline-block;
                            position: absolute;
                            width: 10px;
                            height:10px;
                            top:0;
                            right:0;
                            border-top: 1px solid #1C5AB3;
                            border-right: 1px solid #1C5AB3;

                        }
                         .angle3 {
                            display: inline-block;
                            position: absolute;
                            width: 10px;
                            height:10px;
                            bottom:0;
                            left:0;
                            border-bottom: 1px solid #1C5AB3;
                            border-left: 1px solid #1C5AB3;

                        }
                         .angle4 {
                            display: inline-block;
                            position: absolute;
                            width: 10px;
                            height:10px;
                            bottom:0;
                            right:0;
                            border-bottom: 1px solid #1C5AB3;
                            border-right: 1px solid #1C5AB3;

                        }
                        .title {
                            position: absolute;
                            display: inline-block;
                            color:#6EDDF1;
                            background: #14418E;
                            left:50%;
                            transform: translate(-50%,-50%);
                        .title-6 {
                                display: inline-block;
                                padding:5px 15px;
                                //border-radius: 5px;
                                background: radial-gradient(60px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                            }
                            .title-8 {
                                display: inline-block;
                                padding:5px 15px;
                                //border-radius: 5px;
                                background: radial-gradient(75px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                            }
                            .title-10 {
                                display: inline-block;
                                padding:5px 15px;
                                //border-radius: 5px;
                                background: radial-gradient(95px 18px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                            }
                            
                        }
                    }
                }
                .right-bottom {
                    width: 100%;
                    padding-right: 0;
                    .bottom1 {
                        width:100%; 
                    }
                }
            }
        }

    }
</style>
