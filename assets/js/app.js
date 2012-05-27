var watchID = null;

function onBodyLoad() {
    function preventBehavior(e) 
    { 
      e.preventDefault(); 
    };
    document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", onDeviceReady, false);

    navigator.notification.alert("body is loaded");
}

function onDeviceReady()
{
    // do your thing!
    navigator.notification.alert("Cordova is working");

    // Update every 10 seconds
    var options = { frequency: 10000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

    document.getElementById("getLocation").onclick = function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    
}


function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          + new Date(position.timestamp)          + '<br />';
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}