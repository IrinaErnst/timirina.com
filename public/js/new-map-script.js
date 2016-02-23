'use strict';

function initMap() {
  var theRidge = { lat: 35.859813, lng: -82.731394 };
  var packsTavernCenturyRoom = { lat: 35.595094, lng: -82.549563 };

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 9,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: theRidge,
  });

  addMarker(theRidge,
    'C',
    'Wedding @ The Ridge',
    "<b>The Ridge</b><br>389 Upper Thomas Branch Rd.<br>Marshall, NC 28753",
    map
  );

  addMarker(packsTavernCenturyRoom,
    'R',
    "Reception @ Pack's Tavern, The Century Room on the Park",
    "<b>Pack's Tavern, The Century Room on the Park</b><br>20 South Spruce St.<br>Asheville, NC 28801<br>+1 (828) 225-6944<br><a href='http://packstavern.com/centuryroom/' target='_blank'>http://packstavern.com/centuryroom/</a><br><a href='https://www.google.com/maps/dir//20+S+Spruce+St,+Asheville,+NC+28801/@35.59513,-82.5518367,17z/data=!4m13!1m4!3m3!1s0x8859f3584a97e195:0x930311f63a832a8a!2s20+S+Spruce+St,+Asheville,+NC+28801!3b1!4m7!1m0!1m5!1m1!1s0x8859f3584a97e195:0x930311f63a832a8a!2m2!1d-82.549648!2d35.59513' target='_blank'>Click for Directions</a>",
    map
  );
}

function addMarker(location, label, title, content, map) {
  var infoWindow = new google.maps.InfoWindow({
    content: content,
  });

  var marker = new google.maps.Marker({
    position: location,
    label: label,
    title: title,
    map: map,
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
