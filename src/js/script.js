function addLine() {
  var table = document.getElementById("tablebody");
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

  tr.setAttribute("name","row");

  table.appendChild(tr);
}

function save() {
  const storage = require('electron-json-storage');
  const rows = document.getElementsByName("row");

  var storageArray = [];
  for (var i = 0; i < rows.length; i++) {
    var items = rows[i].getElementsByTagName("td");
    var itemArray = [];
    for (var j = 0; j < items.length; j++) {
      itemArray.push(items[j].innerHTML);
    }
    storageArray.push(itemArray);
  }

  var active = document.getElementsByClassName("active");
  active = active[0].textContent;
  console.log(active.split(/[ ,]+/));
  console.log(active.replace(/[\s,]+/g, ' ').trim().split(' '));
  storage.set('1234', { 1234: storageArray }, function(error) {
    if (error) throw error;
  });
}

function load() {
  const storage = require('electron-json-storage');

  storage.getAll(function(error, data) {
    if (error) throw error;

    console.log(data);
  });
}

function getBody() {
  const storage = require('electron-json-storage');

  storage.get('tablebody', function(error, data) {
    if (error) throw error;

    console.log(data);
  });
}
