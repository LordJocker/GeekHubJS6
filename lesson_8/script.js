$(document).ready(function() {

    $('#btn').click(function newGame() {
        var arr = randomize();
        for (var i = 0; i <= 15; i++) {
            $('#t' + i + '').text(arr[i]);
        }
    });

    $('td').click(function () {
        console.log($('.empty').toggleClass('empty'));
        console.log($(this).toggleClass('empty'));
    });


    function randomize() {
        var i, arr = [], res = [];
        for (i = 1; i <= 15; i++ ) arr.push(i);
        for (i = 0; i < 15; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
        return res;
    }

});

