<template>
   <div>
     <div class="page-header text-center" style="background-image: url('front/assets/images/page-header-bg.jpg')">
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

							<tr  v-for="post in wishlists.data" :key="post.id">
								<td class="product-col">
									<div class="product">
										<figure class="product-media">
											<a href="#">
												<img src="front/assets/images/products/table/product-2.jpg" alt="Product image">
											</a>
										</figure>

										<h3 class="product-title">
											<a href="#"> {{post.name}}</a>
										</h3><!-- End .product-title -->
									</div><!-- End .product -->
								</td>
								<td class="price-col">$76.00</td>
								<td class="stock-col"><span class="in-stock">In stock</span></td>
								<td class="action-col">
									<button class="btn btn-block btn-outline-primary-2" @click="addToCart(post.id,1)"><i class="icon-cart-plus"></i>Add to Cart</button>
								</td>
								<td class="remove-col"><button class="btn-remove" @click="removeFromWishlists(post.id)"><i class="icon-close"></i></button></td>
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
          wishlists:{},
          quantity:'1',
      }
    },
    created() {
        this.getPosts();
        console.log(this.$store.state.userToken);

        console.log(this.wishlists);
     },
      methods: {
          getPosts(){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZWxuYW1hdC5jb21cL3BvZW1zXC9lc2hvcFwvYXBpXC9idXllcnNcL2xvZ2luIiwiaWF0IjoxNjc5NzY3MDAwLCJleHAiOjE2Nzk3NzA2MDAsIm5iZiI6MTY3OTc2NzAwMCwianRpIjoiWE1MdWh0b0paRDhMVVlRNSIsInN1YiI6MTAxLCJwcnYiOiJhMDk0MDIzMzU0YTRkOTIyYTZiYzcxMGNkZmJlMWE3NGZiYTMwNGU2In0.EGRsiv7NKE2F5XE9lBjGOPyaX1oi2_-FV_HK0QDsSKk',
            };
              axios.get('https://elnamat.com/poems/eshop/api/buyers/product/wishlists',headers)
              .then(res => {
                console.log('Component mountvvvv.');

                console.log(res.data.data);

                  this.wishlists = res.data;

                  // localStorage.setItem('posts',JSON.stringify(this.carts));
              })
              .then(err => console.log(err))
          },
          addToCart(productId,quantity){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.$store.state.userToken
            };
            axios.post('https://elnamat.com/poems/eshop/api/buyers/addtocart',
               {productId,quantity},headers
             ).then(res => {
               console.log(res);
               this.$toaster.success('Your toaster success message.');
            })
          },
          removeFromWishlists(productId){
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.$store.state.userToken
            };
            axios.post('https://elnamat.com/poems/eshop/api/buyers/addto/wishlists',
               {productId},headers
             ).then(res => {
               console.log(res);
               this.$toaster.success(res.data.msg);

            })
          }
     }
  }
</script>
