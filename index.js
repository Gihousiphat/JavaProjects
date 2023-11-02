
function createList() {
    let list = document.createElement('li');
    list.id = 'list';
    let close = document.createElement('input');
    close.id = 'close';
    close.type = 'button';
    close.value = 'X';
    list.textContent = document.getElementById("textbox").value;
    const startList = document.querySelector('#to-do_list');
    startList.appendChild(list);
    startList.appendChild(close);  
}

function clearList() {
    const startList = document.getElementById('to-do_list');
    const childList = document.getElementById('list');
    const childButton = document.getElementById('close');
    startList.removeChild(childButton);
    startList.removeChild(childList);
}


