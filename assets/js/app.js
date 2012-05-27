
document.addEventListener("deviceready", onDeviceReady, false);

var watchID = null;

function onDeviceReady() {
    // Update every 3 seconds
    var options = { frequency: 3000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}