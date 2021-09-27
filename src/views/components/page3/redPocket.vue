<template>
    <div class="redPocket"></div>
</template>

<script>
export default {
    name: 'redPocket',
    data() {
        return {}
    },
    methods: {
        // 红包装账
        setPocket() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                title: {
                    text: "红包转账分析",
                    top: "6%",
                    left: '2%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                grid: {
                    top: "23%",
                    bottom: '10%'
                },
                xAxis: {
                    scale: true,
                    name: '次数',
                    nameTextStyle: {
                        color: "#0FB9CD",
                        fontSize: 10
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#0FB9CD',
                        fontSize: 8
                    },
                    axisTick: {
                        color: '#14336D'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#14336D'
                        }

                    }

                },
                yAxis: {
                    scale: true,
                    name: '金额',
                    nameTextStyle: {
                        color: "#0FB9CD",
                        fontSize: 10,
                        padding: [0, 65, -10, 0]
                    },
                    axisTick: {show: false},
                    axisLabel: {
                        color: '#0FB9CD',
                        fontSize: 8
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#134076'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#14336D'
                        }
                    }
                },
                series: [{
                    type: 'effectScatter',
                    symbolSize: 10,
                    z: 10,
                    itemStyle: {
                        color: '#FF1200'
                    },
                    data: [
                        [172.7, 105.2],
                        [153.4, 42]
                    ]
                }, {
                    type: 'scatter',
                    itemStyle: {
                        color: '#0E4CFF'
                    },
                    data: [
                        [162.8, 58.0], [167.0, 59.8], [60.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                        [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [67.1, 62.2], [158.0, 55.5],
                        [122.6, 57.8], [26.0, 54.6], [162.1, 59.2], [133.4, 52.7], [59.8, 53.2],
                        [70.5, 64.5], [159.2, 51.8], [57.5, 56.0], [61.3, 63.6], [132.6, 63.2],
                        [60.0, 59.5], [168.9, 56.8], [65.1, 64.1], [132.6, 50.0], [165.1, 72.3],
                        [66.4, 55.0], [60.0, 55.9], [52.4, 60.4], [140.2, 69.1], [12.6, 84.5],
                        [70.2, 55.9], [158.8, 55.5], [112.7, 69.5], [67.6, 76.4], [162.6, 61.4],
                        [87.6, 65.9], [56.2, 58.6], [175.2, 66.8], [72.1, 56.6], [162.6, 58.6],
                        [90.0, 55.9], [165.1, 59.1], [102.9, 81.8], [66.4, 70.7], [125.1, 56.8],
                        [102.7, 75.9] [101.3, 57.3], [167.6, 55.0], [65.1, 65.5],
                        [157.5, 48.6], [63.8, 58.6], [67.6, 63.6], [65.1, 55.2],

                    ],
                },
                    {
                        type: 'scatter',
                        itemStyle: {
                            color: '#2E62F9'
                        },
                        data: [[161.2, 2.6], [127.5, 59.0], [159.5, 49.2], [17.0, 63.0], [155.8, 53.6],
                            [170.0, 59.0], [19.1, 47.6], [166.0, 69.8], [116.2, 66.8], [160.2, 75.2],
                            [172.5, 55.2], [110.9, 54.2], [12.9, 62.5], [153.4, 42.0], [110.0, 50.0],
                            [10.2, 49.8], [88.2, 49.2], [175.0, 73.2], [157.0, 47.8], [67.6, 68.8],
                            [159.5, 50.6], [175.0, 82.5], [86.8, 57.2], [96.5, 87.8], [90.2, 72.8],
                            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [110.5, 67.8], [60.0, 47.0],
                            [154.4, 46.2], [82.0, 55.0], [86.5, 83.0], [10.0, 54.4], [52.0, 45.8],
                            [162.1, 53.6], [170.0, 73.2], [60.2, 52.1], [121.3, 67.9], [116.4, 56.6],

                        ],
                    }]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize();
            myChart.setOption(option);
        },
    }, mounted() {
        this.setPocket();
    },
}
</script>

<style lang="less" scoped>
.redPocket {
    height: 100%
}
</style>