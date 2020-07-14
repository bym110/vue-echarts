

<template>
    <div class='soldierMoon'>
       <div class="listCharts">
           <Row class="listTop">
                <Col span="7">
                    <div class="leftTop">
                        <span class='title'><span>模块一分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="left1">
                            <double-area :selectRangeDate="selectRangeDate" ref='chart1'></double-area>
                        </div>
                        <div class="left2">
                            <web-bar ref="chart2" id="left_2_1" :data="data1"></web-bar>
                            <div style="width: 40%;float: left;height: 100%;">
                                <pie ref="chart3" id="left_2_2" :data="data2"></pie>
                            </div>

                        </div>
                        <div class="left3">
                            <web-bar ref="chart4" id="left_3_1" :data="data3"></web-bar>
                            <div style="width: 40%;float: left;height: 100%;">
                                <pie ref="chart5" id="left_3_2" :data="data4"></pie>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span="10">
                     <radar-part ref="chart6"></radar-part>
                </Col>
                <Col span="7">
                    <div class="rightTop-1">
                        <span class='title'><span>世界地图分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <world-map ref="chart7"></world-map>
                    </div>
                    <div class="rightTop-2">
                        <span class='title'><span>模块六分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="rightTop-list">
                            <div class="list">
                                <popular-bar ref="chart8"></popular-bar>
                            </div>
                            <div class="list">
                                <ring ref="chart9" id="right_3" :data="data5"> </ring>
                            </div>
                            <div class="list">
                                <ring ref="chart10" id="right_4" :data="data6"> </ring>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row class="listBottom">
                <Col span='9'>
                    <div class="content">
                        <span class="title"><span>模块二分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <Row class="topLine">
                            <Col span="24">
                                <lines ref="chart11"></lines>
                            </Col>
                        </Row>
                        <Row class="bottomPie">
                            <Col span="12">
                                <pie-ring ref="chart12" id="bottom_2" :data="data7"></pie-ring>
                            </Col>
                            <Col span="12">
                                 <pie-ring ref="chart13" id="bottom_3" :data="data8"></pie-ring>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span='4'>
                    <div class="content">
                        <span class="title1"><span>模块三分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="behavior">
                            <four-area ref="chart14" id="bottom_6" :select-range-date="selectRangeDate" :data="data9"></four-area>
                            <colors-bar ref="chart15" id="bottom_7" :data="colorsData"></colors-bar>
                        </div>
                    </div>
                </Col>
                <Col span='4'>
                    <div class="content">
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                         <span class="title"><span>模块四分析</span></span>
                         <funnel ref="chart16" id="bottom_8"></funnel>
                    </div>
                </Col>
                <Col span='7'>
                    <div class="content">
                         <span class="title"><span>模块五分析</span></span>
                         <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                         <div class="appUse">
                             <line-bar ref="chart17" id="bottom_9"></line-bar>
                         </div>
                    </div>
                </Col>
            </Row>
       </div>

    </div>
</template>

