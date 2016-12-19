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

    tr.setAttribute("name", "row");

    table.appendChild(tr);
}
