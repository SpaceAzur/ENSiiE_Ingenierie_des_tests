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
        let sum = 0.0;
        for(let i of this.db.get('books').value()) {
            let tmp = i.price;
            sum = sum + tmp;
        };
        return sum;
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        let tmp = "";
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
    getCountBookAddedByMont(bookName) {

    }

}


module.exports = BookRepository;
