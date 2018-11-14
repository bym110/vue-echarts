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
                        #left1 {
                            width:100%;
                            height:40%;
                        }
                        .left2,.left3 {
                            width:100%;
                            height:30%;
                            padding:10px;
                            #left2-1,#left3-1{
                                float: left;
                                width:55%;
                                height:100%;
                            }
                            #left2-2,#left3-2 {
                                float: left;
                                width:45%;
                                 height:100%;
                            }
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
                    .main {
                        width:100%;
                        height:100%;
                        #main {
                            width: 100%;
                            height: 100%;
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
                        #rightTop_1 {
                            width:100%;
                            height:80%;
                        }
                        #rightTop_2 {
                            float: left;
                            width:50%;
                            height:20%;
                        }
                        #rightTop_3 {
                            float: left;
                            width:50%;
                            height:20%;
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
                            #right_list1 {
                                width:40%;
                                height:100%;
                                float: left;
                            }
                            #right_list2,#right_list3 {
                                width:30%;
                                height:100%;
                                float: left;
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
                         #behavior,#phone_safe {
                             width:100%;
                             height: 100%;
                         }
                         #application {
                             width: 100%;
                             height:100%;
                         }
                    }
                }
            }
        }
    }
</style>

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
                    <div id="left1"></div>
                    <div class="left2">
                        <div id="left2-1"></div>
                        <div id="left2-2"></div>
                    </div>
                    <div class="left3">
                         <div id="left3-1"></div>
                        <div id="left3-2"></div>
                    </div>
                </div>
                </Col>
                <Col span="10">
                     <div class="main">
                        <div id='main'></div>
                    </div>
                </Col>
                <Col span="7">
                <div class="rightTop-1">
                     <span class='title'><span>通讯行为分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                     <div id="rightTop_1"></div>
                        <div id="rightTop_2"></div>
                        <div id="rightTop_3"></div>
                </div>
                <div class="rightTop-2">
                     <span class='title'><span>舆情分析</span></span>
                     <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                     <div class="rightTop-list">
                         <div id="right_list1"></div>
                         <div id="right_list2"></div>
                         <div id="right_list3"></div>
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
                                <div class="charts-list" id="bottom_mainBar"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="6">
                                <div  class="charts-list" id="bottom_mainPie1"></div>
                            </Col>
                            <Col span="6">
                                <div  class="charts-list" id="bottom_mainPie2"></div>
                            </Col>
                            <Col span="6">
                                <div  class="charts-list" id="bottom_mainPie3"></div>
                            </Col>
                            <Col span="6">
                                <div  class="charts-list" id="bottom_mainPie4"></div>
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
                        <div id="behavior"></div>
                    </div>
                </Col>
                <Col span='4'>
                    <div class="content">
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                         <span class="title"><span>手机安全状态分析</span></span>
                         <div id="phone_safe"></div>
                    </div>
                </Col>
                <Col span='7'>
                    <div class="content">
                         <span class="title"><span>应用使用行为分析</span></span>
                         <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                         <div id="application"></div>
                    </div>
                </Col>
            </Row>
       </div>
    </div>
</template>

