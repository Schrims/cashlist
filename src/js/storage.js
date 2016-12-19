private const storage = require('electron-json-storage');

function save() {
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
  active = active.replace(/[\s,]+/g, ' ').trim().split(' ').toString();
  storage.set(active, { items: storageArray }, function(error) {
    if (error) throw error;
  });
}

function loadAll() {
  storage.getAll(function(error, data) {
    if (error) throw error;

    console.log(data);
  });
}

function loadList(list) {
  storage.get(list, function(error, data) {
    if (error) throw error;

    console.log(data);
  });
}

function clear() {
  storage.clear(function(error) {
    if (error) throw error;
  });
}
