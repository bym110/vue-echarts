<template>
    <div class="doubleLine" :id="id"></div>
</template>

<script>
export default {
    name: '',
    inject: ['rem'],
    props: {
        id: String
    },
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
                    itemWidth: 0.35*this.rem,
                    itemHeight: 0.35*this.rem,
                    textStyle: {
                        color: '#5CB1C1',
                        fontSize: 0.5*this.rem,
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
                        fontSize: 0.5*this.rem
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
                            fontSize: 0.5*this.rem
                        },
                        name: '(次)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 0.45*this.rem,
                            align: 'right',
                            padding: [0, 0.3*this.rem, 0, 0]
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
                            fontSize: 0.5*this.rem
                        },
                        name: '(个)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 0.45*this.rem,
                            align: 'left',
                            padding: [0, 0, 0, 0.3*this.rem]
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
            let myChart = this.$echarts.init(document.getElementById(this.id));

            myChart.clear();
            myChart.resize(
                {
                    width: document.getElementById(this.id).offsetWidth,
                    height: document.getElementById(this.id).offsetHidth
                }
            )
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