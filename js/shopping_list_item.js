
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
  var el = $('<div />').append($('<li />').addClass('completed_' + this.is_done).append($('<span />').text(this.name + ': ')).append($('<span />').text(this.description)));
  // create outer div since html() returns innerHTML; use prop('outerHTML') to get current element also;
  return el.html();            // el refers to the FIRST element created, <div>
};