const request = require("supertest");
const app = require("../app");

// describe("POST /api/usergame", () => {
//   it("Should create data", async () => {
//     const username = "arfanu15";
//     const password = "admin123";
//     const res = await request(app)
//       .post("/api/usergame")
//       .send({ username, password });
//     expect(res.statusCode).toBe(201);
//     expect(res.body.status).toBe(true);
//     expect(res.body.message).toBe("create data successful!");
//   });
// });

describe("GET /api/usergame", () => {
  it("Should get data", async () => {
    const res = await request(app).get("/api/usergame");
    // .send({ username, password });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("get data successful!");
  });
});

// describe("PUT /api/usergame", () => {
//   it("Should update data", async () => {
//     const username = "arfanu10";
//     const password = "admin123";
//     const res = await request(app)
//       .put("/api/usergame")
//       .send({ username, password });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.status).toBe(true);
//     expect(res.body.message).toBe("update data successful!");
//   });
// });
