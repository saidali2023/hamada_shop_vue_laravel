<template>
   <div>
  <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"><i class="icon-close"></i></span>
                  </button>

                  <div class="form-box">
                      <div class="form-tab">
                          <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
                              <li class="nav-item">
                                  <a class="nav-link " id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                              </li>
                          </ul>
                          <div class="tab-content" id="tab-content-5">
                              <div class="tab-pane fade" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                  <form action="#">
                                      <div class="form-group">
                                          <label for="singin-email">Username or email address *</label>
                                          <input type="text" class="form-control" id="singin-email" name="singin-email" required>
                                      </div><!-- End .form-group -->

                                      <div class="form-group">
                                          <label for="singin-password">Password *</label>
                                          <input type="password" class="form-control" id="singin-password" name="singin-password" required>
                                      </div><!-- End .form-group -->

                                      <div class="form-footer">
                                          <button type="submit" class="btn btn-outline-primary-2">
                                              <span>LOG IN</span>
                                              <i class="icon-long-arrow-right"></i>
                                          </button>

                                          <div class="custom-control custom-checkbox">
                                              <input type="checkbox" class="custom-control-input" id="signin-remember">
                                              <label class="custom-control-label" for="signin-remember">Remember Me</label>
                                          </div><!-- End .custom-checkbox -->

                                          <a href="#" class="forgot-link">Forgot Your Password?</a>
                                      </div><!-- End .form-footer -->
                                  </form>
                                  <div class="form-choice">
                                      <p class="text-center">or sign in with</p>
                                      <div class="row">
                                          <div class="col-sm-6">
                                              <a href="#" class="btn btn-login btn-g">
                                                  <i class="icon-google"></i>
                                                  Login With Google
                                              </a>
                                          </div><!-- End .col-6 -->
                                          <div class="col-sm-6">
                                              <a href="#" class="btn btn-login btn-f">
                                                  <i class="icon-facebook-f"></i>
                                                  Login With Facebook
                                              </a>
                                          </div><!-- End .col-6 -->
                                      </div><!-- End .row -->
                                  </div><!-- End .form-choice -->
                              </div><!-- .End .tab-pane -->
                              <div class="tab-pane fade show active" id="register" role="tabpanel" aria-labelledby="register-tab">
                                  <form action="#" method="post" nonvalidate>
                                      <div class="form-group">
                                          <label for="register-name">Your name *</label>
                                          <input type="text" v-model="name" class="form-control" id="register-name" name="register-name" required>
                                          <div v-show="nameError" class="text-danger">
                                             ... the name is too short
                                          </div>
                                      </div><!-- End .form-group -->
                                      <div class="form-group">
                                          <label for="register-email">Your email address *</label>
                                          <input type="email" v-model="email" class="form-control" id="register-email" name="register-email" required>
                                          <div v-show="emailError" class="text-danger">
                                             ... the email is not valid
                                          </div>
                                      </div><!-- End .form-group -->

                                      <div class="form-group">
                                          <label for="register-password">Password *</label>
                                          <input type="password" class="form-control" id="register-password" name="register-password" required>
                                          <div v-show="passwordError" class="text-danger">
                                             ... the password is too short
                                          </div>
                                      </div><!-- End .form-group -->

                                      <div class="form-footer">
                                          <button type="submit" @click.prevent="submitRegister" class="btn btn-outline-primary-2">
                                              <span>SIGN UP</span>
                                              <i class="icon-long-arrow-right"></i>
                                          </button>

                                          <div class="custom-control custom-checkbox">
                                              <input type="checkbox" class="custom-control-input" id="register-policy" required>
                                              <label class="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                          </div><!-- End .custom-checkbox -->
                                      </div><!-- End .form-footer -->
                                  </form>
                                  <div class="form-choice">
                                      <p class="text-center">or sign in with</p>
                                      <div class="row">
                                          <div class="col-sm-6">
                                              <a href="#" class="btn btn-login btn-g">
                                                  <i class="icon-google"></i>
                                                  Login With Google
                                              </a>
                                          </div><!-- End .col-6 -->
                                          <div class="col-sm-6">
                                              <a href="#" class="btn btn-login  btn-f">
                                                  <i class="icon-facebook-f"></i>
                                                  Login With Facebook
                                              </a>
                                          </div><!-- End .col-6 -->
                                      </div><!-- End .row -->
                                  </div><!-- End .form-choice -->
                              </div><!-- .End .tab-pane -->
                          </div><!-- End .tab-content -->
                      </div><!-- End .form-tab -->
                  </div><!-- End .form-box -->
              </div><!-- End .modal-body -->
          </div><!-- End .modal-content -->
      </div><!-- End .modal-dialog -->
  </div><!-- End .modal -->
</div>
</template>

<script>
export default {
     data(){
         return {
             name : '',
             password : '',
             email : '',
         }
     },
     computed:{
         nameError(){
             return this.name.length > 0 && this.name.length < 4
         },
         emailError(){
           return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) && this.email.length > 0
         },
         passwordError(){
             return this.password.length > 0 && this.password.length < 7
         },
         isValidForm(){
             return this.name.length > 4   &&
             this.password.length > 5 &&
             (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
         }
     },
     created(){
   		this.getCategories();
   	},

   	methods:{

   		getCategories(){
         console.log(this.$store.state.userToken);

   		},
      submitRegister(){
           //console.log('submitted');
           //client sid  localstorage sessionstorage indexed db   state managment system
           //vue vuex

           //this.$store.state.userToken = "amine"

           //this.$store.commit('setUserToken',{userToken:'sdmfjsdkfjlsds'})
            // console.log(this.$store.getters.isLogged)
            // console.log(this.$store.state.userToken);
            let  {name,email,password} = this;
            this.$store.dispatch('RegisterUser',{name,email,password})



       }
   	}
}
</script>
