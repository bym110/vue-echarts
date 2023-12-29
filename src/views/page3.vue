<template>
    <Row class="page3">
        <Col :span="7">
            <div class="left">
                <span class='title'><span class="title-text">模块一分析</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
                <div class="left1" style="height:50%;">
                    <div style="height:65%;">
                        <chart1
                            id="left_1"
                            title="分析标题"
                            :data="data1"
                            ref="channelBar1"
                        ></chart1>
                        <chart2
                            id="left_2"
                            :data="data2"
                            ref="distributionSolider1"
                        ></chart2>
                    </div>
                    <div style="height: 35%;display: flex">
                        <div style="height: 100%; width: 33.33%;">
                            <pie ref="chart3" id="pie_1" :data="pieData1"></pie>
                        </div>
                        <div style="height: 100%; width: 33.33%;">
                            <pie ref="chart3" id="pie_3" :data="pieData2"></pie>
                        </div>
                        <div style="height: 100%; width: 33.33%;">
                            <pie ref="chart3" id="pie_2" :data="pieData3"></pie>
                        </div>
                    </div>
                </div>
                <div class="left1" style="height:28%;">
                    <chart3 ref="redPocket"></chart3>
                </div>
                <div style="height:22%;">
                    <div style="height:100%;">
                        <chart1
                            id="left_5"
                            title="分析标题2"
                            :data="data3"
                            ref="channelBar2"
                        ></chart1>
                        <chart2
                            id="left_6"
                            :data="data4"
                            ref="distributionSolider2"
                        ></chart2>
                    </div>
                    <!--                        <div style="height:45%;"></div>-->
                </div>
            </div>
        </Col>
        <Col :span="10" style="padding:0 1%;">
            <div class="center-top">
                <china-map ref="chinaMap"></china-map>
            </div>
            <div class="center-bottom">
                <span class='title'><span class="title-text">模块二分析</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
                <Row class="bottom-radars">
                    <Col span="6">
                        <radar
                            id='bottom_1_1'
                            :data=data5
                            ref="chart1"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_2'
                            :data=data6
                            ref="chart2"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_3'
                            :data=data7
                            ref="chart3"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_4'
                            :data=data8
                            ref="chart4"
                        ></radar>
                    </Col>
                </Row>
                <Row class="bottom-bars">
                    <Col span="6">
                        <chart4
                            id="bottom_2_1"
                            :data="data9"
                            ref="chart5"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_2"
                            :data="data10"
                            ref="chart6"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_3"
                            :data="data11"
                            ref="chart7"
                        ></chart4>
                    </Col>
                    <Col span="6">
                        <chart4
                            id="bottom_2_4"
                            :data="data12"
                            ref="chart8"
                        ></chart4>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col :span="7">
            <div class="right-1">
                <div class="right1-1">
                    <span class='title'><span class="title-text">模块三分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <chart5 ref='webcastsRisk'></chart5>
                </div>
            </div>
            <div class="right-1">
                <div class="right1-1">
                    <span class='title'><span class="title-text">模块四分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <chart6 ref='deviceSafeRisk'></chart6>
                </div>
            </div>
            <div class="right-2">
                <div class="right1-1">
                    <span class='title'><span class="title-text">模块五分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="circular">
                        <div class="canvas">
                            <div class="subtitle">标题1</div>
                            <div class="canvasList">
                                <chart7
                                    id='canvas_1'
                                    title="分类1"
                                    color='#00CCFF'
                                    ref="ring1"
                                ></chart7>
                                <chart7
                                    id='canvas_2'
                                    title="分类2"
                                    color='#EDCE43'
                                    ref="ring2"
                                ></chart7>
                                <chart7
                                    id='canvas_3'
                                    title="分类3"
                                    color='#F83552'
                                    ref="ring3"
                                ></chart7>
                            </div>
                        </div>
                        <chart8 ref="hotWords"></chart8>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
