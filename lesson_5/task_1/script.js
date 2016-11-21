var mode = 'Add',
    el;


function addItem() {
    var input = document.getElementsByName('title')[0];
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    if (input.value) {
        if (mode == 'Add') {
            var li = document.createElement('li');
            var ul = document.getElementById('list');

            input.placeholder = "Type something…";
            li.innerText = input.value;
            li.onclick = clicked;
            input.value = '';
            li.appendChild(checkbox);
            ul.appendChild(li);

        } else if (mode == 'Edit') {
            el.innerText = input.value;
            el.appendChild(checkbox);
            input.value = '';
            el.classList.remove('edit');
            mode = 'Add';
            document.getElementById('dynamicButton').innerText = mode;
        }
    }
}

function removeItem() {
    el.parentNode.removeChild(el);

    var input = document.getElementsByName('title')[0];
    input.value = '';
    mode = 'Add';
    document.getElementById('dynamicButton').innerText = mode;
}

function clicked() {
    el = event.toElement;
    if (this.tagName == 'input') return;
    [].forEach.call(el.parentElement.children, function (el) {
        el.id = ('');
        el.classList.remove('edit');
    });
    el.classList.add('edit');
    el.id = ('remove');
    var input = document.getElementsByName('title')[0];

    input.value = el.innerText;
    mode = 'Edit';
    document.getElementById('dynamicButton').innerText = mode;
}

function archiveItem() {
    var li = document.createElement('li');
    var ul = document.getElementById('archivedList');
    var input = document.getElementsByName('title')[0];

    li.innerText = input.value;
    ul.appendChild(li);
    removeItem();
}

function showArchive() {
    if (document.getElementById('archivedList').style.display == "none") {
        document.getElementById('archivedList').style.display = "block";
        document.getElementById('showButton').innerText = 'Close archive';
    }
    else {
        document.getElementById('archivedList').style.display = "none";
        document.getElementById('showArchive').innerText = 'Show archive';
    }
}
