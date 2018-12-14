<template>
    <div class="main">
        <div id='main'></div>
    </div>
</template>

<style lang="less" scoped>
    .main {
        width:100%;
        height:100%;
        #main {
            width: 100%;
            height: 100%;
        }
    }
</style>

<script>

    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            // 雷达图
            setChart () {
                var dataBJ = [
                    [55,9,56,0.46,18,6,1],
                    [25,11,21,0.65,34,9,2],
                    [56,7,63,0.3,14,5,3],
                    [33,7,29,0.33,16,6,4],
                    [42,24,44,0.76,40,16,5],
                    [82,58,90,1.77,68,33,6],
                    [74,49,77,1.46,48,27,7],
                    [78,55,80,1.29,59,29,8],
                    [267,216,280,4.8,108,64,9],
                    [185,127,216,2.52,61,27,10],
                    [39,19,38,0.57,31,15,11],
                    [41,11,40,0.43,21,7,12],
                    [64,38,74,1.04,46,22,13],
                    [108,79,120,1.7,75,41,14],
                    [108,63,116,1.48,44,26,15],
                    [33,6,29,0.34,13,5,16],
                    [94,66,110,1.54,62,31,17],
                    [186,142,192,3.88,93,79,18],
                    [57,31,54,0.96,32,14,19],
                    [22,8,17,0.48,23,10,20],
                    [39,15,36,0.61,29,13,21],
                    [94,69,114,2.08,73,39,22],
                    [99,73,110,2.43,76,48,23],
                    [31,12,30,0.5,32,16,24],
                    [42,27,43,1,53,22,25],
                    [154,117,157,3.05,92,58,26],
                    [234,185,230,4.09,123,69,27],
                    [160,120,186,2.77,91,50,28],
                    [134,96,165,2.76,83,41,29],
                    [52,24,60,1.03,50,21,30],
                    [46,5,49,0.28,10,6,31]
                ];
                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                };
                let option = {
                    tooltip: {
                        trigger: 'item',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    radar: {
                        indicator: [
                            {name: '资金波动明显有涉赌炒股嫌疑', max: 300},
                            {name: '需关注异常境外通信', max: 250},
                            {name: '娱乐时间过长作息不规律', max: 300},
                            {name: '发现陌生手机，存在机外机卡行为', max: 5},
                            {name: '频繁交友需关注个人问题', max: 200},
                            {name: '言论消极需关注心理健康', max: 100}
                        ],
                        splitArea : {
                            show : true,
                            areaStyle : {
                                color: 'rgba(22,26,39,1)', // 图表背景的颜色
                            },
                        },
                        shape: 'circle',
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: 'rgb(96,184,210)',
                                backgroundColor:'rgb(23,49,132)',
                                padding:10,
                                fontSize:16,
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                ].reverse()
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '北京',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: 'rgb(248,62,55)'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        },
                    ]
                };
                let myChart = this.$echarts.init(document.getElementById('main'));
           
                myChart.clear();
                myChart.resize(
                    {
                        width:document.getElementById('main').offsetWidth,
                    height:document.getElementById('main').offsetHidth
                    }
                )
                myChart.setOption(option);
                },
        },
        mounted() {
            this.setChart ();
        },
    }
</script>