const chinaMap  = () => import('./components/page3/chinaMap');
const pie = ()=> import('./components/pie');
const radar = ()=> import('./components/radar');
const chart1 = ()=> import('./components/page3/chart1');
const chart2 = ()=> import('./components/page3/chart2');
const chart3 = ()=>import('./components/page3/chart3');
const chart4 = ()=> import('./components/page3/chart4');
const chart5 = ()=> import('./components/page3/chart5');
const chart6 = ()=> import('./components/page3/chart6');
const chart7 = ()=> import('./components/page3/chart7');
const chart8 =() => import('./components/page3/chart8');

export default {
    name: 'page3',
    components: {
        chinaMap,
        chart1,
        chart2,
        pie,
        chart3,
        radar,
        chart4,
        chart5,
        chart6,
        chart7,
        chart8
    },
    data() {
        return {
            //分析标题数据
            data1: [
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '23%',
                    data: {name: "数据1", value: 45, color: '#0E4CFF'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '39%',
                    data: {name: "数据2", value: 60, color: '#B405FD'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '56%',
                    data: {name: "数据3", value: 12, color: '#FE9900'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '72%',
                    data: {name: "数据4", value: 24, color: '#FF6600'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '88%',
                    data: {name: "数据5", value: 21, color: '#7F05FD'}

                }
            ],
            // 分析标题1数据
            data3: [
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '29%',
                    data: {name: "数据1", value: 45, color: '#0E4CFF'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '54%',
                    data: {name: "数据2", value: 60, color: '#FE9900'},
                },
                {
                    subtitle: '675人（2345次/4533元）',
                    top: '78%',
                    data: {name: "数据3", value: 12, color: '#7F05FD'},
                },
            ],
            data2: [ // 分析标题1用户排名数据
                {
                    top: '16%',
                    color: '14,73,245',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '34%',
                    color: '170,6,243',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '50%',
                    color: '254,153,0',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '68%',
                    color: '255,102,0',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '85%',
                    color: '127,5,253',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
            ],
            // 分析标题1 用户排名
            data4: [
                {
                    top: '30%',
                    color: '14,73,245',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '57%',
                    color: '254,153,0',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
                {
                    top: '83%',
                    color: '127,5,253',
                    data: [
                        {name: '王立国', value: 10},
                        {name: '李建国', value: 9},
                        {name: '董年月', value: 8},
                        {name: '高树安', value: 7},
                        {name: '李白', value: 6},
                        {name: '杜甫', value: 5},
                        {name: '刘禹锡', value: 4},
                        {name: '苏东坡', value: 3},
                        {name: '杜牧', value: 2},
                        {name: '李白', value: 1},
                    ],
                },
            ],
            // 模块二雷达图数据1
            data5: {
                title: '雷达图数据1',
                position: ['5%', '14%'],
                center: ['50%', '60%'],
                indicator: [
                    {text: '分类1'},
                    {text: '分类2'},
                    {text: '分类3'},
                    {text: '分类4'},
                    {text: '分类5'},
                    {text: '分类6'}
                ],
                data: [
                    {
                        name: '数值1',
                        color: '#0DE4EE',
                        value: [100, 8, 0.40, -80, 2000, 345]
                    },
                    {
                        name: '数值2',
                        color: '#0D88F3',
                        value: [60, 5, 0.30, -100, 1500, 232]
                    }
                ]
            },
            // 模块二雷达图数据2
            data6: {
                title: '雷达图数据2',
                position: ['5%', '14%'],
                center: ['50%', '60%'],
                indicator: [
                    {text: '分类1'},
                    {text: '分类2'},
                    {text: '分类3'},
                    {text: '分类4'},
                    {text: '分类5'},
                    {text: '分类6'},
                    {text: '分类7'},
                    {text: '分类8'},
                ],
                data: [
                    {
                        name: '数值1',
                        color: '#6514FF',
                        value: [100, 8, 0.40, -80, 2000, 345, 12, 654]
                    },
                    {
                        name: '数值2',
                        color: '#B370FD',
                        value: [60, 5, 0.30, -100, 1500, 232, 432, 43]
                    }
                ]
            },
            // 模块二雷达图数据3
            data7: {
                title: '雷达图数据3',
                position: ['5%', '14%'],
                center: ['50%', '60%'],
                indicator: [
                    {text: '分类1'},
                    {text: '分类2'},
                    {text: '分类3'},
                    {text: '分类4'},
                    {text: '分类5'},
                    {text: '分类6'},
                    {text: '分类7'},
                    {text: '分类8'},
                    {text: '分类9'},
                    {text: '分类10'},
                    {text: '分类11'},
                    {text: '分类12'},
                ],
                data: [
                    {
                        name: '数值1',
                        color: '#0096FE',
                        value: [100, 8, 0.40, -80, 2000, 345, 123, 21, 34, 54, 431, 876]
                    },
                    {
                        name: '数值2',
                        color: '#9EEAFF',
                        value: [60, 5, 0.30, -100, 1500, 232, 78, 32, 567, 43, 765, 432,]
                    }
                ]
            },
            // 模块二雷达图数据4
            data8: {
                title: '雷达图数据4',
                position: ['5%', '14%'],
                center: ['50%', '60%'],
                indicator: [
                    {text: '分类1'},
                    {text: '分类2'},
                    {text: '分类3'},
                    {text: '分类4'},
                    {text: '分类5'},
                    {text: '分类6'},
                ],
                data: [
                    {
                        name: '分类1',
                        color: '#FD9800',
                        value: [100, 8, 0.40, -80, 2000, 345],
                    },
                    {
                        name: '分类2',
                        color: '#FDC673',
                        value: [60, 5, 0.30, -100, 1500, 232]
                    }
                ]
            },
            // 模块二柱图数据1
            data9: {
                title: '柱图数据1',
                data: [
                    {
                        name: '人数',
                        color: '#00CCFF',
                        value: ['112', '212', '42', '232', '123', '67'],
                    },
                    {
                        name: '次数',
                        color: '#142AFE',
                        value: ['112', '212', '42', '232', '123', '67']
                    }
                ]
            },
            // 模块二柱图数据1
            data10: {
                title: '柱图数据2',
                data: [
                    {
                        name: '个数',
                        color: '#6514FF',
                        value: ['112', '212', '42', '232', '123', '67'],
                    },
                    {
                        name: '条数',
                        color: '#B370FD',
                        value: ['112', '212', '42', '232', '123', '67']
                    }
                ]
            },
            data11: {
                title: '柱图数据3',
                data: [
                    {
                        name: '主动',
                        color: '#05467D',
                        value: ['112', '212', '42', '232', '123', '67'],
                    },
                    {
                        name: '被动',
                        color: '#52B8FF',
                        value: ['112', '212', '42', '232', '123', '67']
                    }
                ]
            },
            data12: {
                title: '柱图数据4',
                data: [
                    {
                        name: '个数',
                        color: '#FD9800',
                        value: ['112', '212', '42', '232', '123', '67'],
                    },
                    {
                        name: '人数',
                        color: '#FDC673',
                        value: ['112', '212', '42', '232', '123', '67']
                    }
                ]
            },
            pieData1: {// 饼图数据1
                title: "TOP数据1",
                color: '#2C7BFE',

                data: [
                    {
                        value: 60,
                        name: '分类1',
                        itemStyle: {
                            color: '#1456FE'
                        }

                    },
                    {
                        value: 20,
                        name: '分类2',
                        itemStyle: {
                            color: '#00CCFF'
                        }
                    },
                    {
                        value: 80,
                        name: '分类3',
                        itemStyle: {
                            color: '#142AFE'
                        }
                    },
                    {
                        value: 40,
                        name: '分类4',
                        itemStyle: {
                            color: '#1493FE'
                        }
                    },
                    {
                        value: 40,
                        name: '分类5',
                        itemStyle: {
                            color: '#252448'
                        }
                    }
                ],
            },
            pieData2: {// 饼图数据1
                title: "TOP数据2",
                color: '#2C7BFE',

                data: [
                    {
                        value: 60,
                        name: '分类1',
                        itemStyle: {
                            color: '#142AFE'
                        }

                    },
                    {
                        value: 20,
                        name: '分类2',
                        itemStyle: {
                            color: '#1493FE'
                        }
                    },
                    {
                        value: 80,
                        name: '分类3',
                        itemStyle: {
                            color: '#252448'
                        }
                    },
                    {
                        value: 40,
                        name: '分类4',
                        itemStyle: {
                            color: '#00CCFF'
                        }
                    },
                    {
                        value: 40,
                        name: '分类5',
                        itemStyle: {
                            color: '#1456FE'
                        }
                    }
                ],
            },
            pieData3: {// 饼图数据1
                title: "TOP数据3",
                color: '#2C7BFE',

                data: [
                    {
                        value: 60,
                        name: '分类1',
                        itemStyle: {
                            color: '#1493FE'
                        }

                    },
                    {
                        value: 20,
                        name: '分类2',
                        itemStyle: {
                            color: '#142AFE'
                        }
                    },
                    {
                        value: 80,
                        name: '分类3',
                        itemStyle: {
                            color: '#1456FE'
                        }
                    },
                    {
                        value: 40,
                        name: '分类4',
                        itemStyle: {
                            color: '#00CCFF'
                        }
                    },
                    {
                        value: 40,
                        name: '分类5',
                        itemStyle: {
                            color: '#252448'
                        }
                    }
                ],
            },
            resizeFn: null
        }
    },
    mounted() {
        this.resizeFn = this.$debounce(()=> {
            // 通过捕获系统的onresize事件触发我们需要执行的事件
           this.$refs.channelBar1.setChart();
           this.$refs.distributionSolider1.setChart();
           this.$refs.channelBar2.setChart();
           this.$refs.distributionSolider2.setChart();
            //this.$refs.pies.setPies();
           this.$refs.redPocket.setPocket();
           this.$refs.webcastsRisk.setWebcasts();
           this.$refs.deviceSafeRisk.setDeviceSafe();
           this.$refs.ring1.drawRing();
           this.$refs.ring2.drawRing();
           this.$refs.ring3.drawRing();
            for (let i = 1; i < 9; i++) {
               this.$refs['chart' + i].setChart()

            }
           this.$refs.chinaMap.setMap();
           this.$refs.hotWords.setChart();

        }, 500)
        window.addEventListener('resize', this.resizeFn)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeFn)
    }
}
</script>

<style lang="less" scoped>
.page3 {
    height: 100%;
    width: 100%;
    padding: 14px 20px 20px;
    background: #03044A;
    overflow: hidden;
    .ivu-col {
        height: 100%;
    }

    .left, .right1-1, .center-bottom {
        height: 100%;
        border: 1px solid #0D2451;
        position: relative;
        background: #151456;

        #left_5 {
            height: 100%;
            width: 45%;
            float: left;
        }

        #left_6 {
            height: 100%;
            width: 55%;
            float: left;
        }

        .circular {
            height: 100%;

            .canvas {
                height: 100%;
                width: 30%;
                float: left;

                .subtitle {
                    font-size: 12px;
                    font-weight: bold;
                    color: #fff;
                    height: 25px;
                    padding: 10px 0 ;
                    text-align: center;
                }

                .canvasList {
                    height: calc(~'100% - 25px');
                    text-align: center
                }
            }
        }

        .left1 {
            border-bottom: 1px solid #0D2451;
            background: #151456;
        }

        .title {
            position: absolute;
            display: inline-block;
            color: #6EDDF1;
            border: 2px solid #6EDDF1;
            height: 18px;
            padding: 0 2px;
            left: 50%;
            transform: translate(-50%, -50%);

            .title-text {
                position: relative;
                font-size: 16px;
                background: #09102E;
                display: inline-block;
                padding: 0 4px;
                transform: translateY(-5px);
            }
        }
    }

    .center-top {
        height: 60%;
    }

    .center-bottom {
        height: 40%;

        .bottom-radars {
            height: 55%;
        }

        .bottom-bars {
            height: 45%;
        }
    }

    .right-1 {
        height: 30%;

        .right1-1 {
            height: 92%;
        }
    }

    .right-2 {
        height: 40%;

    }
}
</style>
