const task=document.querySelector(".td_input");
const list_container=document.querySelector(".td_list");

let to_do_list=[];


function addToDo(text){
    if (task.value.trim().length == 0) return
    else{
        to_do_list.push(task.value);
        console.log(to_do_list)
        let x=document.createElement('div')
        x.classList.add('td_list_item')
        list_container.appendChild(x)
        x.innerText=(to_do_list.length)+".  "+to_do_list[to_do_list.length-1]
        task.value = ""
        task.focus()
    }
}
function setFocus(){
}
// task.addEventListener("keyup",function event(){
//     event.preventDefault();
//     if (event.keyCode ===13){
//         addToDo();
//     }
// })