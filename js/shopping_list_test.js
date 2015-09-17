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
    expect(ShoppingListItem).has.property('name');
  });
  it("ShoppingListItem has a description property", function() {
    expect(ShoppingListItem).has.property('description');
  });
  it("ShoppingListItem has an is_done property", function() {
    expect(ShoppingListItem).has.property('is_done');
  });
  it("ShoppingListItem has a constructor with 2 arguments", function() {
    expect(ShoppingListItem.prototype.constructor).to.be.a('function');
    expect(ShoppingListItem.prototype.constructor.arguments.length).to.equal(2);
  });
  it("ShoppingListItem's constructor creates a new instance with name and description", function() {
    expect(item).has.property('name');
    expect(item).has.property('description');
  });
  it("ShoppingListItem has a check method", function() {
    expect(ShoppingListItem).respondTo('check');
  });
  it("ShoppingListItem check method changes is_done", function() {
    expect(ShoppingListItem.prototype.check).change(item, 'is_done');
    expect(item.is_done).to.be.true;
  });
  it("ShoppingListItem has an uncheck method", function() {
    expect(ShoppingListItem).respondTo('uncheck');
  });
  it("ShoppingListItem uncheck method changes is_done", function() {
    expect(ShoppingListItem.prototype.uncheck).change(item, 'is_done');
    expect(item.is_done).to.be.false;
  });
});