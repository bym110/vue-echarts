<template>
    <div class="chinaMap"></div>
</template>

<script>
import "@/lib/china.js"

export default {
    name: '',
    data() {
        return {
            myChart: null
        }
    },
    methods: {
        setMap() {
            var data = [
                {name: '北京', value: 1176},
                {name: '上海', value: 2765},
                {name: '天津', value: 509},
                {name: '重庆', value: 610},
                {name: '黑龙江', value: 1966},
                {name: '湖北', value: 68309},
                {name: '台湾', value: 16451},
                {name: '香港', value: 12368},
                {name: '河北', value: 1435},
                {name: '河南', value: 1594},
                {name: '安徽', value: 1008},
                {name: '江苏', value: 1603},
                {name: '浙江', value: 1497},
                {name: '福建', value: 1314},
                {name: '广东', value: 3247},
                {name: '湖南', value: 1197},
                {name: '四川', value: 1254},
                {name: '云南', value: 1607},
                {name: '吉林', value: 579},
                {name: '内蒙古', value: 613},
                {name: '辽宁', value: 515},
                {name: '山东', value: 990},
                {name: '山西', value: 263},
                {name: '陕西', value: 701},
                {name: '甘肃', value: 344},
                {name: '新疆', value: 981},
                {name: '宁夏', value: 122},
                {name: '江西', value: 951},
                {name: '贵州', value: 159},
                {name: '广西', value: 355},
                {name: '海南', value: 190},
                {name: '青海', value: 30},
                {name: '澳门', value: 77},
                {name: '西藏', value: 1},

            ];
            const regions = data.map(item=> {
                return {
                    name: item.name,
                    itemStyle: {
                        areaColor: '#2043AA'
                    },
                    emphasis: {
                        itemStyle : {
                            areaColor: '#2043AA'
                        }
                    }
                }
            })
            let option = {
                title: [
                    {
                        text: "现有确诊 {a| 3204} \n {b|较昨日} {c| +6}",
                        top: 0,
                        left: '7%',
                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#E64546',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#E64546'
                                }
                            }
                        }
                    },
                    {
                        text: '现有疑似 {a| 2} \n {b|较昨日} {c| +1}',
                        top: 0,
                        left: '40%',

                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#FF9985',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#FF9985'
                                }
                            }
                        }
                    },
                    {
                        text: '境外输入 {a| 9794} \n {b|较昨日} {c| +15}',
                        top: 0,
                        right: '7%',
                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#476DA0',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#476DA0'
                                }
                            }
                        }
                    },
                    {
                        text: '累计确诊 {a| 126836} \n {b|较昨日} {c| +60}',
                        top: '14%',
                        left: '7%',
                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#B80909',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#B80909'
                                }
                            }
                        }
                    },
                    {
                        text: '累计治愈 {a| 117934} \n {b|较昨日} {c| +54}',
                        top: '14%',
                        left: '40%',
                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#10AEB5',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#10AEB5'
                                }
                            }
                        }
                    },
                    {
                        text: '累计死亡 {a| 5997} \n {b|较昨日} {c| +1}',
                        top: '14%',
                        right: '7%',

                        textStyle: {
                            color: '#6dd0e3',
                            fontSize: 16,
                            fontWeight: 'normal',
                            rich: {
                                a: {
                                    color: '#4D5054',
                                    fontSize: 16
                                },
                                b: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: '#163794'
                                },
                                c: {
                                    fontSize: 12,
                                    color: '#4D5054'
                                }
                            }
                        }
                    }

                ],
                visualMap: {
                    left: 'right',
                    type: 'piecewise',
                    pieces: [
                        {gte: 0, lte: 9, label: '0-9', color: '#FFE5DB'},
                        {gte: 10, lte: 99, label: '10-99', color: '#FF9985'},
                        {gte: 100, lte: 999, label: '10-999', color: '#F57567'},
                        {gte: 1000, lte: 9999, label: '1000-9999', color: '#E64546'},
                        {gte: 10000, label: '10000', color: '#B80909'},
                    ],
                    showLabel: true,
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    show: true,
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    }
                },
                geo: {
                    map: 'china',
                    top: '20%',
                    label: {
                        show: true,
                        color: '#6dd0e3',
                        fontSize: 10
                    },
                    roam: false,
                    itemStyle: {
                        areaColor: '#2043AA',
                        borderColor: '#676e6f',
                    },
                    regions: regions
                },
                series: [
                    {
                        name: '累计确诊人数',
                        type: 'map',
                        label: {
                            position: 'center',
                            show: true
                        },
                        geoIndex: 0,
                        data: data
                    },
                ]
            };
            if (!this.myChart) this.myChart = this.$echarts(this.$el);

            this.myChart.clear();
            this.myChart.resize()
            this.myChart.setOption(option);
        },
    },
    mounted() {
        this.setMap();
    }
}
</script>

<style lang="less" scoped>
.chinaMap {
    height: 100%;
}

</style>