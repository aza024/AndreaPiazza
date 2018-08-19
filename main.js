$(document).ready(function(){

    // for cat pic
        $('a.cat').on('click',function () {
            $('#cat').show();
            });


        // testimonial fade
        function doFade() {
            $(".one").fadeIn(6000,function() {
                $(".one").fadeOut(6000).delay(3000);
                $(".two").css("display","none")
                $(".three").css("display","none")
                setTimeout(fadeTwo,6000);
            });
        }
    
        function fadeTwo() {
            $(".two").fadeIn(6000,function() {
                $(".two").fadeOut(6000).delay(3000);
                $(".three").css("display","none")
                setTimeout(fadeThree,6000);
            });
        }
    
        function fadeThree() {
            $(".three").fadeIn(4000,function() {
                $(".three").fadeOut(6000).delay(3000);
                setTimeout(doFade,6000);
            });
        }
        doFade();
    });


// email fade
$('#emailBtn').click(function() {
    $('form').toggle();
});
    // $("#emailBtn").click(function(){
    //     $("#name.form-control").fadeToggle(1000);
    //     $("#email").fadeToggle(1000);
    //     $("#subject").fadeToggle(1000);
    //     $("#message").fadeToggle(1000);
    //     $("#submitBtn").fadeToggle(1000);
    // });


// GoogleMapsAPI
function initialize(){
    var mapProperties = {
        center:new google.maps.LatLng(37.790840,-122.401160),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"), mapProperties);
}
google.maps.event.addDomListener(window, 'load', initialize);
// var myCenter = google.maps.LatLng(37.790840,-122.401160);
// var marker=new google.maps.Marker({
//     position:new google.maps.LatLng(37.790840,-122.401160), 
//     animation:google.maps.Animation.BOUNCE, //animates the marker
//     // icon:'pinkball.png' // replace default marker with custom icon
//     });
// //   marker.setMap(map);

    function doFade() {
        $(".one").fadeIn(6000,function() {
            $(".one").fadeOut(6000).delay(3000);
            setTimeout(fadeTwo,6000);
        });
    }

