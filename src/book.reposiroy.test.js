const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

test("getTotalCount() element in db equal to 2", () => {

    const dbMock = {
        get: jest.fn().mockReturnThis(),
        size: jest.fn().mockReturnThis(),
        value: jest.fn().mockReturnValue(2)
    };
    const repository = new BookRepository(dbMock);
    expect(repository.getTotalCount()).toBe(2);
});

// test("getTotalPrice() Sum of books price equal to 13.2", () => {
//     const dbMock = {
//         get: jest.fn().mockReturnThis(),
//         size: jest.fn().mockReturnThis(),
//         value: jest.fn().mockReturnValue(13.2)
//     }
//     const repository = new BookRepository(dbMock);
//     expect(repository.getTotalPrice()).toEqual(13.2);
// });

// test("getBookByName() => db has book name 'testa'", () => {
//     const dbMock = {
//         get: jest.fn().mockReturnThis(),
//         size: jest.fn().mockReturnThis(),
//         value: jest.fn( bookName => "testa")
//     }
//     const repository = new BookRepository(dbMock);
//     expect(repository.getBookByName("testa")).toBe("testa");
// });
