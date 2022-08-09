//Получение элементов HTML
const task=document.querySelector(".td_input");
let list_container=document.querySelector(".td_list");

//Переменные и массив - контейнер для списка
let list_item,checkbox,list_item_container,delete_btn
let to_do_list=[];


function addToDo(text){     //Добавление задания в список
    if (task.value.trim().length == 0) return
    else{
        list_container.append(...addElementToList())
        task.value = ""
        task.focus()        
    }
}
function addElementToList(){        //Создание элемента списка с checkbox и кнопкой удаления
    list_item_container=document.createElement('li')
    list_item_container.classList.add('td_list_item')

    list_item=document.createElement('span')

    checkbox=document.createElement('input')
    checkbox.type="checkbox"
    checkbox.classList.add('td_list_item_checkbox')

    delete_btn=document.createElement('button')
    delete_btn.type="submit"
    delete_btn.classList.add('delete_btn')

    list_item_container.append(list_item)
    list_item_container.append(checkbox)
    list_item_container.append(delete_btn)
    list_item.append(task.value)

    to_do_list.push(list_item_container)   
    return to_do_list
}
// checkbox.onchange= function(){
//     if(checkbox.checked){
//         list_item_container.style.textDecoration ='line-through'
//     } else{
//     list_item_container.style.textDecoration ='none'}
// // }
// list_container.addEventListener('click', 
//     function (event){
//         const target= event.target.closest
// })
// checkbox.onchange=function(){
//     if (checkbox.checked) list_item_container.style.textDecoration ='line-through'
//     else list_item_container.style.textDecoration ='none'
// }
list_container.addEventListener('click',event =>{    
    if (event.target.classList =="td_list_item_checkbox"){
    console.log(e.target.parrent)
        if (input.checked) list_item_container.style.textDecoration ='line-through'
        else list_item_container.style.textDecoration ='none'    
    }
})





