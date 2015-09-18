
var shopList = new ShoppingList();

function add_to_list() {
  var item = new ShoppingListItem(document.getElementById('title').value, document.getElementById('description').value);
  shopList.addItem(item);
  document.getElementById('content').innerHTML = shopList.render();
}

function changeCheckedStatus(idx, checkbox) {
  if (idx < 0 || idx >= shopList.items.length)
    return;
  else if (checkbox.checked)
    shopList.items[idx].check();
  else
    shopList.items[idx].uncheck();
  document.getElementById('content').innerHTML = shopList.render();
}