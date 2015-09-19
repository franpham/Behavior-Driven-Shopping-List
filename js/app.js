
var shopList = new ShoppingList();

function add_to_list() {
  var item = new ShoppingListItem(document.getElementById('title').value, document.getElementById('description').value);
  var idx = shopList.addItem(item);         // for original solution, add item before assigning innerHTML = shopList.render();
  //var query = $('input[type=checkbox]');  // this query searches entire document;

  var query = item.render(idx, true);       // true to get the jQuery object;
  $('#itemList').append(query);             // append the new item to <ul> list BEFORE adding eventListeners;
  var checkbox = query.find('input[type=checkbox]');
  checkbox.on('change', function() {
    $(this).parent().toggleClass('completed_false');
    $(this).parent().toggleClass('completed_true');
    $(this).siblings().toggleClass('completed_true');
    changeCheckedStatus(idx, this);
  });
  // query = $("button:contains('X')");     // this query searches entire document;
  var button = query.find("button:contains('X')");
  button.hover(function() {                 // must add eventListeners AFTER elements are added to the DOM;
    $(this).toggleClass('highlight');
  });
  button.on('click', function() {
    $('#item' + idx).remove();
    removeItemClicked(idx);
  });
}

function changeCheckedStatus(idx, checkbox) {
  if (idx < 0 || idx >= shopList.items.length)
    return;
  else if (checkbox.checked)
    shopList.items[idx].check();
  else
    shopList.items[idx].uncheck();
}

function removeItemClicked(idx) {
  if (idx < 0 || idx >= shopList.items.length)
    return;
  shopList.removeItem(shopList.items[idx]);
}