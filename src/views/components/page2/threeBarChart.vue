<template>
    <div class="threeBarChart"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        setChart() {
            let option = {
                grid: {
                    top: "20%",
                    bottom: "15%",
                    left: 40,
                    right: 40,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: "8%",
                    top: "10%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#5CB1C1',
                        fontSize: 10
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisLabel: {
                            color: '#61B9C8',
                            showMaxLabel: false,
                            fontSize: 10
                        },
                        data: ['2017', '4', '7', '10', '2018', '4', '7', '0']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        interval: 50,
                        min: 0,
                        max: 400,
                        splitNumber: 7,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisLabel: {
                            color: '#61B9C8',
                            showMaxLabel: false,
                            fontSize: 10
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(元)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 6, 0, 0]
                        }
                    },
                    {
                        type: 'value',
                        interval: 50,
                        position: "right",
                        offset: -35,
                        min: 0,
                        max: 400,
                        splitNumber: 7,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisLabel: {
                            color: '#61B9C8',
                            showMaxLabel: false,
                            fontSize: 10
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(人)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'left',
                            padding: [0, 0, 0, 6]
                        }
                    },
                    {
                        type: 'value',
                        position: "right",
                        interval: 50,
                        min: 0,
                        max: 400,
                        splitNumber: 7,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisLabel: {
                            color: '#61B9C8',
                            showMaxLabel: false,
                            fontSize: 10
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(次)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'left',
                            padding: [0, 0, 0, 6]
                        }
                    }
                ],
                series: [
                    {
                        name: '金额',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 6,
                        data: [200, 49, 70, 232, 256, 76.7, 135.6],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(252,145,134,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(241,88,135,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    },
                    {
                        name: '人数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 6,
                        data: [26, 59, 90, 264, 287, 70.7, 175.6],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(144,20,238,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(74,8,211,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    },
                    {
                        name: '次数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 6,
                        data: [264, 287, 150, 175.6, 182.2, 48.7, 18.8],
                        itemStyle: {
                            barBorderRadius: [3, 3, 0, 0],
                            color:  {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(0,204,255,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(8,59,126,1)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            } //背景渐变色
                        }
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.threeBarChart {
    height: 100%;
    width: 100%;
}
</style>