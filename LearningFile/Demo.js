const tick = document.getElementById("items");
const form = document.getElementById("form");
const filterOption = document.querySelector(".Filter");
filterOption.addEventListener("click", search);
form.addEventListener("submit", add);
tick.addEventListener("click", remove);
tick.addEventListener("click", Complete);

function Complete(e) {
  if (e.target.classList.contains("fas")) {
    const li = e.target.parentNode.parentNode;
    li.className =
      "list-group-item m-1 opacity-50 completed text-decoration-line-through ";
    console.log(li);
  }
}

function remove(e) {
  if (e.target.classList.contains("fa-trash-alt")) {
    const li = e.target.parentNode.parentNode;
    tick.removeChild(li);
  }
}

function add(e) {
  e.preventDefault();
  const text = document.getElementById("text").value;
  const li = document.createElement("li");
  li.className = "list-group-item m-1";
  li.appendChild(document.createTextNode(text));
  const btn = document.createElement("button");
  btn.className = "btn float-end  mx-2";
  const i = document.createElement("i");
  i.className = "far fa-trash-alt";
  btn.appendChild(i);
  btn.style.backgroundColor = "#f76b84";
  li.appendChild(btn);

  const btn1 = document.createElement("button");
  btn1.className = "btn float-end";
  const i1 = document.createElement("i");
  i1.className = "fas fa-check-circle";
  btn1.appendChild(i1);
  btn1.style.backgroundColor = "#3ec296";
  li.appendChild(btn1);
  tick.appendChild(li);
  document.getElementById("text").value = "";
}
function search(e) {
  var items = tick.getElementsByTagName("li");
  // changiong to Array
  Array.from(items).forEach(function (item) {
    switch (e.target.value) {
      case "all":
        item.style.display = "block";
        break;
      case "completed":
        if (item.classList.contains("completed")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
        break;

      case "no":
        if (item.classList.contains("completed")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
        break;
    }
  });
}
