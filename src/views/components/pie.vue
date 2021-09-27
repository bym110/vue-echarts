<template>
    <div class="webPie">
        <div class="webPie-title">
            <span class="subtitle"><span class="leftCircle"
                                         :style="{background:data.color}"></span>{{ data.title }}<span
                class="rightCircle" :style="{background:data.color}"></span></span>
        </div>
        <div class="webPie-content" :id="id">

        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        id: String,
        data: Object
    },
    data() {
        return {}
    },
    methods: {
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10
                    },
                    formatter: "{b}:{d}%"
                },
                series: [
                    {
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '50%'],
                        label: {
                            color: '#75deef',
                            fontSize: 8,
                            formatter: function (data) {
                                return data.data.name + ' ' + (data.percent).toFixed(0) + '%';
                            }
                        },
                        labelLine: {
                            length: 10,
                            length2: 8,
                            lineStyle: {
                                color: 'rgb(57,63,90)'
                            }
                        },
                        data: this.data.data,
                    }
                ]
            };
            let myChart = this.$echarts(document.getElementById(this.id));

            myChart.clear();
            myChart.resize(
                {
                    width: document.getElementById(this.id).offsetWidth,
                    height: document.getElementById(this.id).offsetHeight
                }
            );

            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.webPie {
    width: 100%;
    height: 100%;

    .webPie-title {
        height: 20%;
        text-align: center;

        .subtitle {
            color: #68C6D6;
            position: relative;
            font-size: 12px;

            .leftCircle {
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                position: absolute;
                left: -15px;
                top: 5px;
            }

            .rightCircle {
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                position: absolute;
                right: -15px;
                top: 5px;
            }
        }
    }

    .webPie-content {
        height: 80%
    }
}
</style>
