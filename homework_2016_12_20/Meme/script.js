$(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        let bottomText =  $('.bottom-text').val();
        let topText = $('.top-text').val();
        let memeName = $('.select').val();
        let image = $('.background-image').val();

        // $('.form').append(`<img src='https://memegen.link/${memeName}/${topText}/${bottomText}.jpg'>`);


        $.get( `https://memegen.link/custom/${topText}/${bottomText}.jpg`, { font: "titilliumweb-black", alt: `${image}` } )
          .done(function( data ) {
            $('.form').append(data);
          });
    });
});
