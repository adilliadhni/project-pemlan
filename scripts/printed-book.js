import { Book } from "../scripts/book.js";

export class PrintedBook extends Book {
   constructor(title, author, category) {
      super(title, author, category, "Printed");
   }
}
