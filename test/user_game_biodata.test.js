const request = require("supertest");
const app = require("../app");

describe.skip("POST /api/bio", () => {
  it("Should create data", async () => {
    const username = "arfanu15";
    const password = "admin123";
    const res = await request(app)
      .post("/api/bio")
      .send({ username, password });
    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("create data successful!");
  });
});

describe.skip("GET /api/bio/get", () => {
  it("Should get data", async () => {
    const res = await request(app).get("/api/bio/get");
    // .send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("get data successful!");
  });
});

describe.skip("PUT /api/bio/update/3", () => {
  it("Should update data", async () => {
    const username = "arfanu10";
    const password = "admin123";
    const res = await request(app)
      .put("/api/bio/update/3")
      .send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("update data successful!");
  });
});

describe.skip("DELETE /api/bio/delete/3", () => {
  it("Should delete data", async () => {
    // const username = "arfanu10";
    // const password = "admin123";
    const res = await request(app).delete("/api/bio/delete/3");
    // .send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("delete data successful!");
  });
});
