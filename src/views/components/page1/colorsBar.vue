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
            setOptionData () {
                let arr = []
                for (let i =0;i<this.data.length;i++) {
                    let obj={
                        itemStyle:{
                            color:this.data[i].color
                        },
                        name:this.data[i].name,
                        value:this.data[i].value
                    }
                }
            },
            setChart () {
                let option = {
                    title:{
                        text:'【交友方式好友数量】',
                        textStyle:{
                            color:'#75deef',
                            fontSize:12,
                            fontWeight:'normal'
                        },
                        top:'5%',
                        left:'31%'
                    },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            backgroundColor:'#11367a',
                            formatter:"{b}:{c1}",
                            textStyle:{
                                color:'#6dd0e3',
                                fontSize:10,
                            },
                        },
                        grid: 
                            {
                            top:'25%',
                            left: '1%',
                            right: '4%',
                            bottom:'4%',
                            containLabel: true,
                            
                        },
                        xAxis:
                            {
                            type: 'category',
                            axisLabel:{
                                interval:0,
                                color:'#75deef',
                                fontSize:9,
                                showMinLabel:true,
                                formatter:function (value,index) {
                                   if (index == 1) {
                                       return value
                                   };
                                   return value;
                                   
                                },
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#1a3c58',
                                    width:2
                                }
                            },
                            axisTick:{show:false},
                            
                             data: ['漂流瓶','附近','雷达','摇一摇','搜索','群聊','扫一扫','其他']
                            },
                        yAxis: [
                            {
                            type: 'value',
                            min:0,
                            max:300,
                            axisLabel:{
                                 color:'#75deef',
                                fontSize:9,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(个)';
                                        }
                                        return value;
                                        },
                                 showMaxLabel:true,
                            },
                            axisTick:{
                                length:3
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#1a3c58'
                                }
                            },
                           
                            splitLine:{show:false}
                           
                        },
                        ],
                        series: [
                            {
                                name: '辅助',
                                type: 'bar',
                                  barWidth:12,
                                itemStyle:{
                                    color:"#252448",
                                },
                                data: [300,300,300,300,300,300,300,300]
                            },
                            {
                                name: '添加好友',
                                type: 'bar',
                                 barWidth:12,
                                 barGap:'-100%',
                                
                                data: this.data
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
        height:45%;
    }
</style>