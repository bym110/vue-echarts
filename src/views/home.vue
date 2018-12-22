<template>
    <div class="single-page">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            key: 1
        }
    },
    methods: {
        name() {
            
        }
    },
    mounted() {
    },

}
</script>

<style lang="less" scoped>
.single-page {
    height:100%;
}
</style>
