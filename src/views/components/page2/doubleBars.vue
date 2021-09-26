<template>
    <div class="doubleBars" :id="id"></div>
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
                legend: {
                    left: "8%",
                    top: "10%",
                    itemWidth: 0.35*this.rem,
                    itemHeight: 0.35*this.rem,
                    textStyle: {
                        color: '#5CB1C1',
                        fontSize: 0.5*this.rem
                    }
                },
                grid: [{
                    show: false,
                    left: '6%',
                    top: '17%',
                    bottom: '3%',
                    containLabel: true,
                    width: '40%',
                }, {
                    show: false,
                    left: '53%',
                    top: '17%',
                    bottom: '3%',
                    width: '1%',
                }, {
                    show: false,
                    right: '6%',
                    top: '17%',
                    bottom: '3%',
                    containLabel: true,
                    width: '40%',
                },],
                xAxis: [{
                    splitNumber: 8,
                    type: 'value',
                    inverse: true,
                    axisLine: {show: false},
                    axisTick: {show: false},
                    position: 'bottom',
                    axisLabel: {show: false},
                    splitLine: {show: false}
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    splitNumber: 8,
                    type: 'value',
                    axisLine: {show: false},
                    axisTick: {show: false},
                    position: 'bottom',
                    axisLabel: {show: false},
                    splitLine: {show: false}
                }
                ],
                yAxis: [
                    //左边的标尺
                    {
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                    },
                    //中间的标尺
                    {
                        gridIndex: 1,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {
                            show: true,
                            color: '#61B9C8',
                            fontSize: 0.4*this.rem,
                            showMinLabel: true,
                            showMaxLabel: true,
                            interval: 0
                        },
                        data: ["1部", "2部", "3部", "4部", "5部", "6部", "7部", "8部", "9部", '10部', "11部"]
                    },
                    //右边的标尺
                    {
                        gridIndex: 2,
                        type: 'category',
                        inverse: true,
                        offset: 50,
                        position: 'left',
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false}
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
                            barBorderRadius: 5,
                        },

                        emphasis: {
                            show: false
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420, 374, 390, 450, 420]
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
                            barBorderRadius: 5,

                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420, 374, 390, 450, 420]
                }]
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
.doubleBars {
    width: 100%;
    height: 100%;
}
</style>