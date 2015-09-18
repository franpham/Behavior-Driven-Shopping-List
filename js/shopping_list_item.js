
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
  var el = $('<div />').append($('<li />').addClass('completed_' + this.is_done).append($('<span />').text(this.name)).append($('<span />').text(this.description)));
  var str = '';                           // el refers to the FIRST element created, <div>;
  el.children().each(function() {         // html() returns only the html of the FIRST element, so must use each to iterate thru children;
    str += $(this).prop('outerHTML');     // must use prop('outerHTML') to get the current element also;
  });
  console.log(str);
  return str;
};