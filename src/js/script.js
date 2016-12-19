init();

function init() {
  console.log("init");
  const navHome = document.getElementById("nav-home");
  navHome.className += " active";

  const navLight = document.getElementById("nav-light");
  navLight.className += " active";
}

function sayhi() {
  console.log("hi");
}

function addLine() {
  var table = document.getElementById("table");
  var input = document.getElementsByTagName("input");

  var tr = document.createElement("tr");
  var tdName = document.createElement("td");
  var tdType = document.createElement("td");
  var tdDate = document.createElement("td");
  var tdAuthor = document.createElement("td");

  tdName.textContent = input.name.value;
  tr.appendChild(tdName);
  tdType.textContent = input.type.value;
  tr.appendChild(tdType);
  tdDate.textContent = input.date.value;
  tr.appendChild(tdDate);
  tdAuthor.textContent = input.author.value;
  tr.appendChild(tdAuthor);

  var btnDiv = document.createElement("div");
  btnDiv.setAttribute("class", "btn-group");

  var btnEdit = document.createElement("button");
  btnEdit.setAttribute("class", "btn btn-default");
  btnEdit.textContent = "edit";

  btnDiv.appendChild(btnEdit);

  tr.appendChild(btnDiv);



  table.appendChild(tr);
}
