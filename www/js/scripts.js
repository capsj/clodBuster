var moveUpLeftURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveUpLeft?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveForwardURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveForward?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveUpRightURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveUpRight?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveDownRightURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/downRight?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveBackwardsURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/backwards?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveDownLeftURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveDownLeft?access_token=f913982f971850e14cb30432fad2901aa4456361';
var stopURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/stop?access_token=f913982f971850e14cb30432fad2901aa4456361';

function moveForward(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveForwardURL,
        type: 'post',
        dataType: 'json',
        data: {args: argument},
        success: function (data) {
            communicationSucceeded();
        },
        error: function (data) {
            communicationError();
        }
    });
}

function communicationSucceeded(){
    alert("sos muy capo");
}

function communicationError(){
    alert("sos muy boludo");
}
$(document).ready(function(){
    $("#ButtonUp").click(function(){
        moveForward("LOW");
    });
});
