jQuery(document).ready(function ($) {
  var animationDelay = 2500;
  initHeadline();

  function initHeadline() {
    animateHeadline($('.cd-headline'));
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);
      setTimeout(function () {
        hideWord(headline.find('.is-visible').eq(0))
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
    setTimeout(function () {
      hideWord(nextWord)
    }, animationDelay);
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }


});


function checkParams() {
  var usr = $('#username').val();
  var tel = $('#phonenumber').val();
  var company = $('#company').val();
  var email = $('#email').val();
  var msg = $('#msg').val();

  if (msg.length != 0 && tel.length != 0 && company.length != 0 && email.length != 0 && usr.length != 0) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
    // $('.label-form').css('opacity', '0.3');
  }
  if (msg.length > 0) {
    $('.label-form.msg').css('opacity', '0.3');
  }
  if (tel.length > 0) {
    $('.label-form.tel').css('opacity', '0.3');

  }
  if (company.length > 0) {
    $('.label-form.company').css('opacity', '0.3');

  }
  if (email.length > 0) {
    $('.label-form.email').css('opacity', '0.3');

  }
  if (usr.length > 0) {
    $('.label-form.user').css('opacity', '0.3');
  }

}


var totalItems = $('.carousel-item').length;
var currentIndex = $('.carousel-item.active').index() + 1;

var down_index;

$('.slider-counter').html('' + currentIndex + '/' + totalItems + '');

$(".carousel-control-next").click(function () {
  var currentIndex_active = $('.carousel-item.active').index() + 2;
  if (totalItems >= currentIndex_active) {
    down_index = $('.carousel-item.active').index() + 1;
    $('.slider-counter').html('' + currentIndex_active + '/' + totalItems + '');
  }
});
$(".carousel-control-prev").click(function () {
  down_index = down_index - 1;
  if (down_index >= 1) {
    $('.slider-counter').html('' + down_index + '/' + totalItems + '');
  }
});


$("#addressBy").click(function () {
  document.getElementById("mapUs").style.display = 'none';
  document.getElementById("mapUz").style.display = 'none';
  document.getElementById("mapBy").style.display = 'block';
});
$("#addressUs").click(function () {
  document.getElementById("mapBy").style.display = 'none';
  document.getElementById("mapUz").style.display = 'none';
  document.getElementById("mapUs").style.display = 'block';
});
$("#addressUz").click(function () {
  document.getElementById("mapUs").style.display = 'none';
  document.getElementById("mapBy").style.display = 'none';
  document.getElementById("mapUz").style.display = 'block';
});


// let map_Us;
// let map_By;
// let map_Uz;

// function initMap() {
//   map_Us = {
//     center:new google.maps.LatLng(41.2825125,69.1392826),
//     zoom:5,
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"),map_Us);
// }
//   // 41.2825125,69.1392826
//   map_Us = new google.maps.Map(document.getElementById("mapUs"), {
//     center: {
//       lat: 26.028818,
//       lng: -80.166374
//     },
//     zoom: 12

//   });
//   map_By = new google.maps.Map(document.getElementById("mapBy"), {
//     center: {
//       lat: 53.927704,
//       lng: 27.614986
//     },
//     zoom: 14

//   });
//   map_Uz = new google.maps.Map(document.getElementById("mapUz"), {
//     center: {
//       lat: 41.312034,
//       lng: 69.2888706
//     },
//     zoom: 14

//   });
//   var styles = [
//     {
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#f5f5f5"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.icon",
//       "stylers": [
//         {
//           "visibility": "off"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#616161"
//         }
//       ]
//     },
//     {
//       "elementType": "labels.text.stroke",
//       "stylers": [
//         {
//           "color": "#f5f5f5"
//         }
//       ]
//     },
//     {
//       "featureType": "administrative.land_parcel",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#bdbdbd"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#eeeeee"
//         }
//       ]
//     },
//     {
//       "featureType": "poi",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#757575"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#e5e5e5"
//         }
//       ]
//     },
//     {
//       "featureType": "poi.park",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     },
//     {
//       "featureType": "road",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#ffffff"
//         }
//       ]
//     },
//     {
//       "featureType": "road.arterial",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#757575"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#dadada"
//         }
//       ]
//     },
//     {
//       "featureType": "road.highway",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#616161"
//         }
//       ]
//     },
//     {
//       "featureType": "road.local",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.line",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#e5e5e5"
//         }
//       ]
//     },
//     {
//       "featureType": "transit.station",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#eeeeee"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "geometry",
//       "stylers": [
//         {
//           "color": "#c9c9c9"
//         }
//       ]
//     },
//     {
//       "featureType": "water",
//       "elementType": "labels.text.fill",
//       "stylers": [
//         {
//           "color": "#9e9e9e"
//         }
//       ]
//     }
//   ];
//   map_Us.setOptions({styles: styles});
//   map_By.setOptions({styles: styles});
//   map_Uz.setOptions({styles: styles});
//   var image = {
//     url: 'image/Map_pointer.svg',
//     size: new google.maps.Size(42, 58),
//   };
//   var marker_us = new google.maps.Marker({
//     position: {lat: 26.028818, lng: -80.166374},
//     map: map_Us,
//     icon: image,
//     animation: google.maps.Animation.DROP,
//     title: 'Stanum US'
//   });
//   var marker_by = new google.maps.Marker({
//     position: {lat: 53.927704, lng: 27.614986},
//     map: map_By,
//     icon: image,
//     animation: google.maps.Animation.DROP,
//     title: 'Stanum BY'
//   });
//   var marker_uz = new google.maps.Marker({
//     position: {lat: 41.312034, lng: 69.2888706},
//     map: map_Uz,
//     icon: image,
//     animation: google.maps.Animation.DROP,
//     title: 'Stanum UZ'
//   });

// }


$(document).ready(function () {
  $('.menuBtn').click(function () {
    $(this).toggleClass('act');
    if ($(this).hasClass('act')) {
      $('.mainMenu').addClass('act');
      $('.main-body').css('overflow', 'hidden');
    } else {
      $('.mainMenu').removeClass('act');
      $('.main-body').css('overflow', '');
    }
  });
  $('.nav-item').click(function () {
    if ($(".menuBtn").hasClass('act')) {
      $('.mainMenu').removeClass('act');
      $('.menuBtn').removeClass('act');
      $('.main-body').css('overflow', '');
    }
  });
});


$('#commandSlider').multislider({
  interval: 0,
  // continuous: true,
  // duration: 6500,
});


$('#logoSlider').multislider({
  interval: 10000,
  continuous: true,
  hoverPause: false,
  duration: 4500,
  // pauseAbove: 500
});

