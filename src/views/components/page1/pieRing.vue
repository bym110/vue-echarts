<template>
    <div class="pieMain"></div>
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
        // 交易支出 饼图
        setChart() {
            let option = {
                title: {
                    text: '【' + this.data.title + '】',
                    x: 'center',
                    top: 0,
                    textStyle: {
                        color: '#75deef',
                        fontSize: 12,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)",
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                series: [
                    {
                        type: 'pie',
                        startAngle: 160,
                        radius: [0, '30%'],
                        label: {
                            show: true,
                            position: 'inside',
                            fontSize: 10,
                        },
                        center: ['50%', '60%'],
                        data: this.data.data,
                    },
                    {
                        type: 'pie',
                        startAngle: 160,
                        radius: ['52%', '72%'],
                        labelLine: {
                            lineStyle: {
                                color: '#444b62',

                            },
                            length: 5,
                            length2: 5,

                        },
                        emphasis: {
                            label: {
                                color: '#fff',
                                show: true,
                            }
                        },
                        label: {
                            position: 'outside',
                            borderRadius: 4,
                            color: '#fff',
                            fontSize: 10,
                            padding: 0,
                            backgroundColor: '#183566',
                            formatter: "{b}{c}笔/{d}%"
                        },
                        center: ['50%', '60%'],
                        data: this.data.data1,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()

            myChart.setOption(option);
            let obj = {
                type: 'highlight',
                name: []
            };
            for (let i = 0; i < this.data.data.length - 1; i++) {
                obj.name.push(this.data.data[i].name)
            }
            myChart.dispatchAction(obj);
            myChart.on('mouseout', function () {
                myChart.dispatchAction(obj);
            });
        },
    },
    mounted() {
        this.setChart();
    },
}
</script>

<style lang="less" scoped>
.pieMain {
    width: 100%;
    height: 100%;
}
</style>