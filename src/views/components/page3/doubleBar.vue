<template>
    <div class="chart"></div>
</template>

<style lang="less" scoped>
.chart {
    height: 100%;
}
</style>

<script>
export default {
    name: '',
    props: {
        data: Object
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
                },
                title:

                    {
                        text: this.data.title,
                        top: "5%",
                        left: '5%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        }
                    },
                legend:
                    {
                        data: [
                            {name: this.data.data[0].name, icon: 'circle'},
                            {name: this.data.data[1].name, icon: 'circle'},
                        ],
                        left: "center",
                        top: "17%",
                        orient: 'horizontal',
                        itemWidth: 7,
                        itemHeight: 7,
                        itemGap: 10,
                        textStyle: {
                            color: '#67C3D6',
                            fontSize: 10
                        }
                    },
                grid:
                    {
                        left: "5%",
                        top: '35%',
                        right: '5%',
                        bottom: '15%'
                    },
                xAxis:
                    {
                        axisLine: {
                            lineStyle: {
                                color: '#2B427F'
                            }
                        },
                        axisLabel: {
                            color: '#0DF5F8',
                            fontSize: 8,
                            interval: 0,
                        },
                        axisTick: {
                            inside: true,
                            alignWithLabel: true,
                            interval: 0,
                            color: '#2B427F'
                        },
                        data: ['TOP1', 'TOP2', 'TOP3', 'TOP4', 'TOP5', 'TOP6']
                    },


                yAxis:
                    {
                        type: 'value',
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {
                            lineStyle: {
                                color: '#2B427F'
                            }

                        }

                    },
                series: [
                    {
                        type: 'bar',
                        name: this.data.data[0].name,
                        barWidth: 4,
                        barGap: 0,
                        itemStyle: {
                            barBorderRadius: 2,
                            color: this.data.data[0].color
                        },
                        data: this.data.data[0].value
                    },
                    {
                        type: 'bar',
                        name: this.data.data[1].name,
                        barWidth: 4,
                        barGap: 0,
                        itemStyle: {
                            barBorderRadius: 2,
                            color: this.data.data[1].color
                        },
                        data: this.data.data[1].value
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
        this.setChart();
    },
}
</script>

