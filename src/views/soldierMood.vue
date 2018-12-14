

<template>
    <div class='radar'>
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
                        <double-bar ref='chart1'></double-bar>
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
                        <Row>
                            <Col span="24">
                                <line-bar ref="chart11"></line-bar>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="6">
                                <pie ref="chart12" id="bottom_2" :data="pieData1"></pie>
                            </Col>
                            <Col span="6">
                                 <pie ref="chart13" id="bottom_3" :data="pieData2"></pie>
                            </Col>
                            <Col span="6">
                                 <pie ref="chart14" id="bottom_4" :data="pieData3"></pie>
                            </Col>
                            <Col span="6">
                                 <pie ref="chart15" id="bottom_5" :data="pieData4"></pie>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span='4'>
                    <div class="content">
                        <span class="title1"><span>行为分析</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div class="behavior">
                            <behavior-bar ref="chart16" id="bottom_6" :data="behaviorData1"></behavior-bar>
                            <behavior-bar ref="chart17" id="bottom_7" :data="behaviorData2"></behavior-bar>
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
                         <funnel ref="chart18" id="bottom_8"></funnel>
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
                             <div class="appUse-list">
                                 <colorized-bar ref="chart19" id="bottom_9"></colorized-bar>
                             </div>
                             <div class="appUse-list">
                                 <three-line ref="chart20" id="bottom_10"></three-line>
                                 <three-line ref="chart21" id="bottom_11"></three-line>
                             </div>
                         </div>
                    </div>
                </Col>
            </Row>
       </div>
    </div>
</template>

