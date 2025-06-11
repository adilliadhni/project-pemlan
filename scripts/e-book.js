import { Book } from "../scripts/book.js";

export class Ebook extends Book {
   constructor(title, author, category) {
      super(title, author, category, "E-book");
   }
}
