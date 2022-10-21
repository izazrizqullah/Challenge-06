const request = require("supertest");
const app = require("../app");

describe("POST /api/auth/login", () => {
  it("Should post data", async () => {
    const username = "arfanu15";
    const password = "admin123";
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("login successful!");
  });
});