<script>
 import radarPart from './components/page1/radarPart.vue';
 import doubleArea from './components/page1/doubleArea.vue';
 import webBar from './components/page1/webBar.vue';
 import pie from './components/pie.vue';
 import worldMap from './components/page1/worldMap.vue';
 import ring from './components/page1/ring.vue';
 import popularBar from './components/page1/popularBar.vue';
 import lines from './components/page1/lines.vue';
 import pieRing from './components/page1/pieRing.vue';
 import colorsBar from './components/page1/colorsBar.vue';
 import funnel from './components/page1/funnel.vue';
 import lineBar from './components/page1/lineBar.vue';
 import fourArea from './components/page1/fourArea.vue';

    export default {
        name: 'radar',
        props:{
            selectRangeDate:Array
        },
        components:{
            radarPart,// 中心
            doubleArea, // 面积图
            webBar, // 柱图
            pie, // 饼图
            worldMap, // 世界地图
            ring, // 圆环
            popularBar, // 柱图
            lines, //折线图
            pieRing, // 饼环图
            colorsBar,// 柱图
            funnel, // 漏斗图
            lineBar, //柱图
            fourArea // 面积图
        },
        data() {
            return {

               data1:{ // 柱图数据1
                   name:'柱图数据1',
                   number:'100次',
                    data:["排行1", "排行2", "排行3", "排行4", "排行5"],
                    color:'192,35,42',
                    value:[60, 50, 40, 30, 20]
               },
               data2:{// 饼图数据1
                    title:"饼图数据1分类占比",
                    color:'#BE232A',

                    data:[
                        {
                            value:60,
                            name:'分类1',
                            itemStyle:{
                                color:'#a262f2'
                            }

                        },
                        {
                            value:20,
                            name:'分类2',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:80,
                            name:'分类3',
                            itemStyle:{
                                color:'#feac2c'
                            }
                            },
                        {
                            value:40,
                            name:'分类4',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:40,
                            name:'分类5',
                            itemStyle:{
                                color:'#2cd9fe'
                            }
                        },
                        {
                            value:40,
                            name:'分类6',
                            itemStyle:{
                                color:'#ff787e'
                            }
                        },
                        {
                            value:30,
                            name:'其他',
                            itemStyle:{
                                color:'#252448'
                            }
                        }
                    ],
               },
               data3:{ // 柱图数据2
                    name:'柱图数据2',
                    number:'100次',
                    data:["排行1", "排行2", "排行3", "排行4", "排行5"],
                    color:'40,112,232',
                    value:[6, 5, 4, 3, 2]
               },
               // 饼图数据2
               data4:{
                    title:"饼图数据2分类占比",
                    color:'#2C7BFE',
                    data:[
                        {
                            value:20,
                            name:'分类1',
                            itemStyle:{
                                color:'#feed2c'
                            }

                        },
                        {
                            value:20,
                            name:'分类2',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:40,
                            name:'分类3',
                            itemStyle:{
                                color:'#feac2c'
                            }
                            },
                        {
                            value:40,
                            name:'分类4',
                            itemStyle:{
                                color:'#2c7bfe'
                            }
                        },
                        {
                            value:100,
                            name:'其他',
                            itemStyle:{
                                color:'#252448'
                            }
                        }
                    ],
               },
               // 环形图数据
               data5:{
                   title:'环形图数据1',
                   data:[
                        {
                            value:335,
                            name:'模拟1',
                            itemStyle:{
                                color:'#252448'
                            }
                        },
                        {
                            value:310,
                            name:'模拟2',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:234,
                            name:'模拟3',
                            itemStyle:{
                                color:'#feed2c'
                            }
                        },
                        {
                            value:135,
                            name:'其他',
                            itemStyle:{
                                color:'#2871ea'
                            }
                        },
                        {
                            value:200,
                            name:'模拟4',
                            itemStyle:{
                                color:'#fe672c'
                            }
                        }
                    ]
               },
               // 环形数据2
               data6:{
                   title:'热词传播次数',
                   data:[
                        {
                            value:335,
                            name:'模拟1',
                            itemStyle:{
                                color:'#69f262'
                            }
                        },
                        {
                            value:310,
                            name:'模拟2',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:234,
                            name:'模拟3',
                            itemStyle:{
                                color:'#2cfcfe'
                            }
                        },
                        {
                            value:135,
                            name:'其他',
                            itemStyle:{
                                color:'#252448'
                            }
                        },
                        {
                            value:200,
                            name:'模拟4',
                            itemStyle:{
                                color:'#a262f2'
                            }
                        }
                    ]
               },
               data7:{
                   title:'收支笔数及占比',
                   data:[
                        {
                            value:70,
                            name:'收入',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:60,
                            name:'支出',
                            itemStyle:{
                                color:'#2870e8'
                            }
                        },
                    ],
                    data1:[
                        {
                            value:40,
                            name:'红包',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:60,
                            name:'转账',
                            itemStyle:{
                                color:'#2870e8'
                            }
                        },
                    ]
               },
               data8:{
                   title:'收支金额及占比',
                   data:[
                        {
                            value:80,
                            name:'收入',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:60,
                            name:'支出',
                            itemStyle:{
                                color:'#2870e8'
                            }
                        },
                    ],
                   data1:[
                        {
                            value:40,
                            name:'红包',
                            itemStyle:{
                                color:'#c2232a'
                            }
                        },
                        {
                            value:60,
                            name:'购物',
                            itemStyle:{
                                color:'#fe672c'
                            }
                        },
                        {
                            value:40,
                            name:'旅游',
                            itemStyle:{
                                color:'#a262f2'
                            }
                        },
                        {
                            value:20,
                            name:'其他',
                            itemStyle:{
                                color:'#2870e8'
                            }
                        },
                        {
                            value:80,
                            name:'交通',
                            itemStyle:{
                                color:'#feed2c'
                            }
                        }
                    ]
               },
               // 交友分析面积图
               data9:[
                   {
                       name:'新增好友数',
                       color:'#feed2c',
                       data: [240, 132, 101, 134, 90, 170, 110]
                   },
                   {
                       name:'好友总数',
                       color:'#2871ea',
                       data: [20, 102, 101, 134, 190, 150, 120]
                   },
                   {
                       name:'新增群数',
                       color:'#935adf',
                       data: [100, 32, 101, 134, 150, 110, 180]
                   },
                   {
                       name:'群总数',
                       color:'#e65f2d',
                       data: [120, 122, 141, 144, 60, 220, 120]
                   }
               ],
               // 交友方式柱图
               colorsData:[
                    {
                        itemStyle:{
                        color:"#2c7bfe",

                        },
                        name:'漂流瓶',
                        value:255
                    },
                     {
                        itemStyle:{
                            color:"#c2232a",

                        },
                        name:'附近的人',
                        value:212
                    },
                    {
                        itemStyle:{
                            color:"#feed2c",

                        },
                        name:'雷达',
                        value:155
                    },
                    {
                        itemStyle:{
                            color:"#a262f2",

                        },
                        name:'摇一摇',
                        value:55
                    },
                    {
                        itemStyle:{
                            color:"#62d5f2",
                        },
                        name:'搜索',
                        value:80
                    },
                    {
                        itemStyle:{
                            color:"#fe672c",
                        },
                        name:'群聊',
                        value:160
                    },
                    {
                        itemStyle:{
                            color:"#69f262",
                        },
                        name:'扫一扫',
                        value:114
                    },
                    {
                        itemStyle:{
                            color:"#2ca8fe",
                        },
                        name:'其他',
                        value:20
                    },
               ]
            }
        },
        methods: {

        },
        watch: {
            selectRangeDate: function (val) {
                 for (let i = 1; i<18;i++) {
                     this.$refs['chart'+i].setChart ();
                }
            }
        },
        mounted() {

         window.onresize =  ()=> {
                // 通过捕获系统的onresize事件触发我们需要执行的事件
                for (let i = 1; i<18;i++) {
                     this.$refs['chart'+i].setChart ();
                }
            }

        },

    }

