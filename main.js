

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
var marker=new google.maps.Marker({
    position:LatLng(37.790840,-122.401160), 
    animation:google.maps.Animation.BOUNCE, //animates the marker
    // icon:'pinkball.png' // replace default marker with custom icon
    });
  marker.setMap(map);