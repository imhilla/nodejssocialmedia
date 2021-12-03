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
    conn.disconnect();
    done();
  });

  it("OK, creating a new post worked", (done) => {
    request(app)
      .post("/api/post")
      .send({ title: "Hello it works", body: "Testing body" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("title");
        expect(body).to.contain.property("body");
        done();
      });
  });

  it("OK, get existing posts", (done) => {
    request(app)
      .get("/api/posts")
      .then((res) => {
        const body = res.body;
        expect(body).to.have.lengthOf(1);
        done();
      });
  });

  it("OK, get home screen", (done) => {
    request(app)
      .get("/")
      .then((res) => {
        expect(res.text).to.equal('!');
        done();
      });
  });
});
