<template>
    <div class="page1">
        <Row class="listTop">
            <Col span="7">
                <div class="leftTop">
                    <span class='title'><span class="title-6">模块一分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="left1">
                        <double-area :selectRangeDate="selectRangeDate" ref='chart1'></double-area>
                    </div>
                    <div class="left2">
                        <web-bar ref="chart2" :data="data1"></web-bar>
                        <div style="width: 40%;float: left;height: 100%;">
                            <pie ref="chart3" id="left_2_2" :data="data2"></pie>
                        </div>

                    </div>
                    <div class="left3">
                        <web-bar ref="chart4" :data="data3"></web-bar>
                        <div style="width: 40%;float: left;height: 100%;">
                            <pie ref="chart5" id="left_3_2" :data="data4"></pie>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="10">
                <radar-part ref="chart6"></radar-part>
            </Col>
            <Col span="7">
                <div class="rightTop-1">
                    <span class='title'><span class="title-8">世界地图分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <world-map ref="chart7"></world-map>
                </div>
                <div class="rightTop-2">
                    <span class='title'><span class="title-6">模块六分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="rightTop-list">
                        <div class="list">
                            <popular-bar ref="chart8"></popular-bar>
                        </div>
                        <div class="list">
                            <ring ref="chart9" :data="data5"></ring>
                        </div>
                        <div class="list">
                            <ring ref="chart10" :data="data6"></ring>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row class="listBottom">
            <Col span='9'>
                <div class="content">
                    <span class="title"><span class="title-6">模块二分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <Row class="topLine">
                        <Col span="24">
                            <lines ref="chart11"></lines>
                        </Col>
                    </Row>
                    <Row class="bottomPie">
                        <Col span="12">
                            <pie-ring ref="chart12" :data="data7"></pie-ring>
                        </Col>
                        <Col span="12">
                            <pie-ring ref="chart13" :data="data8"></pie-ring>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span='4'>
                <div class="content">
                    <span class="title"><span class="title-6">模块三分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="behavior">
                        <area-chart style="height: 55%" ref="chart14" :select-range-date="selectRangeDate"
                                    :config="configData9"></area-chart>
                        <colors-bar ref="chart15" :data="colorsData"></colors-bar>
                    </div>
                </div>
            </Col>
            <Col span='4'>
                <div class="content">
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <span class="title"><span class="title-6">模块四分析</span></span>
                    <funnel ref="chart16"></funnel>
                </div>
            </Col>
            <Col span='7'>
                <div class="content">
                    <span class="title"><span class="title-6">模块五分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="appUse">
                        <line-bar ref="chart17"></line-bar>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
const radarPart = () => import('./components/page1/radarPart.vue');
const doubleArea = () => import('./components/page1/doubleArea.vue');
const webBar = () => import('./components/page1/webBar.vue');
const pie = () => import('./components/pie')
const worldMap = () => import('./components/page1/worldMap');
const ring = () => import('./components/page1/ring');
const popularBar = () => import('./components/page1/popularBar');
const lines = () => import('./components/page1/lines');
const pieRing = () => import('./components/page1/pieRing');
const colorsBar = () => import('./components/page1/colorsBar');
const funnel = () => import('./components/page1/funnel');
const lineBar = () => import('./components/page1/lineBar');
const areaChart = () => import('./components/areaChart');

