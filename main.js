//Credit for this code goes to Rodrigo Silveira of www.easlylearntutorial.com

//To delete items, double click on them. 

function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText =  document.getElementById("item_" + cbId);

  if  (this.checked){
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "red";
    itemText.style.fontWeight = "800";
  } else {
    itemText.style.textDecoration = "none";
    itemText.style.color = "#000" ;
    itemText.style.fontWeight = "400";
  };

}

function deleteItem() {
  var spanId = this.id.replace("item_", "");
  document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {
  //<li>
  //each element should look like this
  //<input type='checkbox'/>
  //<span>Make todo list</span>
  //</li>
  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  var listItem = document.createElement('li');
  listItem.id = "li_" + id;

  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement('span');
  span.id = "item_" + id;
  span.innerText = itemText;
  span.ondblclick = deleteItem;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  list.appendChild(listItem);
}

var inItemText = document.getElementById('inItemText');
var btnNew = document.getElementById('addBtn');
btnNew.onclick = function() {

  var itemText = inItemText.value;

  if (!itemText || itemText == '') {
    return false;
  };

  addNewItem(document.getElementById('addList'), itemText);

  inItemText.focus();
  inItemText.select();
};
inItemText.focus();
inItemText.onkeyup = function(event) {
//if event == (13) --> ENTER
//if ENTER pressed then it will add item to the list
  if (event.which == 13){

    var itemText = inItemText.value;

    if (itemText == '' || itemText == ' ') {
      return false;
    };

    addNewItem(document.getElementById('addList'), itemText);

    inItemText.focus();
    inItemText.select();
  };
};
