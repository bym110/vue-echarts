<template>
    <div style="height:100%;"></div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    methods: {
        setOptionData() {
            let data = [
                {name: '社交', value: 380, data: [3600, 7200, 4800, 9000, 5200, 1800, 2400, 600]},
                {name: '游戏', value: 300, data: [2800, 5800, 3600, 7000, 6400, 3600, 5400, 4600]},
                {name: '直播', value: 240, data: [2600, 3200, 5800, 2000, 3200, 5800, 7400, 2600]},
                {name: '金融理财', value: 200, data: [1600, 4200, 2800, 1000, 7200, 5800, 3400, 5600]},
                {name: '生活', value: 150, data: [5600, 6200, 6800, 3000, 1200, 5800, 4400, 2500]},
                {name: '购物', value: 100, data: [6600, 8200, 5800, 4000, 2200, 3800, 7400, 3600]},
                {name: '办公学习', value: 100, data: [7600, 1200, 3800, 7000, 1200, 3800, 5400, 2600]},
                {name: '其他', value: 50, data: [6600, 1200, 2800, 3000, 6200, 5800, 4400, 1600]}
            ];
            let colorList = ['#2c7bfe', '#c2232a', '#feed2c', '#a262f2', '#62d5f2', '#fe672c', '#2c7bfe', '#69f262'];
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                let values = [0, 0, 0, 0, 0, 0, 0, 0];
                values.splice(i, 1, data[i].value);
                let obj = {
                    name: data[i].name,
                    type: 'bar',
                    z: 3,
                    barWidth: 10,
                    barGap: '-100%',
                    itemStyle: {
                        color: colorList[i]
                    },
                    data: values
                }

                arr.push(obj);
            }
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    type: 'line',
                    name: data[i].name,
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 4,
                    xAxisIndex: 2,
                    yAxisIndex: 3,
                    data: data[i].data,
                    lineStyle: {
                        width: 1
                    },
                    itemStyle: {
                        color: colorList[i]
                    }
                };
                let obj1 = {
                    type: 'line',
                    name: data[i].name,
                    symbol: 'circle',
                    symbolSize: 4,
                    smooth: true,
                    xAxisIndex: 3,
                    yAxisIndex: 5,
                    data: data[i].data,
                    lineStyle: {
                        width: 1
                    },
                    itemStyle: {
                        color: colorList[i]
                    }
                };

                arr.push(obj);
                arr.push(obj1);
            }
            let arr1 = [
                {
                    name: '辅助',
                    type: 'bar',
                    barWidth: 10,
                    barGap: '-100%',
                    itemStyle: {
                        color: '#252448'
                    },
                    data: [500, 500, 500, 500, 500, 500, 500, 500]
                },
                {
                    name: '辅助',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'bar',
                    barWidth: 10,
                    barGap: '-100%',
                    itemStyle: {
                        color: '#252448'
                    },
                    data: [500, 500, 500, 500, 500, 500, 500]
                },
                {
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    type: 'bar',
                    z: 3,
                    barWidth: 10,
                    itemStyle: {
                        color: '#2c7bfe'
                    },
                    data: [390, 330, 280, 220, 160, 100, 40]
                },
            ]
            arr = arr.concat(arr1);

            return arr;
        },
        /**
         * 时间秒数格式化
         * @param s 时间戳（单位：秒）
         * @returns {*} 格式化后的时分秒
         */
        formateData(s) {
            var t;
            if (s > -1) {
                var hour = Math.floor(s / 3600);
                var min = Math.floor(s / 60) % 60;
                var sec = s % 60;
                if (hour != 0) {
                    t = hour + "时";
                } else {
                    t = "";
                }
                t += min + "分";
                t += sec + "秒";
            }
            return t;
        },
        // 应用使用行为
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                    formatter: (data) => {
                        if (data.componentSubType == 'bar' && data.seriesName != '辅助') {
                            return data.name + ":" + data.value
                        } else if (data.componentSubType == 'line') {
                            return data.name + "<br>" + data.seriesName + ":" + this.formateData(data.value)
                        }
                    }
                },
                title: [
                    {
                        text: '【应用类型统计】',
                        textStyle: {
                            color: '#75deef',
                            fontSize: 12,
                            fontWeight: 'normal'
                        },
                        top: '12%',
                        left: '15%'
                    },
                    {
                        text: '【应用时长TOP10】',
                        textStyle: {
                            color: '#75deef',
                            fontSize: 12,
                            fontWeight: 'normal'
                        },
                        top: '12%',
                        right: '14%'
                    },
                    {
                        text: '【应用使用时长日分布】',
                        textStyle: {
                            color: '#75deef',
                            fontSize: 12,
                            fontWeight: 'normal'
                        },
                        top: '53%',
                        left: '14%'
                    },
                    {
                        text: '【应用使用时长时段分布】',
                        textStyle: {
                            color: '#75deef',
                            fontSize: 12,
                            fontWeight: 'normal'
                        },
                        top: '53%',
                        right: '12%'
                    }
                ],
                legend: [
                    {
                        top: '6%',
                        left: 'center',
                        itemWidth: 7,
                        itemHeight: 7,
                        textStyle: {
                            color: '#75deef',
                            fontSize: 12,
                        },
                        z: 2,
                        data: [
                            {name: '社交', icon: 'circle'},
                            {name: '游戏', icon: 'circle'},
                            {name: '直播', icon: 'circle'},
                            {name: '金融理财', icon: 'circle'},
                            {name: '生活', icon: 'circle'},
                            {name: '购物', icon: 'circle'},
                            {name: '办公学习', icon: 'circle'},
                            {name: '其他', icon: 'circle'},
                        ]
                    }
                ],
                grid: [
                    {
                        left: '5%',
                        top: '20%',
                        right: '52%',
                        bottom: '53%',
                        containLabel: false
                    },
                    {
                        left: '52%',
                        top: "20%",
                        right: '3%',
                        bottom: "53%",
                        containLabel: false
                    },
                    {
                        left: '8%',
                        top: '62%',
                        right: '52%',
                        bottom: '8%',
                        containLabel: false
                    },
                    {
                        left: '55%',
                        top: "62%",
                        right: '5%',
                        bottom: "8%",
                        containLabel: false
                    },
                ],
                xAxis: [
                    {
                        type: 'category',
                        data: ['社交', '游戏', '直播', '金融理财', '生活', '购物', '办公', '其他'],
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef'
                        },
                        axisLine: {show: false},
                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'category',
                        gridIndex: 1,
                        data: ['微信', 'QQ音乐', '钉钉', '抖音', '直播', '互动吧', '其他'],
                        axisLine: {show: false},
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef'
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'category',
                        gridIndex: 2,
                        boundaryGap: false,
                        data: ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7'],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef'
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    {
                        type: 'category',
                        gridIndex: 3,
                        boundaryGap: false,
                        data: ['0.00', '4.00', '8.00', '12.00', '16.00', '20.00', '24.00'],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef'
                        },
                        axisTick: {
                            show: true
                        }
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {show: false},
                        axisLabel: {show: false},
                        axisLine: {show: false},
                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 1,
                        axisLabel: {show: false},
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 2,
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef',
                            showMaxLabel: false
                        },
                        name: '(小时)',
                        nameGap: -5,
                        nameTextStyle: {
                            color: '#75deef',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 4, 0, 0]
                        },
                        min: 0,
                        max: 6,
                        splitLine: {show: false},
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 2,
                        axisLabel: {show: false},
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 3,
                        axisLabel: {
                            interval: 0,
                            fontSize: 9,
                            color: '#75deef',
                            showMaxLabel: false
                        },
                        name: '(小时)',
                        nameGap: -5,
                        nameTextStyle: {
                            color: '#75deef',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 4, 0, 0]
                        },
                        min: 0,
                        max: 6,
                        splitLine: {
                            show: false,

                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1a3c58'
                            }
                        },
                        axisTick: {
                            show: true
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 3,
                        axisLabel: {show: false},
                        splitLine: {show: false},
                        axisLine: {show: false},
                        axisTick: {
                            show: false
                        }
                    },
                ],
                series: this.setOptionData()
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

<style lang="less" scoped>

</style>