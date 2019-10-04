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

test("getTotalPrice() Sum of books price equal to 22", () => {
        
    const dbMock = {
        get: jest.fn().mockReturnThis(),
        value: jest.fn().mockReturnThis(),
        reduce: jest.fn().mockReturnValue(22)
    }
    const repository = new BookRepository(dbMock);
    expect(repository.getTotalPrice()).toBeCloseTo(22);
});

test("getBookByName() => db has book name 'testa'", () => {
    let book1 = [{name: "popop"},{name: "testa"}]
    
    const dbMock = {
        get: jest.fn().mockReturnThis(),
        size: jest.fn().mockReturnThis(),
        value: jest.fn().mockReturnValue(book1)
    }
    const repository = new BookRepository(dbMock);
    expect(repository.getBookByName("testa")).toBe(book1[1]);
});

test("getBookByName() => book not found", () => {
    let book1 = [{name: "popop"},{name: "testa"}]
    
    const dbMock = {
        get: jest.fn().mockReturnThis(),
        size: jest.fn().mockReturnThis(),
        value: jest.fn().mockReturnValue(book1)
    }
    const repository = new BookRepository(dbMock);
    expect(repository.getBookByName("cerise")).toBe("book not found");
});