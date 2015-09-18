
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
  var index = shopList.getIndex(this);
  var checkbox = $('<input />').prop('type', 'checkbox').attr('onchange', 'changeCheckedStatus(' + index + ', this)');
  var el = $('<div />').append($('<li />').addClass('completed_' + this.is_done)      // must use attr instead of prop for onchange;
    .append(this.is_done ? checkbox.attr('checked', true) : checkbox)
    .append($('<span />').text(this.name + ': ')).append($('<span />').text(this.description))
    .append($('<button />').attr('onclick', 'removeItemButtonClicked(' + index + ')').text('X')));
  // create outer div since html() returns innerHTML; use prop('outerHTML') to get current element also;
  return el.html();            // el refers to the FIRST element created, <div>
};