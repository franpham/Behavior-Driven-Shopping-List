// mocha.js, chai.js, shopping-list-test.js are loaded by script tags in index.html
var expect = chai.expect;

describe('ShoppingListItem', function() {
  var item;
  beforeEach(function() {
    item = new ShoppingListItem('item', 'test');
  });
  it("ShoppingListItem should be a function", function() {
    expect(ShoppingListItem).to.be.a('function');
    expect(ShoppingListItem.prototype).to.be.an('object');
  });
  it("ShoppingListItem has a name property", function() {
    expect(item).has.property('name');
  });
  it("ShoppingListItem has a description property", function() {
    expect(item).has.property('description');
  });
  it("ShoppingListItem has an is_done property", function() {
    expect(item).has.property('is_done');
  });
  it("ShoppingListItem has a constructor with 2 arguments", function() {
    expect(ShoppingListItem.prototype.constructor).to.be.a('function');
    expect(ShoppingListItem.prototype.constructor.length).to.equal(2);
  });
  it("ShoppingListItem's constructor creates a new instance with name and description", function() {
    expect(item).has.property('name');
    expect(item).has.property('description');
  });
  it("ShoppingListItem has a check method", function() {
    expect(ShoppingListItem).respondTo('check');
  });
  it("ShoppingListItem check method changes is_done", function() {
    item.check();
    expect(item.is_done).to.be.true;
  });
  it("ShoppingListItem has an uncheck method", function() {
    expect(ShoppingListItem).respondTo('uncheck');
  });
  it("ShoppingListItem uncheck method changes is_done", function() {
    item.uncheck();
    expect(item.is_done).to.be.false;
  });
  it("ShoppingListItem render method returns HTML with the item's name and description", function() {
    var str = item.render();
    expect(str).to.have.string($('<li />').addClass('completed_' + item.is_done).toString());
    expect(str).to.have.string($('<span />').text(item.name).append($('<span />').text(item.description)).toString());
  });
});