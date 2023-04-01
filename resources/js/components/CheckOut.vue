<template>
   <div>
     <div class="page-header text-center" style="background-image: url('front/assets/images/page-header-bg.jpg')">
        		<div class="container">
        			<h1 class="page-title">Checkout<span>Shop</span></h1>
              <button @click="addFruit">print adress id</button>
              <a href="#" class="btn-product btn-cart" @click="sendOrder()"><span>add to cart</span></a>
        		</div><!-- End .container -->
      </div><!-- End .page-header -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" v-for="(product, i) in productId" :key="i">
                          <a href="index.html">{{ product.id }} ({{ product.currency }})</a>
                        </li>
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->
      <div class="page-content">
          <div class="checkout">
	           <div class="container">
          			<div class="checkout-discount">
            				<form action="#">
        						<input type="text" class="form-control" required id="checkout-discount-input">
            					<label for="checkout-discount-input" class="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
            				</form>
            			</div><!-- End .checkout-discount -->
            			<form action="#">
		                	<div class="row">
                        <div class="col-md-8 col-lg-9">
                          <p>The following addresses will be used on the checkout page by default.</p>
                            <div class="row">
                                  <!-- <div class="col-lg-6">
                                    <div class="card card-dashboard">
                                        <div class="card-body">
                                          <h3 class="card-title">Billing Address</h3>
                                          <p>User Name<br>
                                          User Company<br>
                                          John str<br>
                                          New York, NY 10001<br>
                                          1-234-987-6543<br>
                                          yourmail@mail.com<br>
                                          <a href="#">Edit <i class="icon-edit"></i></a></p>
                                          <div class="filter-items">
                                              <div class="filter-item">
                                                  <div class="custom-control custom-radio">
                                                      <input type="radio" class="custom-control-input" id="price-1" name="filter-price">
                                                      <label class="custom-control-label" for="price-1">Under $25</label>
                                                  </div>
                                              </div>
                                              <div class="filter-item">
                                                  <div class="custom-control custom-radio">
                                                      <input type="radio" class="custom-control-input" id="price-2" name="filter-price">
                                                          <label class="custom-control-label" for="price-2">$25 to $50</label>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div> -->
                                  <div class="col-lg-6" v-for="(address, key, index) in addresses.data" :key="key" >
                                      <div class="card card-dashboard">
                                        <div class="card-body">
                                          <div class="filter-items">
                                            <div class="filter-item">
                                                <div class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" :value="address.id" v-model="addressId" :id="'price-'+(key)" name="filter-price">
                                                    <label class="custom-control-label" :for="'price-'+(key)">
                                                        <h3 class="card-title">Billing Address {{key}}</h3>
                                                        <p>User Name<br>
                                                        User Company<br>
                                                        John str<br>
                                                        New York, NY 10001<br>
                                                        1-234-987-6543<br>
                                                        yourmail@mail.com<br>
                                                        <a href="#">Edit <i class="icon-edit"></i></a></p>
                                                      </label>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                  <!-- <div class="col-lg-6">
                                      <div class="card card-dashboard">
                                          <div class="card-body">
                                            <div class="filter-items">
                                              <div class="filter-item">
                                                  <div class="custom-control custom-radio">
                                                      <input type="radio" class="custom-control-input" v-model="addressId" id="price-2" name="filter-price">
                                                      <label class="custom-control-label" for="price-2">
                                                          <h3 class="card-title">Billing Address</h3>
                                                          <p>User Name<br>
                                                          User Company<br>
                                                          John str<br>
                                                          New York, NY 10001<br>
                                                          1-234-987-6543<br>
                                                          yourmail@mail.com<br>
                                                          <a href="#">Edit <i class="icon-edit"></i></a></p>
                                                        </label>
                                                  </div>
                                                </div>
                                              </div>
                                          </div>
                                        </div>
                                  </div> -->
                            </div><!-- End .row -->
                        </div><!-- End .col-lg-9 -->
		                		<aside class="col-lg-3">
		                			<div class="summary">
		                				<h3 class="summary-title">Your Order</h3><!-- End .summary-title -->
		                				<table class="table table-summary">
		                					<thead>
		                						<tr>
		                							<th>Product</th>
		                							<th>Total</th>
		                						</tr>
		                					</thead>
		                					<tbody>
		                						<tr>
		                							<td><a href="#">Beige knitted elastic runner shoes</a></td>
		                							<td>$84.00</td>
		                						</tr>

		                						<tr>
		                							<td><a href="#">Blue utility pinafore denimdress</a></td>
		                							<td>$76,00</td>
		                						</tr>
		                						<tr class="summary-subtotal">
		                							<td>Subtotal:</td>
		                							<td>$160.00</td>
		                						</tr><!-- End .summary-subtotal -->
		                						<tr>
		                							<td>Shipping:</td>
		                							<td>Free shipping</td>
		                						</tr>
		                						<tr class="summary-total">
		                							<td>Total:</td>
		                							<td>$160.00</td>
		                						</tr><!-- End .summary-total -->
		                					</tbody>
		                				</table><!-- End .table table-summary -->
		                				<div class="accordion-summary" id="accordion-payment">

        										    <div class="card">
        										        <div class="card-header" id="heading-3">
        										            <h2 class="card-title">
        										                <a class="collapsed" @click="PaymentType('cash_on_delivery')"role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
        										                    Cash on delivery
        										                </a>
        										            </h2>
        										        </div><!-- End .card-header -->
        										        <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
        										            <div class="card-body">Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        										            </div><!-- End .card-body -->
        										        </div><!-- End .collapse -->
        										    </div><!-- End .card -->
        										    <div class="card">
        										        <div class="card-header" id="heading-4">
        										            <h2 class="card-title">
        										                <a class="collapsed" @click="PaymentType('paypal')" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
        										                    PayPal <small class="float-right paypal-link">What is PayPal?</small>
        										                </a>
        										            </h2>
        										        </div><!-- End .card-header -->
        										        <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
        										            <div class="card-body">
        										                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
        										            </div><!-- End .card-body -->
        										        </div><!-- End .collapse -->
        										    </div><!-- End .card -->
        										    <div class="card">
        										        <div class="card-header" id="heading-5">
        										            <h2 class="card-title">
        										                <a class="collapsed" @click="PaymentType('card')"  role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
        										                    Credit Card
        										                    <img src="front/assets/images/payments-summary.png" alt="payments cards">
        										                </a>
        										            </h2>
        										        </div><!-- End .card-header -->
        										        <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
        										            <div class="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
        										            </div><!-- End .card-body -->
        										        </div><!-- End .collapse -->
        										    </div><!-- End .card -->
        										</div><!-- End .accordion -->
		                				<button type="submit" class="btn btn-outline-primary-2 btn-order btn-block">
		                					<span class="btn-text">Place Order</span>
		                					<span class="btn-hover-text">Proceed to Checkout</span>
		                				</button>
		                			</div><!-- End .summary -->
		                		</aside><!-- End .col-lg-3 -->
		                	</div><!-- End .row -->
            			</form>
	            </div><!-- End .container -->
          </div><!-- End .checkout -->
      </div><!-- End .page-content -->


   </div>
