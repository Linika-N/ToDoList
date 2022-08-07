//Получение элементов HTML
const task=document.querySelector(".td_input");
let list_container=document.querySelector(".td_list");

//Переменные и массив - контейнер для списка
let list_item,checkbox,list_item_container,delete_btn
let documentFragment=document.createDocumentFragment()
let to_do_list=[];


function addToDo(text){     //Добавление задания в список
    if (task.value.trim().length == 0) return
    else{
        to_do_list.push(task.value);
        addElementToList()
        list_item.innerHTML=to_do_list[to_do_list.length-1]
        task.value = ""
        task.focus()
    }
}
function addElementToList(){        //Создание элемента списка с checkbox и кнопкой удаления
    list_item_container=document.createElement('li')
    list_item=document.createElement('span')
    checkbox=document.createElement('input')
    checkbox.type="checkbox"
    delete_btn=document.createElement('button')
    delete_btn.type="submit"
    list_item_container.classList.add('td_list_item')
    checkbox.classList.add('td_list_item_checkbox')
    delete_btn.classList.add('delete_btn')
    documentFragment.appendChild(list_item_container)
    list_item_container.appendChild(list_item)
    list_item_container.appendChild(checkbox)
    list_item_container.appendChild(delete_btn)
    list_container.appendChild(documentFragment)
}

// checkbox.onchange= function(){
//     if(checkbox.checked)
//         list_item_container.classList.add('td_list_item_done')
// }