export default {
    name: 'page1',
    props: {
        selectRangeDate: Array
    },
    components: {
        radarPart,// 中心
        doubleArea, // 面积图
        webBar, // 柱图
        pie, // 饼图
        worldMap, // 世界地图
        ring, // 圆环
        popularBar, // 柱图
        lines, //折线图
        pieRing, // 饼环图
        colorsBar,// 柱图
        funnel, // 漏斗图
        lineBar, //柱图
        areaChart // 面积图
    },
    data() {
        return {

            data1: { // 柱图数据1
                name: '柱图数据1',
                number: '100次',
                data: ["排行1", "排行2", "排行3", "排行4", "排行5"],
                color: '192,35,42',
                value: [60, 50, 40, 30, 20]
            },
            data2: {// 饼图数据1
                title: "饼图数据1分类占比",
                color: '#BE232A',

                data: [
                    {
                        value: 60,
                        name: '分类1',
                        itemStyle: {
                            color: '#a262f2'
                        }

                    },
                    {
                        value: 20,
                        name: '分类2',
                        itemStyle: {
                            color: '#2ca8fe'
                        }
                    },
                    {
                        value: 80,
                        name: '分类3',
                        itemStyle: {
                            color: '#feac2c'
                        }
                    },
                    {
                        value: 40,
                        name: '分类4',
                        itemStyle: {
                            color: '#c0232a'
                        }
                    },
                    {
                        value: 40,
                        name: '分类5',
                        itemStyle: {
                            color: '#2cd9fe'
                        }
                    },
                    {
                        value: 40,
                        name: '分类6',
                        itemStyle: {
                            color: '#ff787e'
                        }
                    },
                    {
                        value: 30,
                        name: '其他',
                        itemStyle: {
                            color: '#252448'
                        }
                    }
                ],
            },
            data3: { // 柱图数据2
                name: '柱图数据2',
                number: '100次',
                data: ["排行1", "排行2", "排行3", "排行4", "排行5"],
                color: '40,112,232',
                value: [6, 5, 4, 3, 2]
            },
            // 饼图数据2
            data4: {
                title: "饼图数据2分类占比",
                color: '#2C7BFE',
                data: [
                    {
                        value: 20,
                        name: '分类1',
                        itemStyle: {
                            color: '#feed2c'
                        }

                    },
                    {
                        value: 20,
                        name: '分类2',
                        itemStyle: {
                            color: '#2ca8fe'
                        }
                    },
                    {
                        value: 40,
                        name: '分类3',
                        itemStyle: {
                            color: '#feac2c'
                        }
                    },
                    {
                        value: 40,
                        name: '分类4',
                        itemStyle: {
                            color: '#2c7bfe'
                        }
                    },
                    {
                        value: 100,
                        name: '其他',
                        itemStyle: {
                            color: '#252448'
                        }
                    }
                ],
            },
            // 环形图数据
            data5: {
                title: '环形图数据1',
                data: [
                    {
                        value: 335,
                        name: '模拟1',
                        itemStyle: {
                            color: '#252448'
                        }
                    },
                    {
                        value: 310,
                        name: '模拟2',
                        itemStyle: {
                            color: '#2ca8fe'
                        }
                    },
                    {
                        value: 234,
                        name: '模拟3',
                        itemStyle: {
                            color: '#feed2c'
                        }
                    },
                    {
                        value: 135,
                        name: '其他',
                        itemStyle: {
                            color: '#2871ea'
                        }
                    },
                    {
                        value: 200,
                        name: '模拟4',
                        itemStyle: {
                            color: '#fe672c'
                        }
                    }
                ]
            },
            // 环形数据2
            data6: {
                title: '热词传播次数',
                data: [
                    {
                        value: 335,
                        name: '模拟1',
                        itemStyle: {
                            color: '#69f262'
                        }
                    },
                    {
                        value: 310,
                        name: '模拟2',
                        itemStyle: {
                            color: '#c0232a'
                        }
                    },
                    {
                        value: 234,
                        name: '模拟3',
                        itemStyle: {
                            color: '#2cfcfe'
                        }
                    },
                    {
                        value: 135,
                        name: '其他',
                        itemStyle: {
                            color: '#252448'
                        }
                    },
                    {
                        value: 200,
                        name: '模拟4',
                        itemStyle: {
                            color: '#a262f2'
                        }
                    }
                ]
            },
            data7: {
                title: '收支笔数及占比',
                data: [
                    {
                        value: 70,
                        name: '收入',
                        itemStyle: {
                            color: '#c0232a'
                        }
                    },
                    {
                        value: 60,
                        name: '支出',
                        itemStyle: {
                            color: '#2870e8'
                        }
                    },
                ],
                data1: [
                    {
                        value: 40,
                        name: '红包',
                        itemStyle: {
                            color: '#c0232a'
                        }
                    },
                    {
                        value: 60,
                        name: '转账',
                        itemStyle: {
                            color: '#2870e8'
                        }
                    },
                ]
            },
            data8: {
                title: '收支金额及占比',
                data: [
                    {
                        value: 80,
                        name: '收入',
                        itemStyle: {
                            color: '#c0232a'
                        }
                    },
                    {
                        value: 60,
                        name: '支出',
                        itemStyle: {
                            color: '#2870e8'
                        }
                    },
                ],
                data1: [
                    {
                        value: 40,
                        name: '红包',
                        itemStyle: {
                            color: '#c2232a'
                        }
                    },
                    {
                        value: 60,
                        name: '购物',
                        itemStyle: {
                            color: '#fe672c'
                        }
                    },
                    {
                        value: 40,
                        name: '旅游',
                        itemStyle: {
                            color: '#a262f2'
                        }
                    },
                    {
                        value: 20,
                        name: '其他',
                        itemStyle: {
                            color: '#2870e8'
                        }
                    },
                    {
                        value: 80,
                        name: '交通',
                        itemStyle: {
                            color: '#feed2c'
                        }
                    }
                ]
            },
            // 交友分析面积图
            configData9: {
                title: '【交友分析】',
                color: '#75deef',
                name: ['（人）', '（人）'],
                data: [
                    {
                        name: '新增好友数',
                        color: ['#feed2c', '#353103'],
                        data: [240, 132, 101, 134, 90, 170, 110]
                    },
                    {
                        name: '好友总数',
                        color: ['#2871ea', '#0a1b41'],
                        data: [20, 102, 101, 134, 190, 150, 120]
                    },
                    {
                        name: '新增群数',
                        color: ['#935adf', '#230f3e'],
                        data: [100, 32, 101, 134, 150, 110, 180]
                    },
                    {
                        name: '群总数',
                        color: ['#e65f2d', '#551f0b'],
                        data: [120, 122, 141, 144, 60, 220, 120]
                    }
                ]
            },
            // 交友方式柱图
            colorsData: [
                {
                    itemStyle: {
                        color: "#2c7bfe",

                    },
                    name: '漂流瓶',
                    value: 255
                },
                {
                    itemStyle: {
                        color: "#c2232a",

                    },
                    name: '附近的人',
                    value: 212
                },
                {
                    itemStyle: {
                        color: "#feed2c",

                    },
                    name: '雷达',
                    value: 155
                },
                {
                    itemStyle: {
                        color: "#a262f2",

                    },
                    name: '摇一摇',
                    value: 55
                },
                {
                    itemStyle: {
                        color: "#62d5f2",
                    },
                    name: '搜索',
                    value: 80
                },
                {
                    itemStyle: {
                        color: "#fe672c",
                    },
                    name: '群聊',
                    value: 160
                },
                {
                    itemStyle: {
                        color: "#69f262",
                    },
                    name: '扫一扫',
                    value: 114
                },
                {
                    itemStyle: {
                        color: "#2ca8fe",
                    },
                    name: '其他',
                    value: 20
                },
            ],
            resizeFn: null
        }
    },
    methods: {},
    watch: {
        selectRangeDate: function () {
            for (let i = 1; i < 18; i++) {
                this.$refs['chart' + i].setChart();
            }
        }
    },
    mounted() {
        this.resizeFn = this.$debounce(() => {
            // 通过捕获系统的onresize事件触发我们需要执行的事件
            for (let i = 1; i < 18; i++) {
                this.$refs['chart' + i].setChart();
            }
        }, 500)
        window.addEventListener('resize', this.resizeFn)

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeFn)
    }

}

