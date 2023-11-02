let listCount = 0;
function createList() {
    const orderedList = document.getElementById('to-do_list');
    const list = document.createElement('li');
    listCount++;
    list.id = `list${listCount}`;
    list.textContent = document.getElementById('textbox').value;
    const button = document.createElement('input');
    button.id = `close${listCount}`;
    button.type = 'button';
    button.value = 'X';
    orderedList.appendChild(list);
    orderedList.appendChild(button);
    
}

function clearList() {
    for (let i = 1; i < listCount + 1; i++) {
    const startList = document.getElementById('to-do_list');
    const childList = document.getElementById(`list${i}`);
    const childButton = document.getElementById(`close${i}`);
    startList.removeChild(childButton);
    startList.removeChild(childList);
    }
    return listCount = 0;
}


