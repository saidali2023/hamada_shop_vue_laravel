<template>
  <div>
    <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
        		<div class="container">
        			<h1 class="page-title">Wishlist<span>Shop</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
            	<div class="container">
					<table class="table table-wishlist table-mobile">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Stock Status</th>
								<th></th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in orders.data" :key="item.id">
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="assets/images/products/table/product-1.jpg" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#">{{item.id}}</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$84.00</td>
								<td class="stock-col"><span class="in-stock">{{item.status}}</span></td>
								<td class="action-col">
                    <div class="dropdown">
                      <!-- <router-link :to="{name: 'carts'}"> delete All</button></router-link> -->
                      <!-- <router-link :v-link="{name:'order',params:{name:'jj'}}">order</router-link> -->
                      <!-- <a  :v-link="{ name: 'order', params: { name: 'jj' }}"> Show new component</a> -->
									      <button class="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <!-- <i class="icon-list-alt"></i> -->
                          <!-- <router-link :to="{ name: '/order/'+item.id,params: {id: 74}}">vfdv  </router-link> -->
                                <!-- Order -->
                          <!-- <router-link :to="'/order/'+item.id"  >Order Datails</router-link> -->
                          <!-- <a :to="'/order/'+item.id">scsdcdscsdcsdcd</a> -->

                          <router-link  :to="'/order/'+item.id" title="Wishlist">
                             <p @click="saveOrderDetails(444)">Wishlist</p>
                         </router-link>
                        </button>
                  </div>
								</td>
								<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
							</tr>
              <tr>
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="assets/images/products/table/product-1.jpg" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#">Beige knitted elastic runner shoes</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$84.00</td>
								<td class="stock-col"><span class="in-stock">In stock</span></td>
								<td class="action-col">
                    <div class="dropdown">
									      <button class="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Select Options
                        </button>

                    </div>
								</td>
								<td class="remove-col"><button class="btn-remove"><i class="icon-close"></i></button></td>
							</tr>
						</tbody>
					</table><!-- End .table table-wishlist -->
	            	<div class="wishlist-share">
	            		<div class="social-icons social-icons-sm mb-2">
	            			<label class="social-label">Share on:</label>
	    					<a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
	    					<a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
	    					<a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
	    					<a href="#" class="social-icon" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
	    					<a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
	    				</div><!-- End .soial-icons -->
	            	</div><!-- End .wishlist-share -->
            	</div><!-- End .container -->
            </div><!-- End .page-content -->
  </div>
</template>

<script>
  export default {
    data(){
      return{
          orders:{},
      }
    },
    created() {
        this.getPosts();
        console.log(this.orders);
     },
      methods: {
          getPosts(){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZWxuYW1hdC5jb21cL3BvZW1zXC9lc2hvcFwvYXBpXC9idXllcnNcL2xvZ2luIiwiaWF0IjoxNjc5NzY3MDAwLCJleHAiOjE2Nzk3NzA2MDAsIm5iZiI6MTY3OTc2NzAwMCwianRpIjoiWE1MdWh0b0paRDhMVVlRNSIsInN1YiI6MTAxLCJwcnYiOiJhMDk0MDIzMzU0YTRkOTIyYTZiYzcxMGNkZmJlMWE3NGZiYTMwNGU2In0.EGRsiv7NKE2F5XE9lBjGOPyaX1oi2_-FV_HK0QDsSKk',
            };
              axios.get('https://elnamat.com/poems/eshop/api/buyers/get-buyer-order',headers)
              .then(res => {
                console.log('Component mountvvvv.');

                console.log(res.data.data);
                  this.orders = res.data;
                  // localStorage.setItem('posts',JSON.stringify(this.carts));
              })
              .then(err => console.log(err))
          },
          saveOrderDetails(item){
            // window.location.pathname = "/order/174"
      			this.$store.commit('saveOrderDetails',item);
      		},
     }
  }
</script>
