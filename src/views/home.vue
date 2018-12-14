<template>
    <div class="single-page">
        <div class="banner">
           <div class="banner-bg">
               <!--<img src='../assets/logo.png' alt="">-->
                
           </div>
           <div class='btn'>
                    <a @click="$router.push({name:'mobileMaket'})">昨日</a>
                    <a @click="$router.push({name:'map'})">近一周</a>
                    <a @click="$router.push({name:'soldierMood'})">近一月</a>
                    <a @click="$router.push({name:'easternAirline'})">近两月</a>
                </div>
        </div>
        <div class="page" >
            <router-view></router-view>
        </div>
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
    position: relative;
    .banner {
        width: 100%;
        position: absolute;
        text-align: center;
        height:80px;
        .banner-bg {
             position: relative;
            display: inline-block;
            font-size: 24px;
            color: white;
            /*&::before {*/
                /*content: '';*/
                /*display: inline-block;*/
                /*width:400px;*/
                /*left:-40px;*/
                /*top:25px;*/
                /*position: absolute;*/
                /*z-index: 1;*/
               /*right:0;bottom:0;*/
                /*background:rgba(255,255,255,0);*/
                /*border: 1px solid #fff;*/
                /*border-top: 0 ;*/
                /*transform: perspective(.5em) rotateX(-5deg);*/
            /*}*/

        }
        img {
            margin-top: 10px;
        }
        .btn {
            margin: 20px 20px 0 0;
            font-size: 16px;
            float: right;
            a {
                margin :0 10px;
            }
        }
    }
    .page {
        height:100%;
    }
}
</style>