<script>
 import radarPart from './components/soldierMood/radarPart.vue';
 import doubleBar from './components/soldierMood/doubleBar.vue';
 import webBar from './components/soldierMood/webBar.vue';
 import webPie from './components/soldierMood/webPie.vue';
 import worldMap from './components/soldierMood/worldMap.vue';
 import ring from './components/soldierMood/ring.vue';
 import popularBar from './components/soldierMood/popularBar.vue';
 import lineBar from './components/soldierMood/lineBar.vue';
 import pie from './components/soldierMood/pie.vue';
 import behaviorBar from './components/soldierMood/behaviorBar.vue';
 import funnel from './components/soldierMood/funnel.vue';
 import threeLine from './components/soldierMood/threeLine.vue';
 import colorizedBar from './components/soldierMood/colorizedBar.vue';

    export default {
        name: 'radar',
        components:{
            radarPart,
            doubleBar,
            webBar,
            webPie,
            worldMap,
            ring,
            popularBar,
            lineBar,
            pie,
            behaviorBar,
            funnel,
            threeLine,
            colorizedBar
        },
        data() {
            return {
               sensitiveWebData:{
                    data:["敏感网站1", "敏感网站2", "敏感网站3", "敏感网站4", "敏感网站5"],
                    color:'39,109,228',
                    value:[60, 50, 40, 30, 20]
               },
               sensitiveWebPieData:{
                    title:"敏感网络分类占比",
                    color:'#2C7BFE',
                    data:[
                        {
                            value:20, 
                            name:'涉黄',
                            itemStyle:{
                                color:'rgb(254,237,44)'
                            }
                        
                        },
                        {
                            value:20, 
                            name:'涉赌',
                            itemStyle:{
                                color:'rgb(44,168,254)'
                            }
                        },
                        {
                            value:40, 
                            name:'涉毒',
                            itemStyle:{
                                color:'rgb(254,103,44)'
                            }
                            },
                        {
                            value:40, 
                            name:'涉猎',
                            itemStyle:{
                                color:'rgb(44,123,254)'
                            }
                        },
                        {
                            value:100, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ],
               },
               normalWebData:{
                    data:["正常网站1", "正常网站2", "正常网站3", "正常网站4", "正常网站5"],
                    color:'188,34,42',
                    value:[6, 5, 4, 3, 2]
               },
               normalWebPieData:{
                    title:"正常网络分类占比",
                    color:'#BE232A',
                    data:[
                        {
                            value:60, 
                            name:'涉黄',
                            itemStyle:{
                                color:'rgb(162,98,242)'
                            }
                        
                        },
                        {
                            value:20, 
                            name:'涉赌',
                            itemStyle:{
                                color:'rgb(44,168,254)'
                            }
                        },
                        {
                            value:80, 
                            name:'涉毒',
                            itemStyle:{
                                color:'rgb(44,252,254)'
                            }
                            },
                        {
                            value:40, 
                            name:'涉猎',
                            itemStyle:{
                                color:'rgb(192,35,42)'
                            }
                        },
                        {
                            value:30, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ],
               },
               sensitiveWordData:{
                   title:'敏感词传播次数',
                   data:[
                        {
                            value:335, 
                            name:'自杀',
                            itemStyle:{
                                color:'rgb(40,113,234)'
                            }
                        },
                        {
                            value:310, 
                            name:'法轮功',
                            itemStyle:{
                                color:'rgb(254,237,44)'
                            }
                        },
                        {
                            value:234, 
                            name:'赌博',
                            itemStyle:{
                                color:'rgb(254,103,44)'
                            }
                        },
                        {
                            value:135, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(44,168,254)'
                            }
                        },
                        {
                            value:200, 
                            name:'贪污',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ]
               },
               hotWordData:{
                   title:'热词传播次数',
                   data:[
                        {
                            value:335, 
                            name:'自杀',
                            itemStyle:{
                                color:'rgb(162,98,242)'
                            }
                        },
                        {
                            value:310, 
                            name:'法轮功',
                            itemStyle:{
                                color:'rgb(44,252,254)'
                            }
                        },
                        {
                            value:234, 
                            name:'赌博',
                            itemStyle:{
                                color:'rgb(192,35,42)'
                            }
                        },
                        {
                            value:135, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(105,242,98)'
                            }
                        },
                        {
                            value:200, 
                            name:'贪污',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ]
               },
               pieData1:{
                   title:'交易收入支出占比',
                   data:[
                        {
                            value:40, 
                            name:'收入',
                            itemStyle:{
                                color:'rgb(40,112,232)'
                            }
                        },
                        {
                            value:60, 
                            name:'交易',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        },
                    ]
               },
               pieData2:{
                   title:'交易笔数各类占比',
                   data:[
                        {
                            value:40, 
                            name:'红包',
                            itemStyle:{
                                color:'rgb(40,112,232)'
                            }
                        },
                        {
                            value:60, 
                            name:'购物',
                            itemStyle:{
                                color:'rgb(254,103,44)'
                            }
                        },
                        {
                            value:40, 
                            name:'旅游',
                            itemStyle:{
                                color:'rgb(162,98,242)'
                            }
                        },
                        {
                            value:20, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(254,237,44)'
                            }
                        },
                        {
                            value:80, 
                            name:'交通',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ]
               },
               pieData3:{
                   title:'交易金额各类占比',
                    data:[
                        {
                            value:40, 
                            name:'红包',
                            itemStyle:{
                                color:'rgb(40,112,232)'
                            }
                        },
                        {
                            value:60, 
                            name:'购物',
                            itemStyle:{
                                color:'rgb(254,103,44)'
                            }
                        },
                        {
                            value:40, 
                            name:'旅游',
                            itemStyle:{
                                color:'rgb(162,98,242)'
                            }
                        },
                        {
                            value:20, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(254,237,44)'
                            }
                        },
                        {
                            value:80, 
                            name:'交通',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ]
               },
               pieData4:{
                   title:'日均交易水平人数占比',
                    data:[
                        {
                            value:40, 
                            name:'150元-200元',
                            itemStyle:{
                                color:'rgb(40,112,232)'
                            }
                        },
                        {
                            value:60, 
                            name:'50元以下',
                            itemStyle:{
                                color:'rgb(254,103,44)'
                            }
                        },
                        {
                            value:40, 
                            name:'100元-150元',
                            itemStyle:{
                                color:'rgb(162,98,242)'
                            }
                        },
                        {
                            value:20, 
                            name:'其他',
                            itemStyle:{
                                color:'rgb(254,237,44)'
                            }
                        },
                        {
                            value:80, 
                            name:'50元-100元',
                            itemStyle:{
                                color:'rgb(37,36,72)'
                            }
                        }
                    ]
               },
               behaviorData1:[
                   {
                       color:'rgb(44,123,254)',
                       data: [120, 132, 101, 134, 90, 130, 110,90, 130, 120]
                   },
                   {
                       color:'rgb(194,35,42)',
                       data: [120, 102, 101, 134, 190, 130, 120,190, 130, 120]
                   }
               ],
               behaviorData2: [
                   {
                       color:'rgb(254,237,44)',
                       data: [120, 102, 101, 134, 190, 130, 120,190, 130, 120]
                   },
                   {
                       color:'rgb(44,168,254)',
                       data: [120, 132, 101, 134, 90, 130, 110,100, 130, 120]
                   }
               ]
            }
        },
        mounted() {
        let _this = this;
         window.onresize = function () {
                // 通过捕获系统的onresize事件触发我们需要执行的事件
                for (let i = 1; i<22;i++) {
                     _this.$refs['chart'+i].setChart ();
                }
            }
        },
    }

</script>

<style lang="less" scoped>
    .radar {
        height: 100%;
        width: 100%;
        padding:80px 20px 20px;
        background: #09102E;
        .listCharts {
            height:100%;
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
                                //border-radius: 5px;
                                background: radial-gradient(60px 20px ellipse, rgba(7,9,34,.8) 60%,rgb(21,67,145));
                            }

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
                    }
                    
                    .rightTop-1 {
                        width: 100%;
                        height: 55%;
                        border:1px solid #0D2451;
                        position: relative;
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
                                //border-radius: 5px;
                                background: radial-gradient(60px 25px ellipse, rgba(7,9,34,.8) 50%,rgb(21,67,145));
                            }

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
                    }
                    .rightTop-2 {
                        width: 100%;
                        margin-top: 5%;
                        height: 40%;
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
                            left: 50%;
                            transform: translate(-50%,-50%);
                            span {
                                display: inline-block;
                                padding:5px 15px;
                                //border-radius: 5px;
                                background: radial-gradient(50px 25px ellipse, rgba(7,9,34,.8) 50%,rgb(21,67,145));
                            }

                        }
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
                                //border-radius: 5px;
                                    background: radial-gradient(87px 25px ellipse, rgba(7,9,34,.8) 50%,rgb(21,67,145));
                            }

                        }
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
                                //border-radius: 5px;
                                    background: radial-gradient(50px 25px ellipse, rgba(7,9,34,.8) 50%,rgb(21,67,145));
                            }

                        }
                        .ivu-row {
                             height:50%;
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
                             .appUse-list {
                                 &:first-child {
                                     height: 55%;
                                 }
                                 &:last-child {
                                     height: 45%;
                                 }
                             }
                         }
                    }
                }
            }
        }
    }
</style>
