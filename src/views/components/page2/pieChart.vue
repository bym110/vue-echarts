<template>
    <div class="pieChart"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
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
                        {name: '一部', icon: 'circle'},
                        {name: '二部', icon: 'circle'},
                        {name: '三部', icon: 'circle'},
                        {name: '四部', icon: 'circle'},
                        {name: '五部', icon: 'circle'},
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
                            {value: 335, name: '一部'},
                            {value: 310, name: '二部'},
                            {value: 234, name: '三部'},
                            {value: 135, name: '四部'},
                            {value: 1548, name: '五部'}
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
                            emphasis: {
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
                            {value: 545, name: '一部'},
                            {value: 210, name: '二部'},
                            {value: 2534, name: '三部'},
                            {value: 1335, name: '四部'},
                            {value: 1548, name: '五部'}
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
                            emphasis: {
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
                            {value: 435, name: '一部'},
                            {value: 310, name: '二部'},
                            {value: 334, name: '三部'},
                            {value: 1135, name: '四部'},
                            {value: 1548, name: '五部'}
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
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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