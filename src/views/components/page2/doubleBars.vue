<template>
    <div class="doubleBars" :id="id"></div>
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
                    data:[{name:'违规次数',icon:'circle'},{name:'违规人数',icon:'circle'}],
                    left:"8%",
                    top:"10%",
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                       fontSize:10
                    }
                },
                    grid: [{
                        show: false,
                        left: '6%',
                        top: 50,
                        bottom: 10,
                        containLabel: true,
                        width: '40%',
                    }, {
                        show: false,
                        left: '53%',
                        top: 50,
                        bottom: 10,
                        width: '1%',
                    }, {
                        show: false,
                        right: '6%',
                        top: 50,
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
                            show: false,
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
                            show: false,
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
                        name: '违规次数',
                        type: 'bar',
                        barGap: 10,
                        barWidth: "40%",
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: 'rgba(1,176,223,1)'},
                                        {offset: 1, color: 'rgba(1,176,223,0)'}

                                    ]
                                ),
                                barBorderRadius:5,
                            },
                            
                            emphasis: {
                                show: false
                            }
                        },
                        data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }, {
                        name: '违规人数',
                        type: 'bar',
                        barGap: 10,
                        barWidth: "40%",
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        
                        itemStyle: {
                            normal: {
                             color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: 'rgba(126,19,212,0)'},
                                        {offset: 1, color: 'rgba(126,19,212,1)'}

                                    ]
                                ),
                                barBorderRadius:5,

                            },
                            emphasis: {
                                show: false
                            }
                        },
                            data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }]
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
    .doubleBars {
        width: 100%;
        height: 100%;
    }
</style>