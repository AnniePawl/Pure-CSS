import React from "react";
import "./shelf.scss";
import "./books.scss";
import BookShelf from "./Bookshelf";
// import "./universal_styles.scss";

function Shelf() {
  return (
    // <div className="wall">
    <div className="books-container">
      <div className="books">
        {/* <div className="vertical-books"></div> */}
        {/* <div className="horizontal-books"> */}
        <div className="book book-1"></div>
        <div className="book book-2"></div>
        <div className="book book-3"></div>
        <div className="book book-4"></div>
        <div className="book book-5"></div>
        {/* </div> */}
      </div>

      <BookShelf />
    </div>
    // </div>
  );
}

export default Shelf;
