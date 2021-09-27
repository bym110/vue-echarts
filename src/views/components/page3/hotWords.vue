<template>
    <div class="hotWords"></div>
</template>

<script>
export default {
    name: 'hotWords',
    data() {
        return {}
    },
    methods: {
        // 舆论、心里风险分析
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                legend: {
                    data: [
                        {name: '热词排行', icon: 'circle'},
                        {name: '用户传播排行', icon: 'circle'},

                    ],
                    gridIndex: 3,
                    left: "28.5%",
                    top: "4%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 10
                    }
                },
                grid: [
                    {
                        left: "10%",
                        top: '12%',
                        bottom: "64%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '12%',
                        bottom: "64%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '12%',
                        bottom: "64%",
                        width: '35%'
                    },
                    {
                        left: "10%",
                        top: '41.5%',
                        bottom: "35%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '41.5%',
                        bottom: "35%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '41.5%',
                        bottom: "35%",
                        width: '35%'
                    },
                    {
                        left: "10%",
                        top: '70%',
                        bottom: "5%",
                        width: '35%'
                    },
                    {
                        left: "48%",
                        top: '70%',
                        bottom: "5%",
                        width: 1
                    },
                    {
                        right: "15%",
                        top: '70%',
                        bottom: "5%",
                        width: '35%'
                    },
                ],
                xAxis: [
                    {
                        type: "value",
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 1,
                    },
                    {
                        type: "value",
                        gridIndex: 2,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 3,
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 4,
                    },
                    {
                        type: "value",
                        gridIndex: 5,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 6,
                        inverse: true,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                    {
                        type: "value",
                        gridIndex: 7,
                    },
                    {
                        type: "value",
                        gridIndex: 8,
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                    },
                ],
                yAxis: [
                    {
                        data: [1, 2, 3, 4, 5],
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 1,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 2,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 3,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 4,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 4,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 5,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 6,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 7,
                        offset: -1,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2],
                        gridIndex: 7,
                        axisLine: {
                            lineStyle: {
                                color: '#153575'
                            }
                        },
                        axisTick: {
                            color: '#153575'
                        },
                        boundaryGap: false,
                        showMinLabel: true,
                        showMaxLabel: true,
                        axisLabel: {show: false}
                    },
                    {
                        data: [1, 2, 3, 4, 5],
                        gridIndex: 8,
                        inverse: true,
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false}
                    },
                ],
                series: [
                    {
                        name: '热词排行',
                        type: 'bar',
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '要死'
                            },
                            {
                                value: 424,
                                name: '不活了'
                            },
                            {
                                value: 332,
                                name: '杀人'
                            },
                            {
                                value: 264,
                                name: '愤怒'
                            },
                            {
                                value: 144,
                                name: '自杀'
                            },
                        ]
                    },
                    {
                        name: '用户传播排行',
                        type: 'bar',
                        xAxisIndex: 2,
                        yAxisIndex: 3,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '张学友'
                            },
                            {
                                value: 424,
                                name: '刘德华'
                            },
                            {
                                value: 332,
                                name: '郭富城'
                            },
                            {
                                value: 264,
                                name: '黎明'
                            },
                            {
                                value: 144,
                                name: '周华健'
                            },
                        ]
                    },
                    {
                        name: '热词排行',
                        type: 'bar',
                        barWidth: 6,
                        xAxisIndex: 3,
                        yAxisIndex: 4,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '要死'
                            },
                            {
                                value: 424,
                                name: '不活了'
                            },
                            {
                                value: 332,
                                name: '杀人'
                            },
                            {
                                value: 264,
                                name: '愤怒'
                            },
                            {
                                value: 144,
                                name: '自杀'
                            },
                        ]
                    },
                    {
                        name: '用户传播排行',
                        type: 'bar',
                        xAxisIndex: 5,
                        yAxisIndex: 7,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '张学友'
                            },
                            {
                                value: 424,
                                name: '刘德华'
                            },
                            {
                                value: 332,
                                name: '郭富城'
                            },
                            {
                                value: 264,
                                name: '黎明'
                            },
                            {
                                value: 144,
                                name: '周华健'
                            },
                        ]
                    },
                    {
                        name: '热词排行',
                        type: 'bar',
                        barWidth: 6,
                        xAxisIndex: 6,
                        yAxisIndex: 8,
                        label: {
                            show: true,
                            position: 'left',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(4,85,229,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(4,85,229,0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '要死'
                            },
                            {
                                value: 424,
                                name: '不活了'
                            },
                            {
                                value: 332,
                                name: '杀人'
                            },
                            {
                                value: 264,
                                name: '愤怒'
                            },
                            {
                                value: 144,
                                name: '自杀'
                            },
                        ]
                    },
                    {
                        name: '用户传播排行',
                        type: 'bar',
                        xAxisIndex: 8,
                        yAxisIndex: 11,
                        barWidth: 6,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: "{b}",
                            color: '#6EDDF2'
                        },
                        itemStyle: {
                            color: { // 颜色线性渐变
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(1,176,223,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(1,176,223,1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 5,
                        },
                        data: [
                            {
                                value: 500,
                                name: '张学友'
                            },
                            {
                                value: 424,
                                name: '刘德华'
                            },
                            {
                                value: 332,
                                name: '郭富城'
                            },
                            {
                                value: 264,
                                name: '黎明'
                            },
                            {
                                value: 144,
                                name: '周华健'
                            },
                        ]
                    }
                ]

            };
            let myChart = this.$echarts(this.$el);
            myChart.clear();
            myChart.resize();
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.hotWords {
    height: 100%;
    width: 70%;
    float: right;
}
</style>
