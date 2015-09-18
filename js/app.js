
var list = new ShoppingList();

function add_to_list() {
  var item = new ShoppingListItem(document.getElementById('title').value, document.getElementById('description').value);
  list.addItem(item);
  document.getElementById('content').innerHTML = list.render();
}