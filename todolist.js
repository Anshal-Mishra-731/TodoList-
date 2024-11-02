const todolist = []; 
let todolistH = '';

document.querySelector('.js-todolist').innerHTML = todolistH

function addTodo(){ 
    let task = ''; 
    let date = ''; 
    let todolistH = ''; 

todolist.forEach((valve, i) => { //The first word is basically the line "let valve = todolist[i]" in traditional for loop. The i is the index. 
    task = valve.task; 
    date = valve.date; 

    let joker = `
    <div>
    ${task}
    </div>
    <div>
    ${date}
    </div>
    <div>
    <button class ="js-jaat">Delete</button> 
    </div>` //"&nbsp" is a non-breaking space entity and is used to give space between different HTML elements within HTML. 
//divided the task, date and button into three different elements. 

    todolistH += joker; 
}); 

document.querySelector('.js-todolist').innerHTML = todolistH; 

//querySelectorAll selects all the iterating buttons with the class js-jaat. 
document.querySelectorAll('.js-jaat').forEach((iter, i) => {
    iter.addEventListener('click', () => {
    todolist.splice(i, 1); 
    addTodo();
    })

});


}

function push(){
    let task = ''; 
    let date = ''; 
    let input = document.querySelector('.js-task-input').value;
    let input2 = document.querySelector('.js-date').value; 
    obj = {
        task: input,
        date: input2,  
    }
    todolist.push(obj); 
    document.querySelector('.js-task-input').value = ''; 
    document.querySelector('.js-date').value = ''; 
    addTodo(); 
}

