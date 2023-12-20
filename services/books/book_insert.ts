import { Book, readDatabase, writeDatabase } from "../../models/db";

export class BookInsert {
  async insert(
    author: string,
    genre: string,
    title: string
  ): Promise<RestApi.ObjectResInterface> {
    try {
      const existingBooks = await readDatabase();
      const newBook: Book = {
        id: existingBooks.length + 1,
        author,
        genre,
        title,
      };
      existingBooks.push(newBook);
      await writeDatabase(existingBooks);

      return {
        is_success: true,
        msg: "successfully inserted",
        data: newBook,
      };
    } catch (e) {
      console.log(e);
      return {
        is_success: false,
        msg: "internal error",
      };
    }
  }
}
