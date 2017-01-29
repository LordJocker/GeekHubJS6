$(function() {
    $('form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: "https://ronreiter-meme-generator.p.mashape.com/meme",
            type: "GET",
            data: {
                meme: $('.select').val(),
                top: $('.top-text').val(),
                bottom: $('.bottom-text').val()
            },
            success: function(data) {
              $('.form').append(data);
            },
            error: function (error) {
              alert(error);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "NejroNDmBMmshIBxjFIyQBfXJWQcp1SYFfmjsn5H1IsQTpzt8G");
            }
        });
    });
});
