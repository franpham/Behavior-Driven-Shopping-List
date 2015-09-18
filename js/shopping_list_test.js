// mocha.js, chai.js, shopping-list-test.js are loaded by script tags in index.html
var expect = chai.expect;

describe('ShoppingList', function() {
  var list, item;
  beforeEach(function() {
    list = new ShoppingList();
    item = new ShoppingListItem('item', 'test');
  });
  it("ShoppingList should be a class", function() {
    expect(ShoppingList).to.be.a('function');
    expect(list).to.be.instanceof(ShoppingList);
  });
  it("ShoppingList has an items property", function() {
    expect(list).has.property('items');
  });
  it("ShoppingList has a constructor that creates an empty Array", function() {
    expect(list.items).to.be.instanceof(Array);
    expect(list.items).to.be.empty;
  });
  it("ShoppingList has an addItem method that takes an argument", function() {
    expect(ShoppingList).respondTo('addItem');
    expect(ShoppingList.prototype.addItem).to.have.length(1);
  });
  it("ShoppingList's addItem puts a ShoppingListItem in items Array", function() {
    expect(list.addItem(item)).to.be.true;
    expect(list.items).to.have.length(1);
  });
  it("ShoppingList's addItem throws an error if the item is not a ShoppingListItem", function() {
    expect(list.addItem).to.throw(Error);
  });
  it("ShoppingList has a removeItem method that takes an argument", function() {
    expect(ShoppingList).respondTo('removeItem');
    expect(ShoppingList.prototype.removeItem).to.have.length(1);
  });
  it("ShoppingList's removeItem removes a ShoppingListItem from items Array if it's present", function() {
    list.addItem(item);
    expect(list.removeItem(item)).to.be.true;
    expect(list.items).to.have.length(0);
  });
  it("ShoppingList's removeItem removes the last item if no argument was given", function() {
    list.addItem(item);
    expect(list.removeItem(null)).to.be.true;
    expect(list.items).to.have.length(0);
  });
  it("ShoppingList's removeItem throws an error if item is not a ShoppingListItem", function() {
    expect(list.removeItem).to.throw(Error);
  });
  it("ShoppingList has a render method that returns a HTML list of each of the items", function() {
    list.addItem(item);
    var str = list.render();
    expect(str).to.have.string('<ul><li');
    expect(str).to.have.string('/li></ul>');
  });
});

describe('ShoppingListItem', function() {
  var item;
  beforeEach(function() {
    item = new ShoppingListItem('item', 'test');
  });
  it("ShoppingListItem should be a class", function() {
    expect(ShoppingListItem).to.be.a('function');
    expect(item).to.be.instanceof(ShoppingListItem);
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
    expect(str).to.equal('<li class="completed_false"><span>' + item.name + '</span><span>' + item.description + '</span></li>');
    // expect(str).to.have.string($('<li />').addClass('completed_' + item.is_done).after($('<span />').text(item.name)).after($('<span />').text(item.description)).prop('outerHTML'));
    // expect(str).to.have.string($('<span />').text(item.name).after($('<span />').text(item.description)).prop('outerHTML'));
  });
});