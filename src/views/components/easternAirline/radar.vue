<template>
    <div class="chart" :id="id"></div>
</template>

<style lang="less" scoped>
    .chart {
        height:100%;
    }
</style>

<script>
    export default {
        name: '',
        props:{
            id:String,
            data:Object
        },
        data() {
            return {
                
            }
        },
        methods:{
            setChart () {
                let option ={
                    tooltip: {
                        trigger: 'item',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    title:{
                        text:this.data.title,
                        top:"5%",
                        left:'5%',
                        textStyle:{
                            color:'#fff',
                            fontSize:12,
                        }
                    },
                    legend:{
                        data:[
                            {name:this.data.data[0].name,icon:'circle'},
                            {name:this.data.data[1].name,icon:'circle'},
                            ],
                        left:"15%",
                        top:"14%",
                        itemWidth:7,
                        itemHeight:7,
                        textStyle:{
                        color:'#67C3D6',
                        fontSize:10
                        }
                    },
                    radar:{
                        indicator: this.data.indicator,
                        center: ['40%', '60%'],
                        radius: "50%",
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'circle',
                        name: {
                            textStyle: {
                                color:'#0DECF0',
                                fontSize:8,
                            }
                        },
                        nameGap:3,
                        splitArea: {
                            areaStyle: {
                                color: ['#1166C4',
                                '#0C52A4', '#102F7D',
                                '#13216B'],
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#163794'
                            }
                        },
                        splitLine: {
                            show:false,
                            lineStyle: {
                                color: '#163794'
                            }
                        }
                    },
                    series:{
                        name: '雷达图',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [
                            {
                                value: this.data.data[0].value,
                                name: this.data.data[0].name,
                                symbol: 'none',
                                symbolSize: 5,
                                itemStyle:{
                                        color:this.data.data[0].color
                                },
                                lineStyle: {
                                    normal: {
                                        color:this.data.data[0].color,
                                        width:1,
                                    },
                                    emphasis:{
                                        width:2,
                                    }
                                }
                            },
                            {
                                value: this.data.data[1].value,
                                name: this.data.data[1].name,
                                symbol: 'none',
                                itemStyle:{
                                        color:this.data.data[1].color
                                },
                                lineStyle: {
                                    normal: {
                                        color: this.data.data[1].color,
                                         width:1,
                                    },
                                    emphasis:{
                                        width:2,
                                    }
                                }
                            }
                        ]
                    }
                };
                if (this.id == 'bottom_1_2') {
                    option.legend.left='5%';
                }
                let myChart = this.$echarts.init(document.getElementById(this.id));
           
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById(this.id).width,
                        height:document.getElementById(this.id).heidth
                        }
                    )
                    myChart.setOption(option);
            }
        },
        mounted() {
            this.setChart ();
        },
    }
</script>

