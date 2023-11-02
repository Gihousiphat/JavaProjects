
function createList() {
    let list = document.createElement('li');
    list.textContent = document.getElementById("textbox").value;
    const startList = document.querySelector('#to-do_list');
    startList.appendChild(createList('#textbox'))
    return list;
}
const startList = document.querySelector('#to-do_list');
startList.appendChild(createList('#textbox'));