var storage = new Storage();

function Storage() {
    const storage = require('electron-json-storage');

    this.save = function() {
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
        storage.set(active, {
            items: storageArray
        }, function(error) {
            if (error) throw error;
        });
    };

    this.loadAll = function() {
        storage.getAll(function(error, data) {
            if (error) throw error;
            console.log(data);
        });
    }

    this.loadList = function(list) {
        storage.get(list, function(error, data) {
            if (error) throw error;
            console.log(data);
        });
    }

    this.clear = function() {
        storage.clear(function(error) {
            if (error) throw error;
        });
    }
}
