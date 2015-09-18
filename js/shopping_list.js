
function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.items.push(item);
    return true;
  } else {
    throw new Error('wrong item type');
  }
};

ShoppingList.prototype.removeItem = function(item) {
  if (item === null) {
    if (this.items.length > 0)
      this.items.pop();
    else
      return false;
  } else if (item instanceof ShoppingListItem) {
    var index = this.items.indexOf(item);
    if (index >= 0)
      this.items.splice(index, 1);
    else
      return false;
  } else {
    throw new Error('wrong item type');
  }
  return true;
};

ShoppingList.prototype.render = function() {
  var str = '<ul id="itemList">';
  for (var i = 0; i < this.items.length; i++) {
    str += this.items[i].render();
  }
  return str + '</ul>';
};

ShoppingList.prototype.getIndex = function(item) {
  for (var i = 0; i < this.items.length; i++) {
    if (item === this.items[i])
      return i;
  }
  return -1;
};