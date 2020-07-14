<template>
    <div class="barChart" :id="id"></div>
</template>

<script>
    export default {
        name: '',
        props:{
            id:String
        },
        data() {
            return {
                
            }
        },
        methods: {
            setChart () {
                let option = {
                    legend: {
                        data:[
                        {
                            name:'办公时长',
                            icon:'rect'
                        },
                            ],
                        left:"11%",
                        top:"15%",
                        itemWidth:7,
                        itemHeight:7,
                        textStyle:{
                        color:'rgb(92,177,193)',
                        }
                    },
                    grid:{
                        top:40,
                        bottom:30,
                        left:"10%",
                        right:'10%',
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
                                fontSize:10,
                                interval:0,
                            },
                            data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部","10部"]
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
                            name:'办公时长',
                            type:'bar',
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                    offset: 0, color: 'rgba(80,162,246,1)' // 0% 处的颜色
                                },{
                                    offset: 0.4, color: 'rgba(148,144,249,1)' // 0% 处的颜色
                                },  {
                                    offset: 1, color: 'rgba(223,125,253,1)' // 100% 处的颜色
                                }]), //背景渐变色  
                            },
                            barWidth:10,
                            barCategoryGap:10,
                            data:[213, 190, 137, 99, 63, 196, 248, 212,248, 112]
                        },
                    ]
                };
                let myChart = this.$echarts.init(document.getElementById(this.id));
            
                myChart.clear();
                myChart.resize(
                    {
                        width:document.getElementById(this.id).offsetWidth,
                    height:document.getElementById(this.id).offsetHidth
                    }
                ),
                myChart.setOption(option);
                }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .barChart {
        width: 100%;
        height: 100%;
    }
</style>