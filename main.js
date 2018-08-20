
isShadowed = false
isThumbnail = false

function getActiveImage() {
    var myCarousel = document.getElementById("myCarousel")
    var items = myCarousel.children[1].children
    
    var activeItem = null
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(item.className)
        if (item.className == 'item active') {
            activeItem = item
            break
        }   
    }
    console.log(activeItem)
    return activeItem.children[0]
}

function changeText(){
    var image = getActiveImage();
    console.log(image)
}

function toggleShadow() {
    if (!isShadowed) {
        var shadow = document.createElement('div')
        shadow.setAttribute('style','height:100%; width: 100%; opacity:.7; left: 0px')

        shadow.setAttribute('id','shadow')
    
        document.querySelector('main').appendChild(shadow); 
        isShadowed = true


        $('#shadow').on('click', function() {
            if (isShadowed) {
                $('#myCarousel').css("display","inline")
                $('form').css("display","inline")
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
        $('#myCarousel').css("display","none")
        // $('#portText').css("display","none")
        $('.navbar').css("display","none")

        var thumbnail = document.createElement('img')
        thumbnail.setAttribute('id', 'thumbnail')
        thumbnail.setAttribute('src',
                               getActiveImage().getAttribute('src'))
        document.querySelector('main').appendChild(thumbnail)
        
        isThumbnail = true

        $('#thumbnail').on('click', function() {
            if (isThumbnail) {
                $('#myCarousel').css("display","inline")
                $('#portText').css("display","inline")
                $('#portText').css("display","inline")
                document.querySelector('#thumbnail').remove()
                
                isThumbnail = false

                document.querySelector('#shadow').remove()
                
                isShadowed = false
            }
        })
    }
}

$(document).ready(function(){
    // for sticky nav
    var stickyNavTop = $('.stickyNav').offset().top;
		   	
  
    var stickyNav = function(){
     var scrollTop = $(window).scrollTop(); //vertical from top
          
     //change its position to fixed to stick to top - otherwise change it back to relative
     if (scrollTop > stickyNavTop) { 
         $('.nav').addClass('sticky');
     } else {
         $('.nav').removeClass('sticky'); 
     }
 };

 stickyNav();
 // and run it again every time you scroll
 $(window).scroll(function() {
     stickyNav();
 });

//  for sticky nav underline

    $('#navLink1').on('click',function(){
        console.log('clicked')
        $('#navLink1').css('text-decoration','underline')
        $('#navLink2').css('text-decoration','none')
        $('#navLink3').css('text-decoration','none')
        $('#navLink4').css('text-decoration','none')

    })
    $('#navLink2').on('click',function(){
        console.log('clicked')
        $('#navLink2').css('text-decoration','underline')
        $('#navLink1').css('text-decoration','none')
        $('#navLink3').css('text-decoration','none')
        $('#navLink4').css('text-decoration','none')
    })
    $('#navLink3').on('click',function(){
        console.log('clicked')
        $('#navLink3').css('text-decoration','underline')
        $('#navLink1').css('text-decoration','none')
        $('#navLink2').css('text-decoration','none')
        $('#navLink4').css('text-decoration','none')
    })
    $('#navLink4').on('click',function(){
        console.log('clicked')
        $('#navLink4').css('text-decoration','underline')
        $('#navLink1').css('text-decoration','none')
        $('#navLink2').css('text-decoration','none')
        $('#navLink3').css('text-decoration','none')
    })
    

    // for changing text

    $('myCarousel').change(function(){
       console.log('hello')
      })
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

