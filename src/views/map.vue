<template>
    <div style="width:100%;height:100%;background:#040619; overflow:hidden;">
         <div id='main_map'></div>
         <div class='window'></div>
    </div>
</template>
 
<style lang="less">
    #main_map {
        width:1200px; 
        height: 1200px;
        margin: auto;
        border-radius: 50%;
        margin-top: -100px;
        overflow: hidden;
        box-shadow: 0px -10px 30px #719BC8;
    }
    .anchorBL{ 
        display:none; 
    }
    .window {
        height:90%;
        width:20%;
        position: fixed;
        right: 4%;
        top:5%;
    }
</style>


 <script>
 import echarts from 'echarts';
 import "../../node_modules/echarts/dist/extension/bmap.js";
 import "../../node_modules/echarts/map/js/world.js"
 import "../../node_modules/echarts/map/js/china.js"
 export default {
     data () {
         return {
             data:[
                {name: '海门', value: 9},
                {name: '鄂尔多斯', value: 12},
                {name: '招远', value: 12},
                {name: '舟山', value: 12},
                {name: '齐齐哈尔', value: 14},
                {name: '盐城', value: 15},
                {name: '赤峰', value: 16},
                {name: '青岛', value: 18},
                {name: '乳山', value: 18},
                {name: '金昌', value: 19},
                {name: '泉州', value: 21},
                {name: '莱西', value: 21},
                {name: '日照', value: 21},
                {name: '胶南', value: 22},
                {name: '南通', value: 23},
                {name: '拉萨', value: 24},
                {name: '云浮', value: 24},
                {name: '梅州', value: 25},
                {name: '文登', value: 25},
                {name: '上海', value: 25},
                {name: '攀枝花', value: 25},
                {name: '威海', value: 25},
                {name: '承德', value: 25},
                {name: '厦门', value: 26},
                {name: '汕尾', value: 26},
                {name: '潮州', value: 26},
                {name: '丹东', value: 27},
                {name: '太仓', value: 27},
                {name: '曲靖', value: 27},
                {name: '烟台', value: 28},
                {name: '福州', value: 29},
                {name: '瓦房店', value: 30},
                {name: '即墨', value: 30},
                {name: '抚顺', value: 31},
                {name: '玉溪', value: 31},
                {name: '张家口', value: 31},
                {name: '阳泉', value: 31},
                {name: '莱州', value: 32},
                {name: '湖州', value: 32},
                {name: '汕头', value: 32},
                {name: '昆山', value: 33},
                {name: '宁波', value: 33},
                {name: '湛江', value: 33},
                {name: '揭阳', value: 34},
                {name: '荣成', value: 34},
                {name: '连云港', value: 35},
                {name: '葫芦岛', value: 35},
                {name: '常熟', value: 36},
                {name: '东莞', value: 36},
                {name: '河源', value: 36},
                {name: '淮安', value: 36},
                {name: '泰州', value: 36},
                {name: '南宁', value: 37},
                {name: '营口', value: 37},
                {name: '惠州', value: 37},
                {name: '江阴', value: 37},
                {name: '蓬莱', value: 37},
                {name: '韶关', value: 38},
                {name: '嘉峪关', value: 38},
                {name: '广州', value: 38},
                {name: '延安', value: 38},
                {name: '太原', value: 39},
                {name: '清远', value: 39},
                {name: '中山', value: 39},
                {name: '昆明', value: 39},
                {name: '寿光', value: 40},
                {name: '盘锦', value: 40},
                {name: '长治', value: 41},
                {name: '深圳', value: 41},
                {name: '珠海', value: 42},
                {name: '宿迁', value: 43},
                {name: '咸阳', value: 43},
                {name: '铜川', value: 44},
                {name: '平度', value: 44},
                {name: '佛山', value: 44},
                {name: '海口', value: 44},
                {name: '江门', value: 45},
                {name: '章丘', value: 45},
                {name: '肇庆', value: 46},
                {name: '大连', value: 47},
                {name: '临汾', value: 47},
                {name: '吴江', value: 47},
                {name: '石嘴山', value: 49},
                {name: '沈阳', value: 50},
                {name: '苏州', value: 50},
                {name: '茂名', value: 50},
                {name: '嘉兴', value: 51},
                {name: '长春', value: 51},
                {name: '胶州', value: 52},
                {name: '银川', value: 52},
                {name: '张家港', value: 52},
                {name: '三门峡', value: 53},
                {name: '锦州', value: 54},
                {name: '南昌', value: 54},
                {name: '柳州', value: 54},
                {name: '三亚', value: 54},
                {name: '自贡', value: 56},
                {name: '吉林', value: 56},
                {name: '阳江', value: 57},
                {name: '泸州', value: 57},
                {name: '西宁', value: 57},
                {name: '宜宾', value: 58},
                {name: '呼和浩特', value: 58},
                {name: '成都', value: 58},
                {name: '大同', value: 58},
                {name: '镇江', value: 59},
                {name: '桂林', value: 59},
                {name: '张家界', value: 59},
                {name: '宜兴', value: 59},
                {name: '北海', value: 60},
                {name: '西安', value: 61},
                {name: '金坛', value: 62},
                {name: '东营', value: 62},
                {name: '牡丹江', value: 63},
                {name: '遵义', value: 63},
                {name: '绍兴', value: 63},
                {name: '扬州', value: 64},
                {name: '常州', value: 64},
                {name: '潍坊', value: 65},
                {name: '重庆', value: 66},
                {name: '台州', value: 67},
                {name: '南京', value: 67},
                {name: '滨州', value: 70},
                {name: '贵阳', value: 71},
                {name: '无锡', value: 71},
                {name: '本溪', value: 71},
                {name: '克拉玛依', value: 72},
                {name: '渭南', value: 72},
                {name: '马鞍山', value: 72},
                {name: '宝鸡', value: 72},
                {name: '焦作', value: 75},
                {name: '句容', value: 75},
                {name: '北京', value: 79},
                {name: '徐州', value: 79},
                {name: '衡水', value: 80},
                {name: '包头', value: 80},
                {name: '绵阳', value: 80},
                {name: '乌鲁木齐', value: 84},
                {name: '枣庄', value: 84},
                {name: '杭州', value: 84},
                {name: '淄博', value: 85},
                {name: '鞍山', value: 86},
                {name: '溧阳', value: 86},
                {name: '库尔勒', value: 86},
                {name: '安阳', value: 90},
                {name: '开封', value: 90},
                {name: '济南', value: 92},
                {name: '德阳', value: 93},
                {name: '温州', value: 95},
                {name: '九江', value: 96},
                {name: '邯郸', value: 98},
                {name: '临安', value: 99},
                {name: '兰州', value: 99},
                {name: '沧州', value: 100},
                {name: '临沂', value: 103},
                {name: '南充', value: 104},
                {name: '天津', value: 105},
                {name: '富阳', value: 106},
                {name: '泰安', value: 112},
                {name: '诸暨', value: 112},
                {name: '郑州', value: 113},
                {name: '哈尔滨', value: 114},
                {name: '聊城', value: 116},
                {name: '芜湖', value: 117},
                {name: '唐山', value: 119},
                {name: '平顶山', value: 119},
                {name: '邢台', value: 119},
                {name: '德州', value: 120},
                {name: '济宁', value: 120},
                {name: '荆州', value: 127},
                {name: '宜昌', value: 130},
                {name: '义乌', value: 132},
                {name: '丽水', value: 133},
                {name: '洛阳', value: 134},
                {name: '秦皇岛', value: 136},
                {name: '株洲', value: 143},
                {name: '石家庄', value: 147},
                {name: '莱芜', value: 148},
                {name: '常德', value: 152},
                {name: '保定', value: 153},
                {name: '湘潭', value: 154},
                {name: '金华', value: 157},
                {name: '岳阳', value: 169},
                {name: '长沙', value: 175},
                {name: '衢州', value: 177},
                {name: '廊坊', value: 193},
                {name: '菏泽', value: 194},
                {name: '合肥', value: 229},
                {name: '武汉', value: 273},
                {name: '大庆', value: 279}      
             ],
             geoCoordMap: {
                '海门':[121.15,31.89],
             
                '文登':[122.05,37.2],
                '上海':[121.48,31.22],
                '攀枝花':[101.718637,26.582347],
                '威海':[122.1,37.5],
                '承德':[117.93,40.97],
                '厦门':[118.1,24.46],
                '汕尾':[115.375279,22.786211],
                '潮州':[116.63,23.68],
                '丹东':[124.37,40.13],
                '太仓':[121.1,31.45],
                '曲靖':[103.79,25.51],
         
                '揭阳':[116.35,23.55],
                '荣成':[122.41,37.16],
                '连云港':[119.16,34.59],
                '葫芦岛':[120.836932,40.711052],
                '常熟':[120.74,31.64],
                '东莞':[113.75,23.04],
                '河源':[114.68,23.73],
                '淮安':[119.15,33.5],
                '泰州':[119.9,32.49],
                '南宁':[108.33,22.84],
                '营口':[122.18,40.65],
                '惠州':[114.4,23.09],
                '平度':[119.97,36.77],
                '佛山':[113.11,23.05],
                '海口':[110.35,20.02],
                '嘉兴':[120.76,30.77],
                '长春':[125.35,43.88],
                '胶州':[120.03336,36.264622],
                '银川':[106.27,38.47],
                '西宁':[101.74,36.56],
                '宜宾':[104.56,29.77],
                '呼和浩特':[111.65,40.82],
            
                '贵阳':[106.71,26.57],
                '乌鲁木齐':[87.68,43.77],
                '枣庄':[117.57,34.86],
                '杭州':[120.19,30.26],
                '淄博':[118.05,36.78],
           
                '芜湖':[118.38,31.33],
                '莱芜':[117.67,36.19],
                '常德':[111.69,29.05],
                '保定':[115.48,38.85],
                '湘潭':[112.91,27.87],
                '金华':[119.64,29.12],
                '岳阳':[113.09,29.37],
                '长沙':[113,28.21],
                '衢州':[118.88,28.97],
                '廊坊':[116.7,39.53],
                '菏泽':[115.480656,35.23375],
                '合肥':[117.27,31.86],
                '武汉':[114.31,30.52],
                '大庆':[125.03,46.58]
            }
         }
     },
     methods: {

     },
     mounted () {
         let _this = this;
         var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = _this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var canvas = document.getElementById('main_map');
        var mapChart = echarts.init(canvas);
        mapChart.setOption({
            // backgroundColor: '#404a59',
            tooltip : {
                trigger: 'item'
            },
            geo: {
                map:'world',
                center: [104.114129, 37.550339],
                zoom: 5,
                roam: false,
                emphasis: {
                    label: {
                        show:false
                    },
                    itemStyle:{
                         areaColor:'#0D1838',
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor:'#0D1838',
                        borderWidth: 2,
                        borderColor: '#02030D',
                       
                    }
                },

                regions: [{
                    name: 'China',
                    itemStyle: {
                         areaColor:'#3259B6',
                         borderColor:'#010312',
                         borderWidth: 6,
                        //  shadowColor:'#010312',
                         // shadowBlur:10,
                    },
                    emphasis: {
                    label: {
                        show:false
                    },
                    itemStyle:{
                        areaColor:'#3259B6',
                    }
                },
                },
                {
                    name: 'Russia',
                    itemStyle: {
                         areaColor:'#010312',
                    },
                    emphasis: {
                    label: {
                        show:false
                    },
                    itemStyle:{
                         areaColor:'#010312',
                    }
                },
                },
                ],
            },
            series : [
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(_this.data),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        period:4,
                        brushType: 'fill',
                        scale:2
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                },
                
            ]
        });
     }
 }
 </script>
 
