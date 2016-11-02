var moveUpLeftURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveUpLeft?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveForwardURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveForward?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveUpRightURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveUpRight?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveDownRightURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/downRight?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveBackwardsURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/backwards?access_token=f913982f971850e14cb30432fad2901aa4456361';
var moveDownLeftURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/moveDownLeft?access_token=f913982f971850e14cb30432fad2901aa4456361';
var stopURL = 'https://api.particle.io/v1/devices/2e0039000647343339373536/stop?access_token=f913982f971850e14cb30432fad2901aa4456361';

function moveUpLeft(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveUpLeftURL,
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

function moveUpRight(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveUpRightURL,
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

function moveDownRight(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveDownRightURL,
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

function moveBackwards(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveBackwardsURL,
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

function moveDownLeft(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: moveDownLeftURL,
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
    $("#ButtonUpLeft").click(function(){
        moveUpLeft("LOW");
    });
    $("#ButtonUp").click(function(){
        moveForward("LOW");
    });
    $("#ButtonUpRight").click(function(){
        moveUpRight("LOW");
    });
    $("#ButtonDownRight").click(function(){
        moveDownRight("LOW");
    });
    $("#ButtonDown").click(function(){
        moveBackwards("LOW");
    });
    $("#ButtonDownLeft").click(function(){
        moveDownLeft("LOW");
    });
});
