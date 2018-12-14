<template>
    <div class="radarChart" :id="id"></div>
</template>

<script>
    export default {
        props:{
            id:String,
            data:Array,
            title:String
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            setData (type) {
                let arr=[];
                let obj={};
                for(let i=0;i<this.data.length;i++) {
                    switch (type) {
                        case 'l': 
                            obj={
                                name:this.data[i].name,
                                icon:'circle'
                            }
                            break;
                        case 's': 
                            obj={
                                value: this.data[i].data,
                                name: this.data[i].name,
                                symbol: 'none',
                                itemStyle:{
                                     normal: {
                                        color:this.data[i].color
                                    }
                                 },
                                lineStyle: {
                                    normal: {
                                        color:this.data[i].color
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    arr.push(obj);
                }
                return arr;
            },
            // 聊天分析
        setChart () {
            let option ={
                title: {
                    left:'center',
                    top:'8%',
                    text: this.title,
                    textStyle:{
                        color:"#fff",
                        fontSize:10,
                        
                    }
                },
               legend: {
                    data:this.setData('l'),
                    left:"11%",
                    bottom:"5%",
                    itemWidth:7,
                    itemHeight:7,
                    textStyle:{
                       color:'#0DF5F8',
                       fontSize:9,
                    }
                },
                radar: [
                    {
                        indicator: [
                            { text: '一部' },
                            { text: '二部' },
                            { text: '三部' },
                            { text: '四部' },
                            { text: '五部' },
                            { text: '六部' },
                        ],
                        center: ['50%', '50%'],
                        radius: "55%",
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'circle',
                        name: {
                            formatter:'{value}',
                            fontSize:9,
                            padding: -10,
                            textStyle: {
                                color:'#0CE7EA'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(14,102,188, 1)',
                                 'rgba(14,102,188, 0.7)',
                                'rgba(14,102,188, 0.4)', 'rgba(14,102,188, .2)'],
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(14,102,188, 0.5)'
                            }
                        },
                        splitLine: {
                            show:false,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    },
                ],
                series: [
                    {
                        name: '雷达图',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: this.setData('s')
                    }
                ]
            };
            if (this.data.length>1) {
                option.legend.left='11%';
            }else {
                 option.legend.left='35%';
            }
            let myChart = this.$echarts.init(document.getElementById(this.id));
           
            myChart.clear();
            myChart.resize(
                {
                    width:document.getElementById(this.id).offsetWidth,
                height:document.getElementById(this.id).offsetHidth
                }
            ),
          
              myChart.setOption(option);
        },
        },
        mounted() {
            this.setChart ();
        }
    }
</script>

<style lang="less" scoped>
    .radarChart {
        width: 100%;
        height: 100%;
    }
</style>