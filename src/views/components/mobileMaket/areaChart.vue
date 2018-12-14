<template>
    <div class="areaChart" :id ="id"></div>
</template>

<script>
    export default {
        name: '',
        props:{
            id:String,
            data:Array
        },
        data() {
            return {
                
            }
        },
        methods: {
            setOption (type) {
                let arr=[];
                let obj={};
                for (let i = 0;i<this.data.length;i++) {
                    switch (type) {
                        case 'l':
                            obj={
                                name:this.data[i].name,
                                icon:'circle'
                            };
                            break;
                        case 's':
                            obj={
                                name: this.data[i].name,
                                type: 'line',
                                symbol: 'none',
                                smooth: true,
                                data: this.data[i].data,
                                lineStyle:{
                                    width:0,
                                    color:'rgb(212,37,43)'
                                },
                                itemStyle:{
                                    color:'rgb('+this.data[i].color[0]+')'
                                },
                                areaStyle:{
                                     opacity:1,
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                        offset: 0, color: 'rgba('+this.data[i].color[0]+',1)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4, color: 'rgba('+this.data[i].color[0]+',1)' // 0% 处的颜色
                                    },   {
                                        offset: 1, color: 'rgba('+this.data[i].color[1]+',1)' // 100% 处的颜色
                                    }]), //背景渐变色    
                                    origin:'start'
                                }
                            };
                            break;
                        default:
                            break;
                    }
                    arr.push(obj);
                }
                return arr;
            },
            setChart () {
                 let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid:{
                        top:'14%',
                        bottom:'12%',
                        left:"10%",
                        right:"10%",
                    },
                    legend: {
                        data:this.setOption ('l'),
                        left:"11%",
                       
                        top:"15%",
                        itemWidth:7,
                        itemHeight:7,
                        textStyle:{
                        color:'rgb(92,177,193)',
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel:{
                            color:'rgb(92,177,193)',
                            fontSize:10,
                        },
                        axisLine:{
                                symbol:['none','arrow'],
                                symbolSize:[6,6],
                                symbolOffset:[0,10],
                                lineStyle:{
                                color:'rgb(18,44,73)'
                                }
                            },
                        axisTick:{
                            color:'rgb(18,44,73)',
                            inside:true
                        },
                        z:2,
                        data: ['2017','4','7','2018','4','7','10']
                    },
                    yAxis: [
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
                                value='(次)';
                                }
                                return value;
                            },
                        },
                        splitLine:{
                            show:false,
                        },
                        },
                        {
                            type:'value',
                            min:0,
                            max:400,
                            axisLine:{
                                symbol:['none','arrow'],
                                symbolSize:[6,6],
                            lineStyle:{
                                color:'rgb(18,44,73)'
                            }
                            },
                            axisLabel:{
                                show:true,
                                color:'rgb(97,185,200)',
                                showMaxLabel:false,
                                fontSize:10,
                                formatter: function (value) {
                                    if(value==350){
                                    value='(个)';
                                    }
                                    return value;
                                },
                            },
                            interval:50,
                            splitLine:{
                            show:false,
                        },
                        }
                    ],
                    series: this.setOption('s')
                };
                let myChart = this.$echarts.init(document.getElementById(this.id));
                myChart.clear();
                myChart.resize(
                    {
                        width:document.getElementById(this.id).offsetWidth,
                    height:document.getElementById(this.id).offsetHidth
                    }
                ),
            
                myChart.setOption(option);
                }
        },
        mounted() {
            this.setChart ()
        },
    }
</script>

<style lang="less" scoped>
    .areaChart {
        width: 100%;
        height: 100%;
    }
</style>