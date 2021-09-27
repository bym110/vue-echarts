<template>
    <div class="area"></div>
</template>

<script>
export default {
    name: "areaChart",
    props: [ 'config', 'selectRangeDate'],
    data() {
        return {}
    },
    methods: {
        setData(type) {
            let arr = [];
            switch (type) {
                case 'x':
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push(this.selectRangeDate[i][1] + "." + this.selectRangeDate[i][2])
                    }
                    break;
                case 's' :
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push((Math.random() * 250).toFixed(0))
                    }
                    break;

                default:
                    break;
            }

            return arr;
        },
        setSeriesData() {
            let arr = [];
            this.config.data.forEach(item=> {
                let obj = {
                    name: item.name,
                    type: 'line',
                    smooth: true,
                    symbol: "none",
                    areaStyle: {
                        opacity: 1,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: item.color[0] // 0% 处的颜色
                            },
                                {
                                    offset: 0.4, color: item.color[0] // 40% 处的颜色
                                }, {
                                    offset: 1, color: item.color[1] // 100% 处的颜色
                                }],
                            global: false // 缺省为 false
                        }
                        // color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0, color: item.color[0] // 0% 处的颜色
                        // },
                        //     {
                        //         offset: 0.4, color: item.color[0] // 0% 处的颜色
                        //     }, {
                        //         offset: 1, color: item.color[1] // 100% 处的颜色
                        //     }]), //背景渐变色
                        // origin: 'start'
                    },
                    lineStyle: {
                        width: 0,
                    },
                    itemStyle: {
                        color: item.color[0]
                    },
                    data: this.setData('s')
                }
                arr.push(obj)
            })
            return arr;
        },
        setChart() {
            let option = {
                title: {
                    show: !!this.config.title,
                    text: this.config.title,
                    textStyle: {
                        color: this.config.color,
                        fontSize: 12,
                        fontWeight: 'normal'
                    },
                    top: '12%',
                    left: '38%'
                },
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

                    formatter: function (params) {
                        let str = params[0].name;
                        params.forEach(item=> {
                            str += `<br> ${item.seriesName}: ${item.value}`
                        })
                        return str
                    }
                },
                legend:
                    {
                        top: this.config.title?'23%': '11%',
                        left: 'center',
                        itemWidth: 7,
                        itemHeight:7,
                        textStyle: {
                            color: this.config.color,
                            fontSize: 12
                        },
                    },
                grid:
                    {
                        top: this.config.title?'40%': '14%',
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                xAxis:
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            interval: 0,
                            color: this.config.color,
                            fontSize: 9,
                            align: 'center'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58',
                                width: 2,
                            }
                        },
                        axisTick: {show: false},
                        data: this.setData('x')
                    },
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 300,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisLabel: {
                            color: this.config.color,
                            fontSize: 9,
                            showMaxLabel: false,
                        },
                        axisTick: {
                            length: 3
                        },
                        name: this.config.name[0],
                        nameGap: -5,
                        nameTextStyle: {
                            color: this.config.color,
                            fontSize: 9,
                            align: 'right'
                        },
                        splitLine: {show: false}

                    },
                    {
                        type: 'value',
                        min: 0,
                        max: 300,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            length: 3
                        },
                        axisLabel: {
                            color: this.config.color,
                            fontSize: 9,
                            showMaxLabel: false,
                        },
                        name: this.config.name[1],
                        nameTextStyle: {
                            color: this.config.color,
                            fontSize: 9,
                            align: 'left'
                        },
                        nameGap: -5,
                        splitLine: {show: false}
                    },
                ],
                series: this.setSeriesData()
            };
            if (this.selectRangeDate.length > 7) {
                option.xAxis.axisLabel.interval = 3;
                option.xAxis.axisLabel.showMaxLabel = false;
                option.xAxis.axisLabel.align = 'left';
            }
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize(
                {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                }
            )
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart();
    }
}
</script>

<style lang="less" scoped>
.area {
    height: 100%;
}
</style>