var moveUpLeftURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/moveUpLeft?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var moveForwardURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/moveForward?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var moveUpRightURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/moveUpRight?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var moveDownRightURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/downRight?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var moveBackwardsURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/backwards?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var moveDownLeftURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/moveDownLeft?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';
var stopURL = 'http://172.22.34.176:8080/v1/devices/230043000647343339373536/stop?access_token=7277a10adc1a30172068cd93ad8b41c7d5528e2d';


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
        moveForward("HIGH");
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
        moveDownLeft("LOWs");
    });
});
