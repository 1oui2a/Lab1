// create an array of strings
let task = [clean, arrange, move];

// create an addTask function
let addTask = (task)=>{
    task.push(task);
    console.log(task+"You have been added");
    return task.length;
}

//lists all the tasks
let listAllTasks = ()=>{
    task.forEach((item)=>{
        console.log(item);
})
}


// deletes a task
let deleteTasks = (task)=>{

    let index = task.indexOf(task);
    if(index > -1){ 
        task.splice(index,1);
        console.log(task+" has been deleted");
    } else {
        console.log(task+"not found");
    }
}

addTask("work");
listAllTasks();
deleteTasks("arrange");


// when using arrow functions, you use let or const instead of function
// arrow functions are function expression not declaration