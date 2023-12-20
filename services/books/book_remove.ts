import { readDatabase, writeDatabase } from "../../models/db";

export class BookRemove {
  async delete(bookId: number): Promise<RestApi.ObjectResInterface> {
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

      // Remove the book from the array
      const deletedBook = existingBooks.splice(bookIndex, 1)[0];

      // Write the updated book data (with the book removed) back to the database
      await writeDatabase(existingBooks);

      return {
        is_success: true,
        msg: "Successfully deleted book",
        data: deletedBook,
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
