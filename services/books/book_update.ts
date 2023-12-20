import { Book, readDatabase, writeDatabase } from "../../models/db";

export class BookUpdate {
  async edit(
    bookId: number,
    updatedData: Partial<Book>
  ): Promise<RestApi.ObjectResInterface> {
    try {
      const existingBooks = await readDatabase();
      // Find the index of the book with the given ID
      const bookIndex = existingBooks.findIndex((book) => book.id === bookId);

      if (bookIndex === -1) {
        return {
          is_success: false,
          msg: "Book not found",
        };
      }

      // Merge the existing book data with the updated data
      const updatedBook = { ...existingBooks[bookIndex], ...updatedData };

      // Update the book data in the array
      existingBooks[bookIndex] = updatedBook;

      // Write the updated book data back to the database
      await writeDatabase(existingBooks);

      return {
        is_success: true,
        msg: "Successfully updated book",
        data: updatedBook,
      };
    } catch (e) {
      console.error(e);
      return {
        is_success: false,
        msg: "Internal error",
      };
    }
  }
}
