<template>
  <div>
    {{ countDown }}

  </div>
</template>
<!-- vue time countdown -->
<!-- https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js -->
<script>
    export default {
        data () {
            return {
                countDown: 10
            }
        },
        methods: {
            countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }else{
                  window.location.pathname = "/quiz"
                }
            }
        },
        created () {
            this.countDownTimer()
        }
    }
</script>
