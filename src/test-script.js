const BookRepository = require('./book.repository');
const db = require('./db')
const fs = require('fs')

const repository = new BookRepository(db);
const dico = require('../db.json');

// repository.save({
//     'id' : 2,
//     "name" :"testa",
//     'price' :6.1,
//     "added_at" : '2019-01-01'
// });

// let sum = 0.0;
// for(let i in Object.entries(dico.books)) {
//     console.log(dico.books[i].price);
//     let tmp = dico.books[i].price;
//     sum = sum + tmp
// };
// console.log(sum);

let aa = repository.getTotalPrice();
console.log("total price ", aa);

console.log(repository.getBookByName("tata"));

let cpt = 0;
for(let i of dico.books) {
    let year = i.added_at.substring(0,4);
    let months = i.added_at.substring(5,7);
    let yM = i.added_at.slice(0,7);
    cpt++;
    console.log(year, months, yM);
};

const groupPrice = dico.books.map(x => x.price);
console.log("groupPrice 1" ,groupPrice);
const gPrice = dico.books.reduce(function(foo=0,bar) {
    return foo + bar.price;
},0);
console.log("groupPrice 2 ", gPrice);

// getCountBookAddedByMont()
const groupBy = dico.books.map(x => x.added_at.slice(0,7)); // YES !!!
console.log(groupBy)



// *  [
//     *      {
//     *          year: 2017,
//     *          month, 2,
//     *          count, 129,
//     *          count_cumulative: 129
//     *      },
//     *      {
//     *          year: 2017,
//     *          month, 3,
//     *          count, 200,
//     *          count_cumulative: 329
//     *      },
//     *      ....
//     *  ]

