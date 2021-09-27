<template>
    <div class="ring">
        <canvas :id="id"></canvas>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        color: String
    },
    name: '',
    data() {
        return {}
    },
    methods: {
        drawRing() {
            var canvas = document.getElementById(this.id);
            var context = canvas.getContext('2d');
            canvas.width = this.$el.offsetWidth;
            canvas.height = this.$el.offsetHeight;
            context.lineWidth = 1;
            context.strokeStyle = "#16417F";
            context.save();
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 6, 0, 2 * Math.PI, false);
            context.stroke();
            context.restore();
            context.save();
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 12, 0, 2 * Math.PI, false);
            context.stroke();
            context.restore();
            var percent1 = 60;
            var percent2 = 60;
            var angle1 = percent1 * 3.6 - 90;
            var angle2 = percent2 * 3.6 - 60;
            context.lineWidth = 4;

            context.lineCap = 'round';
            context.save();
            context.strokeStyle = "#035EFF";
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 6, -Math.PI / 2, angle1 * Math.PI / 180, false);
            context.stroke();
            context.restore();
            context.save();
            context.beginPath();
            context.strokeStyle = this.color;
            context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 12, -Math.PI / 6, angle2 * Math.PI / 180, false);
            context.stroke();
            context.restore();
            context.save();
            context.font = '10px Microsoft YaHei';
            context.fillStyle = '#fff';
            if (this.title.length > 4) {
                context.fillText(this.title, canvas.width / 2 - 25, canvas.height / 2 + 3);
            } else {
                context.fillText(this.title, canvas.width / 2 - 20, canvas.height / 2 + 3);
            }

            context.restore();
        },
    },
    mounted() {
        this.drawRing();
    },
}
</script>

<style lang="less" scoped>
.ring {
    width: 100%;
    height: 33.33333%;
    text-align: center;
}
</style>