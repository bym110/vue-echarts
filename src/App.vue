<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
html,body {
    height: 100%;
    width: 100%;
    padding:0;
    margin:0;
}
// 根据不同的大屏宽度设置根的fontsize
@media screen and (max-width: 1920px){
    html {
        font-size: 20px;
    }
}
@media screen and (max-width: 3840px) and (min-width: 1921px){
    html {
        font-size: 24px;
    }
}
#app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
