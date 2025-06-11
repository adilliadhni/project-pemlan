export class Book {
   static totalBooks = 0; // Static property untuk menghitung total buku

   constructor(title, author, category, type) {
      this.code = String(Book.totalBooks + 1).padStart(4, "0"); // Membuat kode buku unik (0001, 0002, ...)
      this.title = title;
      this.author = author;
      this.category = category;
      this.type = type;
      Book.totalBooks++;
   }
}
