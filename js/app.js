
var shopList = new ShoppingList();

function add_to_list() {
  var item = new ShoppingListItem(document.getElementById('title').value, document.getElementById('description').value);
  shopList.addItem(item);                    // add item before rendering;
  document.getElementById('content').innerHTML = shopList.render();
  var query = $('input[type=checkbox]');     // must add eventListeners AFTER elements are added to the DOM;
  query.on('change', function() {
    $(this).parent().toggleClass('completed_false');
    $(this).parent().toggleClass('completed_true');
    $(this).siblings().toggleClass('completed_true');
    var idx = shopList.getIndex(item);
    changeCheckedStatus(idx, this);
  });
  query = $("button:contains('X')");
  query.hover(function() {
    $(this).toggleClass('highlight');
  });
}

function changeCheckedStatus(idx, checkbox) {
  if (idx < 0 || idx >= shopList.items.length)
    return;
  else if (checkbox.checked)
    shopList.items[idx].check();
  else
    shopList.items[idx].uncheck();
  // document.getElementById('content').innerHTML = shopList.render();
}

function removeItemClicked(idx) {
  if (idx < 0 || idx >= shopList.items.length)
    return;
  shopList.removeItem(shopList.items[idx]);
  document.getElementById('content').innerHTML = shopList.render();
}