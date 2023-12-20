import request from "supertest";
import { expect } from "chai";
import app from "../../providers/app";

const book_routes = "/books";
describe("book routes tests", () => {
  it("should return error 401", async () => {
    const response = await request(app).post(`${book_routes}/auth`);
    expect(response.status).to.equal(401);
  });

  it("should return error 412 ", async () => {
    const response = await request(app)
      .post(book_routes)
      .send({ author: "test" });
    expect(response.status).to.equal(412);
  });

  it("should return books with status 200", async () => {
    const response = await request(app).get(book_routes);
    expect(response.status).to.equal(200);
  });

  it("should return  status 404", async () => {
    const response = await request(app).put(`${book_routes}/0`);
    expect(response.status).to.equal(404);
  });

  it("should return  status 404", async () => {
    const response = await request(app).delete(`${book_routes}/0`);
    expect(response.status).to.equal(404);
  });
});
