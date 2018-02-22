
function addNewItem(list, itemText) {
  //<li>
  //each element should look like this
  //<input type='checkbox'/>
  //<span>Make todo list</span>
  //</li>
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.onclick = function () {
    console.log('it works');
  };

  listItem.innerText = itemText;

  var span = document.createElement('span');
  span.innerText = itemText;

  listItem.appendChild(checkBox);
  //listItem.appendChild(span);

  list.appendChild(listItem);
}

var inItemText = document.getElementById('inItemText');
inItemText.focus();
inItemText.onkeyup = function(event) {
//if event == (13) --> ENTER
//if ENTER pressed then it will add item to the list
  if (event.which == 13){

    var itemText = inItemText.value;

    if (itemText == '' || itemText == ' ') {
      return false;
    }

    addNewItem(document.getElementById('addList'), itemText);

    inItemText.focus();
    inItemText.select();
  }
}
