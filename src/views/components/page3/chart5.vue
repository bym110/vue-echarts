<template>
    <div class="webcastsRisk"></div>
</template>

<script>
export default {
    name: 'webcastsRisk',
    data() {
        return {
            myChart: null
        }
    },
    methods: {
        // 网播风险分析
        setWebcasts() {
            let option = {

                title: {
                    text: '重点用户关注排行',
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    top: '4%',
                    left: '4%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: [
                        {name: '分类1', icon: 'circle'},
                        {name: '分类2', icon: 'circle'},
                        {name: '分类3', icon: 'circle'},
                        {name: '其他', icon: 'circle'},
                    ],
                    gridIndex: 3,
                    right: "5%",
                    top: "6%",
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
                        backgroundColor: '#4A7AFF',
                        borderRadius: 3,
                        margin: 0,
                        padding: [1, 3, 1, 3]
                    },
                    inverse: true,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                series: [
                    {
                        name: '分类1',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#142AFE',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,

                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '分类2',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#1456FE',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '分类3',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 8,
                        itemStyle: {
                            color: '#1493FE',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        barWidth: 8,
                        stack: '总量',
                        itemStyle: {
                            color: '#00CCFF',
                            borderRadius: [0, 8, 8, 0]
                        },
                        label: {
                            show: false,
                            position: 'insideRight'
                        },
                        data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 15]
                    },
                    {
                        type: 'pie',
                        radius: ['20%', '21%'],
                        center: ['72%', '60%'],
                        data: [{value: '1'}],
                        label: {show: false},
                        itemStyle: {
                            color: '#7D7DA2'
                        }
                    },
                    {
                        type: 'pie',
                        radius: ['40%', '65%'],
                        roseType: 'area',
                        center: ['72%', '60%'],
                        avoidLabelOverlap: true,
                        startAngle: 180,
                        label: {
                            show: true,
                            padding: [0, -30],
                            formatter: '{c} \n\n',
                            position: 'outside',
                            color: '#fff',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: true,
                            length2: 30,
                            lineStyle: {
                                //color:["#408BE8",'#FE405C',"#3E3E7F","#FFC740"]
                            },

                        },
                        itemStyle: {
                            color: function (params) {
                                let corList = ["#142AFE", '#3FA0FF', "#00CCFF", "#1456FE"];
                                return corList[params.dataIndex]
                            }
                        },
                        data: [
                            {value: 535, name: '分类1'},
                            {value: 310, name: '分类2'},
                            {value: 135, name: '分类3'},
                            {value: 254, name: '其他'},
                        ]
                    }
                ]
            };
            if (!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize();
            this.myChart.setOption(option);
        },
    },
    mounted() {
        this.setWebcasts()
    },
}
</script>

<style lang="less" scoped>
.webcastsRisk {
    height: 100%;
}
</style>
