<template>
    <div class="pieMain" :id="id"></div>
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
            // 交易支出 饼图
                setChart () {
                    let option = {
                        title : {
                            text: '【'+this.data.title+'】',
                            x:'center',
                            top:6,
                            textStyle:{
                                color:'rgb(115,219,236)',
                                fontSize:10
                            }
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                type: 'pie',
                                startAngle:160,
                                radius : '60%',
                                label:{
                                    position:'inside',
                                    fontSize:7,
                                    formatter:(data)=> {
                                        if (this.id == 'bottom_5') {
                                            return data.data.name+"\n"+data.percent.toFixed(0)+"%"
                                        }else {
                                             return data.data.name+data.percent.toFixed(0)+"%"
                                        }
                                        
                                    }
                                },
                                center: ['50%', '60%'],
                                data:this.data.data,
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
                     let myChart = this.$echarts.init(document.getElementById(this.id));
                    
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById(this.id).offsetWidth,
                            height:document.getElementById(this.id).offsetHidth
                        }
                    )
                  
                    myChart.setOption(option);
                    let obj={
                        type:'highlight',
                        name:[]
                    };
                        for (let i = 0; i<this.data.data.length-1;i++) {
                           obj.name.push(this.data.data[i].name)
                        }
                     myChart.dispatchAction(obj);
                    myChart.on('mouseout', function (params) {
                       myChart.dispatchAction(obj);
                    });
                },
        },
        mounted() {
            this.setChart ();
        },
    }
</script>

<style lang="less" scoped>
    .pieMain {
        width: 100%;
        height: 100%;
    }
</style>