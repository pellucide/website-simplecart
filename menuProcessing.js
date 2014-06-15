


/*
var categories = new function() {
    this.count = 0;
    this.catArray = new Array();
    this.get = function (categoryName) {
        
    }
    this.has = function (
    }
}
*/


//console.log("menu="+menu);
//menu0 = JSON.decode(menu, false);
console.log("itemslength="+ menu.items.length);

function Category(name) {
    this.name = name;
    this.items = new Array();
    this.getItems = function() {
        return this.items;
    }
    this.addItem = function(item) {
        this.items[this.items.length] = item;
    }
}

var categories = new Array();
var itemsHash = new Hash();
var choiceHash = new Hash();
for (var ii=0; ii < menu.items.length; ii++) {
    var item = menu.items[ii];
    if (categories.hasOwnProperty(item.category)) {
        var caty = categories[item.category];
        caty.addItem(item);
    } else {
        var caty = new Category(item.category);
        categories[item.category]  = caty;
        categories[categories.length]  = caty;
        caty.addItem(item);
    }


    itemsHash.set(item.id, item);
    if (item.hasOwnProperty('itemChoice')) {
        for (var jj=0; jj < item.itemChoice.length; jj++) {
            var itemChoice = item.itemChoice[jj];
            choiceHash.set(itemChoice.id, itemChoice); 
        }
    }
}

console.log("categories length="+ categories.length);
var item = itemsHash.get(82);
console.log("item 82="+ item);
/* test
var h = new Object(); // or just {}
h[0] = 0;
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
        console.log('size of the hash table is:'+h.length);
    }
}

var a = new Array(); // or just []
a[0] = 0;
a['one'] = 1;
a['two'] = 2;
a['three'] = 3;

// show the values stored
for (var k in a) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (a.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + a[k]);
        console.log('size of the arary is:'+a.length);
    }
}
console.log(a.length);
*/

