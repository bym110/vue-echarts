<template>
    <div style="height:100%;width:50%;float:left;" :id="id"></div>
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
                    let option = {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter:function(data) {
                                for (let i =0;i<data.length;i++) {
                                        return data[i].name+"<br>"+data[i].data+'人'
                                    }
                            }
                        },
                        grid: 
                            {
                            left: 0,
                            top:"6%",
                            right: '7%',
                            bottom: '5%',
                            containLabel: true
                            },
                        xAxis: 
                            {
                                type : 'category',
                                boundaryGap:false,
                                data : ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7','8.8'],
                                axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                                axisTick: {
                                    show:false,
                                    alignWithLabel: true
                                }
                            },
                        yAxis:
                            {
                                type : 'value',
                                min:0,
                                max:300,
                                axisLabel: {
                                      formatter: function (value) {
                                        if(value==300){
                                        value='(小时)';
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
                                },
                                splitLine:{show:false}
                            },
                        series : [
                             {
                                type:'line',
                                lineStyle:{
                                     width:1,
                                     color:'rgb(162,98,242)'
                                },
                                 smooth:true,
                                  symbol: 'none',
                                data:[0, 132, 101, 134, 90, 230, 210,225]
                            },
                            {
                                type:'line',
                                 smooth:true,
                                 lineStyle:{
                                      width:1,
                                     color:'rgb(98,213,242)'
                                },
                                  symbol: 'none',
                                data:[0, 182, 191, 234, 290, 130, 210,111]
                            },
                            {
                                type:'line',
                                 smooth:true,
                                  lineStyle:{
                                       width:1,
                                      color:'rgb(44,123,254)'
                                },
                                  symbol: 'none',
                                data:[0, 232, 201, 154, 190, 130, 210,143]
                            },
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
            this.setChart ();
        },
    }
</script>

<style lang="less" scoped>
    
</style>