class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        let count = this.db.get('books').size().value();
        return count;
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        // let sum = 0.0;
        // for(let i of this.db.get('books').value()) {
        //     let tmp = i.price;
        //     sum = sum + tmp;
        // };
        // return sum;
        const gPrice = this.db.get('books').value().reduce(function(foo,bar) {
            return foo + bar.price;
        },0);
        return gPrice;
    }

    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        for(let i of this.db.get('books').value()) {
            while(i.name === bookName) {
                return i;
            }
        }
        return "book not found";
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    // getCountBookAddedByMont(bookName) {
    //     let toto = this.db.get('books').value();
    //     // const calcul = Object.values(toto).reduce(x => x.added_at.slice(0,7))
    //     // console.log(calcul);
    //     console.log(toto);

        
    //     let groupBy = Object.entries(toto).reduce(function(m,d){
    //         if(!m[d.id]){
    //             m[d.id] = {...d, count: 1};
    //             return m;
    //         }
    //         m[d.id].yearMonth += d.added_at.slice(0,7);
    //         m[d.id].count += 1;
    //     },{});
    //     const result =Object.keys(groupBy).map(function(k){
    //         const item = groupBy[k];
    //         return {
    //             year: item.yearMonth,
    //             count: item.count
    //         }
    //     })
    // }
}

module.exports = BookRepository;
