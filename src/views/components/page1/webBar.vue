<template>
    <div class="webBar"></div>
</template>

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
        setData() {
            var max = Math.max.apply(null, this.data.value);
            var arr = []
            for (let i = 0; i < 6; i++) {
                arr.push(max / 10)
            }
            return arr;
        },
        // 网站
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                    formatter: (params) => {
                        params[1].number = this.data.number
                        return params[1].name + "<br>" + params[1].seriesName + ":" + params[1].number + "/" + params[1].value + "人"
                    }
                },
                grid: {
                    left: '4%',
                    top: '5%',
                    bottom: 10,

                    containLabel: true,
                },
                yAxis:
                    {
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            margin: 13,
                            fontSize: 10,
                            color: '#75deef'
                        },
                        data: this.data.data
                    },
                xAxis:
                    {
                        type: 'value',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        }
                    }
                ,
                series: [
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量',
                        barCategoryGap: 20,
                        barWidth: 8,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)'
                            },
                        },
                        data: this.setData()
                    },
                    {
                        name: this.data.name,
                        type: 'bar',
                        stack: '总量',
                        barCategoryGap: 20,
                        barWidth: 8,
                        itemStyle: {
                            normal: {
                                color: { // 颜色线性渐变
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: 'rgb(' + this.data.color + ',0.1)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgb(' + this.data.color + ',1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                barBorderRadius: 5,
                            },
                        },
                        data: this.data.value
                    },
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
.webBar {
    float: left;
    width: 60%;
    height: 100%;
}
</style>