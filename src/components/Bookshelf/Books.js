import React from "react";
import Bookshelf from "./Bookshelf";
import "./books.scss";

function Books() {
  return (
    <div>
      <div className="books1-container">
        <div className="books1">
          <div className="book1 book-1"></div>
          <div className="book1 book-2"></div>
          <div className="book1 book-3"></div>
          <div className="book1 book-4"></div>
          <div className="book1 book-5"></div>
        </div>

        <div className="vertical-books"></div>

        <Bookshelf />
      </div>
    </div>
  );
}

export default Books;
