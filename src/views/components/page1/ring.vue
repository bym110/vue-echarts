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
                                top:20,
                                x:'center',
                                textStyle:{
                                    color:'#75deef',
                                    fontSize:14,
                                    fontWeight:'normal'
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: {c} ({d}%)",
                                backgroundColor:'#11367a',
                                textStyle:{
                                    color:'#6dd0e3',
                                    fontSize:10,
                                },
                            },
                            series: [
                                {
                                    name:this.data.title,
                                    type:'pie',
                                    radius: ['40%', '60%'],
                                    center: ['50%','55%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'outside',
                                            fontSize:10,
                                            color:'#75deef'
                                        },
                                    },
                                    labelLine: {
                                        normal: {
                                            show: true,
                                            length:8,
                                            length2:5,
                                            lineStyle: {
                                                color:'#303851'
                                            }
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