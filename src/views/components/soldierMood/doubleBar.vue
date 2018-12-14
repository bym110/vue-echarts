<template>
    <div id="left_1"></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
           // 上网行为分析
            setChart () {
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter:function (data) {
                            console.log(data);
                            
                            var num =data[0].seriesId.substr(data[0].seriesId.length-1,1)
                           if (num == 0) {
                               return data[0].seriesName+':'+data[0].value+'个'+'<br>'+data[1].seriesName+':'+data[1].value+'个'
                           }else {
                                return data[0].seriesName+':'+data[0].value+'人'+'<br>'+data[1].seriesName+':'+data[1].value+'人'
                           }
                           
                        }
                    },
                    legend: {
                        data:[{
                            name:'正常网站',
                            icon:'circle'
                        },
                        {
                            name:'敏感网站',
                            icon:'circle'
                        }
                            ],
                            itemWidth:7,
                            itemHeight:7,
                        textStyle:{
                            color:'#74DDEE',
                            fontSize:10,
                        },    
                        right:30,
                        top:10,
                    },
                    grid: [{
                        top: 40,
                        bottom: '45%',
                        left:21,
                         right:25,
                        containLabel: true,
                    },
                    {
                        top: '55%',
                        bottom: 10,
                        left:20,
                        right:25,
                        containLabel: true,
                      
                    },
                     ],
                    yAxis: [{
                        type: 'value',
                        inverse: false,
                        splitNumber:3,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#193954'
                            }
                        },
                        axisTick: {
                            show: true

                        },
                        axisLabel: {
                            formatter: function (value,index) {
                                if (value==6) {
                                    value="(个)"
                                }
                               return value
                                
                            },
                            showMaxLabel:true,
                            textStyle: {
                                color: '#72D9EA',
                                fontSize:8,
                                fontWeight:'normal'
                            }
                        },
                        splitLine: {
                            show: false,
                        }
                    }, 
                     {
                        gridIndex: 1,
                        splitNumber: 3,
                         inverse: true,
                        type: 'value',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#193954'
                            }
                        },
                        axisTick: {
                            show: true
                        },
                        position: 'bottom',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#72D9EA',
                                fontSize:8,
                                fontWeight:'normal'
                            },
                            showMaxLabel:true,
                            formatter: function (value,index) {
                                if (value==600) {
                                    value="(人)"
                                }
                               return value
                                
                            },
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 0
                            }
                        }
                    }
                    ],
                    xAxis: [
                        {
                            type: 'category',
                            inverse: false,
                             name:"日",
                             nameLocation:'end',
                             nameTextStyle:{
                                 color:"#72D9EA",
                                 fontSize:9,
                                 padding:[15,0,0,0]
                             },
                             nameGap:0,
                            axisLine: {
                                show:true,
                               
                                lineStyle: {
                                    color: '#193954'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            data:[1,2,3,4,5,6,7,8,9,10,11]
                           
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            inverse: false,
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#193954'
                                }
                            },
                            axisTick: {
                                show: false,
                                lineStyle: {
                                    color: '#193954'
                                }
                            },
                            axisLabel: {
                                show: false
                            },
                             data:[1,2,3,4,5,6,7,8,9,10,11]

                        }
                    ],
                    series: [{
                        name: '正常网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color:'rgb(44,123,254)'
                            },
                        },
                        data:[1, 3, 2, 5, 4, 6, 3,2, 4, 3, 6]
                    }, 
                    {
                        name: '敏感网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color:'rgb(194,35,42)'
                            },
                        },
                            data:[4, 6, 5, 2, 3, 1, 4,2, 2, 4, 1]
                    },
                    {
                        name: '正常网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                         xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color:'rgb(44,123,254)'
                            },
                        },
                        data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }, {
                        name: '敏感网站',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 10,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        
                        itemStyle: {
                            normal: {
                                color:'rgb(194,35,42)'
                            },
                        },
                            data:[320, 302, 341, 374, 390, 450, 420,374, 390, 450, 420]
                    }
                    ]
                };
          
            let myChart = this.$echarts.init(document.getElementById('left_1'));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById('left_1').offsetWidth,
                height:document.getElementById('left_1').offsetHidth
                }
            )
              myChart.setOption(option);
            },
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    #left_1 {
        width:100%;
        height:100%;
    }
</style>