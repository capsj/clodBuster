var moveUpLeftURL = 'https://api.particle.io/v1/devices/230043000647343339373536/moveUpLeft?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var moveForwardURL = 'https://api.particle.io/v1/devices/230043000647343339373536/moveForward?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var moveUpRightURL = 'https://api.particle.io/v1/devices/230043000647343339373536/moveUpRight?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var moveDownRightURL = 'https://api.particle.io/v1/devices/230043000647343339373536/downRight?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var moveBackwardsURL = 'https://api.particle.io/v1/devices/230043000647343339373536/backwards?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var moveDownLeftURL = 'https://api.particle.io/v1/devices/230043000647343339373536/moveDownLeft?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var stopURL = 'https://api.particle.io/v1/devices/230043000647343339373536/stop?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var turnLeftURL = 'https://api.particle.io/v1/devices/230043000647343339373536/turnLeft?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';
var turnRightURL = 'https://api.particle.io/v1/devices/230043000647343339373536/turnRight?access_token=1ce12e717c8e01a41fb48ceff899c5eb12203dc5';

function post(url,data){
  $http.post(url,data).then(
    function success(response){

    },
    function error(response){

    }
  )
}

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
function turnRight(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: turnRightURL,
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
function turnLeft(argument) {// argument = pin:HIGH || pin:LOW
    $.ajax({
        url: turnLeftURL,
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
    //alert("sos muy capo");
}

function communicationError(){
    //alert("sos muy boludo");
}

$(document).ready(function(){
    $("#ButtonUpLeft").click(function(){
        moveUpLeft("HIGH");
    });
    $("#ButtonUp").click(function(){
        moveForward("HIGH");
    });
    $("#ButtonUpRight").click(function(){
        moveUpRight("HIGH");
    });
    $("#ButtonDownRight").click(function(){
        moveDownRight("HIGH");
    });
    $("#ButtonDown").click(function(){
        moveBackwards("HIGH");
    });
    $("#ButtonDownLeft").click(function(){
        moveDownLeft("HIGH");
    });
    $("#Right").click(function(){
        turnRight("HIGH");
    });
    $("#Left").click(function(){
        turnLeft("HIGH");
    });

    $('body').on('keydown keyup',function(e){
      var color = e.type=="keydown" ? 'red' : 'white' ;
      if(e.which==82){
          moveForward("HIGH")
      }
    });

});
