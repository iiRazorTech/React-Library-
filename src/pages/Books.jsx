import React, { useState } from "react";
import { books as booksData } from "../data";
import Book from "../components/ui/Book";

function Books() {
  const [books, setBooks] = useState(booksData);

  function filterBooks(filter) {
    const sortedBooks = [...booksData];

    if (filter === "LOW_TO_HIGH") {
      sortedBooks.sort(
        (a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
      );
    }
    else if (filter === "HIGH_TO_LOW") {
      sortedBooks.sort(
        (a, b) => (b.salePrice || b.originalPrice) - (b.originalPrice || b.salePrice)
      );
    }
    else if (filter === "RATING") {
      sortedBooks.sort(
        (a, b) => (b.rating) - (a.rating)
      );
    }
    setBooks(sortedBooks);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
