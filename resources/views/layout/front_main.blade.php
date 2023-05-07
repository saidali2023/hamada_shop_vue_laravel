<!DOCTYPE html>
<html lang="en">
     <head>
       @include('layout.front_head')
     </head>
     <body>
         <div id="app">
             <div class="page-wrapper">
               @if(!Request::is(['quiz','timer']))
                  @include('layout.front_header')
               @endif
                <main class="main">
                 @yield('content')
                </main><!-- End .main -->
                @if(!Request::is(['quiz','timer']))
                  @include('layout.front_footer_two')
                @endif
              </div><!-- End .page-wrapper -->
                @include('layout.front_footer')
        </div>

              <script src="{{asset('front/assets/js/jquery.min.js')}}"></script>
              <script src="{{asset('front/assets/js/bootstrap.bundle.min.js')}}"></script>
              <script src="{{asset('front/assets/js/jquery.hoverIntent.min.js')}}"></script>
              <script src="{{asset('front/assets/js/jquery.waypoints.min.js')}}"></script>
              <script src="{{asset('front/assets/js/superfish.min.js')}}"></script>
              <script src="{{asset('front/assets/js/owl.carousel.min.js')}}"></script>
              <script src="{{asset('front/assets/js/bootstrap-input-spinner.js')}}"></script>
              <script src="{{asset('front/assets/js/jquery.plugin.min.js')}}"></script>
              <script src="{{asset('front/assets/js/jquery.magnific-popup.min.js')}}"></script>
              <script src="{{asset('front/assets/js/jquery.countdown.min.js')}}"></script>
              <script src="{{asset('front/assets/js/main.js')}}"></script>
              <script src="{{asset('front/assets/js/demos/demo-4.js')}}"></script>
              <script src="{{asset('js/app.js')}}" defer ></script>
    </body>
</html>