</script>

<style lang="less">
    .soldierMoon {
        height: 100%;
        width: 100%;
        .listCharts {
            height: 100%;
            padding:14px 20px 20px;
            background: #03044A;
            overflow: hidden;
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
                left: 50%;
                transform: translate(-50%,-50%);
                span {
                    display: inline-block;
                    padding:5px 15px;
                        font-size: 1.2em;
                        font-size: 1.2em;
                    //border-radius: 5px;
                    background: radial-gradient(60px 20px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                }

            }
            .listTop {
                height: 60%;
                .ivu-col {
                    height:100%;
                    .leftTop {
                        width: 100%;
                        height: 100%;
                        border:1px solid #0D2451;
                        position: relative;
                        .left1 {
                            width:100%;
                            height:40%;
                        }
                        .left2,.left3 {
                            width:100%;
                            height:30%;
                            padding: 10px 0;
                        }
                    }

                    .rightTop-1 {
                        width: 100%;
                        height: 55%;
                        border:1px solid #0D2451;
                        position: relative;
                    }
                    .rightTop-2 {
                        width: 100%;
                        margin-top: 5%;
                        height: 40%;
                        border:1px solid #0D2451;
                        position: relative;
                        .rightTop-list {
                            width: 100%;
                            height:100%;
                            .list {
                                width:30%;
                                height:100%;
                                float: left;
                                &:first-child {
                                    width:40%;
                                }
                            }
                        }
                    }

                }
            }
            .listBottom {
                height:40%;
                .ivu-col-span-9 {
                    width:33.5%;
                    margin-right: 0.6667%;
                }
                .ivu-col-span-4 {
                    width:17.66667%;
                    margin-right: 0.6667%;
                }
                .ivu-col {
                    height:100%;
                    .content {
                        margin-top: 30px;
                        height:calc(~"100% - 30px");
                         border:1px solid #0D2451;
                        position: relative;
                        .title1 {
                            position: absolute;
                            display: inline-block;
                            color:#6EDDF1;
                            background: #14418E;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            span {
                                 display: inline-block;
                                 padding:5px 15px;
                                 font-size: 1.2em;
                                background: radial-gradient(50px 25px ellipse, rgba(7,9,34,.8) 50%,rgb(21,67,145));
                            }

                        }
                        .ivu-row {
                             &.topLine {
                                 height:55%;
                             }
                             &.bottomPie {
                                 height:45%;
                             }
                            .ivu-col {
                             height:100%;
                             .charts-list {
                                 height: 100%;
                                 width: 100%;
                             }
                         }
                        }
                        .behavior {
                             width:100%;
                             height: 100%;
                        }
                         .appUse {
                             width: 100%;
                             height:100%;
                         }
                    }
                }
            }
        }
    }
</style>