</script>

<style lang="less">
.page1 {
    height: 100%;
    width: 100%;
    padding: 14px 20px 20px;
    background: #03044A;
    overflow: hidden;

    .listTop {
        height: 60%;

        .ivu-col {
            height: 100%;

            .leftTop {
                width: 100%;
                height: 100%;
                border: 1px solid #0D2451;
                position: relative;

                .left1 {
                    width: 100%;
                    height: 40%;
                }

                .left2, .left3 {
                    width: 100%;
                    height: 30%;
                    padding: 10px 0;
                }
            }

            .rightTop-1 {
                width: 100%;
                height: 55%;
                border: 1px solid #0D2451;
                position: relative;
            }

            .rightTop-2 {
                width: 100%;
                margin-top: 5%;
                height: 40%;
                border: 1px solid #0D2451;
                position: relative;

                .rightTop-list {
                    width: 100%;
                    height: 100%;

                    .list {
                        width: 30%;
                        height: 100%;
                        float: left;

                        &:first-child {
                            width: 40%;
                        }
                    }
                }
            }

        }
    }

    .listBottom {
        height: 40%;

        .ivu-col-span-9 {
            width: 33.5%;
            margin-right: 0.6667%;
        }

        .ivu-col-span-4 {
            width: 17.66667%;
            margin-right: 0.6667%;
        }

        .ivu-col {
            height: 100%;

            .content {
                margin-top: 30px;
                height: calc(~"100% - 30px");
                border: 1px solid #0D2451;
                position: relative;

                .ivu-row {
                    &.topLine {
                        height: 55%;
                    }

                    &.bottomPie {
                        height: 45%;
                    }

                    .ivu-col {
                        height: 100%;

                        .charts-list {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }

                .behavior {
                    width: 100%;
                    height: 100%;
                }

                .appUse {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
