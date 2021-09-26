<template>
    <div class="barChart" :id="id"></div>
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
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 0.5*this.rem,
                    },
                },
                legend: {
                    left: "11%",
                    top: "15%",
                    itemWidth: 0.35*this.rem,
                    itemHeight: 0.35*this.rem,
                    textStyle: {
                        color: '#5CB1C1',
                    }
                },
                grid: {
                    top: '12%',
                    bottom: '12%',
                    left: "10%",
                    right: '10%',
                    containLabel: false
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
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
                            fontSize: 0.5*this.rem,
                            interval: 0,
                        },
                        data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部", "10部"]
                    }
                ],
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
                        splitLine: {
                            show: false,
                        },
                        name: '(小时)',
                        nameGap: -5,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 0.45*this.rem,
                            align: 'right',
                            padding: [0, 0.2*this.rem, 0, 0]
                        },
                    }
                ],
                series: [
                    {
                        name: '办公时长',
                        type: 'bar',
                        itemStyle: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, color: 'rgba(80,162,246,1)' // 0% 处的颜色
                            }, {
                                offset: 0.4, color: 'rgba(148,144,249,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(223,125,253,1)' // 100% 处的颜色
                            }]), //背景渐变色
                        },
                        barWidth: 0.5*this.rem,
                        barCategoryGap: 0.5*this.rem,
                        data: [213, 190, 137, 99, 63, 196, 248, 212, 248, 112]
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
            ),
                myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.barChart {
    width: 100%;
    height: 100%;
}
</style>