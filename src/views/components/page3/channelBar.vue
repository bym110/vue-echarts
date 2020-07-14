<template>
        <div class="leftBar" :id="id"></div>
</template>


<style lang="less" scoped>
    .leftBar {
        height:100%;
        width: 45%;
        float: left;
    }
    
</style>

<script>
    export default {
        props:{
            id:String,
            title:String,
            data:Array,
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods:{
            setTrenchData (type) { // 数据
            let arr=[];
             let obj={};
                for (let i = 0; i<this.data.length;i++) {
                     switch (type) {
                    case 't':
                         obj ={
                            subtext:this.data[i].subtitle,
                            top:this.data[i].top,
                            left:10,
                            subtextStyle:{
                                color:'#8CBCCD',
                                fontSize:9
                            }
                        }
                        break;
                     case 'd':
                         obj =this.data[i].data
                        break;
                    case 'b':
                          obj=100;
                        break;
                    default:
                        break;
                } 
                 
                   arr.push(obj); 
                };
                 if (type == 't') {
                      arr.unshift({
                         text:this.title,
                        top:10,
                        left:10,
                        textStyle:{
                            color:'#fff',
                            fontSize:12
                        }
                    });
                  }
                return arr;
            },
           
            // 渠道分析
            setChart () {
                let option = {
                    tooltip: {
                        trigger: 'item',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    title:this.setTrenchData('t'),
                    grid:{
                        top:30,
                        bottom:10,
                        left:14,
                    },
                    yAxis: {
                        data: [],
                        axisTick: {show: false},
                        inverse:true,
                       axisLabel: {
                           show:false
                        },
                        axisLine: {show:false},
                        axisTick: {show: false},
                    },
                    xAxis: {
                        splitLine: {show: false},
                         axisLabel: {
                           show:false
                        },
                        axisLine: {show:false},
                        axisTick: {show: false},
                    },
                    series: [{
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#ddd'
                            }
                        },
                        silent: true,
                        barWidth: 15,
                        barGap: '-100%', // Make series be overlap
                        itemStyle:{
                            color:'#1F1E4E'
                        },
                        data: this.setTrenchData('b')
                    }, {
                        type: 'bar',
                        barWidth: 15,
                        z: 2,
                        label:{
                            show:true,
                            position:"insideLeft",
                            color:"#fff",
                            offset:[0,1],
                            fontSize:9,
                            formatter:function (params) {
                                return params.name
                            },
                        },
                        itemStyle:{
                            color: function(params) {
                                return params.data.color;
                            }
                        },
                        data: this.setTrenchData('d')
                    }]
                };
                 let myChart = this.$echarts.init(document.getElementById(this.id));
           
                myChart.clear();
                myChart.resize(
                    {
                        width:document.getElementById(this.id).width,
                    height:document.getElementById(this.id).heidth
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
