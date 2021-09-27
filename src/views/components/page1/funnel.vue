<template>
    <div class="funnel"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        // 手机安全分析
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c}",
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },

                legend: {
                    top: '25%',
                    right: "7%",
                    orient: "vertical",
                    itemWidth: 0,
                    itemGap: 27,
                    textStyle: {
                        color: '#75deef',
                        fontSize: 14
                    },
                    data: ['陌生手机', '破解攻击', '离线断网', '异常操作', '策略违规']
                },
                series: [
                    {
                        name: '预期',
                        type: 'funnel',
                        left: '6%',
                        width: '60%',
                        height: '75%',
                        label: {

                            normal: {
                                show: false,
                                formatter: '{b}预期',
                                position: 'right'
                            },
                            emphasis: {
                                show: false,
                                position: 'inside',
                                formatter: '{b}预期: {c}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                opacity: .7,
                                color: function (params) {

                                    var colorList = [
                                        '#2c7afc', '#bd2229', '#a262f2', '#fe672c', '#27fcfe'
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            },

                        },
                        data: [
                            {value: 100, name: '陌生手机'},
                            {value: 80, name: '破解攻击'},
                            {value: 60, name: '离线断网'},
                            {value: 40, name: '异常操作'},
                            {value: 20, name: '策略违规'}
                        ]
                    },
                    {
                        name: '实际',
                        type: 'funnel',
                        left: '6%',
                        height: '75%',
                        width: '60%',
                        maxSize: '60%',
                        z: 3,
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '{c}个',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                position: 'inside',
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: .5,
                                borderWidth: 0,
                                color: function (params) {
                                    var colorList = [
                                        'rgb(44,123,254)', 'rgb(194,35,42)', 'rgb(162,98,242)', 'rgb(254,103,44)', 'rgb(44,252,254)'
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            },
                        },
                        data: [
                            {value: 80, name: '陌生手机'},
                            {value: 50, name: '破解攻击'},
                            {value: 40, name: '离线断网'},
                            {value: 20, name: '异常操作'},
                            {value: 5, name: '策略违规'}
                        ]
                    }
                ]
            };

            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.funnel {
    width: 100%;
    height: 100%;
}
</style>