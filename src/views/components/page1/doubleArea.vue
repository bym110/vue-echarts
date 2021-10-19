<template>
    <div class="doubleArea"></div>
</template>

<script>
export default {
    name: '',
    props: {
        selectRangeDate: Array
    },
    data() {
        return {}
    },
    methods: {
        setData(type) { // 数据模拟
            let arr = [];
            switch (type) {
                case 'x': // 设置横坐标 时间数据
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push(this.selectRangeDate[i][0] + '.' + this.selectRangeDate[i][1] + '.' + this.selectRangeDate[i][2])
                    }
                    break;
                case 's':// 访问次数数据模拟
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push((Math.random() * 6).toFixed(0))
                    }
                    break;
                case 'n': // 访问人数数据
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push((Math.random() * 600).toFixed(0))
                    }
                    break;

                default:
                    break;
            }
            return arr;

        },
        // 上网行为分析
        setChart() {
            let option = {

                legend: { // 图例信息
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#75deef',
                        fontSize: 12,
                    },
                    right: '5%',
                    top: '5%',
                },
                grid: [
                    { // 上区域图
                        top: '20%',
                        bottom: '45%',
                        left: "8%",
                        right: '5%',
                        containLabel: false
                    },
                    { // 下区域图
                        top: '55%',
                        bottom: '10%',
                        left: "8%",
                        right: '5%',
                        containLabel: false

                    },
                ],
                yAxis: [{ // 上区域图 y轴
                    type: 'value',
                    inverse: false,
                    splitNumber: 3,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1a3c58'
                        }
                    },
                    name: "(次)",
                    nameTextStyle: {
                        color: "#75deef",
                        fontSize: 10,
                        padding: [0, 15, -10, 0]
                    },
                    axisTick: {
                        show: true

                    },
                    axisLabel: {
                        showMaxLabel: true,
                        textStyle: {
                            color: '#75deef',
                            fontSize: 9,
                            fontWeight: 'normal'
                        }
                    },
                    splitLine: {
                        show: false,
                    }
                },
                    { // 下区域图 y轴
                        gridIndex: 1,
                        splitNumber: 3,
                        inverse: true,
                        type: 'value',
                        name: "(人)",
                        nameLocation: 'end',
                        nameTextStyle: {
                            color: "#75deef",
                            fontSize: 10,
                            padding: [-10, 25, 0, 0]
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        position: 'bottom',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#75deef',
                                fontSize: 9,
                                fontWeight: 'normal'
                            },
                            showMaxLabel: true,

                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 0
                            }
                        }
                    }
                ],
                xAxis: [
                    { // 上图x轴
                        type: 'category',
                        boundaryGap: false,
                        z: 2,
                        nameGap: 0,
                        axisLine: {
                            show: false,

                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        data: this.setData('x')

                    },
                    { // 下图x轴
                        gridIndex: 1,
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            show: true,
                            symbol: ['none', 'arrow'],
                            symbolSize: [4, 8],
                            symbolOffset: [0, 8],
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        z: 2,
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        data: this.setData('x')
                    },
                    { // 最下刻度轴
                        gridIndex: 1,
                        position: 'bottom',
                        type: 'category',
                        name: "日",
                        nameLocation: 'end',
                        nameTextStyle: {
                            color: "#75deef",
                            fontSize: 9,
                            padding: [25, 0, 0, -25]
                        },
                        boundaryGap: false,
                        axisLine: { // 轴线
                            show: true,
                            symbol: ['none', 'arrow'],
                            symbolSize: [4, 8],
                            symbolOffset: [0, 8],
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        z: 2,
                        axisTick: { // 刻度
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisLabel: { // 标签
                            show: true,
                            interval: 0,
                            showMaxLabel: false,
                            textStyle: {
                                align: "left",
                                color: '#75deef',
                                fontSize: 9,
                                fontWeight: 'normal',
                            },

                        },
                        data: this.setData('x')

                    }
                ],
                tooltip: { // hover 提示框
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                    formatter: (data) => {
                        if (data[0].componentIndex == 0) { // hover 到上图的时候
                            return data[0].name + '<br>' + data[0].seriesName + ":" + data[0].value + "次" + '<br>' + data[1].seriesName + ":" + data[1].value + "次"
                        } else {
                            return data[0].name + '<br>' + data[0].seriesName + ":" + data[0].value + "人" + '<br>' + data[1].seriesName + ":" + data[1].value + "人"
                        }
                    }
                },
                series: [ // 面积图
                    {
                        name: '数据1',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        lineStyle: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(250, 206, 21, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(253, 116, 48, 1)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: .18,
                                color: 'rgba(243, 121, 46, 1)'
                            },
                        },

                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0, color: 'rgba(250, 206, 21, 1)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1, color: 'rgba(253, 116, 48, 1)' // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                        },
                        data: this.setData('s')
                    },
                    {
                        name: '数据2',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        lineStyle: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(51, 231, 252, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(11, 120, 227, 1)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: .5,
                                color: 'rgba(19, 34, 96, 1)'
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0, color: 'rgba(51, 231, 252, 1)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1, color: 'rgba(11, 120, 227, 1)' // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                        },
                        data: this.setData('s')
                    },
                    {
                        name: '数据1',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        lineStyle: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(250, 206, 21, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(253, 116, 48, 1)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: .18,
                                color: 'rgba(243, 121, 46, 1)'
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0, color: 'rgba(250, 206, 21, 1)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1, color: 'rgba(253, 116, 48, 1)' // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                        },
                        data: this.setData('n')
                    },

                    {
                        name: '数据2',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        lineStyle: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: 'rgba(51, 231, 252, 1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(11, 120, 227, 1)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: .5,
                                color: 'rgba(19, 34, 96, 1)'
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0, color: 'rgba(51, 231, 252, 1)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1, color: 'rgba(11, 120, 227, 1)' // 100% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                        },
                        data: this.setData('n')
                    },

                ]
            };
            if (this.selectRangeDate.length > 7) { // 当x轴数据超过7个的时候 x轴刻度显示
                option.xAxis[2].axisLabel.interval = 3; // x轴刻度隔3个显示
                option.xAxis[2].axisLabel.showMaxLabel = false;

            }
            let myChart = this.$echarts(this.$el);
            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        },
    },
    watch: {
        selectRangeDate: function () { // 检测selectRangeDate 数据变化
            this.setChart()
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.doubleArea {
    width: 100%;
    height: 100%;
}
</style>
