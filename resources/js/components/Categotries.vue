<template>
<div>
  <ul class="menu-vertical sf-arrows">
                      <!-- <li class="item-lead"><a href="#">Daily offers</a></li> -->
                      <!-- <li class="item-lead"><a href="#">Gift Ideas</a></li> -->
                      <li v-for="categotry in categotries.data" :key="categotry.id">
                        <a href="#">{{categotry.title}}</a>
                      </li>
                      <!-- <li><a href="#">Lighting</a></li>
                      <li><a href="#">Sofas & Sleeper sofas</a></li>
                      <li><a href="#">Storage</a></li>
                      <li><a href="#">Armchairs & Chaises</a></li>
                      <li><a href="#">Decoration </a></li>
                      <li><a href="#">Kitchen Cabinets</a></li>
                      <li><a href="#">Coffee & Tables</a></li>
                      <li><a href="#">Outdoor Furniture </a></li> -->
</ul>
</div>
</template>
<script>
  export default {
    data(){
      return{
          categotries:{},
      }
    },
    created() {
        this.getCategotries();
        // console.log(this.$store.state.userToken);

        // console.log(this.categotries);
     },
      methods: {
          getCategotries(){
              axios.get('https://elnamat.com/poems/eshop/api/buyers/categotries')
              .then(res => {
                // console.log('Component mountvvvv.');
                // console.log(res.data.data);
                  this.categotries = res.data;
              })
              .then(err => console.log(err))
          }
     }
  }
</script>
