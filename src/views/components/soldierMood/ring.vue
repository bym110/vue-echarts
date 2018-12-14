<template>
    <div class="ring" :id="id"></div>
</template>

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
        methods: {
            setChart () {
              let option = {
                            title : {
                                text: '【'+this.data.title+'】',
                                top:15,
                                x:'center',
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:10
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: {c} ({d}%)"
                            },
                            legend: {
                                itemWidth:7,
                                itemHeight:7,
                                itemGap:2,
                                top:35,
                                textStyle:{
                                    color:'rgb(109,208,224)',
                                    fontSize:8
                                },
                                x: 'center',
                                data:[
                                    { name:'自杀',icon:'circle'},
                                    { name:'法轮功',icon:'circle'},
                                    { name:'赌博',icon:'circle'},
                                    { name:'其他',icon:'circle'},
                                    { name:'贪污',icon:'circle'},
                                ]
                            },
                            series: [
                                {
                                    name:this.data.title,
                                    type:'pie',
                                    radius: ['40%', '60%'],
                                    center: ['50%','67%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center',
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data:this.data.data
                                }
                            ]
                        }; 
                    let myChart = this.$echarts.init(document.getElementById(this.id));
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById(this.id).offsetWidth,
                        height:document.getElementById(this.id).offsetHidth
                        }
                    )
                    myChart.setOption(option);
                   
            }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .ring {
        width: 100%;
        height: 100%;
    }
</style>