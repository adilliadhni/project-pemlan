import { Book } from "./scripts/book.js";
import { Ebook } from "./scripts/e-book.js";
import { PrintedBook } from "./scripts/printed-book.js";

// Main.js
document
   .getElementById("book-form")
   .addEventListener("submit", function (event) {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const category = document.getElementById("category").value;
      const type = document.getElementById("type").value;

      if (!title || !author || !category) {
         alert("Semua field harus diisi!");
         return;
      }

      let newBook;
      if (type === "e-book") {
         newBook = new Ebook(title, author, category);
      } else {
         newBook = new PrintedBook(title, author, category);
      }

      addBookToTable(newBook); // Menambahkan buku ke tabel
      updateTotalBooks(); // Menampilkan total buku
   });

// Menambahkan buku ke tabel
function addBookToTable(book) {
   const tableBody = document.getElementById("book-list");
   const row = document.createElement("tr");
   row.innerHTML = `
                <td>${Book.totalBooks}</td>
                <td>${book.code}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${book.type}</td>
                <td><button onclick="deleteBook(this)">Hapus</button></td>
            `;
   tableBody.appendChild(row);
}

// Menghapus buku dari tabel
function deleteBook(button) {
   const row = button.parentNode.parentNode;
   row.remove();
   Book.totalBooks--;
   updateTotalBooks();
}

// Memperbarui jumlah total buku
function updateTotalBooks() {
   console.log(`Total Buku: ${Book.totalBooks}`);
}

// Pencarian Buku
document.getElementById("search-code").addEventListener("input", searchBooks);
document.getElementById("search-title").addEventListener("input", searchBooks);
document.getElementById("search-author").addEventListener("input", searchBooks);

function searchBooks() {
   const codeSearch = document
      .getElementById("search-code")
      .value.toLowerCase();
   const titleSearch = document
      .getElementById("search-title")
      .value.toLowerCase();
   const authorSearch = document
      .getElementById("search-author")
      .value.toLowerCase();
   const rows = document.querySelectorAll("#book-list tr");

   rows.forEach((row) => {
      const code = row.cells[1].textContent.toLowerCase();
      const title = row.cells[2].textContent.toLowerCase();
      const author = row.cells[3].textContent.toLowerCase();

      if (
         code.includes(codeSearch) &&
         title.includes(titleSearch) &&
         author.includes(authorSearch)
      ) {
         row.style.display = "";
      } else {
         row.style.display = "none";
      }
   });
}
