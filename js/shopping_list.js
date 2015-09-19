
function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this.items.push(item);
    return this.items.length;
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
  var str = '';       // '<ul>';
  for (var i = 0; i < this.items.length; i++) {
    str += this.items[i].render(i);
  }
  return str;         // + '</ul>';
  // original solution renders the entire list; jQuery version appends new items to <ul> list in index.html;
};
