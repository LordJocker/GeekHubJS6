$(document).ready(function() {

    $('#btn').click(function newGame() {
        var arr = randomize();
        for (var i = 0; i <= 15; i++) {
            $('#t' + i + '').text(arr[i]);
        }
    });




    function randomize() {
        var i, arr = [], res = [];
        for (i = 1; i <= 15; i++ ) arr.push(i);
        for (i = 0; i < 15; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0])
        console.log(res);
        return res;
    }

});

