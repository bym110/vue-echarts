<template>
    <Row class="page4">
        <Col span="7">
            <div class="grid-content">
                <span class='title'><span class="title-gradient">疫情累计趋势</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
            <div class="grid-content">
                <span class='title'><span class="title-gradient">疫情新增趋势</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
            <div class="grid-content">
                <span class='title'><span class="title-gradient">疫情地区排行</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
        </Col>
        <Col span="10" class="main">
            <div>
                <china-map></china-map>
            </div>
            <div class="grid-content">
                <span class='title'><span class="title-gradient">本土和境外情况分析</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
        </Col>
        <Col span="7">
            <div class="grid-content">
                <span class='title'><span class="title-gradient">风险地区趋势</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
            <div class="grid-content">
                <span class='title'><span class="title-gradient">各地风险区占比</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
            <div class="grid-content">
                <span class='title'><span class="title-gradient">各市人员流动情况</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
            </div>
        </Col>
    </Row>
</template>

<script>
const chinaMap  = () => import('./components/page4/chinaMap');
export default {
    name: "page4",
    components: {chinaMap},
    data() {
        return {}
    },
    methods: {},
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.page4 {
    height: 100%;
    width: 100%;
    padding: 14px 20px 20px;
    background: #03044A;
    overflow: hidden;
    .ivu-col {
        height: 100%;
        display: grid;
        grid-gap: 20px;
        grid-template-rows: auto auto 33.33%;
        &.main {
            padding: 0 20px;
            grid-template-rows: auto 33.33%;
        }
        .grid-content {
            border: 1px solid #0D2451;
            position: relative;
        }
    }
}
</style>