import { readDatabase } from "../../models/db";

export class BookInfo {
  async getAll(query: any): Promise<RestApi.ObjectResInterface> {
    try {
      const { page = 1, pageSize = 2 } = query;

      const existingBooks = await readDatabase();
      const startIdx = (page - 1) * pageSize;
      const endIdx = startIdx + parseInt(pageSize, 10);
      const paginatedBooks = existingBooks.slice(startIdx, endIdx);
      return {
        is_success: true,
        msg: "successfully inserted",
        data: {
          data: paginatedBooks,
          total: existingBooks.length,
        },
      };
    } catch (e) {
      console.log(e);
      return {
        is_success: false,
        msg: "internal error",
      };
    }
  }

  async search(
    filter: {
      title?: string;
      author?: string;
      genre?: string;
    },
    page: number,
    pageSize: number
  ): Promise<RestApi.ObjectResInterface> {
    try {
      const existingBooks = await readDatabase();

      const filteredBooks = existingBooks.filter(
        (book) =>
          !filter.title ||
          book.title.includes(filter.title) ||
          !filter.author ||
          book.author.includes(filter.author) ||
          !filter.genre ||
          book.genre.includes(filter.genre)
      );

      const startIdx = (page - 1) * pageSize;
      const endIdx = startIdx + pageSize;
      const paginatedBooks = filteredBooks.slice(startIdx, endIdx);

      return {
        is_success: true,
        msg: "Successfully fetched filtered books",
        data: {
          data: paginatedBooks,
          total: filteredBooks.length,
        },
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
