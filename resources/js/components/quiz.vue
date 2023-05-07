<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component {{now.getMinutes() }}</div>
                    <div class="card-header">Example Component {{now.getSeconds() }}</div>
                    <div class="card-body" v-for="item in questions" :key="item.id">
                        I'm an example component. {{item.id}}
                    </div>
                </div>
            </div>
        </div>

        <div class="page-content">
            <div class="checkout">
  	           <div class="container">
              			<form action="#">
  		                	<div class="row">
                          <div class="col-md-8 col-lg-9">
                              <div class="row">
                                    <div class="col-lg-6" v-for="item in questions" :key="item.id" >
                                        <div class="card card-dashboard">
                                          <div class="card-body">
                                            <div class="filter-items">
                                              <div class="filter-item">
                                                  <div class="custom-control custom-radio">
                                                      <input type="radio" class="custom-control-input" :value="item.id" v-model="addressId" :id="'price-'+(key)" name="filter-price">
                                                      <label class="custom-control-label" :for="'price-'+(key)">
                                                          <h3 class="card-title">Billing Address {{key}}</h3>
                                                          <a href="#">Edit <i class="icon-edit"></i></a></p>
                                                        </label>
                                                  </div>
                                                </div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                              </div><!-- End .row -->
                          </div><!-- End .col-lg-9 -->
  		                	</div><!-- End .row -->
                        <a  @click="moveTimer()" class="btn btn-outline-primary-2 btn-order btn-block">PROCEED</a>
              			</form>
  	            </div><!-- End .container -->
            </div><!-- End .checkout -->
        </div><!-- End .page-content -->



    </div>







</template>

<script>
    export default {
      data() {
        return {
          addressId:'',
          questions: [
              {id:1, text: "question 1 ?", answer: true, user_response: null },
              {id:2, text: "question 2 ?", answer: false, user_response: null },
              {id:3, text: "question 3 ?", answer: false, user_response: null },
            ],
            currentQuestionIndex: 0,
            // now: new Date(),
            now:new Date(),
          };
        },
        methods: {
            answer(userAnswer) {
              this.questions[this.currentQuestionIndex].response = userAnswer;
              console.log(this.questions[this.currentQuestionIndex]);
              this.currentQuestionIndex++;
            },
            moveTimer() {
              this.currentQuestionIndex++;
               var that = this;
               settimeout(that.currentQuestionIndex++,12000)
            }
        },

        computed: {
            question() {
              return this.questions[this.currentQuestionIndex].text;
            },
        }
    }
</script>
