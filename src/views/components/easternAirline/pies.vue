<template>
    <div class="pies">
        <div class="pieTitle">
            <div class="pie-title">TOP涉赌网络</div>
            <div class="pie-title">TOP涉赌应用</div>
            <div class="pie-title">TOP涉赌群</div>
        </div>
     <div id="left_3"></div>
    </div>
</template>

<style lang="less" scoped>
.pies {
    height:35%;
    .pieTitle {
        height:15%;
        .pie-title {
            width:33.3333%;
            float: left;
            text-align: center;
            color:#6BCBDD;
            font-size:9px;
            transform:scale(0.8);
            position: relative;
           
            &::before {
                 content: "";
                display: block;
                position: absolute;
                width:7px;
                height: 7px;
                border-radius: 50%;
                background: #2C7BFE;
                left:20%;
                top:30%;
            }
            &::after {
                 content: "";
                display: block;
                position: absolute;
                width:7px;
                height: 7px;
                border-radius: 50%;
                background: #2C7BFE;
                right:18%;
                top:30%;
            }

        }

    }
     #left_3 {
        height: 85%;
    }
}
</style>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods:{
            // 三个饼图
                setPies () {
                    let option = {
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series : [
                            {
                                name: 'TOP10涉赌网络',
                                type: 'pie',
                                radius : '60%',
                                center: ['17%', '50%'],
                                data:[
                                    {value:335, name:'涉黄'},
                                    {value:310, name:'涉赌'},
                                    {value:234, name:'涉毒'},
                                    {value:135, name:'涉猎'},
                                    {value:1548, name:'其他'}
                                ],
                                label:{
                                    fontSize:8,
                                    color:'#72D8E9',
                                    formatter:function(data) {
                                        return data.data.name+data.percent.toFixed(0)+"%"
                                        
                                    }
                                },
                                labelLine:{
                                    length:7,
                                    length2:4,
                                    lineStyle:{
                                        color:'#3F3F5C'
                                    }
                                },
                                itemStyle: {
                                    color: function (params){
                                                var colorList = ['#1456FE','#00CCFF','#142AFE','#1493FE','#252448'];
                                                    return colorList[params.dataIndex];
                                                },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            {
                                name: 'TOP10涉赌应用',
                                type: 'pie',
                                radius : '60%',
                                center: ['50%', '50%'],
                                data:[
                                    {value:545, name:'涉黄'},
                                    {value:210, name:'涉赌'},
                                    {value:2534, name:'涉毒'},
                                    {value:1335, name:'涉猎'},
                                    {value:1548, name:'其他'}
                                ],
                                label:{
                                    fontSize:8,
                                     formatter:function(data) {
                                        return data.data.name+data.percent.toFixed(0)+"%"
                                        
                                    },
                                    color:'#72D8E9'
                                },
                                labelLine:{
                                    length:7,
                                    length2:4,
                                    lineStyle:{
                                        color:'#3F3F5C'
                                    }
                                },
                                itemStyle: {
                                    color: function (params){
                                                var colorList = ['#142AFE','#1493FE','#252448','#00CCFF','#1456FE'];
                                                    return colorList[params.dataIndex];
                                                },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                            {
                                name: 'TOP10涉赌群',
                                type: 'pie',
                                radius : '60%',
                                center: ['82%', '50%'],
                                data:[
                                    {value:435, name:'涉黄'},
                                    {value:310, name:'涉赌'},
                                    {value:334, name:'涉毒'},
                                    {value:1135, name:'涉猎'},
                                    {value:1548, name:'其他'}
                                ],
                                label:{
                                    fontSize:8,
                                    color:'#72D8E9',
                                     formatter:function(data) {
                                        return data.data.name+data.percent.toFixed(0)+"%"
                                        
                                    }
                                },
                                labelLine:{
                                    length:7,
                                    length2:4,
                                    lineStyle:{
                                        color:'#3F3F5C'
                                    }
                                },
                                itemStyle: {
                                    color: function (params){
                                                var colorList = ['#1493FE','#142AFE','#1456FE','#00CCFF','#252448'];
                                                    return colorList[params.dataIndex];
                                                },
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            },
                        ]
                    };
                    let myChart = this.$echarts.init(document.getElementById('left_3'));
                
                    myChart.clear();
                    myChart.resize(
                        {
                            width:document.getElementById('left_3').width,
                        height:document.getElementById('left_3').heidth
                        }
                    )
                    myChart.setOption(option);
                },
        },
        mounted() {
            this.setPies();
        },
    }
</script>

