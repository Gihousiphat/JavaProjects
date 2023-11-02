
function createList() {
    let list = document.createElement('li');
    list.textContent = document.getElementById("textbox").value;
    const startList = document.querySelector('#to-do_list');
    startList.appendChild(list);
    return list;
}

let myValue = '';
document.getElementById('textbox').value = myValue;
