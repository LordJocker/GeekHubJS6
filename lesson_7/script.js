$(document).ready(function() {
    var toDoList = $('#toDoList');
    var taskId = 0;

    $('#new-item').keypress(function(e){
        if (e.keyCode === 13) {
            if ($(this).val()) {
                var task = $(this).val();
                this.value='';
                toDoList.children().each(function (index, el) {
                    var checkId = $(el).attr('task-id').slice(9);
                    if (checkId > taskId) {
                        taskId = checkId;
                    }
                });
                taskId++;

                localStorage.setItem('task-id: ' + taskId, task);

                var template = '<li><input type="checkbox" class="cbx">' +
                    task + '<button class="del-btn">x</button></br></li>';

                $(template).addClass('ui-state-default')
                    .attr('task-id', taskId)
                    .appendTo('#toDoList');
            }
        }
    });

    function showStorageTasks() {
        if (!!localStorage.length)
            for (var i = 0; i < localStorage.length; i++){
                var key = localStorage.key(i);
                var task = localStorage.getItem(key);
                var template = '<li><input type="checkbox" class="cbx">' +
                    task + '<button class="del-btn">x</button></br></li>';
                if (key.slice(0,4) == 'task')
                    $(template)
                        .addClass('ui-state-default')
                        .attr('task-id', key)
                        .appendTo('#toDoList');
            }
    }

    showStorageTasks();

    $(document).on('click', '.cbx', function(){
        $(this).parent().toggleClass('completed');
    });

    $(document).on('click', '.del-btn', function () {
        localStorage.removeItem($(this).parent().attr('task-id'));
        $(this).parent().remove();
    });

    $( function() {
        $("#toDoList")
            .sortable()
            .disableSelection();
    } );

    $(document).on('click', '#all-btn', function () {
        toDoList.children().each(function (){
            $(this).removeClass('hidden');
        });
    });

    $(document).on('click', '#active-btn', function () {
        toDoList.children().each(function () {
            if ($(this).hasClass('completed'))
                $(this).addClass('hidden');
            else
                $(this).removeClass('hidden');
        })
    });

    $(document).on('click', '#completed-btn', function () {
        toDoList.children().each(function () {
            if (!$(this).hasClass('completed'))
                $(this).addClass('hidden');
            else
                $(this).removeClass('hidden');
        });
    });

    $(document).on('click', '#cc-btn', function () {
        toDoList.children().each(function () {
            if ($(this).hasClass('completed')) {
                $(this).remove();
                localStorage.removeItem($(this).attr('task-id'));
            }
        });
    });
});
