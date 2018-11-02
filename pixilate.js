// Your code here
const table = document.getElementById('table');
const button = document.getElementById('add-row');
const select = document.getElementById('select');
let count = 0;

function makeRow(){
    if(count === 16){
        return;
    }
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let i = 0; i < 40; i++){
        let td = document.createElement('td');
        td.setAttribute("id", `tr${count}:td${i}`);
        tr.appendChild(td);
    }
    count++;
}
button.addEventListener('click', makeRow);


function colorer(event){
    if(event.target.id !== 'table'){
        if(!event.target.classList.value.includes(`${select.value}`)){
            event.target.classList.add(`${select.value}`);
        }
        else{
            event.target.classList.value = '';        
        }
    }
}

table.addEventListener('mousedown', addMouseOver);
table.addEventListener('mouseup', removeMouseOver);

function addMouseOver(){
    table.addEventListener('mouseover', colorer);
}

function removeMouseOver(){
    table.removeEventListener('mouseover', colorer);
}





