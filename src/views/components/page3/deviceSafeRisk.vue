<template>
    <div class='deviceSafeRisk'></div>
</template>

<script>
export default {
    name: 'deviceSafeRisk',
    data() {
        return {}
    },
    methods: {
        // 设备安全性风险
        setDeviceSafe() {
            let option = {
                title: [
                    {
                        text: '重点用户关注排行',
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        },
                        top: '4%',
                        left: '4%'
                    },
                    {
                        text: "异常微信网购类型排名",
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        },
                        top: '4%',
                        left: '55%'
                    },
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: [
                        {name: '人数', icon: 'circle'},
                        {name: '金额', icon: 'circle'},

                    ],
                    gridIndex: 3,
                    orient: 'vertical',
                    right: "44%",
                    bottom: "6%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 10
                    }
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '50%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false}
                },
                yAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        color: '#fff',
                        backgroundColor: '#A34FFA',
                        borderRadius: 3,
                        margin: 0,
                        padding: [1, 3, 1, 3]
                    },
                    inverse: true,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                angleAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    startAngle: 135,
                    axisLabel: {
                        color: '#04E8EB',
                        fontSize: 10
                    },
                    axisTick: {show: false},
                    data: ['游戏充值', '其他', '直播打赏', '彩票'],
                    z: 10
                },
                radiusAxis: {
                    splitLine: {
                        lineStyle: {
                            color: '#172E6E'
                        }
                    },
                    axisTick: {show: false},
                    axisLabel: {show: false},
                    axisLine: {
                        show: false
                    }
                },
                polar: {
                    center: ['72%', '55%'],
                    radius: "65%",
                },
                series: [
                    {
                        name: '抖音',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#5304EC',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,

                                position: 'insideRight'
                            }
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '快手',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#6829EE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '花椒',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#8040ED',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 8,
                        stack: '总量',
                        itemStyle: {
                            color: '#9D50EC',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 8,
                        stack: '总量',
                        itemStyle: {
                            color: '#A77BDE',
                            barBorderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        type: 'bar',
                        data: [1, 2, 3, 4],
                        coordinateSystem: 'polar',
                        name: '金额',
                        itemStyle: {
                            color: '#0AB9FE'
                        },
                        stack: 'a'
                    }, {
                        type: 'bar',
                        data: [2, 4, 6, 1],
                        coordinateSystem: 'polar',
                        name: '人数',
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(104,18,147,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#1D2584' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        stack: 'a'
                    }

                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setDeviceSafe();
    },
}
</script>

<style lang="less" scoped>
.deviceSafeRisk {
    height: 100%;
}
</style>
