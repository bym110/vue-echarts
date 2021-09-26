<template>
    <div class="chart" :id="id"></div>
</template>

<style lang="less" scoped>
.chart {
    height: 100%;
}
</style>

<script>
export default {
    name: '',
    inject: ['rem'],
    props: {
        id: String,
        data: Object
    },
    data() {
        return {}
    },
    methods: {
        setChart() {
            let seriesData = []
            this.data.data.forEach(item => {
                seriesData.push(
                    {
                        value: item.value,
                        name: item.name,
                        symbol: 'none',
                        symbolSize: 5,
                        itemStyle: {
                            color: item.color
                        },
                        lineStyle: {
                            normal: {
                                color: item.color,
                                width: 1,
                            },
                            emphasis: {
                                width: 2,
                            }
                        }
                    }
                )
            })
            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                title: {
                    text: this.data.title,
                    top: "5%",
                    left: this.data.position[0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 0.6*this.rem,
                    }
                },
                legend: {
                    data: this.data.data.map(item => {
                        return {name: item.name, icon: 'circle'}
                    }),
                    left: "center",
                    top: this.data.position[1],
                    itemWidth: 0.35*this.rem,
                    itemHeight: 0.35*this.rem,
                    textStyle: {
                        color: '#67C3D6',
                        fontSize: 0.5*this.rem
                    }
                },
                radar: {
                    indicator: this.data.indicator,
                    center: this.data.center,
                    radius: "50%",
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#0DECF0',
                            fontSize: 0.4*this.rem,
                        }
                    },
                    nameGap: 3,
                    splitArea: {
                        areaStyle: {
                            color: ['#1166C4',
                                '#0C52A4', '#102F7D',
                                '#13216B'],
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#163794'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#163794'
                        }
                    }
                },
                series: {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: seriesData
                }
            };
            if (this.id == 'bottom_1_2') {
                option.legend.left = '5%';
            }
            let myChart = this.$echarts.init(document.getElementById(this.id));

            myChart.clear();
            myChart.resize(
                {
                    width: document.getElementById(this.id).width,
                    height: document.getElementById(this.id).heidth
                }
            )
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart();
    },
}
</script>

