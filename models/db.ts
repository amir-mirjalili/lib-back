import * as fs from "fs/promises";
import * as path from "path";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

const dbFilePath = path.join(__dirname, "../db.json");

export async function readDatabase(): Promise<Book[]> {
  try {
    const data = await fs.readFile(dbFilePath, "utf-8");
    return JSON.parse(data) as Book[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function writeDatabase(books: Book[]): Promise<void> {
  const data = JSON.stringify(books, null, 2);
  await fs.writeFile(dbFilePath, data, "utf-8");
}
