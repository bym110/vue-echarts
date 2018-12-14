<template>
    <div class="singleAreaChart" :id="id"></div>
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
                        data:[{name:'朋友圈个数',icon:'circle'}],
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
                    yAxis: 
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
                        
                    series: [{
                        name: '朋友圈个数',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        data: [200, 111, 114, 234, 260, 130, 210],
                        lineStyle:{
                            width:1,
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                            offset: 0, color: 'rgba(178,19,86,1)' // 0% 处的颜色
                                        },{
                                            offset: 0.4, color: 'rgba(178,19,86,1)' // 0% 处的颜色
                                        },  {
                                            offset: 1, color: 'rgba(245,145,17,1)' // 100% 处的颜色
                                        }]), //背景渐变色 
                        },
                        itemStyle:{
                            color:'rgb(212,37,43)'
                        },
                        areaStyle:{
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                            offset: 0, color: 'rgba(164,27,104,1)' // 0% 处的颜色
                                        },{
                                            offset: 0.5, color: 'rgba(112,20,82,1)' // 0% 处的颜色
                                        },  {
                                            offset: 1, color: 'rgba(112,20,82,0)' // 100% 处的颜色
                                        }]), //背景渐变色 
                            origin:'start'
                        }
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
                )
            
                myChart.setOption(option);
                }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .singleAreaChart {
        width: 100%;
        height: 100%;
    }
</style>