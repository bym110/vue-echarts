<style lang="less" scoped>
    .circle {
        height: 100%;
        width: 100%;
        padding:80px 20px 0px;
        background: #09102E;
        .header {
            text-align: center;
            height:54px;
        }
        .content {
            height: 100%;
            .ivu-col {
                height: 100%;
            }
            .circlePie {
               height: 66.6667%;
               padding:20px 0 40px;
               text-align: center;
            }
            .list {
            height:33.33%;
            .left,.right,.center {
                width: 100%;
                height:90%;
                border:1px solid #0D2451;
                position: relative;
                #left1,#left2,#left3,#right1,#right2,#right3,#center2 {
                    height:100%;
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
        .center-bottom {
            width: calc(~"100% - 30px");
            margin-left:15px;
           
        }

        }
        

    }
</style>

<template>
    <div class="circle">
        <Row class='content'>
            <Col span="7">
                <div class="list">
                    <div class="left">
                        <span class='title'><span class="title-6">办公效率趋势</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="left1"></div>
                    </div>
                </div>
                <div class="list">
                    <div class="left">
                        <span class='title'><span class="title-10">各部门办公效率对比</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="left2"></div>
                    </div>
                </div>
                <div class="list">
                    <div class="left">
                        <span class='title'><span class="title-8">违规话术分布趋势</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="left3"></div>
                    </div>
                </div>
            </Col>
            <Col span="10">
                <div class="circlePie">
                    <canvas id="main" width="500" height="500"></canvas>
                </div>
                <div class="list center-bottom">
                    <div class="center">
                        <span class='title'><span class="title-8">违规话术热度分布</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="center2">
                            <span data-weight="3">傻子</span>
                            <span data-weight="2">热度</span>
                            <span data-weight="2">呵呵</span>
                            <span data-weight="1">大傻子</span>
                            <span data-weight="1.5">TMD</span>
                            <span data-weight="1">啦啦</span>
                            <span data-weight="2">好吧</span>
                            <span data-weight="1.8">SB</span>
                            <span data-weight="1">真服了</span>
                            <span data-weight="1">神经病</span>
                             <span data-weight="1">讨厌</span>
                            <span data-weight="3">我去</span>
                            <span data-weight="1">热度</span>
                            <span data-weight="1">去死吧</span>
                            <span data-weight="2.5">你大爷</span>
                            <span data-weight="1">妖孽</span>
                            <span data-weight="2">低俗</span>
                            <span data-weight="1">人群</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="7">
                <div class="list">
                    <div class="right">
                        <span class='title'><span class="title-10">服务对象数量分布趋势</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="right1"></div>
                    </div>
                </div>
                <div class="list">
                    <div class="right">
                        <span class='title'><span class="title-10">各部门服务对象数量对比</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="right2"></div>
                    </div>
                </div>
                <div class="list">
                    <div class="right">
                        <span class='title'><span class="title-10">各部门违规话术情况对比</span></span>
                        <span class="angle1"></span>
                        <span class="angle2"></span>
                        <span class="angle3"></span>
                        <span class="angle4"></span>
                        <div id="right3"></div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts';
import $ from 'jquery';
import '../assets/awesomeCloud.js'
export default {
    data () {
        return {
            everyPer:0,
            circle: {
                x: 250,
                y: 250,
                radius: 200
            },
            title:'累计设备违规个数'
        }
    },
    methods: {
        // 办公效率
        setOffice () {
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    top:40,
                    bottom:30,
                    left:40,
                    right:40,
                },
                legend: {
                    data:[{name:'话术频次',icon:'circle'},{name:'办公时长',icon:'circle'}],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:{
                        color:'rgb(92,177,193)',
                        fontSize:10,
                    },
                    axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            symbolOffset:[0,10],
                             lineStyle:{
                            color:'rgb(18,44,73)'
                            }
                        },
                    axisTick:{
                         color:'rgb(18,44,73)',
                         inside:true
                    },
                    z:2,
                    data: ['2017','4','7','2018','4','7','10']
                },
                yAxis: [
                    {
                    type: 'value',
                    interval:50,
                    min:0,
                    max:400,
                    splitNumber:7,
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[6,6],
                       lineStyle:{
                           color:'rgb(18,44,73)'
                       }
                    },
                    axisLabel:{
                        color:'rgb(97,185,200)',
                        showMaxLabel:false,
                        fontSize:10,
                        formatter: function (value) {
                            if(value==350){
                            value='(次)';
                            }
                            return value;
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                    },
                    {
                        type:'value',
                        min:0,
                        max:400,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                        lineStyle:{
                            color:'rgb(18,44,73)'
                        }
                        },
                        axisLabel:{
                            show:true,
                            color:'rgb(97,185,200)',
                             showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                         interval:50,
                        splitLine:{
                        show:false,
                    },
                    }
                ],
                series: [{
                    name: '话术频次',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: [200, 12, 21, 54, 260, 130, 210],
                    lineStyle:{
                        width:0,
                        color:'rgb(212,37,43)'
                    },
                    itemStyle:{
                         color:'rgb(212,37,43)'
                    },
                    areaStyle:{
                        color:'rgba(212,37,43,.9)',
                        origin:'start'
                    }
                },
                {
                    name: '办公时长',
                    symbol: 'none',
                    type: 'line',
                    smooth: true,
                    data: [50, 182, 234, 191, 190, 30, 10],
                    lineStyle:{
                        width:0,
                        color:'rgb(43,120,247)'
                    },
                    itemStyle:{
                         color:'rgb(43,120,247)'
                    },
                    areaStyle:{
                        color:'rgba(43,120,247,.9)',
                        origin:'start'
                    }
                },
                ]
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
        // 各部门办公效率 
        setDepartOffice () {
           let option = {
                legend: {
                    data:[
                    {
                        name:'累计话术频次',
                        icon:'circle'
                    },
                    {
                        name:'累计办公时长',
                        icon:'circle'
                    },
                        ],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                grid:{
                    top:40,
                    bottom:30,
                    left:40,
                    right:40,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            symbolOffset:[0,10],
                             lineStyle:{
                            color:'rgb(18,44,73)'
                            }
                        },
                        axisTick:{show:false},
                        axisLabel:{
                             color:'rgb(97,185,200)',
                             fontSize:10
                        },
                        data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部","10部","11部","12部"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        interval:50,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(次)';
                                }
                                return value;
                            },
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        axisLine:{
                        symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                        interval:50,
                        splitLine:{
                            show:false,
                        },
                    }
                ],
                series: [
                    {
                        name:'累计话术频次',
                        type:'bar',
                        itemStyle: {
                            color:'#2C7BFE',
                        },
                        barWidth:10,
                        barCategoryGap:10,
                        data:[213, 190, 137, 110, 238, 99, 63, 196, 248, 212,248, 112]
                    },
                    {
                        name:'累计办公时长',
                         yAxisIndex: 1,
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        lineStyle: {
                            color:'#CD4721',
                             shadowColor: '#CD4721',
                            shadowBlur: 5,
                            shadowOffsetY:3,
                        },
                        data:[115, 68, 59, 142, 119, 51, 146, 181, 149, 98,149, 98]
                    }
                ]
            };
            let myChart = echarts.init(document.getElementById('left2'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('left2').offsetWidth,
                height:document.getElementById('left2').offsetHidth
                }
            )
              myChart.setOption(option);
        },
        // 违规话术分布
        setIllegal () {
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:[{
                        name:'违规人数',
                        icon:'circle'
                    },
                    {
                        name:'违规次数',
                        icon:'circle'
                    }
                        ],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                grid: {
                    top:40,
                    left: 10,
                    right: 10,
                    bottom: 10,
                    containLabel: true
                },
               
                xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            symbolOffset:[0,10],
                             lineStyle:{
                            color:'rgb(18,44,73)'
                            }
                        },
                        axisTick:{show:false},
                        axisLabel:{
                             color:'rgb(97,185,200)',
                             fontSize:10
                        },
                        data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部","10部","11部","12部"]
                    },
                yAxis: [
                     {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        interval:50,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(次)';
                                }
                                return value;
                            },
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        axisLine:{
                        symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                        interval:50,
                        splitLine:{
                            show:false,
                        },
                    }
                ],
                series: [
                    {
                        name:'违规次数',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        lineStyle:{
                            color:'rgb(216,38,43)',
                            shadowColor: 'rgba(216,38,43, 0.8)',
                            shadowOffsetY:5,
                            shadowBlur: 10
                        },
                        itemStyle:{
                            color:'rgb(216,38,43)'
                        },
                        data:[0, 132, 100, 300, 90, 230, 210,182, 200, 234, 290, 330]
                    },
                    {
                        name:'违规人数',
                        yAxisIndex:1,
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        lineStyle:{
                            color:'rgb(44,123,254)',
                             shadowColor: 'rgba(44,123,254, 0.8)',
                            shadowOffsetY:5,
                            shadowBlur: 10
                        },
                        itemStyle:{
                            color:'rgb(44,123,254)'
                        },
                        data:[0, 182, 200, 234, 290, 330, 310,132, 100, 300, 90, 230]
                    },
                ]
            };
             let myChart = echarts.init(document.getElementById('left3'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('left3').offsetWidth,
                height:document.getElementById('left3').offsetHidth
                }
            )
              myChart.setOption(option);
        },
        // 服务对象数量分布
        setServiceNum () {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data:[{
                        name:'好友数量',
                        icon:'circle'
                    },
                    {
                        name:'群数量',
                        icon:'circle'
                    }
                        ],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                grid: {
                    top:40,
                    left: 10,
                    right: 10,
                    bottom: 10,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                        boundaryGap: true,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            symbolOffset:[0,10],
                             lineStyle:{
                            color:'rgb(18,44,73)'
                            }
                        },
                        axisTick:{show:false},
                        axisLabel:{
                             color:'rgb(97,185,200)',
                             fontSize:10
                        },
                        data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部"]
                },
                yAxis:[
                     {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        interval:50,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        axisLine:{
                        symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                        interval:50,
                        splitLine:{
                            show:false,
                        },
                    }
                ],
                series: [
                    {
                        name: '好友数量',
                        type: 'bar',
                        barGap:'0',
                        barWidth:10,
                        itemStyle:{
                            color:'#C2232A'
                        },
                        data: [18, 234, 290, 104, 131, 230, 290, 104, 230]
                    },
                    {
                        name: '群数量',
                        barWidth:10,
                        type: 'bar',
                        itemStyle:{
                            color:'#2C7BFE'
                        },
                      
                        barGap:'0',
                        data: [193, 234, 310, 121, 134, 181, 104, 131, 230]
                    }
                ]
            };
            let myChart = echarts.init(document.getElementById('right1'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('right1').offsetWidth,
                height:document.getElementById('right1').offsetHidth
                }
            )
              myChart.setOption(option);
        },
        // 各部门服务对比趋势
        setDepartService () {
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    top:40,
                    bottom:30,
                    left:40,
                    right:40,
                },
                legend: {
                    data:[{name:'好友数量',icon:'circle'},{name:'群数量',icon:'circle'}],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:{
                        color:'rgb(92,177,193)',
                        fontSize:10,
                    },
                    axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            symbolOffset:[0,10],
                             lineStyle:{
                            color:'rgb(18,44,73)'
                            }
                        },
                    axisTick:{
                         color:'rgb(18,44,73)',
                         inside:true
                    },
                    z:2,
                    data: ['2017','4','7','2018','4','7','10']
                },
                yAxis: [
                    {
                    type: 'value',
                    interval:50,
                    min:0,
                    max:400,
                    splitNumber:7,
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[6,6],
                       lineStyle:{
                           color:'rgb(18,44,73)'
                       }
                    },
                    axisLabel:{
                        color:'rgb(97,185,200)',
                        showMaxLabel:false,
                        fontSize:10,
                        formatter: function (value) {
                            if(value==350){
                            value='(个)';
                            }
                            return value;
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                    },
                    {
                        type:'value',
                        min:0,
                        max:400,
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                        lineStyle:{
                            color:'rgb(18,44,73)'
                        }
                        },
                        axisLabel:{
                            show:true,
                            color:'rgb(97,185,200)',
                             showMaxLabel:false,
                            fontSize:10,
                            formatter: function (value) {
                                if(value==350){
                                value='(个)';
                                }
                                return value;
                            },
                        },
                         interval:50,
                        splitLine:{
                        show:false,
                    },
                    }
                ],
                series: [{
                    name: '好友数量',
                    type: 'line',
                    symbol: 'none',
                    smooth: false,
                    data: [200, 12, 21, 54, 260, 130, 210],
                    lineStyle:{
                        width:1,
                        color:'rgb(212,37,43)'
                    },
                    itemStyle:{
                         color:'rgb(212,37,43)'
                    },
                    areaStyle:{
                        color:'rgba(212,37,43,.5)',
                        origin:'start'
                    }
                },
                {
                    name: '群数量',
                    symbol: 'none',
                    type: 'line',
                    smooth: false,
                    data: [50, 182, 234, 191, 190, 30, 10],
                    lineStyle:{
                        width:1,
                        color:'rgb(43,120,247)'
                    },
                    itemStyle:{
                         color:'rgb(43,120,247)'
                    },
                    areaStyle:{
                        color:'rgba(43,120,247,.5)',
                        origin:'start'
                    }
                },
                ]
            };
            let myChart = echarts.init(document.getElementById('right2'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('right2').offsetWidth,
                height:document.getElementById('right2').offsetHidth
                }
            )
              myChart.setOption(option);
        },
        // 违规话术情况对比 
        setsetIllegalContrast () {
            let option = {
                
                    legend: {
                    data:[{name:'好友数量',icon:'circle'},{name:'群数量',icon:'circle'}],
                    right:10,
                    top:10,
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                    }
                },
                    grid: [{
                        show: false,
                        left: '6%',
                        top: 40,
                        bottom: 10,
                        containLabel: true,
                        width: '40%',
                    }, {
                        show: false,
                        left: '53%',
                        top: 40,
                        bottom: 30,
                        width: '1%',
                    }, {
                        show: false,
                        right: '6%',
                        top: 40,
                        bottom: 10,
                        containLabel: true,
                        width: '40%',
                    }, ],
                    xAxis: [{
                        splitNumber: 8,
                        nameTextStyle:{
                            fontWeight:'normal'
                        },
                        type: 'value',
                        inverse: true,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(62,172,205,1)'
                            }
                        },
                        axisTick: {
                            show: false

                        },
                        position: 'bottom',
                        axisLabel: {
                            show: true,
                            formatter: '{value}',
                            textStyle: {
                                color: 'rgba(62,172,205,1)',
                                fontWeight:'normal'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 0
                            }
                        }
                    }, {
                        gridIndex: 1,
                        show: false
                    }, {
                        gridIndex: 2,
                        splitNumber: 8,
                        type: 'value',
                        nameTextStyle:{
                            fontWeight:'normal'
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(62,172,205,1)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        position: 'bottom',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(62,172,205,1)',
                                fontWeight:'normal'
                            },
                            formatter: '{value}'
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 0
                            }
                        }
                    }
                    ],
                    yAxis: [
                        //左边的标尺
                        {
                            type: 'category',
                            inverse: true,
                            position: 'left',
                            axisLine: {
                                show:false,
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
                        //中间的标尺
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
                                color:'rgba(62,172,205,1)',
                                fontSize:8,
                                showMinLabel:true,
                                showMaxLabel:true,
                                 interval:0,
                            },

                            data:["1部", "2部", "3部", "4部", "5部", "6部", "7部","8部","9部",'10部',"11部"]
                        },
                        //右边的标尺
                        {
                            gridIndex: 2,
                            type: 'category',
                            inverse: true,
                            offset:50,
                            position: 'left',
                            axisLine: {
                                show: false,
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
                        name: '好友数量',
                        type: 'bar',
                        barGap: 10,
                        barWidth: "40%",
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#37BBF8'},
                                        {offset: 1, color: '#060A23'}

                                    ]
                                )
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }, {
                        name: '群数量',
                        type: 'bar',
                        barGap: 10,
                        barWidth: "40%",
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        
                        itemStyle: {
                            normal: {
                             color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#060A23'},
                                        {offset: 1, color: '#DCCD04'}

                                    ]
                                )

                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }]
                };
          
            let myChart = echarts.init(document.getElementById('right3'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('right3').offsetWidth,
                height:document.getElementById('right3').offsetHidth
                }
            )
              myChart.setOption(option);
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
        },
        drawPie (everyPer) {
           
                let  context = $("#main").get(0).getContext('2d');
                var x = 218 * Math.cos(everyPer);
                var y = 218 * Math.sin(everyPer);
                    context.save();
                    var gradient = context.createRadialGradient(x, y, 7, x, y,14);
                    gradient.addColorStop(0, "rgba(255,255,255,1)");
                    gradient.addColorStop(1, "rgba(52,235,241,1)");
                    context.fillStyle = gradient;
                   // context.fillStyle='#39E9EE';
                    context.shadowBlur=20;
                    context.shadowColor="#39E9EE";
                    context.translate(this.circle.x,this.circle.y);
                    context.beginPath();
                  
                    context.arc(x,y,10,0,2*Math.PI);
                    context.arc(-x,-y,10,0,2*Math.PI);
                    // context.ellipse(x,y,60,15,everyPer+80.1,0,2*Math.PI)
                    // context.ellipse(-x,-y,60,15,everyPer+80.1,0,2*Math.PI)
                    context.closePath();
                    context.fill();
                     
                    context.restore();
                    
                  //外圆
                    context.save();
                    
                    context.fillStyle = '#0A122D';
                    context.shadowBlur=20;
                    context.shadowColor="#112949";
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 220, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                     context.restore();
                    for (let i = 0; i < 6; i++){//绘制文字。
                        context.save()
                        this.drawCircularText(this.circle,this.title, this.rads(i*60-110), this.rads(i*60-70));
                        context.restore();
                    }
                   
                    context.save();
                    context.fillStyle = '#16387A';
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 155, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();

                    context.fillStyle = "#043262";
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 145, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                    //内圆
                    context.fillStyle = "#09102E";
                    context.beginPath();
                    context.arc(this.circle.x,this.circle.y, 80, 0, 2*Math.PI, true);
                    context.closePath();
                    context.fill();
                    context.restore();
                    for (let i = 0; i < 6; i++){//绘制刻度。
                        context.save();
                        context.translate(this.circle.x,this.circle.y);
                        context.rotate((-Math.PI/2+Math.PI/6)+ i * Math.PI/3);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
                        context.beginPath();
                        context.moveTo(145, 0);
                        context.lineTo(230, 0);
                        context.lineWidth =4;
                        context.strokeStyle ='#0A122D';
                        context.stroke();
                        context.closePath();
                        context.restore();
                    }
                    
        },
        drawCircularText(s, string, startAngle, endAngle) {
            let context = $("#main").get(0).getContext('2d');
            var radius = s.radius,
                angleDecrement = (startAngle - endAngle) / (string.length - 1),
                angle = parseFloat(startAngle),
                index = 0,
                character;
            context.save();
            context.fillStyle = '#fff';
            context.font = '14px 微软雅黑 ';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            while(index < string.length) {
                character = string.charAt(index);
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
            context.restore();
        },
        drawText() {
            $(document).ready(function(){
                $("#awesomeCloudcenter2").remove();
				$("#center2").awesomeCloud({
					"size" : {
                        "grid" : 60,
                        "factor":20,
						"normalize" : false
                    },
                    "color" : {
                         "colors":['#2C7BFE','#0AAACE','#FCA601','#A11D26','#174594']
                    },
					"options" : {
                        "color" : "gradient",
						"rotationRatio" : 0,
						"printMultiplier" : 1,
						"sort" : "highest"
					},
					"font" : "'Times New Roman', Times, serif",
					"shape" : "square"
                });
            })
        }
    },
    mounted () {
         $("#main").height($(".circlePie").height())
         $("#main").width($(".circlePie").height())
         this.setOffice();
        this.setDepartOffice ();
        this.setIllegal ();
        this.setServiceNum ();
        this.setDepartService ();
        this.setsetIllegalContrast ();
        this.drawText ();
        this.act();
        let _this = this;
         window.onresize = function () {
                // 通过捕获系统的onresize事件触发我们需要执行的事件
                  $("#main").height($(".circlePie").height())
                $("#main").width($(".circlePie").height())
                _this.setOffice();
                _this.drawText();
                _this.setDepartOffice();
                _this.setIllegal();
                _this.setServiceNum();
                _this.setDepartService();
                _this.setsetIllegalContrast();
            }
    }
}
</script>


