<template>
    <div class="funnel"></div>
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
                    data: ['数据1', '数据2', '数据3', '数据4', '数据5']
                },
                series: [
                    {
                        name: '预期',
                        type: 'funnel',
                        left: '6%',
                        width: '60%',
                        height: '75%',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 0,
                            opacity: .7,
                            color: function (params) {

                                var colorList = [
                                    '#2c7afc', '#bd2229', '#a262f2', '#fe672c', '#27fcfe'
                                ];
                                return colorList[params.dataIndex];
                            }
                        },
                        data: [
                            {value: 100, name: '数据1'},
                            {value: 80, name: '数据2'},
                            {value: 60, name: '数据3'},
                            {value: 40, name: '数据4'},
                            {value: 20, name: '数据5'}
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
                            position: 'inside',
                            formatter: '{c}个',
                            color: '#fff'
                        },
                        emphasis: {
                            label: {
                                position: 'inside',
                            }
                        },
                        itemStyle: {
                            opacity: .5,
                            borderWidth: 0,
                            color: function (params) {
                                var colorList = [
                                    'rgb(44,123,254)', 'rgb(194,35,42)', 'rgb(162,98,242)', 'rgb(254,103,44)', 'rgb(44,252,254)'
                                ];
                                return colorList[params.dataIndex];
                            }
                        },
                        data: [
                          {value: 100, name: '数据1'},
                          {value: 80, name: '数据2'},
                          {value: 60, name: '数据3'},
                          {value: 40, name: '数据4'},
                          {value: 20, name: '数据5'}
                        ]
                    }
                ]
            };

            if(!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize()
            this.myChart.setOption(option);
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
