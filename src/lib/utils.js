export default {
    install: function (Vue) {
        Vue.prototype.$debounce = function ( fn,delay){
            let timer = null //借助闭包
            return function() {
                if(timer){
                    clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
                    timer = setTimeout(fn,delay)
                }else{
                    timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
                }
            }
        }
    }
}