
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

ShoppingListItem.prototype.render = function render(index, isDom) {  // must use attr instead of prop for onchange;
  var checkbox = $('<input />').prop('type', 'checkbox');        // .attr('onchange', 'changeCheckedStatus(' + index + ', this)')
  var el = $('<div />')     // id property is needed by jQuery to remove items from list;
    .append($('<li />').prop('id', 'item' + index).addClass('completed_' + this.is_done)  // addClass outside of append so <li> is returned;
      .append(this.is_done ? checkbox.attr('checked', true) : checkbox)
      .append($('<span />').text(this.name + ': ')).append($('<span />').text(this.description))
      .append($('<button />').attr('onclick', 'removeItemClicked(' + index + ')').text('X'))
    );
  // create outer div since html() returns innerHTML; use prop('outerHTML') to get current element also;
  return isDom ? el.children() : el.html();
};