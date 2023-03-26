<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      created(){
          this.updateToken();
          console.log(this.$store.state.userToken);

      },
      methods:{
         updateToken(){
           let token =JSON.parse(localStorage.getItem('userToken'));
           this.$store.commit('setUserToken',token)
         },

         logout(){
             this.$store.commit('logout')
         }
      },
      computed:{
        isLogged(){
            return this.$store.getters.isLogged
        },
        isAdmin(){
            return this.$store.getters.isAdmin
        }
      }
    }
</script>
