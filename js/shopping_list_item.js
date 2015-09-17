
function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function check() {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function uncheck() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function render() {
  return $('<li />').addClass('completed_' + this.is_done).append($('<span />').text(this.name)).append($('<span />').text(this.description)).toString();
};