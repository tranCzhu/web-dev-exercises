var input = prompt("what do you wanna do today?");
var toDo = [];
while(input !== "quit") {
    if (input === "new"){
        addToDo();
    }
    else if (input === "list") {
        listToDo();
    }
    else if (input === "delete") {
        deleteToDo();
    }
    input = prompt("what do you wanna do today?");
}
console.log("You quitted the app.");

function addToDo() {
    toDo.push(prompt("What is the task?"));
}

function listToDo() {
    console.log("*********");
    toDo.forEach(function show(task, index) {
        console.log(index + ": " + task);
    })
    console.log("*********");
}

function deleteToDo() {
    var index = prompt("What is the index of the task to delete?");
    toDo.splice(index, 1);
    console.log("deleted task of index " + index);
}