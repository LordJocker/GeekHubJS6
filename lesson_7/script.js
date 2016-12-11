$(document).ready(function() {
    $('#new-item').keypress(function(e){
        if (e.which === 13) {
            if ($(this).val()) {
                addItem();
                $(this).val("");
            }

        }
    });

    function addItem() {
        var value = $('#new-item').val();
        $('ul').append('<li class="ui-state-default"><input type="checkbox" class="cbx">' + value + '<button class="delete-btn">x</button></br></li>');
    };

    $(document).on('click', '.complete-btn', function(){
        $(this).toggleClass('completed');
    });

    $(document).on('click', '.delete-btn', function () {
        $(this).parent().remove();
    })

    $( function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
    } );
});
