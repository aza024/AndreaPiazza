
isShadowed = false
isThumbnail = false

function toggleShadow() {
    if (!isShadowed) {
        var shadow = document.createElement('div')
        shadow.setAttribute('style','height:100%; width: 100%; opacity:.7; left: 0px')

        shadow.setAttribute('id','shadow')
    
        document.querySelector('main').appendChild(shadow); 
        isShadowed = true


        $('#shadow').on('click', function() {
            if (isShadowed) {
                document.querySelector('#thumbnail').remove()
                isThumbnail = false

                document.querySelector('#shadow').remove()
                
                isShadowed = false
            }
        })
    }
}

function toggleThumbnail() {
    if (!isThumbnail) {
        $('.blBkrd').css("display","none")

        var thumbnail = document.createElement('img')
        thumbnail.setAttribute('id', 'thumbnail')
        thumbnail.setAttribute('src',
                               document.querySelector('.firstSlide').getAttribute('src'))
        document.querySelector('main').appendChild(thumbnail)
        
        isThumbnail = true

        $('#thumbnail').on('click', function() {
            if (isThumbnail) {
                $('.blBkrd').css("display","inline")
                document.querySelector('#thumbnail').remove()
                
                isThumbnail = false

                document.querySelector('#shadow').remove()
                
                isShadowed = false
            }
        })
    }
}

$(document).ready(function(){


    // for cat pic
        $('#catid').on('click',function () {
            var ellaImg = document.getElementById('ellaImage')
            if (ellaImg === null) {
                ellaImg = document.createElement('img')
                ellaImg.setAttribute('src','images/cat.png') 
                ellaImg.setAttribute('id','ellaImage')
                document.querySelector('.aboutAP').appendChild(ellaImg)
            } 
            
            $('#ellaImage').css("display","inline")
            $('#ellaImage').fadeOut(3000);
        });

        $('.item').on('click',function(){
            toggleShadow()
            toggleThumbnail() 

          })
        // testimonial fade
        function doFade() {
            $(".one").fadeIn(6000,function() {
                $(".one").fadeOut(6000).delay(3000);
                $(".two").css("display","none")
                $(".three").css("display","none")
                $(".four").css("display","none")
                setTimeout(fadeTwo,6000);
            });
        }
    
        function fadeTwo() {
            $(".two").fadeIn(6000,function() {
                $(".two").fadeOut(6000).delay(3000);
                $(".three").css("display","none")
                $(".four").css("display","none")
                setTimeout(fadeThree,6000);
            });
        }
    
        function fadeThree() {
            $(".three").fadeIn(4000,function() {
                $(".three").fadeOut(6000).delay(3000);
                $(".four").css("display","none")
                setTimeout(fadeFour,6000);
            });
        }
        function fadeFour() {
            $(".four").fadeIn(4000,function() {
                $(".four").fadeOut(6000).delay(3000);
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