<script>
 import echarts from 'echarts';
 import "../../node_modules/echarts/map/js/world.js"
    export default {
        name: 'radar',
        data() {
            return {
                
            }
        },
        methods: {
            // 上网行为分析
            setInternet () {
                let option = {
                    legend: {
                        data:[{
                            name:'正常网站',
                            icon:'circle'
                        },
                        {
                            name:'敏感网站',
                            icon:'circle'
                        }
                            ],
                            itemWidth:7,
                            itemHeight:7,
                        textStyle:{
                            color:'rgb(104,200,216)'
                        },    
                        right:30,
                        top:10,
                    },
                    grid: [{
                        show: false,
                        top: 40,
                        bottom: '45%',
                        left:21,
                         right:25,
                        containLabel: true,
                    },{
                        show: false,
                        top: '55%',
                        bottom: 10,
                        left:20,
                        right:25,
                        containLabel: true,
                      
                    },
                     ],
                    yAxis: [{
                        type: 'value',
                        inverse: false,
                        splitNumber:3,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(62,172,205,1)'
                            }
                        },
                        axisTick: {
                            show: true

                        },
                        position: 'bottom',
                        axisLabel: {
                            formatter: function (value,index) {
                                if (value==6) {
                                    value="(个)"
                                }
                               return value
                                
                            },
                            showMaxLabel:true,
                            textStyle: {
                                color: 'rgba(62,172,205,1)',
                                fontSize:8,
                                fontWeight:'normal'
                            }
                        },
                        splitLine: {
                            show: false,
                        }
                    },  {
                        gridIndex: 1,
                        splitNumber: 3,
                         inverse: true,
                        type: 'value',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(62,172,205,1)'
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        position: 'bottom',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(62,172,205,1)',
                                fontSize:8,
                                fontWeight:'normal'
                            },
                            showMaxLabel:true,
                            formatter: function (value,index) {
                                if (value==600) {
                                    value="(人)"
                                }
                               return value
                                
                            },
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 0
                            }
                        }
                    }
                    ],
                    xAxis: [
                        {
                            type: 'category',
                            inverse: true,
                             name:"日",
                             nameLocation:'start',
                             nameGap:0,
                            axisLine: {
                                show:true,
                                lineStyle: {
                                    color: 'rgba(62,172,205,1)'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                           
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            inverse: true,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(62,172,205,1)'
                                }
                            },

                            axisTick: {
                                show: false,
                                lineStyle: {
                                    color: 'rgba(62,172,205,1)'
                                }
                            },
                            axisLabel: {
                                show: false
                            },

                        }
                    ],
                    series: [{
                        name: '正常网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color:'rgb(44,123,254)'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        data:[1, 3, 2, 5, 4, 6, 3,2, 4, 3, 6]
                    }, {
                        name: '敏感网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color:'rgb(194,35,42)'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[4, 6, 5, 2, 3, 1, 4,2, 2, 4, 1]
                    },
                    {
                        name: '正常网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                         xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color:'rgb(44,123,254)'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }, {
                        name: '敏感网络',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        
                        itemStyle: {
                            normal: {
                                color:'rgb(194,35,42)'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }]
                };
          
            let myChart = echarts.init(document.getElementById('left1'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('left1').offsetWidth,
                height:document.getElementById('left1').offsetHidth
                }
            )
              myChart.setOption(option);
            },
            // 敏感网站 
            setSensitive () {
                let option = {
                    grid: [{
                        show: false,
                        left: 20,
                        top: 0,
                        bottom: 10,
                        containLabel: true,
                    }, {
                        show: false,
                        left: '36%',
                        top: 0,
                        bottom: 10,
                    }
                     ],
                     
                    yAxis: [
                           //左边的标尺
                        {
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                show:true,
                                lineStyle: {
                                    color: 'rgba(62,172,205,1)'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                margin:13,
                                fontSize:12
                            },
                            data:["敏感网站1", "敏感网站2", "敏感网站3", "敏感网站4", "敏感网站5"]
                        },
                        //右边的标尺
                        {
                            gridIndex: 1,
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                show: false
                            },
                           
                            axisTick: {
                                show: false

                            },
                            axisLabel: {
                                show: true,
                                color:'#fff',
                                fontSize:10,
                            },

                            
                        },
                    ],
                    xAxis: [
                        {
                       
                        show: false
                        },
                       {
                        gridIndex: 1,
                        type: 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        }
                    }
                    ],
                    series: [ {
                        name: '敏感网站',
                        type: 'bar',
                        barCategoryGap: 20,
                        barWidth: 10,
                         xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: 'rgb(10,26,71)'},
                                        {offset: 1, color: 'rgb(39,109,228)'}

                                    ]
                                ),
                                barBorderRadius:5,
                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[6, 5, 4, 3, 2]
                    },
                    ]
                };
                let option1 = {
                    title : {
                        text: '敏感网站分类显示占比',
                        x:'center',
                        y:0,
                        textStyle:{
                            color:'rgb(105,200,216)',
                            fontSize:14
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            label:{
                                color:'rgb(105,200,216)',
                                 formatter:'{b}{d}%',
                                 fontSize:10
                            },
                            labelLine:{
                                length:10,
                                length2:8,
                                lineStyle:{
                                    color:'rgb(57,63,90)'
                                }
                            },
                            color:['rgb(254,237,44)', 'rgb(44,168,254)','rgb(254,103,44)','rgb(44,123,254)','rgb(37,36,72)'],
                            data:[
                                {value:20, name:'涉黄'},
                                {value:20, name:'涉赌'},
                                {value:40, name:'涉毒'},
                                {value:40, name:'涉猎'},
                                {value:10, name:'其他'}
                            ],
                            itemStyle: {
                                
                            }
                        }
                    ]
                };
          
            let myChart = echarts.init(document.getElementById('left2-1'));
            let myChart1 = echarts.init(document.getElementById('left2-2'));
           
            myChart.clear();
            myChart1.clear();
            myChart.resize(
                {
                    width:document.getElementById('left2-1').offsetWidth,
                height:document.getElementById('left2-1').offsetHidth
                }
            );
            myChart1.resize(
                {
                    width:document.getElementById('left2-2').offsetWidth,
                height:document.getElementById('left2-2').offsetHidth
                }
            )
              myChart.setOption(option);
              myChart1.setOption(option1);
            },
            // 正常网络
            setNetwork () {
                let option = {
                    grid: [{
                        show: false,
                        left: 20,
                        top: 0,
                        bottom: 10,
                        containLabel: true,
                    }, {
                        show: false,
                        left: '36%',
                        top: 0,
                        bottom: 10,
                    }
                     ],
                    yAxis: [
                           //左边的标尺
                        {
                            type: 'category',
                            inverse: true,
                           
                            position: 'left',
                            axisLine: {
                                show:true,
                                lineStyle: {
                                    color: 'rgba(62,172,205,1)'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                margin:13,
                                fontSize:12
                            },
                            data:["正常网站1", "正常网站2", "正常网站3", "正常网站4", "正常网站5"]
                        },
                        //右边的标尺
                        {
                            gridIndex: 1,
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                show: false
                            },
                           
                            axisTick: {
                                show: false

                            },
                            axisLabel: {
                                show: true,
                                color:'#fff',
                                fontSize:10,
                            },

                            
                        },
                    ],
                    xAxis: [
                        {
                       
                        show: false
                        },
                       {
                        gridIndex: 1,
                        type: 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        }
                    }
                    ],
                    series: [ {
                        name: '敏感网站',
                        type: 'bar',
                        barCategoryGap: 20,
                        barWidth: 10,
                         xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: 'rgb(31,15,46)'},
                                        {offset: 1, color: 'rgb(188,34,42)'}

                                    ]
                                ),
                                barBorderRadius:5,
                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[6, 5, 4, 3, 2]
                    },
                    ]
                };
                let option1 = {
                    title : {
                        text: '正常网站分类显示占比',
                        x:'center',
                        y:5,
                        textStyle:{
                            color:'rgb(105,200,216)',
                            fontSize:14
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '65%'],
                            label:{
                                color:'rgb(105,200,216)',
                                 formatter:'{b}{d}%',
                                 fontSize:10,
                            },
                            labelLine:{
                                length:10,
                                length:8,
                                lineStyle:{
                                    color:'rgb(57,63,90)'
                                }
                            },
                           
                             color:['rgb(162,98,242)', 'rgb(44,168,254)','rgb(44,252,254)','rgb(192,35,42)','rgb(37,36,72)'],
                            data:[
                                {value:20, name:'电商'},
                                {value:20, name:'音乐'},
                                {value:40, name:'视频'},
                                {value:40, name:'购物'},
                                {value:10, name:'浏览'}
                            ],
                            itemStyle: {
                                
                            }
                        }
                    ]
                };
          
            let myChart = echarts.init(document.getElementById('left3-1'));
            let myChart1 = echarts.init(document.getElementById('left3-2'));
           
            myChart.clear();
            myChart1.clear();
            myChart.resize(
                {
                    width:document.getElementById('left3-1').offsetWidth,
                height:document.getElementById('left3-1').offsetHidth
                }
            );
            myChart1.resize(
                {
                    width:document.getElementById('left3-2').offsetWidth,
                height:document.getElementById('left3-2').offsetHidth
                }
            )
              myChart.setOption(option);
              myChart1.setOption(option1);
            },
            // 雷达图
            setRadar () {
                var dataBJ = [
                    [55,9,56,0.46,18,6,1],
                    [25,11,21,0.65,34,9,2],
                    [56,7,63,0.3,14,5,3],
                    [33,7,29,0.33,16,6,4],
                    [42,24,44,0.76,40,16,5],
                    [82,58,90,1.77,68,33,6],
                    [74,49,77,1.46,48,27,7],
                    [78,55,80,1.29,59,29,8],
                    [267,216,280,4.8,108,64,9],
                    [185,127,216,2.52,61,27,10],
                    [39,19,38,0.57,31,15,11],
                    [41,11,40,0.43,21,7,12],
                    [64,38,74,1.04,46,22,13],
                    [108,79,120,1.7,75,41,14],
                    [108,63,116,1.48,44,26,15],
                    [33,6,29,0.34,13,5,16],
                    [94,66,110,1.54,62,31,17],
                    [186,142,192,3.88,93,79,18],
                    [57,31,54,0.96,32,14,19],
                    [22,8,17,0.48,23,10,20],
                    [39,15,36,0.61,29,13,21],
                    [94,69,114,2.08,73,39,22],
                    [99,73,110,2.43,76,48,23],
                    [31,12,30,0.5,32,16,24],
                    [42,27,43,1,53,22,25],
                    [154,117,157,3.05,92,58,26],
                    [234,185,230,4.09,123,69,27],
                    [160,120,186,2.77,91,50,28],
                    [134,96,165,2.76,83,41,29],
                    [52,24,60,1.03,50,21,30],
                    [46,5,49,0.28,10,6,31]
                ];
                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                };
                let option = {
                    radar: {
                        indicator: [
                            {name: '资金波动明显有涉赌炒股嫌疑', max: 300},
                            {name: '需关注异常境外通信', max: 250},
                            {name: '娱乐时间过长作息不规律', max: 300},
                            {name: '发现陌生手机，存在机外机卡行为', max: 5},
                            {name: '频繁交友需关注个人问题', max: 200},
                            {name: '言论消极需关注心理健康', max: 100}
                        ],
                        splitArea : {
                            show : true,
                            areaStyle : {
                                color: 'rgba(22,26,39,1)', // 图表背景的颜色
                            },
                        },
                        shape: 'circle',
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: 'rgb(96,184,210)',
                                backgroundColor:'rgb(23,49,132)',
                                padding:10,
                                fontSize:16,
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                ].reverse()
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '北京',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: 'rgb(248,62,55)'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        },
                    ]
                };
                let myChart = echarts.init(document.getElementById('main'));
           
                myChart.clear();
                myChart.resize(
                    {
                        width:document.getElementById('main').offsetWidth,
                    height:document.getElementById('main').offsetHidth
                    }
                )
                myChart.setOption(option);
                },
                // 通讯行为分析
                setMap () {
                    var geoCoordMap = {
                        "海门":[121.15,31.89],
                        "鄂尔多斯":[109.781327,39.608266],
                        "招远":[120.38,37.35],
                        "舟山":[122.207216,29.985295],
                        "齐齐哈尔":[123.97,47.33],
                        "盐城":[120.13,33.38],
                        "赤峰":[118.87,42.28],
                        "青岛":[120.33,36.07],
                        "乳山":[121.52,36.89],
                        "金昌":[102.188043,38.520089],
                        "泉州":[118.58,24.93],
                        "莱西":[120.53,36.86],
                        "日照":[119.46,35.42],
                        "胶南":[119.97,35.88],
                        "南通":[121.05,32.08],
                        "拉萨":[91.11,29.97],
                        "云浮":[112.02,22.93],
                        "梅州":[116.1,24.55],
                        "文登":[122.05,37.2],
                        "上海":[121.48,31.22],
                        "攀枝花":[101.718637,26.582347],
                        "威海":[122.1,37.5],
                        "承德":[117.93,40.97],
                        "厦门":[118.1,24.46],
                        "汕尾":[115.375279,22.786211],
                        "潮州":[116.63,23.68],
                        "丹东":[124.37,40.13],
                        "太仓":[121.1,31.45],
                        "曲靖":[103.79,25.51],
                        "烟台":[121.39,37.52],
                        "福州":[119.3,26.08],
                        "瓦房店":[121.979603,39.627114],
                        "即墨":[120.45,36.38],
                        "抚顺":[123.97,41.97],
                        "玉溪":[102.52,24.35],
                        "张家口":[114.87,40.82],
                        "阳泉":[113.57,37.85],
                        "莱州":[119.942327,37.177017],
                        "湖州":[120.1,30.86],
                        "汕头":[116.69,23.39],
                        "昆山":[120.95,31.39],
                        "宁波":[121.56,29.86],
                        "湛江":[110.359377,21.270708],
                        "揭阳":[116.35,23.55],
                        "荣成":[122.41,37.16],
                        "连云港":[119.16,34.59],
                        "葫芦岛":[120.836932,40.711052],
                        "常熟":[120.74,31.64],
                        "东莞":[113.75,23.04],
                        "河源":[114.68,23.73],
                        "淮安":[119.15,33.5],
                        "泰州":[119.9,32.49],
                        "南宁":[108.33,22.84],
                        "营口":[122.18,40.65],
                        "惠州":[114.4,23.09],
                        "江阴":[120.26,31.91],
                        "蓬莱":[120.75,37.8],
                        "韶关":[113.62,24.84],
                        "嘉峪关":[98.289152,39.77313],
                        "广州":[113.23,23.16],
                        "延安":[109.47,36.6],
                        "太原":[112.53,37.87],
                        "清远":[113.01,23.7],
                        "中山":[113.38,22.52],
                        "昆明":[102.73,25.04],
                        "寿光":[118.73,36.86],
                        "盘锦":[122.070714,41.119997],
                        "长治":[113.08,36.18],
                        "深圳":[114.07,22.62],
                        "珠海":[113.52,22.3],
                        "宿迁":[118.3,33.96],
                        "咸阳":[108.72,34.36],
                        "铜川":[109.11,35.09],
                        "平度":[119.97,36.77],
                        "佛山":[113.11,23.05],
                        "海口":[110.35,20.02],
                        "江门":[113.06,22.61],
                        "章丘":[117.53,36.72],
                        "肇庆":[112.44,23.05],
                        "大连":[121.62,38.92],
                        "临汾":[111.5,36.08],
                        "吴江":[120.63,31.16],
                        "石嘴山":[106.39,39.04],
                        "沈阳":[123.38,41.8],
                        "苏州":[120.62,31.32],
                        "茂名":[110.88,21.68],
                        "嘉兴":[120.76,30.77],
                        "长春":[125.35,43.88],
                        "胶州":[120.03336,36.264622],
                        "银川":[106.27,38.47],
                        "张家港":[120.555821,31.875428],
                        "三门峡":[111.19,34.76],
                        "锦州":[121.15,41.13],
                        "南昌":[115.89,28.68],
                        "柳州":[109.4,24.33],
                        "三亚":[109.511909,18.252847],
                        "自贡":[104.778442,29.33903],
                        "吉林":[126.57,43.87],
                        "阳江":[111.95,21.85],
                        "泸州":[105.39,28.91],
                        "西宁":[101.74,36.56],
                        "宜宾":[104.56,29.77],
                        "呼和浩特":[111.65,40.82],
                        "成都":[104.06,30.67],
                        "大同":[113.3,40.12],
                        "镇江":[119.44,32.2],
                        "桂林":[110.28,25.29],
                        "张家界":[110.479191,29.117096],
                        "宜兴":[119.82,31.36],
                        "北海":[109.12,21.49],
                        "西安":[108.95,34.27],
                        "金坛":[119.56,31.74],
                        "东营":[118.49,37.46],
                        "牡丹江":[129.58,44.6],
                        "遵义":[106.9,27.7],
                        "绍兴":[120.58,30.01],
                        "扬州":[119.42,32.39],
                        "常州":[119.95,31.79],
                        "潍坊":[119.1,36.62],
                        "重庆":[106.54,29.59],
                        "台州":[121.420757,28.656386],
                        "南京":[118.78,32.04],
                        "滨州":[118.03,37.36],
                        "贵阳":[106.71,26.57],
                        "无锡":[120.29,31.59],
                        "本溪":[123.73,41.3],
                        "克拉玛依":[84.77,45.59],
                        "渭南":[109.5,34.52],
                        "马鞍山":[118.48,31.56],
                        "宝鸡":[107.15,34.38],
                        "焦作":[113.21,35.24],
                        "句容":[119.16,31.95],
                        "北京":[116.46,39.92],
                        "徐州":[117.2,34.26],
                        "衡水":[115.72,37.72],
                        "包头":[110,40.58],
                        "绵阳":[104.73,31.48],
                        "乌鲁木齐":[87.68,43.77],
                        "枣庄":[117.57,34.86],
                        "杭州":[120.19,30.26],
                        "淄博":[118.05,36.78],
                        "鞍山":[122.85,41.12],
                        "溧阳":[119.48,31.43],
                        "库尔勒":[86.06,41.68],
                        "安阳":[114.35,36.1],
                        "开封":[114.35,34.79],
                        "济南":[117,36.65],
                        "德阳":[104.37,31.13],
                        "温州":[120.65,28.01],
                        "九江":[115.97,29.71],
                        "邯郸":[114.47,36.6],
                        "临安":[119.72,30.23],
                        "兰州":[103.73,36.03],
                        "沧州":[116.83,38.33],
                        "临沂":[118.35,35.05],
                        "南充":[106.110698,30.837793],
                        "天津":[117.2,39.13],
                        "富阳":[119.95,30.07],
                        "泰安":[117.13,36.18],
                        "诸暨":[120.23,29.71],
                        "郑州":[113.65,34.76],
                        "哈尔滨":[126.63,45.75],
                        "聊城":[115.97,36.45],
                        "芜湖":[118.38,31.33],
                        "唐山":[118.02,39.63],
                        "平顶山":[113.29,33.75],
                        "邢台":[114.48,37.05],
                        "德州":[116.29,37.45],
                        "济宁":[116.59,35.38],
                        "荆州":[112.239741,30.335165],
                        "宜昌":[111.3,30.7],
                        "义乌":[120.06,29.32],
                        "丽水":[119.92,28.45],
                        "洛阳":[112.44,34.7],
                        "秦皇岛":[119.57,39.95],
                        "株洲":[113.16,27.83],
                        "石家庄":[114.48,38.03],
                        "莱芜":[117.67,36.19],
                        "常德":[111.69,29.05],
                        "保定":[115.48,38.85],
                        "湘潭":[112.91,27.87],
                        "金华":[119.64,29.12],
                        "岳阳":[113.09,29.37],
                        "长沙":[113,28.21],
                        "衢州":[118.88,28.97],
                        "廊坊":[116.7,39.53],
                        "菏泽":[115.480656,35.23375],
                        "合肥":[117.27,31.86],
                        "武汉":[114.31,30.52],
                        "大庆":[125.03,46.58],
                        '阿富汗':[67.709953,33.93911],'安哥拉':[17.873887,-11.202692],'阿尔巴尼亚':[20.168331,41.153332],'阿联酋':[53.847818,23.424076],'阿根廷':[-63.61667199999999,-38.416097],'亚美尼亚':[45.038189,40.069099],'法属南半球和南极领地':[69.348557,-49.280366],'澳大利亚':[133.775136,-25.274398],'奥地利':[14.550072,47.516231],'阿塞拜疆':[47.576927,40.143105],'布隆迪':[29.918886,-3.373056],'比利时':[4.469936,50.503887],'贝宁':[2.315834,9.30769],'布基纳法索':[-1.561593,12.238333],'孟加拉国':[90.356331,23.684994],'保加利亚':[25.48583,42.733883],'巴哈马':[-77.39627999999999,25.03428],'波斯尼亚和黑塞哥维那':[17.679076,43.915886],'白俄罗斯':[27.953389,53.709807],'伯利兹':[-88.49765,17.189877],'百慕大':[-64.7505,32.3078],'玻利维亚':[-63.58865299999999,-16.290154],'巴西':[-51.92528,-14.235004],'文莱':[114.727669,4.535277],'不丹':[90.433601,27.514162],'博茨瓦纳':[24.684866,-22.328474],'中非共和国':[20.939444,6.611110999999999],'加拿大':[-106.346771,56.130366],'瑞士':[8.227511999999999,46.818188],'智利':[-71.542969,-35.675147],'中国':[104.195397,35.86166],'象牙海岸':[-5.547079999999999,7.539988999999999],'喀麦隆':[12.354722,7.369721999999999],'刚果民主共和国':[21.758664,-4.038333],'刚果共和国':[15.827659,-0.228021],'哥伦比亚':[-74.297333,4.570868],'哥斯达黎加':[-83.753428,9.748916999999999],'古巴':[-77.781167,21.521757],'北塞浦路斯':[33.429859,35.126413],'塞浦路斯':[33.429859,35.126413],'捷克共和国':[15.472962,49.81749199999999],'德国':[10.451526,51.165691],'吉布提':[42.590275,11.825138],'丹麦':[9.501785,56.26392],'多明尼加共和国':[-70.162651,18.735693],'阿尔及利亚':[1.659626,28.033886],'厄瓜多尔':[-78.18340599999999,-1.831239],'埃及':[30.802498,26.820553],'厄立特里亚':[39.782334,15.179384],'西班牙':[-3.74922,40.46366700000001],'爱沙尼亚':[25.013607,58.595272],'埃塞俄比亚':[40.489673,9.145000000000001],'芬兰':[25.748151,61.92410999999999],'斐':[178.065032,-17.713371],'福克兰群岛':[-59.523613,-51.796253],'法国':[2.213749,46.227638],'加蓬':[11.609444,-0.803689],'英国':[-3.435973,55.378051],'格鲁吉亚':[-82.9000751,32.1656221],'加纳':[-1.023194,7.946527],'几内亚':[-9.696645,9.945587],'冈比亚':[-15.310139,13.443182],'几内亚比绍':[-15.180413,11.803749],'赤道几内亚':[10.267895,1.650801],'希腊':[21.824312,39.074208],'格陵兰':[-42.604303,71.706936],'危地马拉':[-90.23075899999999,15.783471],'法属圭亚那':[-53.125782,3.933889],'圭亚那':[-58.93018,4.860416],'洪都拉斯':[-86.241905,15.199999],'克罗地亚':[15.2,45.1],'海地':[-72.285215,18.971187],'匈牙利':[19.503304,47.162494],'印尼':[113.921327,-0.789275],'印度':[78.96288,20.593684],'爱尔兰':[-8.24389,53.41291],'伊朗':[53.688046,32.427908],'伊拉克':[43.679291,33.223191],'冰岛':[-19.020835,64.963051],'以色列':[34.851612,31.046051],'意大利':[12.56738,41.87194],'牙买加':[-77.297508,18.109581],'约旦':[36.238414,30.585164],'日本':[138.252924,36.204824],'哈萨克斯坦':[66.923684,48.019573],'肯尼亚':[37.906193,-0.023559],'吉尔吉斯斯坦':[74.766098,41.20438],'柬埔寨':[104.990963,12.565679],'韩国':[127.766922,35.907757],'科索沃':[20.902977,42.6026359],'科威特':[47.481766,29.31166],'老挝':[102.495496,19.85627],'黎巴嫩':[35.862285,33.854721],'利比里亚':[-9.429499000000002,6.428055],'利比亚':[17.228331,26.3351],'斯里兰卡':[80.77179699999999,7.873053999999999],'莱索托':[28.233608,-29.609988],'立陶宛':[23.881275,55.169438],'卢森堡':[6.129582999999999,49.815273],'拉脱维亚':[24.603189,56.879635],'摩洛哥':[-7.092619999999999,31.791702],'摩尔多瓦':[28.369885,47.411631],'马达加斯加':[46.869107,-18.766947],'墨西哥':[-102.552784,23.634501],'马其顿':[21.745275,41.608635],'马里':[-3.996166,17.570692],'缅甸':[95.956223,21.913965],'黑山':[19.37439,42.708678],'蒙古':[103.846656,46.862496],'莫桑比克':[35.529562,-18.665695],'毛里塔尼亚':[-10.940835,21.00789],'马拉维':[34.301525,-13.254308],'马来西亚':[101.975766,4.210484],'纳米比亚':[18.49041,-22.95764],'新喀里多尼亚':[165.618042,-20.904305],'尼日尔':[8.081666,17.607789],'尼日利亚':[8.675277,9.081999],'尼加拉瓜':[-85.207229,12.865416],'荷兰':[5.291265999999999,52.132633],'挪威':[8.468945999999999,60.47202399999999],'尼泊尔':[84.12400799999999,28.394857],'新西兰':[174.885971,-40.900557],'阿曼':[55.923255,21.512583],'巴基斯坦':[69.34511599999999,30.375321],'巴拿马':[-80.782127,8.537981],'秘鲁':[-75.015152,-9.189967],'菲律宾':[121.774017,12.879721],'巴布亚新几内亚':[143.95555,-6.314992999999999],'波兰':[19.145136,51.919438],'波多黎各':[-66.590149,18.220833],'北朝鲜':[127.510093,40.339852],'葡萄牙':[-8.224454,39.39987199999999],'巴拉圭':[-58.443832,-23.442503],'卡塔尔':[51.183884,25.354826],'罗马尼亚':[24.96676,45.943161],'俄罗斯':[105.318756,61.52401],'卢旺达':[29.873888,-1.940278],'西撒哈拉':[-12.885834,24.215527],'沙特阿拉伯':[45.079162,23.885942],'苏丹':[30.217636,12.862807],'南苏丹':[31.3069788,6.876991899999999],'塞内加尔':[-14.452362,14.497401],'所罗门群岛':[160.156194,-9.64571],'塞拉利昂':[-11.779889,8.460555],'萨尔瓦多':[-88.89653,13.794185],'索马里兰':[46.8252838,9.411743399999999],'索马里':[46.199616,5.152149],'塞尔维亚共和国':[21.005859,44.016521],'苏里南':[-56.027783,3.919305],'斯洛伐克':[19.699024,48.669026],'斯洛文尼亚':[14.995463,46.151241],'瑞典':[18.643501,60.12816100000001],'斯威士兰':[31.465866,-26.522503],'叙利亚':[38.996815,34.80207499999999],'乍得':[18.732207,15.454166],'多哥':[0.824782,8.619543],'泰国':[100.992541,15.870032],'塔吉克斯坦':[71.276093,38.861034],'土库曼斯坦':[59.556278,38.969719],'东帝汶':[125.727539,-8.874217],'特里尼达和多巴哥':[-61.222503,10.691803],'突尼斯':[9.537499,33.886917],'土耳其':[35.243322,38.963745],'坦桑尼亚联合共和国':[34.888822,-6.369028],'乌干达':[32.290275,1.373333],'乌克兰':[31.16558,48.379433],'乌拉圭':[-55.765835,-32.522779],'美国':[-95.712891,37.09024],'乌兹别克斯坦':[64.585262,41.377491],'委内瑞拉':[-66.58973,6.42375],'越南':[108.277199,14.058324],'瓦努阿图':[166.959158,-15.376706],'西岸':[35.3027226,31.9465703],'也门':[48.516388,15.552727],'南非':[22.937506,-30.559482],'赞比亚':[27.849332,-13.133897],'津巴布韦':[29.154857,-19.015438]
                    };

                    var convertData = function (data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var geoCoord = geoCoordMap[data[i].name];
                            if (geoCoord) {
                                res.push({
                                    name: data[i].name,
                                    value: geoCoord.concat(data[i].value)
                                });
                            }
                        }
                        return res;
                    };

                   let option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: function (params) {
                                return params.name + ' : ' + params.value[2];
                            }
                        },
                        legend: {
                            orient: 'horizontal',
                            top:10,
                            right:10,
                            data:['通话','流量'],
                            itemHeight:7,
                            textStyle: {
                                color:  'rgb(96,184,210)'
                            }
                        },
                        geo: {
                            map: 'world',
                            zoom:1.19,
                            aspectScale: 1,
                            top:45,
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgb(40,113,234)',
                                    borderColor: '#111'
                                },
                                emphasis: {
                                    areaColor: '#2a333d'
                                }
                            }
                        },
                        series: [
                            {
                                name: '通话',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                data: convertData([
                                    {name: "承德", value: 25},
                                    {name: "阿富汗", value: 200},
                                    {name: "厦门", value: 26},
                                    {name: "汕尾", value: 26},
                                    {name: "潮州", value: 26},
                                    {name: "丹东", value: 27},
                                    {name: "太仓", value: 27},
                                    {name: "曲靖", value: 27},
                                    {name: "中山", value: 39},
                                    {name: "昆明", value: 39},
                                    {name: "寿光", value: 40},
                                    {name: "盘锦", value: 40},
                               
                                    {name: "大同", value: 58},
                                    {name: "镇江", value: 59},
                                    {name: "桂林", value: 59},
                                    {name: "张家界", value: 59},
                                    {name: "宜兴", value: 59},
                                    {name: "北海", value: 60},
                               
                                    {name: "安阳", value: 90},
                                    {name: "开封", value: 90},
                                    {name: "济南", value: 92},
                           
                                    {name: "秦皇岛", value: 136},
                                    {name: "株洲", value: 143},
                                    {name: "石家庄", value: 147},
                                    {name: "莱芜", value: 148},
                                    {name: "常德", value: 152},
                                    {name: "保定", value: 153},
                                    {name: "湘潭", value: 154},
                                    {name: "金华", value: 157},
                                    {name: "岳阳", value: 169},
                                    {name: "长沙", value: 175},
                                    {name: "衢州", value: 177},
                                    {name: "廊坊", value: 193},
                                    {name: "菏泽", value: 194},
                                    {name: "合肥", value: 229},
                                    {name: "武汉", value: 273},
                                    {name: "大庆", value: 279}
                                ]),
                                symbolSize: 12,
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    color:'rgb(194,35,42)',
                                    emphasis: {
                                        borderColor: '#fff',
                                        borderWidth: 1
                                    }
                                }
                            },
                            {
                                name: '流量',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                data: convertData([
                                    {name: "承德", value: 25},
                                    {name: '阿根廷', value: 300},
                                    {name: "厦门", value: 26},
                                    {name: "汕尾", value: 26},
                                    {name: "潮州", value: 26},
                                    {name: "丹东", value: 27},
                                    {name: "太仓", value: 27},
                                    {name: "曲靖", value: 27},
                                    {name: "中山", value: 39},
                                    {name: "昆明", value: 39},
                                    {name: "寿光", value: 40},
                                    {name: "盘锦", value: 40},
                               
                                    {name: "大同", value: 58},
                                    {name: "镇江", value: 59},
                                    {name: "桂林", value: 59},
                                    {name: "张家界", value: 59},
                                    {name: "宜兴", value: 59},
                                    {name: "北海", value: 60},
                               
                                    {name: "安阳", value: 90},
                                    {name: "开封", value: 90},
                                    {name: "济南", value: 92},
                           
                                    {name: "秦皇岛", value: 136},
                                    {name: "株洲", value: 143},
                                    {name: "石家庄", value: 147},
                                    {name: "莱芜", value: 148},
                                    {name: "常德", value: 152},
                                    {name: "保定", value: 153},
                                    {name: "湘潭", value: 154},
                                    {name: "金华", value: 157},
                                    {name: "岳阳", value: 169},
                                    {name: "长沙", value: 175},
                                    {name: "衢州", value: 177},
                                    {name: "廊坊", value: 193},
                                    {name: "菏泽", value: 194},
                                    {name: "合肥", value: 229},
                                    {name: "武汉", value: 273},
                                    {name: "大庆", value: 279}
                                ]),
                                symbolSize: 12,
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    color:'rgb(230,215,5)',
                                    emphasis: {
                                        borderColor: '#fff',
                                        borderWidth: 1
                                    }
                                }
                            }
                        ]
                    }
                    let myChart = echarts.init(document.getElementById('rightTop_1'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('rightTop_1').offsetWidth,
                        height:document.getElementById('rightTop_1').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                },
                setMapLine () {
                    let option = {
                        grid:{
                            top:10,
                            bottom:10,
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            axisLabel:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine: {
                                show:false
                            },
                            splitLine:{
                                show:false
                            },
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine: {
                                show:false
                            },
                            splitLine:{
                                show:false
                            }
                            
                        },
                        series: [{
                            data: [1, 4, 5, 3, 7, 15, 2],
                            type: 'line',
                            symbol: 'none',
                             smooth:true,
                            lineStyle:{
                                color:'rgba(228,234,40,.8)'
                            },
                            areaStyle: {
                                normal:{
                                     color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(228,234,40,.8)'},
                                            {offset: 0.5, color: 'rgba(228,234,40,.5)'},
                                            {offset: 1, color: 'rgba(228,234,40,.1)'}
                                        ]
                                )

                                }
                            }
                        }]
                    };
                     let option1 = {
                         grid:{
                            top:10,
                            bottom:10,
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            axisLabel:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine: {
                                show:false
                            },
                            splitLine:{
                                show:false
                            },
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine: {
                                show:false
                            },
                            splitLine:{
                                show:false
                            }
                            
                        },
                        series: [{
                            data: [1, 3, 2, 4, 1, 13, 1],
                            type: 'line',
                             symbol: 'none',
                             smooth:true,
                             lineStyle:{
                                color:'rgba(234,40,66,.8)'
                            },
                            areaStyle: {
                                normal:{
                                     color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(234,40,66,.8)'},
                                            {offset: 0.5, color: 'rgba(234,40,66,.5)'},
                                            {offset: 1, color: 'rgba(234,40,66,.1)'}
                                        ]
                                )

                                }
                            }
                        }]
                    };
                    let myChart = echarts.init(document.getElementById('rightTop_2'));
                    let myChart1 = echarts.init(document.getElementById('rightTop_3'));
            
                    myChart.clear();
                    myChart1.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('rightTop_2').offsetWidth,
                        height:document.getElementById('rightTop_2').offsetHidth
                        }
                    )
                     myChart1.resize(
                        {
                            width:document.getElementById('rightTop_3').offsetWidth,
                        height:document.getElementById('rightTop_3').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                    myChart1.setOption(option1);
                },
                setAnalysis () {
                    let option = {
                            grid:{
                                top:20,
                                bottom:20,
                                left:'35%'
                            },
                            tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                            yAxis: [
                                {
                                data: ['色情同性恋', '暴力枪支', '赌博彩票', '赌品药品','自杀抑郁','宗教迷信','其他'],
                                axisTick: {show: false},
                                 axisLine: {show: false},
                                 inverse:true,
                                axisLabel: {
                                    fontSize:12,
                                    color:'rgb(113,227,247)'
                                }
                            },
                            {
                                data: [45, 33, 13, 25,30,35,45],
                                axisTick: {show: false},
                                 axisLine: {show: false},
                                 inverse:true,
                                 offset:-35,
                                 z:2,
                                axisLabel: {
                                    fontSize:12,
                                    formatter: '{value}人',
                                    color:'rgb(113,227,247)',
                                }
                            }
                            ],
                            xAxis: {
                                splitLine: {show: false},
                                axisTick: {show: false},
                                axisLabel: {show: false},
                                axisLine: {show: false},
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#ddd'
                                    }
                                },
                                silent: true,
                                barWidth: 10,
                                barCategoryGap:20,
                                barGap: '-100%', // Make series be overlap
                                data: [60, 60, 60, 60,60,60,60],
                                itemStyle:{
                                    color:'rgb(37,36,72)'
                                }

                            }, {
                                type: 'bar',
                                barWidth: 10,
                                barCategoryGap:20,
                                z: 10,
                                data: [45, 33, 13, 25,30,35,45],
                                itemStyle:{
                                     //通常情况下：
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                                'rgb(40,113,234)','rgb(254,237,44)','rgb(44,168,254)','rgb(254,103,44)' ,'rgb(62,98,242)' ,'rgb(92,35,42)' ,'rgb(98,213,242)'  
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                },
                                
                            }]
                        };
                        let option1 = {
                            title : {
                                text: '【敏感词传播次数】',
                                top:15,
                                x:'center',
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:12
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                itemWidth:7,
                                itemHeight:7,
                                itemGap:2,
                                top:35,
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:8
                                },
                                x: 'center',
                                data:[
                                    { name:'自杀',icon:'circle'},
                                    { name:'法轮功',icon:'circle'},
                                    { name:'赌博',icon:'circle'},
                                    { name:'其他',icon:'circle'},
                                    { name:'贪污',icon:'circle'},
                                ]
                            },
                            series: [
                                {
                                    name:'敏感词传播次数',
                                    type:'pie',
                                    radius: ['50%', '70%'],
                                    center: ['50%','65%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center',
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    itemStyle:{
                                     //通常情况下：
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                                'rgb(40,113,234)','rgb(254,237,44)','rgb(254,103,44)' ,'rgb(44,168,254)' ,'rgb(37,36,72)'  
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:[
                                        {value:335, name:'自杀'},
                                        {value:310, name:'法轮功'},
                                        {value:234, name:'赌博'},
                                        {value:135, name:'其他'},
                                        {value:200, name:'贪污'}
                                    ]
                                }
                            ]
                        };
                        let option2 = {
                            title : {
                                 text: '【热词传播次数】',
                                top:15,
                                x:'center',
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:12
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                               itemWidth:7,
                                itemHeight:7,
                                top:35,
                                itemGap:2,
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:8
                                },
                                x: 'center',
                                data:[
                                    { name:'自杀',icon:'circle'},
                                    { name:'法轮功',icon:'circle'},
                                    { name:'赌博',icon:'circle'},
                                    { name:'其他',icon:'circle'},
                                    { name:'贪污',icon:'circle'},
                                ]
                            },
                            series: [
                                {
                                    name:'热词传播次数',
                                    type:'pie',
                                    radius: ['50%', '70%'],
                                    center: ['50%','65%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle:{
                                     //通常情况下：
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                                'rgb(162,98,242)','rgb(44,252,254)','rgb(192,35,42)','rgb(105,242,98)' ,'rgb(37,36,72)'  
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                },
                                    data:[
                                        {value:33, name:'自杀'},
                                        {value:58, name:'法轮功'},
                                        {value:76, name:'赌博'},
                                        {value:135, name:'其他'},
                                        {value:88, name:'贪污'}
                                    ]
                                }
                            ]
                        };
                     let myChart = echarts.init(document.getElementById('right_list1'));
                    let myChart1 = echarts.init(document.getElementById('right_list2'));
                    let myChart2 = echarts.init(document.getElementById('right_list3'));
            
                    myChart.clear();
                    myChart1.clear();
                    myChart2.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('right_list1').offsetWidth,
                        height:document.getElementById('right_list1').offsetHidth
                        }
                    )
                     myChart1.resize(
                        {
                            width:document.getElementById('right_list2').offsetWidth,
                        height:document.getElementById('right_list2').offsetHidth
                        }
                    )
                     myChart2.resize(
                        {
                            width:document.getElementById('right_list3').offsetWidth,
                        height:document.getElementById('right_list3').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                    myChart1.setOption(option1);
                    myChart2.setOption(option2);
                },
                // 金钱交易分析
                setDeal () {
                    let option = {
                        grid:[
                           {
                                show: false,
                                left: 0,
                                top: 45,
                                bottom: 1,
                                containLabel: true,
                                width:'33.5%'
                            }, 
                            {
                                show: false,
                                left: '32.8%',
                                top: 45,
                                bottom: 1,
                                  containLabel: true,
                                   width:'33.5%'
                            },
                            {
                                show: false,
                                left:'65.4%',
                                top: 45,
                                bottom: 1,
                                  containLabel: true,
                                   width:'33.5%'
                            }
                        ],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        legend: {
                            top:15,
                            itemWidth:7,
                            itemheight:7,
                            textStyle:{
                                color:'rgb(105,200,216)'
                            },
                            right:10,
                            data:[
                                {name:'收入笔数',icon:'circle'},
                                {name:'支出笔数',icon:'circle'},
                                {name:'收入金额',icon:'circle'},
                                {name:'支出金额',icon:'circle'},
                            ]
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                    formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0 
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                    show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:1,
                                 type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                     formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0 
                                },
                                 axisLine:{
                                     
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                     show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:2,
                                 type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                     formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0 
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                     show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                 splitLine:{
                                    show:false,
                                },
                                min: 0,
                                max: 300,
                                 splitNumber:5,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                    showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                    length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                type: 'value',
                                min: 0,
                                max: 300,
                                interval: 50,
                                  splitLine:{
                                    show:false,
                                },
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                     
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {   
                                gridIndex:1,
                                  type: 'value',
                                 splitLine:{
                                    show:false,
                                },
                                min: 0,
                                max: 300,
                                interval: 50,
                                  splitLine:{
                                    show:false,
                                },
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:1,
                                  splitLine:{
                                    show:false,
                                },
                                nameTextStyle:{
                                    color:'rgb(88,168,183)',
                                    fontSize:8,
                                },
                                min: 0,
                                max: 300,
                                interval: 50,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {   
                                gridIndex:2,
                                  splitLine:{
                                    show:false,
                                },
                                  type: 'value',
                                min: 0,
                                max: 300,
                                interval: 50,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:2,
                                min: 0,
                                max: 300,
                                  splitLine:{
                                    show:false,
                                },
                                interval: 50,
                                axisLabel: {
                                     formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                            {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                barWidth:5,
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入金额',
                                type:'line',
                                symbol: 'none',
                                smooth:true,
                                yAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    shadowBlur:10,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[120, 212, 233, 145, 163, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                               yAxisIndex: 1,
                               itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    shadowBlur:10,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[63, 102, 203, 234, 240, 115, 220, 262]
                            },
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                 yAxisIndex: 2,
                                xAxisIndex: 1,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                            {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                 yAxisIndex: 2,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                  barWidth:5,
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入金额',
                                type:'line',
                                 symbol: 'none',
                                  smooth:true,
                                yAxisIndex: 3,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    shadowBlur:10,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[220, 212, 111, 123, 63, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                                 yAxisIndex: 3,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    shadowBlur:10,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[63, 102, 203, 234, 230, 165, 120, 62]
                            },
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                 yAxisIndex: 4,
                                xAxisIndex: 2,
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                            {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                 yAxisIndex: 4,
                                xAxisIndex: 2,
                                  barWidth:5,
                                   itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入金额',
                                type:'line',
                                 symbol: 'none',
                                  smooth:true,
                                yAxisIndex: 5,
                                xAxisIndex: 2,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    shadowBlur:10,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[209, 212, 123, 145, 163, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                                 yAxisIndex: 5,
                                xAxisIndex: 2,
                                 itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    shadowBlur:10,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[200, 102, 203, 234, 230, 165, 120, 62]
                            },
                        ],
                        
                    };
                     let myChart = echarts.init(document.getElementById('bottom_mainBar'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('bottom_mainBar').offsetWidth,
                        height:document.getElementById('bottom_mainBar').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                },
                // 交易支出 饼图
                setBottomPie () {
                    let option = {
                        title : {
                            text: '【交易收入支出占比】',
                            x:'center',
                            top:6,
                            textStyle:{
                                color:'rgb(115,219,236)',
                                fontSize:10
                            }
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                name: '收入交易',
                                type: 'pie',
                                startAngle:160,
                                radius : '60%',
                                label:{
                                    position:'inside',
                                    formatter:'{b}{d}%',
                                    fontSize:8,
                                },
                                center: ['50%', '60%'],
                                data:[
                                    {value:40, name:'收入'},
                                    {value:60, name:'交易'},
                                ],
                                itemStyle: {
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                               'rgb(40,112,232)','rgb(37,36,72)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    let option1 = {
                        title : {
                            text: '【交易笔数各类占比】',
                            x:'center',
                            top:6,
                            textStyle:{
                                color:'rgb(115,219,236)',
                                fontSize:10
                            }
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                name: '收入交易',
                                type: 'pie',
                                startAngle:160,
                                radius : '60%',
                                label:{
                                    position:'inside',
                                    formatter:'{b}{d}%',
                                    fontSize:8,
                                },
                                center: ['50%', '60%'],
                                data:[
                                    {value:40, name:'红包'},
                                    {value:60, name:'购物'},
                                    {value:40, name:'旅游'},
                                    {value:20, name:'其他'},
                                    {value:80, name:'交通'},
                                ],
                                itemStyle: {
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                               'rgb(40,112,232)','rgb(254,103,44)','rgb(162,98,242)','rgb(254,237,44)','rgb(37,36,72)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                     let option2 = {
                        title : {
                            text: '【交易金额各类占比】',
                            x:'center',
                            top:6,
                            textStyle:{
                                color:'rgb(115,219,236)',
                                fontSize:10
                            }
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                name: '收入交易',
                                type: 'pie',
                                startAngle:160,
                                radius : '60%',
                                label:{
                                    position:'inside',
                                    formatter:'{b}{d}%',
                                    fontSize:8,
                                },
                                center: ['50%', '60%'],
                                data:[
                                    {value:40, name:'红包'},
                                    {value:60, name:'购物'},
                                    {value:40, name:'旅游'},
                                    {value:20, name:'其他'},
                                    {value:80, name:'交通'},
                                ],
                                itemStyle: {
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                               'rgb(40,112,232)','rgb(254,103,44)','rgb(162,98,242)','rgb(254,237,44)','rgb(37,36,72)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    let option3 = {
                        title : {
                            text: '【日均交易水平人数占比】',
                            x:'center',
                            top:6,
                            textStyle:{
                                color:'rgb(115,219,236)',
                                fontSize:10
                            }
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                name: '收入交易',
                                type: 'pie',
                                startAngle:160,
                                radius : '60%',
                                label:{
                                    position:'inside',
                                    //formatter:'{b}{d}%',
                                    formatter: function (val) {   //让series 中的文字进行换行
                                        return (val.name+' '+val.percent+'%').split(" ").join("\n");
                                    },
                                    fontSize:8,
                                },
                                center: ['50%', '60%'],
                                data:[
                                    {value:40, name:'150元-200元'},
                                    {value:60, name:'50元以下'},
                                    {value:40, name:'100元-150元'},
                                    {value:20, name:'其他'},
                                    {value:80, name:'50-100元'},
                                ],
                                itemStyle: {
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                               'rgb(40,112,232)','rgb(254,103,44)','rgb(162,98,242)','rgb(254,237,44)','rgb(37,36,72)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                     let myChart = echarts.init(document.getElementById('bottom_mainPie1'));
                     let myChart1 = echarts.init(document.getElementById('bottom_mainPie2'));
                     let myChart2 = echarts.init(document.getElementById('bottom_mainPie3'));
                     let myChart3 = echarts.init(document.getElementById('bottom_mainPie4'));
                     
                    myChart.clear();
                    myChart1.clear();
                    myChart2.clear();
                    myChart3.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('bottom_mainPie1').offsetWidth,
                        height:document.getElementById('bottom_mainPie1').offsetHidth
                        }
                    )
                    myChart1.resize(
                        {
                            width:document.getElementById('bottom_mainPie2').offsetWidth,
                        height:document.getElementById('bottom_mainPie2').offsetHidth
                        }
                    )
                    myChart2.resize(
                        {
                            width:document.getElementById('bottom_mainPie3').offsetWidth,
                        height:document.getElementById('bottom_mainPie3').offsetHidth
                        }
                    )
                    myChart3.resize(
                        {
                            width:document.getElementById('bottom_mainPie4').offsetWidth,
                        height:document.getElementById('bottom_mainPie4').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                    myChart1.setOption(option1);
                    myChart2.setOption(option2);
                    myChart3.setOption(option3);
                     myChart.dispatchAction({type: 'highlight',name:'收入'});
                    myChart.on('mouseout', function (params) {
                       myChart.dispatchAction({type: 'highlight',name:'收入'});
                    });
                    myChart1.dispatchAction({type: 'highlight',name:['红包','购物','旅游','其他']});
                    myChart1.on('mouseout', function (params) {
                       myChart1.dispatchAction({type: 'highlight',name:['红包','购物','旅游','其他']});
                    });
                    myChart2.dispatchAction({type: 'highlight',name:['红包','购物','旅游','其他']});
                    myChart2.on('mouseout', function (params) {
                       myChart2.dispatchAction({type: 'highlight',name:['红包','购物','旅游','其他']});
                    });
                    myChart3.dispatchAction({type: 'highlight',name:['150元-200元','50元以下','100元-150元','其他']});
                    myChart3.on('mouseout', function (params) {
                       myChart3.dispatchAction({type: 'highlight',name:['150元-200元','50元以下','100元-150元','其他']});
                    });
                },
                // 行为分析
                setBehavior () {
                    let option = {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: [
                            {
                                top:20,
                                right:40,
                                itemWidth:7,
                                itemHeight:7,
                                textStyle:{
                                     color:'rgb(111,223,244)',
                                },
                                data: [
                                    {name:'添加好友',icon:'circle'},
                                    {name:'好友总数',icon:'circle'}
                                ],
                            },
                            {
                                gridIndex:1,
                                top:'52%',
                                right:40,
                                itemWidth:7,
                                textStyle:{
                                     color:'rgb(111,223,244)',
                                },
                               
                                itemHeight:7,
                                data: [
                                    {name:'添加好友 ',icon:'circle'},
                                    {name:'好友总数 ',icon:'circle'}
                                ],
                            }
                        ],
                        grid: [
                            {
                            top:'14%',
                            left: '3%',
                            right: '4%',
                            bottom:'50%',
                            containLabel: true,
                            
                        },
                        {
                            left: '3%',
                            top:'60%',
                            right: '4%',
                            bottom: 10,
                            containLabel: true,
                        }
                        ],
                        xAxis: [
                            {
                            type: 'category',
                            axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                            axisTick:{show:false},
                             data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月']
                            },
                            {
                            type: 'category',
                            axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                             axisTick:{show:false},
                            gridIndex:1,
                             data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月']
                            },
                        ],
                        yAxis: [
                            {
                            type: 'value',
                            min:0,
                            max:300,
                            axisLabel:{
                                 color:'rgb(111,223,244)',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                 showMaxLabel:true,
                            },
                            axisTick:{
                                length:3
                            },
                           
                            splitLine:{show:false}
                           
                        },
                        {
                            type: 'value',
                             min:0,
                            max:300,
                            axisTick:{
                                length:3
                            },
                             axisLabel:{
                                 color:'rgb(111,223,244)',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                  showMaxLabel:true,
                            },
                          
                             splitLine:{show:false}
                        },
                        {
                            gridIndex:1,
                            type: 'value',
                             min:0,
                            max:300,
                            axisTick:{
                                length:3
                            },
                             axisLabel:{
                                 color:'rgb(111,223,244)',
                                fontSize:8,
                                  formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                 showMaxLabel:true,
                            },
                           
                             splitLine:{show:false}
                        },
                        {
                            type: 'value',
                            gridIndex:1,
                             min:0,
                            max:300,
                         
                            axisTick:{
                                length:3
                            },
                             axisLabel:{
                                color:'rgb(111,223,244)',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                 showMaxLabel:true,
                            },
                           
                            splitLine:{show:false}
                        }
                        ],
                        series: [
                           
                            
                            {
                                name: '好友总数',
                                type: 'bar',
                                 barWidth:7,
                                stack: '总数',
                                itemStyle:{
                                    color:'rgb(44,123,254)',
                                    barBorderRadius:3.5,
                                },
                                data: [120, 132, 101, 134, 90, 130, 110,90, 130, 120]
                            },
                            {
                                name: '添加好友',
                                type: 'bar',
                                 barWidth:7,
                                stack: '总数',
                                 itemStyle:{
                                    color:'rgb(194,35,42)',
                                     barBorderRadius:3.5,
                                },
                                data: [120, 102, 101, 134, 190, 130, 120,190, 130, 120]
                            },
                             {
                                name: '添加好友 ',
                                type: 'bar',
                                stack: '总量',
                                 barWidth:7,
                                 xAxisIndex:1,
                                yAxisIndex:2,
                                 itemStyle:{
                                    color:'rgb(254,237,44)',
                                     barBorderRadius:3.5,
                                },
                                data: [120, 102, 101, 134, 190, 130, 120,190, 130, 120]
                            },
                             {
                                name: '好友总数 ',
                                type: 'bar',
                                 barWidth:7,
                                stack: '总量',
                                xAxisIndex:1,
                                yAxisIndex:2,
                                 itemStyle:{
                                    color:'rgb(44,168,254)',
                                     barBorderRadius:3.5,
                                },
                                data: [120, 132, 101, 134, 90, 130, 110,100, 130, 120]
                            },
                           
                            
                        ]
                    };

                    let myChart = echarts.init(document.getElementById('behavior'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('behavior').offsetWidth,
                        height:document.getElementById('behavior').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                },
                // 手机安全分析
                setPhoneSafe () {
                    let option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c}%"
                        },
                      
                        legend:{
                            top: '25%',
                            right: "7%",
                            orient:"vertical",
                            itemWidth:0,
                            itemGap:27,
                            textStyle:{
                                color:'rgb(111,223,244)'
                            },
                            data:['陌生手机','破解攻击','离线断网','异常操作','策略违规']
                        },
                        series: [
                            {
                                name: '预期',
                                type: 'funnel',
                                left: 20,
                                width: '60%',
                                 height:'75%',
                                label: {
                                    
                                    normal: {
                                        show:false,
                                        formatter: '{b}预期',
                                        position:'right'
                                    },
                                    emphasis: {
                                        show:false,
                                        position:'inside',
                                        formatter: '{b}预期: {c}%'
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal:{  
                                        borderWidth:0,
                                         opacity: 0.5,
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                            
                                        var colorList = [ 
                                               'rgb(44,123,254)','rgb(194,35,42)','rgb(162,98,242)','rgb(254,103,44)','rgb(44,252,254)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                   
                                },
                                data: [
                                    {value: 100, name: '陌生手机'},
                                    {value: 80, name: '破解攻击'},
                                    {value: 60, name: '离线断网'},
                                    {value: 40, name: '异常操作'},
                                    {value: 20, name: '策略违规'}
                                ]
                            },
                            {
                                name: '实际',
                                type: 'funnel',
                                left: 20,
                                height:'75%',
                                width: '60%',
                                maxSize: '60%',
                                label: {
                                    normal: {
                                        position: 'inside',
                                        formatter: '{c}%',
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    emphasis: {
                                        position:'inside',
                                    }
                                },
                                itemStyle: {
                                    normal:{  
                                         opacity: 0.5,
                                         borderWidth:0,
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                               'rgb(44,123,254)','rgb(194,35,42)','rgb(162,98,242)','rgb(254,103,44)','rgb(44,252,254)'
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                },
                                data: [
                                    {value: 80, name: '陌生手机'},
                                    {value: 50, name: '破解攻击'},
                                    {value: 40, name: '离线断网'},
                                    {value: 20, name: '异常操作'},
                                    {value: 5, name: '策略违规'}
                                ]
                            }
                        ]
                    };
                    
                    let myChart = echarts.init(document.getElementById('phone_safe'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('phone_safe').offsetWidth,
                        height:document.getElementById('phone_safe').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                },
                // 应用使用行为
                setApplication () {
                    let option = {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: [
                            {
                            top:'48%',
                            left:10,
                            itemWidth:7,
                            itemheight:7,
                            textStyle:{
                                color:'rgb(105,200,216)'
                            },
                            z:2,
                            right:10,
                            data:[
                                {name:'社交',icon:'circle'},
                                {name:'游戏',icon:'circle'},
                                {name:'博彩',icon:'circle'},
                                {name:'金融证券',icon:'circle'},
                                {name:'直播',icon:'circle'},
                                {name:'生活服务',icon:'circle'},
                                {name:'其他',icon:'circle'},
                            ]
                        }
                        ],
                        grid: [
                            {
                            left: 0,
                            top:40,
                            right: '52%',
                            bottom: '54%',
                            containLabel: true
                            },
                            {
                            left: '52%',
                              top:40,
                            right: '4%',
                            bottom: '54%',
                            containLabel: true
                            },
                            {
                            left: '3%',
                            right: '52%',
                            bottom: '3%',
                             top:'60%',
                            containLabel: true
                            },
                            {
                            left: '52%',
                            right: '4%',
                            bottom: '3%',
                            top:'60%',
                            containLabel: true
                            },
                        ],
                        xAxis : [
                            {
                                type : 'category',
                                 data:['社交','游戏','博彩','金融证券','直播','生活服务','其他'],
                                 axisLabel:{
                                      interval:0,
                                      fontSize:8,
                                       color:'rgb(105,200,216)'
                                 },
                                axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'category',
                                gridIndex:1,
                                data : ['微信', 'QQ音乐', '钉钉', '抖音', '直播', '互动吧', '其他'],
                                axisLine:{show:false},
                                axisLabel:{
                                      interval:0,
                                      fontSize:8,
                                       color:'rgb(105,200,216)'
                                 },
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'category',
                                gridIndex:2,
                                boundaryGap:false,
                                data : ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7','8.8'],
                                axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                                axisTick: {
                                    show:false,
                                    alignWithLabel: true
                                }
                            },
                            {
                                type : 'category',
                                  gridIndex:3,
                                  boundaryGap:false,
                                data : ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7','8.8'],
                                axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                                axisTick: {
                                    show:false,
                                    alignWithLabel: true
                                }
                            },
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                splitLine:{show:false},
                                axisLabel:{show:false},
                                 axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'value',
                                gridIndex:1,
                                axisLabel:{show:false},
                                splitLine:{show:false},
                                 axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'value',
                                gridIndex:2,
                                min:0,
                                max:300,
                                axisLabel: {
                                      formatter: function (value) {
                                        if(value==300){
                                        value='(小时)';
                                        }
                                        return value;
                                        },
                                    showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{show:false}
                            },
                            {
                                type : 'value',
                                gridIndex:3,
                                min:0,
                                max:300,
                                axisLabel: {
                                      formatter: function (value) {
                                        if(value==300){
                                        value='(小时)';
                                        }
                                        return value;
                                        },
                                    showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{show:false}
                            },
                        ],
                        series : [
                            {
                                name:'社交',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                itemStyle: {
                                    color:'rgb(44,123,254)'
                                },
                                 data:[380, 0, 0, 0, 0, 0, 0]
                            },
                            {
                                name:'游戏',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(194,35,42)'
                                },
                                 data:[0, 300, 0, 0, 0, 0, 0]
                            },
                            {
                                name:'博彩',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(254,237,44)'
                                },
                                 data:[0, 0, 240, 0, 0, 0, 0]
                            },
                             {
                                name:'金融证券',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(162,98,242)'
                                },
                                 data:[0, 0, 0, 200, 0, 0, 0]
                            },
                             {
                                name:'直播',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(98,213,242)'
                                },
                                 data:[0, 0, 0, 0, 150, 0, 0]
                            },
                             {
                                name:'生活服务',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(254,103,44)'
                                },
                                 data:[0, 0, 0, 0, 0, 100, 0]
                            },
                             {
                                name:'其他',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(105,242,98)'
                                },
                                 data:[0, 0, 0, 0, 0, 0, 50]
                            },
                            {
                                xAxisIndex:1,
                                yAxisIndex:1,
                                type:'bar',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(44,123,254)'
                                },
                                data:[390, 330, 280, 220, 160, 100, 40]
                            },
                             {
                                name:'邮件营销',
                                xAxisIndex:2,
                                yAxisIndex:2,
                                type:'line',
                                lineStyle:{
                                     color:'rgb(162,98,242)'
                                },
                                 smooth:true,
                                  symbol: 'none',
                                data:[0, 132, 101, 134, 90, 230, 210,225]
                            },
                            {
                                name:'联盟广告',
                                 xAxisIndex:2,
                                yAxisIndex:2,
                                type:'line',
                                 smooth:true,
                                 lineStyle:{
                                     color:'rgb(98,213,242)'
                                },
                                  symbol: 'none',
                                data:[0, 182, 191, 234, 290, 130, 210,111]
                            },
                            {
                                name:'视频广告',
                                 xAxisIndex:2,
                                yAxisIndex:2,
                                type:'line',
                                 smooth:true,
                                  lineStyle:{
                                      color:'rgb(44,123,254)'
                                },
                                  symbol: 'none',
                                data:[0, 232, 201, 154, 190, 130, 210,143]
                            },
                             {
                                name:'邮件营销',
                                 xAxisIndex:3,
                                yAxisIndex:3,
                                type:'line',
                                 smooth:true,
                                  symbol: 'none',
                                   lineStyle:{
                                     color:'rgb(98,213,242)'
                                },
                                data:[0, 132, 101, 134, 90, 230, 210,222]
                            },
                            {
                                name:'联盟广告',
                                 xAxisIndex:3,
                                yAxisIndex:3,
                                type:'line',
                                 symbol: 'none',
                                 smooth:true,
                                  lineStyle:{
                                     color:'rgb(162,98,242)'
                                },
                                data:[0, 182, 191, 234, 290, 130, 210,123]
                            },
                            {
                                name:'视频广告',
                                 xAxisIndex:3,
                                yAxisIndex:3,
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                                  lineStyle:{
                                      color:'rgb(44,123,254)'
                                },
                                data:[0, 232, 201, 154, 190, 130, 210,200]
                            },
                        ]
                    };
                     let myChart = echarts.init(document.getElementById('application'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('application').offsetWidth,
                        height:document.getElementById('application').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                }

        },
        mounted() {
         this.setInternet();
         this.setSensitive();
         this.setNetwork();
        this.setRadar ();
        this.setMap ();
        this.setMapLine ();
        this.setAnalysis ();
        this.setDeal ();
        this.setBottomPie ();
        this.setBehavior ();
        this.setPhoneSafe ();
        this.setApplication ();
        let _this = this;
         window.onresize = function () {
                // 通过捕获系统的onresize事件触发我们需要执行的事件
              _this.setInternet();
              _this.setSensitive();
              _this.setNetwork();
              _this.setRadar();
              _this.setMap();
              _this.setMapLine();
              _this.setAnalysis();
              _this.setDeal();
              _this.setBottomPie();
              _this.setBehavior();
              _this.setPhoneSafe();
              _this.setApplication();
            }
        },
    }

</script>


