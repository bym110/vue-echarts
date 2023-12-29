<template>
    <div class="pieChart"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            myChart: null
        }
    },
    methods: {
        setChart() {
            let option = {
                title: [
                    {
                        text: "【金额】",
                        left: '12%',
                        bottom: '6%',
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    },
                    {
                        text: "【人数】",
                        left: '46%',
                        bottom: '6%',
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    },
                    {
                        text: "【次数】",
                        right: '12%',
                        bottom: '6%',
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    data: [
                        {name: '分类1', icon: 'circle'},
                        {name: '分类2', icon: 'circle'},
                        {name: '分类3', icon: 'circle'},
                        {name: '分类4', icon: 'circle'},
                        {name: '分类5', icon: 'circle'},
                    ],
                    left: "8%",
                    top: "10%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 10
                    }
                },
                series: [
                    {
                        name: '【金额】',
                        type: 'pie',
                        radius: '40%',
                        center: ['17%', '60%'],
                        data: [
                            {value: 335, name: '分类1'},
                            {value: 310, name: '分类2'},
                            {value: 234, name: '分类3'},
                            {value: 135, name: '分类5'},
                            {value: 1548, name: '分类5'}
                        ],
                        label: {
                            fontSize: 8,
                            color: '#00CCFF'
                        },
                        labelLine: {
                            length: 15,
                            length2: 10,
                            lineStyle: {
                                color: '#3F3F5C'
                            }
                        },
                        itemStyle: {
                            color: function (params) {
                                var colorList = ['#F74F64', '#00CCFF', '#315371', '#142AFE', '#9814FE'];
                                return colorList[params.dataIndex];
                            },
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '【人数】',
                        type: 'pie',
                        radius: '40%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 545, name: '分类1'},
                            {value: 210, name: '分类2'},
                            {value: 2534, name: '分类3'},
                            {value: 1335, name: '分类4'},
                            {value: 1548, name: '分类5'}
                        ],
                        label: {
                            fontSize: 8,
                            color: '#00CCFF'
                        },
                        labelLine: {
                            length: 15,
                            length2: 10,
                            lineStyle: {
                                color: '#3F3F5C'
                            }
                        },
                        itemStyle: {
                            color: function (params) {
                                var colorList = ['#F74F64', '#00CCFF', '#315371', '#142AFE', '#9814FE'];
                                return colorList[params.dataIndex];
                            },

                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    {
                        name: '【次数】',
                        type: 'pie',
                        radius: '40%',
                        center: ['82%', '60%'],
                        data: [
                            {value: 435, name: '分类1'},
                            {value: 310, name: '分类2'},
                            {value: 334, name: '分类3'},
                            {value: 1135, name: '分类4'},
                            {value: 1548, name: '分类5'}
                        ],
                        label: {
                            fontSize: 8,
                            color: '#00CCFF'
                        },
                        labelLine: {
                            length: 15,
                            length2: 10,
                            lineStyle: {
                                color: '#3F3F5C'
                            }
                        },
                        emphasis: {
                           itemStyle: {
                               shadowBlur: 10,
                               shadowOffsetX: 0,
                               shadowColor: 'rgba(0, 0, 0, 0.5)'
                           }
                        },
                        itemStyle: {
                            color: function (params) {
                                var colorList = ['#F74F64', '#00CCFF', '#315371', '#142AFE', '#9814FE'];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                ]
            };
            if (!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize()
            this.myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.pieChart {
    height: 100%;
    width: 100%;
    padding: 0 20px;
}
</style>
