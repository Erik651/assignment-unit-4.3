console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// create an array
let basket = [];

function addItem(item) {
   basket.push(item);
   return true;
}
addItem('hello');
addItem('new item');

console.log(basket)

function listItems() {
    for(let item of basket)
    {console.log(item)}

}

function empty() {
    basket.length = 0;

    //basket.splice(0,basket.length);

    // while(basket.length > 0) {
    //     basket.pop();
    // }
};

empty();

console.log(basket)







// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
