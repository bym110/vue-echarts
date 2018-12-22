

<template>
    <div class='soldierMoon'>
       <div class="listCharts">
           <Row class="listTop">
                <Col span="7">
                    <div class="leftTop">
                        <span class='title'><span>上网行为分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="left1">
                            <double-area :selectRangeDate="selectRangeDate" ref='chart1'></double-area>
                        </div>
                        <div class="left2">
                            <web-bar ref="chart2" id="left_2_1" :data="sensitiveWebData"></web-bar>
                            <web-pie ref="chart3" id="left_2_2" :data="sensitiveWebPieData"></web-pie>
                        </div>
                        <div class="left3">
                            <web-bar ref="chart4" id="left_3_1" :data="normalWebData"></web-bar>
                            <web-pie ref="chart5" id="left_3_2" :data="normalWebPieData"></web-pie>
                        </div>
                    </div>
                </Col>
                <Col span="10">
                     <radar-part ref="chart6"></radar-part>
                </Col>
                <Col span="7">
                    <div class="rightTop-1">
                        <span class='title'><span>通讯行为分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <world-map ref="chart7"></world-map>
                    </div>
                    <div class="rightTop-2">
                        <span class='title'><span>舆情分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="rightTop-list">
                            <div class="list">
                                <popular-bar ref="chart8"></popular-bar>
                            </div>
                            <div class="list">
                                <ring ref="chart9" id="right_3" :data="sensitiveWordData"> </ring>
                            </div>
                            <div class="list">
                                <ring ref="chart10" id="right_4" :data="hotWordData"> </ring>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row class="listBottom">
                <Col span='9'>
                    <div class="content">
                        <span class="title"><span>金钱交易行为分析</span></span>
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
                                <pie-ring ref="chart12" id="bottom_2" :data="pieData1"></pie-ring>
                            </Col>
                            <Col span="12">
                                 <pie-ring ref="chart13" id="bottom_3" :data="pieData2"></pie-ring>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span='4'>
                    <div class="content">
                        <span class="title1"><span>交友分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="behavior">
                            <four-area ref="chart14" id="bottom_6" :select-range-date="selectRangeDate" :data="fourAreaData"></four-area>
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
                         <span class="title"><span>手机安全状态分析</span></span>
                         <funnel ref="chart16" id="bottom_8"></funnel>
                    </div>
                </Col>
                <Col span='7'>
                    <div class="content">
                         <span class="title"><span>应用使用行为分析</span></span>
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
 import radarPart from '../components/soldierMood/radarPart.vue';
 import doubleArea from '../components/soldierMood/doubleArea.vue';
 import webBar from '../components/soldierMood/webBar.vue';
 import webPie from '../components/soldierMood/webPie.vue';
 import worldMap from '../components/soldierMood/worldMap.vue';
 import ring from '../components/soldierMood/ring.vue';
 import popularBar from '../components/soldierMood/popularBar.vue';
 import lines from '../components/soldierMood/lines.vue';
 import pieRing from '../components/soldierMood/pieRing.vue';
 import colorsBar from '../components/soldierMood/colorsBar.vue';
 import funnel from '../components/soldierMood/funnel.vue';
 import lineBar from '../components/soldierMood/lineBar.vue';
 import fourArea from '../components/soldierMood/fourArea.vue';

    export default {
        name: 'radar',
        props:{
            selectRangeDate:Array
        },
        components:{
            radarPart,// 中心
            doubleArea, //上网行为分析 面积图
            webBar, // 上网行为分析 柱图
            webPie, // 上网行为分析 饼图
            worldMap, // 通讯行为分析 世界地图
            ring, // 舆情分析 圆环
            popularBar, // 舆情分析 柱图
            lines, //金钱交易行为 折线图
            pieRing, // 金钱交易行为 饼环图
            colorsBar,// 交友分析 柱图
            funnel, // 手机安全状态分析 漏斗图
            lineBar, //应用使用行为分析 柱图
            fourArea // 交友分析 面积图
        },
        data() {
            return {
              
               sensitiveWebData:{ // 敏感网络柱图数据
                   name:'敏感网络',
                   number:'100次',
                    data:["敏感网站1", "敏感网站2", "敏感网站3", "敏感网站4", "敏感网站5"],
                    color:'192,35,42',
                    value:[60, 50, 40, 30, 20]
               },
               sensitiveWebPieData:{// 敏感网络饼图信息
                    title:"敏感网络分类占比",
                    color:'#BE232A',
                    
                    data:[
                        {
                            value:60, 
                            name:'涉黄',
                            itemStyle:{
                                color:'#a262f2'
                            }
                        
                        },
                        {
                            value:20, 
                            name:'涉赌',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:80, 
                            name:'涉毒',
                            itemStyle:{
                                color:'#feac2c'
                            }
                            },
                        {
                            value:40, 
                            name:'暴力',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:40, 
                            name:'宗教',
                            itemStyle:{
                                color:'#2cd9fe'
                            }
                        },
                        {
                            value:40, 
                            name:'恶意',
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
               normalWebData:{ // 正常网络柱图数据
                    name:'正常网络',
                    number:'100次',
                    data:["正常网站1", "正常网站2", "正常网站3", "正常网站4", "正常网站5"],
                    color:'40,112,232',
                    value:[6, 5, 4, 3, 2]
               },
               // 正常网络饼图数据
               normalWebPieData:{
                    title:"正常网络分类占比",
                    color:'#2C7BFE',
                    data:[
                        {
                            value:20, 
                            name:'电商',
                            itemStyle:{
                                color:'#feed2c'
                            }
                        
                        },
                        {
                            value:20, 
                            name:'音乐',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:40, 
                            name:'视频',
                            itemStyle:{
                                color:'#feac2c'
                            }
                            },
                        {
                            value:40, 
                            name:'浏览',
                            itemStyle:{
                                color:'#2c7bfe'
                            }
                        },
                        {
                            value:100, 
                            name:'购物',
                            itemStyle:{
                                color:'#252448'
                            }
                        }
                    ],
               },
               // 敏感词传播次数数据
               sensitiveWordData:{
                   title:'敏感词传播次数',
                   data:[
                        {
                            value:335, 
                            name:'自杀',
                            itemStyle:{
                                color:'#252448'
                            }
                        },
                        {
                            value:310, 
                            name:'法轮功',
                            itemStyle:{
                                color:'#2ca8fe'
                            }
                        },
                        {
                            value:234, 
                            name:'赌博',
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
                            name:'贪污',
                            itemStyle:{
                                color:'#fe672c'
                            }
                        }
                    ]
               },
               // 热词传播次数数据
               hotWordData:{
                   title:'热词传播次数',
                   data:[
                        {
                            value:335, 
                            name:'自杀',
                            itemStyle:{
                                color:'#69f262'
                            }
                        },
                        {
                            value:310, 
                            name:'法轮功',
                            itemStyle:{
                                color:'#c0232a'
                            }
                        },
                        {
                            value:234, 
                            name:'赌博',
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
                            name:'贪污',
                            itemStyle:{
                                color:'#a262f2'
                            }
                        }
                    ]
               },
               pieData1:{
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
               pieData2:{
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
               fourAreaData:[
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
            background: #09102E;
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
