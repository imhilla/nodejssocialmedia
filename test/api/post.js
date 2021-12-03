const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../app");
const conn = require("../../config/db.config");
describe("POST /api/posts", () => {
  before((done) => {
    conn
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn
      .disconnect()
      .then(() => done())
      .catch((err) => done(err));
  });

  it("OK, creating a new post worked", (done) => {
    request(app)
      .post("/api/post")
      .send({ title: "Hello it works", body: "Testing body" })
      .then((res) => {
        console.log(res,'i am response')
        const body = res.body;
        expect(body).to.contain.property("title");
        expect(body).to.contain.property("body");
        done();
      });
  });
});
