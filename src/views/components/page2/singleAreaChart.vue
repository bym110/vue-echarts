<template>
    <div class="singleAreaChart" :id="id"></div>
</template>

<script>
export default {
    name: '',
    inject: ['rem'],
    props: {
        id: String,
        selectRangeDate: Array
    },
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
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 0.5*this.rem,
                    },
                },
                grid: {
                    top: '12%',
                    bottom: '12%',
                    left: '5%',
                    right: '5%',
                },
                legend: {
                    right: '5%',
                    top: '10%',
                    itemWidth: 0.35*this.rem,
                    itemHeight: 0.35*this.rem,
                    textStyle: {
                        color: '#5CB1C1',
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: '#61B9C8',
                        fontSize: 0.5*this.rem,
                    },
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolSize: [6, 6],
                        symbolOffset: [0, 5],
                        lineStyle: {
                            color: '#122C49'
                        }
                    },
                    axisTick: {
                        color: '#122C49',
                        inside: true
                    },
                    z: 2,
                    data: this.setData('x')
                },
                yAxis:
                    {
                        type: 'value',
                        interval: 50,
                        min: 0,
                        max: 400,
                        splitNumber: 7,
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
                            fontSize: 0.5*this.rem,
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(个)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 0.45*this.rem,
                            align: 'right',
                            padding: [0, 0.3*this.rem, 0, 0]
                        },
                    },

                series: [{
                    name: '朋友圈个数',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: this.setData('s'),
                    lineStyle: {
                        width: 1,
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: 'rgba(178,19,86,1)' // 0% 处的颜色
                        }, {
                            offset: 0.4, color: 'rgba(178,19,86,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(245,145,17,1)' // 100% 处的颜色
                        }]), //背景渐变色
                    },
                    itemStyle: {
                        color: 'rgb(212,37,43)'
                    },
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: 'rgba(164,27,104,1)' // 0% 处的颜色
                        }, {
                            offset: 0.5, color: 'rgba(112,20,82,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(112,20,82,0)' // 100% 处的颜色
                        }]), //背景渐变色
                        origin: 'start'
                    }
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
.singleAreaChart {
    width: 100%;
    height: 100%;
}
</style>