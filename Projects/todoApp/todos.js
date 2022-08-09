console.log("todos js")


function addtodo(){
    console.log("add todo")
    let val = document.getElementById('todo').value;

    let todoObj = JSON.parse(localStorage.getItem("todos"));
    // console.log(todoObj)
    if(todoObj === null){
        todoObj = []
    }
    else{
       
        // console.log("else part")
        todoObj.push(val)
        // console.log(todoObj)
        localStorage.setItem("todos",JSON.stringify(todoObj))
    }

    showTodo()
    document.getElementById('todo').value = ""
}



function showTodo(){
    let ele = document.getElementById("displaytodos")

    let todoObj = JSON.parse(localStorage.getItem("todos"))
    if(todoObj == null){
        todoObj = []
    }
    else{
        let data = ``
        todoObj.forEach((element,index) => {
             data = data + `
            <tr>
                    <td>${index+1}</td>
                    <td>${element}</td>
                    <td><button class="btn btn-warning" onclick="editTodo(${index})">Edit todo </button></td>
                    <td><button class="btn btn-danger" onclick="deleteTodo(${index})">Delete todo </button></td>
                </tr>
            `
            

        
            
        });

        ele.innerHTML = data;
    }
    
}
showTodo()


function deleteTodo(index){
    console.log(index)
    let todoObj = JSON.parse(localStorage.getItem("todos"))
    todoObj.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(todoObj))
    showTodo()
}