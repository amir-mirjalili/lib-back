import { readDatabase } from "../../models/db";

export class BookInfo {
  async getAll(): Promise<RestApi.ObjectResInterface> {
    try {
      const existingBooks = await readDatabase();

      return {
        is_success: true,
        msg: "successfully inserted",
        data: existingBooks,
      };
    } catch (e) {
      console.log(e);
      return {
        is_success: false,
        msg: "internal error",
      };
    }
  }

  async search(filter: {
    title?: string;
    author?: string;
    genre?: string;
  }): Promise<RestApi.ObjectResInterface> {
    try {
      const existingBooks = await readDatabase();

      const filteredBooks = existingBooks.filter(
        (book) =>
          (!filter.title || book.title.includes(filter.title)) &&
          (!filter.author || book.author.includes(filter.author)) &&
          (!filter.genre || book.genre.includes(filter.genre))
      );

      return {
        is_success: true,
        msg: "Successfully fetched filtered books",
        data: filteredBooks,
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
