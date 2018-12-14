<template>
    <div class="webPie" >
        <div class="webPie-title">
            <span class="title"><span class="leftCircle" :style="{background:data.color}"></span>{{data.title}}比<span class="rightCircle" :style="{background:data.color}"></span></span>
        </div>
        <div class="webPie-content" :id="id">
            
        </div>
    </div>
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
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '60%',
                            center: ['50%', '45%'],
                            label:{
                                color:'rgb(105,200,216)',
                                 fontSize:8,
                                 formatter:function (data) {
                                     return data.data.name+data.percent.toFixed(0)+'%';
                                 }
                            },
                            labelLine:{
                                length:10,
                                length2:8,
                                lineStyle:{
                                    color:'rgb(57,63,90)'
                                }
                            },
                            data:this.data.data,
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
                );
            
                myChart.setOption(option);
                }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .webPie {
        float: left;
        width:40%;
        height:100%;
        .webPie-title {
            height:20%;
            text-align: center;
            .title {
                color:#68C6D6;
                position: relative;
               .leftCircle {
                    display:block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    position: absolute;
                    left:-15px;
                    top: 3px;
                }
               .rightCircle {
                     display: block;
                     width: 6px;
                     height: 6px;
                     border-radius: 50%;
                    position: absolute;
                    right:-15px;
                    top:3px;
                } 
            }
        }
        .webPie-content {
            height: 80%
        }
    }
</style>