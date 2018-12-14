<template>
    <div class="threeBarChart" :id="id"></div>
</template>

<script>
    export default {
        name: '',
        props:{
            id:String
        },
        data() {
            return {
                
            }
        },
        methods: {
            setChart () {
                let option ={
                grid:{
                    top:"20%",
                    bottom:"15%",
                    left:40,
                    right:40,
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:[{name:'金额',icon:'circle'},{name:'人数',icon:'circle'},{name:'次数',icon:'circle'}],
                    left:"8%",
                    top:"10%",
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'rgb(92,177,193)',
                       fontSize:10
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        axisLine:{
                            symbol:['none','arrow'],
                            symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                        },
                        axisLabel:{
                            color:'rgb(97,185,200)',
                            showMaxLabel:false,
                            fontSize:10,
                        },
                        data : ['2017','4','7','10','2018','4','7','0']
                    }
                ],
                yAxis :[
                    {
                    type: 'value',
                    interval:50,
                    min:0,
                    max:400,
                    splitNumber:7,
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[6,6],
                       lineStyle:{
                           color:'rgb(18,44,73)'
                       }
                    },
                    axisLabel:{
                        color:'rgb(97,185,200)',
                        showMaxLabel:false,
                        fontSize:10,
                        formatter: function (value) {
                            if(value==350){
                            value='(元)';
                            }
                            return value;
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                },
                {
                    type: 'value',
                    interval:50,
                    position:"right",
                    offset:-35,
                    min:0,
                    max:400,
                    splitNumber:7,
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[6,6],
                       lineStyle:{
                           color:'rgb(18,44,73)'
                       }
                    },
                    axisLabel:{
                        color:'rgb(97,185,200)',
                        showMaxLabel:false,
                        fontSize:10,
                        formatter: function (value) {
                            if(value==350){
                            value='(人)';
                            }
                            return value;
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                },
                {
                    type: 'value',
                     position:"right",
                    interval:50,
                    min:0,
                    max:400,
                    splitNumber:7,
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[6,6],
                       lineStyle:{
                           color:'rgb(18,44,73)'
                       }
                    },
                    axisLabel:{
                        color:'rgb(97,185,200)',
                        showMaxLabel:false,
                        fontSize:10,
                        formatter: function (value) {
                            if(value==350){
                            value='(次)';
                            }
                            return value;
                        },
                    },
                    splitLine:{
                        show:false,
                    },
                }
                ],
                series : [
                    {
                        name:'金额',
                        type:'bar',
                        barGap:0,
                        barWidth:6,
                        data:[200, 49, 70, 232, 256, 76.7, 135.6],
                        itemStyle:{
                              barBorderRadius:[3,3,0,0],
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0, color: 'rgba(252,145,134,1)' // 0% 处的颜色
                                    },  {
                                        offset: 1, color: 'rgba(241,88,135,1)' // 100% 处的颜色
                                    }]), //背景渐变色
                        }
                    },
                    {
                        name:'人数',
                        type:'bar',
                         barGap:0,
                         barWidth:6,
                        data:[26, 59, 90, 264, 287, 70.7, 175.6],
                        itemStyle:{
                             barBorderRadius:[3,3,0,0],
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0, color: 'rgba(144,20,238,1)' // 0% 处的颜色
                                    },  {
                                        offset: 1, color: 'rgba(74,8,211,1)' // 100% 处的颜色
                                    }]), //背景渐变色
                        }
                    },
                    {
                        name:'次数',
                        type:'bar',
                         barGap:0,
                         barWidth:6,
                        data:[ 264, 287, 150, 175.6, 182.2, 48.7, 18.8],
                        itemStyle:{
                             barBorderRadius:[3,3,0,0],
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0, color: 'rgba(0,204,255,1)' // 0% 处的颜色
                                    },  {
                                        offset: 1, color: 'rgba(8,59,126,1)' // 100% 处的颜色
                                    }]), //背景渐变色
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
            }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .threeBarChart {
        height: 100%;
        width: 100%;
    }
</style>