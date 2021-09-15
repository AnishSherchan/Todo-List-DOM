const addbtn = document.getElementById('add');
const items = document.getElementById('list')
// Creating and using date function for fetching date from the users pc
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
console.log(month)
const time = `Date: " ${year} - ${month}  - ${day} "`
document.getElementById('Date').textContent = time;

// Event listener for adding item
addbtn.addEventListener('click',addItem);
// adding event for tick
items.addEventListener('click',complete)
// adding event for remove
items.addEventListener('click',remove)

// addItem Function
function addItem(e) {
    e.preventDefault();
    // getting value from the textfield
    const value = document.getElementById('field').value;
    // creating li for appending
    if (value.length != 0) {
        const li = document.createElement('li');
        li.className = 'item';
        // appending value in li
        li.appendChild(document.createTextNode(value));
        // creating buttons for the li
        const btn_check = document.createElement('button');
        btn_check.className = 'btn-check'
        const logo_1 = document.createElement('i');
        logo_1.className = "fas fa-check-circle";
        btn_check.appendChild(logo_1);
        const btn_trash = document.createElement('button');
        btn_trash.className = 'btn-trash';
        const logo_2 = document.createElement('i');
        logo_2.className = "far fa-trash-alt";
        btn_trash.appendChild(logo_2);
        // wrapping btns in div
        const div = document.createElement('div');
        div.appendChild(btn_check);
        div.appendChild(btn_trash);
        // appending div in li
        li.appendChild(div);
        // appending li to ul
        items.appendChild(li)
        // clearing the textfield of the input
        document.getElementById('field').value = "";
    }else{
        alert('Empty Work!')
    }
}

// complete function
function complete(e) {
    if (e.target.classList.contains('fas')) {
        const li = e.target.parentNode.parentNode.parentNode;
        li.style.textDecoration = 'line-through';
        li.classList.add('completed');
        li.style.opacity = '60%';
    }
}

// Remove Function
function remove (e){
    if (e.target.classList.contains('fa-trash-alt')) {
        const li = e.target.parentNode.parentNode.parentNode;
        items.removeChild(li);
    }
}