</template>
<script>
import swal from "sweetalert";

export default {
   data(){
     return {
       carts:[],
       addresses:{},
       buyerId:101,
       addressId:'',
       payment_method:'',
       productId: [],
       lang:'en'
     }
   },
   created(){
     this.getProductsCart();
     this.getUserAddress();
   },

   methods:{
     addFruit() {
        this.productId.map((contact) => {
          console.log(contact);
        });
   			console.log(this.addressId);
   		},
      PaymentType(value) {
         this.payment_method=value;
    			console.log(value);
    		},
     getProductsCart(){
       const headers = {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+this.$store.state.userToken
       };
         axios.get('https://elnamat.com/poems/eshop/api/buyers/product/carts',headers)
         .then(res => {
           // console.log(res);
             res.data.data.map((contact) => {
              this.productId.push(
                    { id:contact.id,quantity:2,price: contact.price, currency:'dollar'}
              );
            });
         })
         .then(err => console.log(err))
     },
     getUserAddress(){
       const headers = {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+this.$store.state.userToken
       };
       axios.get('https://elnamat.com/poems/eshop/api/buyers/addresses',headers)
       .then(res =>{
         console.log(res);
         this.addresses = res.data;
         // this.productId = this.post.id;
         // this.comments = this.post.comments;
         // console.log(this.post.product_image[0]['image']);
       })
       .catch(err =>{
         console.log(err)
       })
     },
     sendOrder(){
       let {lang,buyerId,addressId,payment_method,productId}= this;
       const headers = {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+this.$store.state.userToken
       };
       axios.post('https://elnamat.com/poems/eshop/api/buyers/send-order',
          {lang,buyerId,addressId,payment_method,productId},headers
        ).then(res => {
          console.log(res);
          this.$toaster.success('Your toaster success message.');
          swal({
              text: "User signup successful, please login",
              icon: "success",
              title: 'Your work has been saved',
              timer: 2500
            });
       })
     }
   }
}
</script>
