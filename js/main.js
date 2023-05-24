let toDolist = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;

function addTask(){
    let taskName = document.getElementById('taskInput').value;
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        toDolist.push(obj);
        chizish();
        allTask = toDolist.length;
        document.getElementById('allTask').innerText = allTask;
    }
}
function chizish(){
    let list = '';
    console.log(toDolist);
    toDolist.forEach(function (item){
        if (item.complete){
            completeTask++;
        }else {
            completeTask--;
        }
        list += '<li class="list-group-item">' +
                   ' <input '+ (item.complete ? "checked" :"") +' onchange="completed(this)" type="checkbox" class="mr-2" id="'+ item.tartib +'"><label For="'+ item.tartib +'">'+ item.name +'</label>' +
               ' </li>'
    });
    document.getElementById('list').innerHTML = list;
    document.getElementById('completeTask').innerText = completeTask;
    let progressW
}

function comleted(input){
    let searchId = input.getAttribute('id');
    toDolist.forEach(function (item,i){
        if (item.tartib == searchId){
            toDolist[i].complete = item.complete ? false : true;
        }
    });
    chizish();
}
















