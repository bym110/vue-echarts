<template>
    <div id="right_2"></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            setChart () {
                let option = {
                            grid:{
                                top:20,
                                bottom:20,
                                right:'1%',
                                left:'35%'
                            },
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                },
                                formatter:"{b}<br />{c1}人"
                            },
                            yAxis: [
                                {
                                data: ['色情同性恋', '暴力枪支', '赌博彩票', '赌品药品','自杀抑郁','宗教迷信','其他'],
                                axisTick: {show: false},
                                 axisLine: {show: false},
                                 inverse:true,
                                axisLabel: {
                                    fontSize:10,
                                    margin:60,
                                    align:'left',
                                    color:'rgb(113,227,247)'
                                }
                            },
                            {
                                data: [45, 33, 13, 25,30,35,45],
                                axisTick: {show: false},
                                 axisLine: {show: false},
                                 inverse:true,
                                 offset:-35,
                                 z:2,
                                axisLabel: {
                                    fontSize:12,
                                    formatter: '{value}人',
                                    color:'rgb(113,227,247)',
                                }
                            }
                            ],
                            xAxis: {
                                splitLine: {show: false},
                                axisTick: {show: false},
                                axisLabel: {show: false},
                                axisLine: {show: false},
                            },
                            series: [{
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#ddd'
                                    }
                                },
                                silent: true,
                                barWidth: 10,
                                barCategoryGap:20,
                                barGap: '-100%', // Make series be overlap
                                data: [60, 60, 60, 60,60,60,60],
                                itemStyle:{
                                    color:'rgb(37,36,72)'
                                }

                            }, {
                                type: 'bar',
                                barWidth: 10,
                                barCategoryGap:20,
                                z: 10,
                                data: [45, 33, 13, 25,30,35,45],
                                itemStyle:{
                                     //通常情况下：
                                    normal:{  
                    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                        color: function (params){
                                        var colorList = [ 
                                                'rgb(40,113,234)','rgb(254,237,44)','rgb(44,168,254)','rgb(254,103,44)' ,'rgb(62,98,242)' ,'rgb(92,35,42)' ,'rgb(98,213,242)'  
                                                ];
                                            return colorList[params.dataIndex];
                                        }
                                    },
                                },
                                
                            }]
                        };
                        let myChart = this.$echarts.init(document.getElementById('right_2'));
                        myChart.clear();
                        myChart.resize(
                            {
                                width:document.getElementById('right_2').offsetWidth,
                            height:document.getElementById('right_2').offsetHidth
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
   #right_2 {
       height:100%;
       width: 100%;
   } 
</style>