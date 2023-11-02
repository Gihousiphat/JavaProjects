let listCount = 1;
function createList() {
    const orderedList = document.getElementById('to-do_list');
    const list = document.createElement('li');
    const button = document.createElement('input');
    if (listCount == 1) {
        list.id = `list${listCount}`;
        button.id = `close${listCount}`;
        listCount++;
    } else {
        for(let i = 1; i < listCount; i++) {
            const checkValue = document.getElementById(`list${i}`);
            if (checkValue == null) {
                console.log('hello');
                list.id = `list${i}`;
                button.id = `close${i}`;
                break;
            } else if (i == listCount - 1) {
                console.log('goodbye');
                list.id = `list${listCount}`;
                button.id = `close${listCount}`;
                listCount++;
                break; 
            }
        }
    }
    console.log(listCount);
    list.textContent = document.getElementById('textbox').value;
    button.type = 'button';
    button.value = 'X';
    button.addEventListener('click', clearToDo);
    orderedList.appendChild(list);
    orderedList.appendChild(button);
    return;
    }

function clearList() {
    for (let i = 1; i < listCount; i++) {
    const startList = document.getElementById('to-do_list');
    const childList = document.getElementById(`list${i}`);
    const childButton = document.getElementById(`close${i}`);
    startList.removeChild(childButton);
    startList.removeChild(childList);
    }
    return listCount = 1;
}



function clearToDo(test) {
    const value = test.target.id;
    console.log(value);
    const numRegex = /\d+/;
    const num = value.match(numRegex);
    const number = num[0];
    const startList = document.getElementById('to-do_list');
    const childList = document.getElementById(`list${number}`);
    const childButton = document.getElementById(`close${number}`);
    startList.removeChild(childButton);
    startList.removeChild(childList);
    return;
}
