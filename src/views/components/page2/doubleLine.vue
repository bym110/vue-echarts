<template>
    <div class="doubleLine"></div>
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
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: "11%",
                    top: "10%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#5CB1C1',
                        fontSize: 10
                    }
                },
                grid: {
                    top: '12%',
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: false
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolSize: [6, 6],
                        symbolOffset: [0, 10],
                        lineStyle: {
                            color: '#122C49'
                        }
                    },
                    axisTick: {show: false},
                    axisLabel: {
                        color: '#61B9C8',
                        fontSize: 9
                    },
                    data: ["2017", "4", "7", "10", "2018", "4", "7"]
                },
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
                        interval: 50,
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
                            fontSize: 9
                        },
                        name: '(次)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 6, 0, 0]
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                    {
                        type: 'value',
                        scale: true,
                        max: 400,
                        min: 0,
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
                            fontSize: 9
                        },
                        name: '(个)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'left',
                            padding: [0, 0, 0, 6]
                        },
                        interval: 50,
                        splitLine: {
                            show: false,
                        },
                    }
                ],
                series: [
                    {
                        name: '违规次数',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            color: '#F39800',
                        },
                        itemStyle: {
                            color: '#F39800'
                        },
                        data: [50, 132, 100, 300, 90, 230, 210]
                    },
                    {
                        name: '违规人数',
                        yAxisIndex: 1,
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            color: '#BF232A',

                        },
                        itemStyle: {
                            color: '#BF232A'
                        },
                        data: [330, 310, 132, 100, 300, 90, 230]
                    },
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
.doubleLine {
    height: 100%;
    width: 100%;
}
</style>