<template>
    <div class="behaviorBar" :id="id"></div>
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
            setChart () {
                let option = {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend:
                            {
                                top:20,
                                right:40,
                                itemWidth:7,
                                itemHeight:7,
                                textStyle:{
                                     color:'rgb(111,223,244)',
                                     fontSize:10,
                                },
                                data: [
                                    {name:'添加好友',icon:'circle'},
                                    {name:'好友总数',icon:'circle'}
                                ],
                            },
                        grid: 
                            {
                            top:'25%',
                            left: '3%',
                            right: '4%',
                            bottom:'4%',
                            containLabel: true,
                            
                        },
                        xAxis:
                            {
                            type: 'category',
                            axisLabel:{
                                interval:0,
                                color:'rgb(111,223,244)',
                                fontSize:10
                            },
                            axisTick:{show:false},
                             data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月']
                            },
                        yAxis: [
                            {
                            type: 'value',
                            min:0,
                            max:300,
                            axisLabel:{
                                 color:'rgb(111,223,244)',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(笔)';
                                        }
                                        return value;
                                        },
                                 showMaxLabel:true,
                            },
                            axisTick:{
                                length:3
                            },
                           
                            splitLine:{show:false}
                           
                        },
                        {
                            type: 'value',
                             min:0,
                            max:300,
                            axisTick:{
                                length:3
                            },
                             axisLabel:{
                                 color:'rgb(111,223,244)',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(万)';
                                        }
                                        return value;
                                        },
                                  showMaxLabel:true,
                            },
                          
                             splitLine:{show:false}
                        },
                        ],
                        series: [
                            {
                                name: '好友总数',
                                type: 'bar',
                                 barWidth:7,
                                stack: '总数',
                                itemStyle:{
                                    color:this.data[0].color,
                                    barBorderRadius:3.5,
                                },
                                data: this.data[0].data
                            },
                            {
                                name: '添加好友',
                                type: 'bar',
                                 barWidth:7,
                                stack: '总数',
                                 itemStyle:{
                                    color:this.data[1].color,
                                     barBorderRadius:3.5,
                                },
                                data: this.data[1].data
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
             this.setChart ()
        }
       
    }
</script>

<style lang="less" scoped>
    .behaviorBar {
        height:50%;
    }
</style>