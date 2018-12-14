<template>
    <div id="bottom_1"></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            // 金钱交易分析
                setChart () {
                    let option = {
                        grid:[
                           {
                                show: false,
                                left: 0,
                                top: 45,
                                bottom: 1,
                                containLabel: true,
                                width:'33.6%'
                            }, 
                            {
                                show: false,
                                left: '32.8%',
                                top: 45,
                                bottom: 1,
                                  containLabel: true,
                                   width:'33.6%'
                            },
                            {
                                show: false,
                                left:'65.4%',
                                top: 45,
                                bottom: 1,
                                  containLabel: true,
                                   width:'33.6%'
                            }
                        ],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        legend: {
                            top:15,
                            itemWidth:7,
                            itemheight:7,
                            textStyle:{
                                color:'rgb(105,200,216)'
                            },
                            right:10,
                            data:[
                                {name:'收入笔数',icon:'circle'},
                                {name:'支出笔数',icon:'circle'},
                                {name:'收入金额',icon:'circle'},
                                {name:'支出金额',icon:'circle'},
                            ]
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                    formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0,
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                    show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:1,
                                 type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                     formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0 
                                },
                                 axisLine:{
                                     
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                     show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:2,
                                 type: 'category',
                                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                                axisLabel: {
                                     formatter: '{value}',
                                    fontSize:8,
                                    color:'rgb(88,168,183)',
                                    interval:0 
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                splitLine:{
                                    show:false,
                                },
                                axisTick:{
                                     show:false,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                 splitLine:{
                                    show:false,
                                },
                                min: 0,
                                max: 300,
                                 splitNumber:5,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                    showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                    length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                type: 'value',
                                min: 0,
                                max: 300,
                                interval: 50,
                                  splitLine:{
                                    show:false,
                                },
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                     
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {   
                                gridIndex:1,
                                  type: 'value',
                                 splitLine:{
                                    show:false,
                                },
                                min: 0,
                                max: 300,
                                interval: 50,
                                  splitLine:{
                                    show:false,
                                },
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:1,
                                  splitLine:{
                                    show:false,
                                },
                                nameTextStyle:{
                                    color:'rgb(88,168,183)',
                                    fontSize:8,
                                },
                                min: 0,
                                max: 300,
                                interval: 50,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {   
                                gridIndex:2,
                                  splitLine:{
                                    show:false,
                                },
                                  type: 'value',
                                min: 0,
                                max: 300,
                                interval: 50,
                                axisLabel: {
                                    formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            },
                            {
                                gridIndex:2,
                                min: 0,
                                max: 300,
                                  splitLine:{
                                    show:false,
                                },
                                interval: 50,
                                axisLabel: {
                                     formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                     showMaxLabel:true,
                                    fontSize:8,
                                    color:'rgb(88,168,183)'
                                },
                                 axisLine:{
                                    lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                },
                                axisTick:{
                                     length:3,
                                     lineStyle:{
                                        color:'rgb(88,168,183)'
                                    }
                                }
                            }
                        ],
                        series: [
                             {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                barWidth:5,
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                           
                            {
                                name:'收入金额',
                                type:'line',
                                symbol: 'none',
                                smooth:true,
                                yAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    width:1,
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[120, 212, 233, 145, 163, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                               yAxisIndex: 1,
                               itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    width:1,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[63, 102, 203, 234, 240, 115, 220, 262]
                            },
                            {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                 yAxisIndex: 2,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                  barWidth:5,
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                 yAxisIndex: 2,
                                xAxisIndex: 1,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                            
                            {
                                name:'收入金额',
                                type:'line',
                                 symbol: 'none',
                                  smooth:true,
                                yAxisIndex: 3,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    width:1,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[220, 212, 111, 123, 63, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                                 yAxisIndex: 3,
                                xAxisIndex: 1,
                                 itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    width:1,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[63, 102, 203, 234, 230, 165, 120, 62]
                            },
                             {
                                name:'支出笔数',
                                type:'bar',
                                barGap:0,
                                 yAxisIndex: 4,
                                xAxisIndex: 2,
                                  barWidth:5,
                                   itemStyle:{
                                    color:'rgb(40,112,232)'
                                },
                                data:[21, 54, 111, 222, 134, 156, 213, 211, ]
                            },
                            {
                                name:'收入笔数',
                                type:'bar',
                                barGap:0,
                                barWidth:5,
                                itemStyle:{
                                    color:'rgb(194,35,42)'
                                },
                                 yAxisIndex: 4,
                                xAxisIndex: 2,
                                data:[100, 65, 222, 162.2, 111, 22, 67,76]
                            },
                           
                            {
                                name:'收入金额',
                                type:'line',
                                 symbol: 'none',
                                  smooth:true,
                                yAxisIndex: 5,
                                xAxisIndex: 2,
                                 itemStyle:{
                                    color:'rgb(238,132,24)'
                                },
                                lineStyle:{
                                    width:1,
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    shadowColor:'rgb(238,132,24)'
                                },
                                data:[209, 212, 123, 145, 163, 102, 203, 234]
                            },
                            {
                                name:'支出金额',
                                smooth:true,
                                 symbol: 'none',
                                type:'line',
                                 yAxisIndex: 5,
                                xAxisIndex: 2,
                                 itemStyle:{
                                    color:'rgb(11,227,202)'
                                },
                                lineStyle: {
                                    width:1,
                                    shadowBlur:5,
                                    shadowOffsetY:3,
                                    shadowColor:'rgb(11,227,202)'
                                },
                                data:[200, 102, 203, 234, 230, 165, 120, 62]
                            },
                        ],
                        
                    };
                     let myChart = this.$echarts.init(document.getElementById('bottom_1'));
            
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('bottom_1').offsetWidth,
                        height:document.getElementById('bottom_1').offsetHidth
                        }
                    )
                    myChart.setOption(option);
                },
        },
        mounted() {
            this.setChart ();
        },
    }
</script>

<style lang="less" scoped>
    #bottom_1 {
        height:100%;
        width: 100%;
    }
</style>