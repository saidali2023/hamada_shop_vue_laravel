<template>
   <div>
     <div class="page-header text-center" style="background-image: url('front/front/front/assets/images/page-header-bg.jpg')">
           <div class="container">
             <h1 class="page-title">My Account<span>Shop</span></h1>
           </div><!-- End .container -->
         </div><!-- End .page-header -->
           <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
               <div class="container">
                   <ol class="breadcrumb">
                       <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                       <li class="breadcrumb-item"><a href="#">Shop</a></li>
                       <li class="breadcrumb-item active" aria-current="page">My Account</li>
                   </ol>
               </div><!-- End .container -->
           </nav><!-- End .breadcrumb-nav -->

           <div class="page-content">
             <div class="dashboard">
                 <div class="container">
                   <div class="row">
                     <aside class="col-md-4 col-lg-3">
                       <ul class="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                   <li class="nav-item">
                       <a class="nav-link active" id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard" role="tab" aria-controls="tab-dashboard" aria-selected="true">Dashboard</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Orders</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="tab-downloads-link" data-toggle="tab" href="#tab-downloads" role="tab" aria-controls="tab-downloads" aria-selected="false">Downloads</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Adresses</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="tab-add-address-link" data-toggle="tab" href="#tab-add-address" role="tab" aria-controls="tab-add-address" aria-selected="false">Add Address</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab" aria-controls="tab-account" aria-selected="false">Account Details</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Sign Out</a>
                   </li>
               </ul>
                     </aside><!-- End .col-lg-3 -->

                     <div class="col-md-8 col-lg-9">
                       <div class="tab-content">
                   <div class="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                     <p>Hello <span class="font-weight-normal text-dark">{{userData.name}}</span> (not <span class="font-weight-normal text-dark">User</span>? <a href="#">Log out</a>)
                     <br>
                     From your account dashboard you can view your <a href="#tab-orders" class="tab-trigger-link link-underline">recent orders</a>, manage your <a href="#tab-address" class="tab-trigger-link">shipping and billing addresses</a>, and <a href="#tab-account" class="tab-trigger-link">edit your password and account details</a>.</p>
                   </div><!-- .End .tab-pane -->

                   <div class="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                     <p>No order has been made yet.</p>
                     <a href="category.html" class="btn btn-outline-primary-2"><span>GO SHOP</span><i class="icon-long-arrow-right"></i></a>
                   </div><!-- .End .tab-pane -->

                   <div class="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                     <p>No downloads available yet.</p>
                     <a href="category.html" class="btn btn-outline-primary-2"><span>GO SHOP</span><i class="icon-long-arrow-right"></i></a>
                   </div><!-- .End .tab-pane -->

                   <div class="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                     <p>The following addresses will be used on the checkout page by default.</p>

                     <div class="row">
                       <div class="col-lg-6">
                         <div class="card card-dashboard">
                           <div class="card-body">
                             <h3 class="card-title">Billing Address</h3><!-- End .card-title -->

                           <p>User Name<br>
                           User Company<br>
                           John str<br>
                           New York, NY 10001<br>
                           1-234-987-6543<br>
                           yourmail@mail.com<br>
                           <a href="#">Edit <i class="icon-edit"></i></a></p>
                           </div><!-- End .card-body -->
                         </div><!-- End .card-dashboard -->
                       </div><!-- End .col-lg-6 -->

                       <div class="col-lg-6">
                         <div class="card card-dashboard">
                           <div class="card-body">
                             <h3 class="card-title">Shipping Address</h3><!-- End .card-title -->

                           <p>You have not set up this type of address yet.<br>
                           <a href="#">Edit <i class="icon-edit"></i></a></p>
                           </div><!-- End .card-body -->
                         </div><!-- End .card-dashboard -->
                       </div><!-- End .col-lg-6 -->
                     </div><!-- End .row -->
                   </div><!-- .End .tab-pane -->
                   <div class="tab-pane fade" id="tab-add-address" role="tabpanel" aria-labelledby="tab-add-address-link">
                     <form action="#">
                       <div class="row">
                         <div class="col-sm-4">
                           <label>Full Name *</label>
                           <input type="text" class="form-control" required>
                         </div><!-- End .col-sm-6 -->
                         <div class="col-sm-4">
                           <label>Email address *</label>
                           <input type="email" class="form-control" required>
                         </div><!-- End .col-sm-6 -->

                         <div class="col-sm-4">
                           <label>Phone *</label>
                           <input type="text" class="form-control" required>
                         </div><!-- End .col-sm-6 -->
                       </div><!-- End .row -->
                       <div class="row">
                           <div class="col-sm-4">
                               <label>Country *</label>
                               <input type="text" class="form-control" required>
                           </div><!-- End .col-sm-6 -->
                          <div class="col-sm-4">
                               <label>City *</label>
                               <input type="text" class="form-control" required>
                          </div><!-- End .col-sm-6 -->
                          <div class="col-sm-4">
                               <label>State *</label>
                               <input type="text" class="form-control" required>
                          </div><!-- End .col-sm-6 -->
                      </div><!-- End .row -->

                      <label>Full Address *</label>
                      <input type="text" class="form-control" required>
                      <small class="form-text">This will be how your name will be displayed in the account section and in reviews</small>
                             <button type="submit" class="btn btn-outline-primary-2">
                               <span>SAVE CHANGES</span>
                             <i class="icon-long-arrow-right"></i>
                             </button>
                           </form>
                   </div><!-- .End .tab-pane -->
                   <div class="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
                     <form action="#">
                             <div class="row">
                               <div class="col-sm-6">
                                 <label>First Name *</label>
                                 <input type="text" class="form-control" required>
                               </div><!-- End .col-sm-6 -->

                               <div class="col-sm-6">
                                 <label>Last Name *</label>
                                 <input type="text" class="form-control" required>
                               </div><!-- End .col-sm-6 -->
                             </div><!-- End .row -->

                           <label>Display Name *</label>
                           <input type="text" class="form-control" required>
                           <small class="form-text">This will be how your name will be displayed in the account section and in reviews</small>

                             <label>Email address *</label>
                         <input type="email" class="form-control" required>

                           <label>Current password (leave blank to leave unchanged)</label>
                           <input type="password" class="form-control">

                           <label>New password (leave blank to leave unchanged)</label>
                           <input type="password" class="form-control">

                           <label>Confirm new password</label>
                           <input type="password" class="form-control mb-2">

                             <button type="submit" class="btn btn-outline-primary-2">
                               <span>SAVE CHANGES</span>
                             <i class="icon-long-arrow-right"></i>
                             </button>
                           </form>
                   </div><!-- .End .tab-pane -->
               </div>
                     </div><!-- End .col-lg-9 -->
                   </div><!-- End .row -->
                 </div><!-- End .container -->
               </div><!-- End .dashboard -->
           </div><!-- End .page-content -->
   </div>
</template>
<script>
  export default {
    data(){
      return{
          userData:'',
      }
    },
    created() {
        this.getPosts();
        console.log(this.$store.state.userToken);

        console.log(this.userData);
     },
    methods: {
        getPosts(){
          const headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+this.$store.state.userToken
          };
            axios.get('https://elnamat.com/poems/eshop/api/buyers/buyer-data',headers)
            .then(res => {
              // console.log('Component mooooooo.');
              // console.log(res.data.data);
                this.userData = res.data.data;
                // localStorage.setItem('posts',JSON.stringify(this.carts));
            })
            .then(err => console.log(err))
        }
   }
  }
</script>
