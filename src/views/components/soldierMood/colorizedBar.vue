<template>
    <div style="height:100%;" :id="id"></div>
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
            // 应用使用行为
                setChart () {
                    let option = {
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter:function(data) {
                                if (data.length==7) {
                                    return data[data[0].dataIndex].name+"<br>"+data[data[0].dataIndex].data+'人'
                                }else {
                                    for (let i =0;i<data.length;i++) {
                                        return data[i].name+"<br>"+data[i].data+'人'
                                    }
                                    
                                }
                                
                                   
                            }
                        },
                        legend: [
                            {
                            bottom:'4%',
                            left:10,
                            itemWidth:7,
                            itemheight:7,
                            textStyle:{
                                color:'rgb(105,200,216)'
                            },
                            z:2,
                            right:10,
                            data:[
                                {name:'社交',icon:'circle'},
                                {name:'游戏',icon:'circle'},
                                {name:'博彩',icon:'circle'},
                                {name:'金融证券',icon:'circle'},
                                {name:'直播',icon:'circle'},
                                {name:'生活服务',icon:'circle'},
                                {name:'其他',icon:'circle'},
                            ]
                        }
                        ],
                        grid: [
                            {
                            left: 0,
                            top:'18%',
                            right: '52%',
                            bottom: '20%',
                            containLabel: true
                            },
                            {
                            left: '52%',
                              top:"18%",
                            right: '4%',
                            bottom: '20%',
                            containLabel: true
                            },
                        ],
                        xAxis : [
                            {
                                type : 'category',
                                 data:['社交','游戏','博彩','金融证券','直播','生活服务','其他'],
                                 axisLabel:{
                                      interval:0,
                                      fontSize:8,
                                       color:'rgb(105,200,216)'
                                 },
                                axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'category',
                                gridIndex:1,
                                data : ['微信', 'QQ音乐', '钉钉', '抖音', '直播', '互动吧', '其他'],
                                axisLine:{show:false},
                                axisLabel:{
                                      interval:0,
                                      fontSize:8,
                                       color:'rgb(105,200,216)'
                                 },
                                axisTick: {
                                   show:false
                                }
                            },
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                splitLine:{show:false},
                                axisLabel:{show:false},
                                 axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                            {
                                type : 'value',
                                gridIndex:1,
                                axisLabel:{show:false},
                                splitLine:{show:false},
                                 axisLine:{show:false},
                                axisTick: {
                                   show:false
                                }
                            },
                        ],
                        series : [
                            {
                                name:'社交',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                itemStyle: {
                                    color:'rgb(44,123,254)'
                                },
                                 data:[380, 0, 0, 0, 0, 0, 0]
                            },
                            {
                                name:'游戏',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(194,35,42)'
                                },
                                 data:[0, 300, 0, 0, 0, 0, 0]
                            },
                            {
                                name:'博彩',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(254,237,44)'
                                },
                                 data:[0, 0, 240, 0, 0, 0, 0]
                            },
                             {
                                name:'金融证券',
                                type:'bar',
                                barWidth: 10,
                                barGap:'-100%',
                                 itemStyle: {
                                    color:'rgb(162,98,242)'
                                },
                                 data:[0, 0, 0, 200, 0, 0, 0]
                            },
                             {
                                name:'直播',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(98,213,242)'
                                },
                                 data:[0, 0, 0, 0, 150, 0, 0]
                            },
                             {
                                name:'生活服务',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(254,103,44)'
                                },
                                 data:[0, 0, 0, 0, 0, 100, 0]
                            },
                             {
                                name:'其他',
                                type:'bar',
                                barGap:'-100%',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(105,242,98)'
                                },
                                 data:[0, 0, 0, 0, 0, 0, 50]
                            },
                          
                            {
                                xAxisIndex:1,
                                yAxisIndex:1,
                                type:'bar',
                                barWidth: 10,
                                 itemStyle: {
                                    color:'rgb(44,123,254)'
                                },
                                data:[390, 330, 280, 220, 160, 100, 40]
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
            this.setChart ();
        },
    }
</script>

<style lang="less" scoped>
    
</style>