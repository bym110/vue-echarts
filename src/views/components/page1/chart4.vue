<template>
    <div class="ring"></div>
</template>

<script>
export default {
    name: '',
    props: {
        data: Object
    },
    data() {
        return {
            myChart: null
        }
    },
    methods: {
        setChart() {
            let option = {
                title: {
                    text: '【' + this.data.title + '】',
                    top: 20,
                    x: 'center',
                    textStyle: {
                        color: '#75deef',
                        fontSize: 14,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)",
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                series: [
                    {
                        name: this.data.title,
                        type: 'pie',
                        radius: ['40%', '60%'],
                        center: ['50%', '55%'],
                        avoidLabelOverlap: true,
                        label: {
                            show: true,
                            position: 'outside',
                            fontSize: 10,
                            color: '#75deef'
                        },
                        labelLine: {
                            show: true,
                            length: 8,
                            length2: 5,
                            lineStyle: {
                                color: '#303851'
                            }
                        },
                        data: this.data.data
                    }
                ]
            };
            if (!this.myChart) this.myChart= this.$echarts(this.$el);
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
.ring {
    width: 100%;
    height: 100%;
}
</style>