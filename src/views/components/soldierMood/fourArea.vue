<template>
    <div style="height:55%;" :id="id"></div>
</template>

<script>
    export default {
        props:{
            id:String,
            data:Array,
            selectRangeDate:Array
        },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            setData (type) {
                
                let arr=new Array;
                switch (type) {
                    case 'x':
                         for (let i =0; i<this.selectRangeDate.length;i++) {
                            arr.push(this.selectRangeDate[i][1]+"."+this.selectRangeDate[i][2])
                        }
                        break;
                    case 's' :
                        for (let i =0; i<this.selectRangeDate.length;i++) {
                            arr.push((Math.random()*250).toFixed(0))
                        }
                        break;
                
                    default:
                        break;
                }
               
                return arr;
            },
            setOptionData () {
                let arr=[];
                
                for (let i =0;i<this.data.length;i++) {
                    let obj =  {
                        name: this.data[i].name,
                        type: 'line',
                        smooth:true,
                        symbol:"none",
                        areaStyle:{
                            opacity:1,
                            color:this.data[i].color
                        },
                        lineStyle:{
                            width:0,
                        },
                        itemStyle:{
                            color:this.data[i].color,
                        },
                        data: this.setData('s')
                    }
                    arr.push(obj)
                }
                return arr;
            },
            setChart () {
                let option = {
                    title:{
                        text:'【交友分析】',
                        textStyle:{
                            color:'#75deef',
                            fontSize:12,
                            fontWeight:'normal'
                        },
                        top:'12%',
                        left:'38%'
                    },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            backgroundColor:'#11367a',
                            textStyle:{
                                color:'#6dd0e3',
                                fontSize:10,
                            },
                            
                            formatter:"{b}<br>{a}:{c}<br>{a1}:{c1}<br>{a2}:{c2}<br>{a3}:{c3}"
                        },
                        legend:
                            {
                                top:'23%',
                                left:20,
                                itemWidth:7,
                                itemHeight:7,
                                textStyle:{
                                     color:'#75deef',
                                     fontSize:12,
                                },
                                data: [
                                    {name:'新增好友数',icon:'circle'},
                                    {name:'好友总数',icon:'circle'},
                                    {name:'新增群数',icon:'circle'},
                                    {name:'群总数',icon:'circle'}
                                ],
                            },
                        grid: 
                            {
                            top:'40%',
                            left: '3%',
                            right: '4%',
                            bottom:0,
                            containLabel: true,
                            
                        },
                        xAxis:
                            {
                            type: 'category',
                            boundaryGap:false,
                            axisLabel:{
                                interval:0,
                                color:'#75deef',
                                fontSize:9,
                                align:'center'
                            },
                            axisLine:{
                                show:true,
                                
                                lineStyle:{
                                    color:'#1a3c58',
                                    width:2,
                                }
                            },
                            axisTick:{show:false},
                             data: this.setData('x')
                            },
                        yAxis: [
                            {
                            type: 'value',
                            min:0,
                            max:300,
                             axisLine:{
                                show:true,
                                lineStyle:{
                                    color:'#1a3c58'
                                }
                            },
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
                           
                            splitLine:{show:false}
                           
                        },
                        {
                            type: 'value',
                             min:0,
                            max:300,
                             axisLine:{
                                show:true,
                                lineStyle:{
                                    color:'#1a3c58'
                                }
                            },
                            axisTick:{
                                length:3
                            },
                             axisLabel:{
                                 color:'#75deef',
                                fontSize:8,
                                formatter: function (value) {
                                        if(value==300){
                                        value='(个)';
                                        }
                                        return value;
                                        },
                                  showMaxLabel:true,
                            },
                          
                             splitLine:{show:false}
                        },
                        ],
                        series: this.setOptionData()
                    };
                        option.series[1].z =3;
                        option.series[1].areaStyle.color ={ // 颜色线性渐变
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [
                                                {
                                                    offset: 0, color: '#2870e8' // 0% 处的颜色
                                                },
                                                {
                                                    offset: .4, color: '#2870e8' // 100% 处的颜色
                                                }, {
                                                    offset: 1, color: '#0a1b41' // 100% 处的颜色
                                                }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        }
                        if (this.selectRangeDate.length>7) {
                            option.xAxis.axisLabel.interval =3;
                            option.xAxis.axisLabel.showMaxLabel =false;
                            option.xAxis.axisLabel.align ='left';
                        }
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
        watch: {
            selectRangeDate:function () {
                this.setChart ()
            }
        },
        mounted() {
            this.setChart ();
        },
    }
</script>

<style lang="less" scoped>
    
</style>