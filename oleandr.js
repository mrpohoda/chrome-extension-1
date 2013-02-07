$(document).ready(function() {
  //alert(window.location);
  console.log('jquery:', $);

  console.log('trying to send xhr request...');

  $.ajax({
    url: 'http://skypicker.apiary.io/places',
  }).done(function ( data ) {
    if( console && console.log ) {
      console.log("xhr response:", data);
    }
  });
});