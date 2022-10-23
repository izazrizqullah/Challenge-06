const request = require("supertest");
const app = require("../app");

// endpoint Register
const userTest = {
  username: "userTest",
  password: "password123",
};

const userUpdateTest = {
  username: "userTest update",
  password: "password123",
};

const bioTest = {
  user_id: 1,
  nama: "Bio Test",
  alamat: "Purwokerto",
};
const bioUpdateTest = {
  user_id: 1,
  nama: "Bio Test Update",
  alamat: "Purwokerto",
};

const scoreTest = {
  score: 1000,
};

var data = "";

var token = "";
// var token1 = "";

const truncate = require("../helper/truncate");
truncate.user();
truncate.userBio();
truncate.userHistory();

describe("/api/auth/create endpoint", () => {
  // register berhasil
  test("register berhasil", async () => {
    try {
      const res = await request(app)
        .post("/api/usergame/create")
        .send(userTest);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("create data successful!");
      //   expect(res.body.data).toStrictEqual({
      //     username: userTest.username,
      //     password: userTest.password,
      //   });
    } catch (err) {
      expect(err).toBe("error");
    }
  });

  // register gagal karena email sudah dipakai
  test("register gagal", async () => {
    try {
      const res = await request(app).post("/api/auth/create").send(userTest);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("username already used!");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error");
    }
  });
});

describe("/api/auth/login endpoint", () => {
  // login gagal
  test("login gagal", async () => {
    try {
      const res = await request(app).post("/api/auth/login").send({
        username: "aku",
        password: "salah",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("username or password doesn't match");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error");
    }
  });

  // login berhasil
  test("login berhasil", async () => {
    try {
      const res = await request(app).post("/api/auth/login").send({
        username: userTest.username,
        password: userTest.password,
      });

      token = res.body.data.token;

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("token");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("login successful!");
    } catch (err) {
      expect(err).toBe("error");
    }
  });
});

describe("/api/usergame/get endpoint", () => {
  // show data berhasil
  test("tampil data berhasil", async () => {
    try {
      const res = await request(app).get("/api/usergame/get");
      data = res.body.data;
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("get data successful!");
      expect(res.body.data).toEqual(data);
      //   expect(res.body.data).toStrictEqual({
      //     username: userTest.username,
      //     password: userTest.password,
      //   });
    } catch (err) {
      expect(err).toBe("error");
    }
  });
});

describe("/api/usergame/update/1 & api/usergame/delete/1 endpoint", () => {
  test("Update Berhasil", async () => {
    try {
      const res = await request(app)
        .put("/api/usergame/update/1")
        .set({ Authorization: token })
        .send({
          username: userUpdateTest.username,
          password: userUpdateTest.password,
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("update data successful!");
      // expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error");
    }
  });

  test("Delete Berhasil", async () => {
    try {
      const res = await request(app)
        .delete("/api/usergame/delete/1")
        // .set({ Authorization: token })
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveProperty("status");
          expect(res.body).toHaveProperty("message");
          expect(res.body).toHaveProperty("data");
          expect(res.body.status).toBe(true);
          expect(res.body.message).toBe("delete data successful!");
          // expect(res.body.data).toBe(null);
        });
    } catch (err) {
      expect(err).toBe("error");
    }
  });
});

//

// User Bio

//
describe("/api/bio/create endpoint", () => {
  // register berhasil
  test("register berhasil", async () => {
    try {
      const res = await request(app)
        .post("/api/bio/create")
        .set({ Authorization: token })
        .send(bioTest);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("create data successful!");
      //   expect(res.body.data).toStrictEqual({
      //     username: userTest.username,
      //     password: userTest.password,
      //   });
    } catch (err) {
      expect(err).toBe("error");
    }
  });

  // register gagal karena email sudah dipakai
  //   test("register gagal", async () => {
  //     try {
  //       const res = await request(app)
  //         .post("/api/bio/create")
  //         .set({ Authorization: token })
  //         .send(bioTest);

  //       expect(res.statusCode).toBe(400);
  //       expect(res.body).toHaveProperty("status");
  //       expect(res.body).toHaveProperty("message");
  //       expect(res.body).toHaveProperty("data");
  //       expect(res.body.status).toBe(false);
  //       expect(res.body.message).toBe("username already used!");
  //       expect(res.body.data).toBe(null);
  //     } catch (err) {
  //       expect(err).toBe("error");
  //     }
  //   });
});

describe("/api/bio/get endpoint", () => {
  // show data berhasil
  test("tampil data berhasil", async () => {
    try {
      const res = await request(app)
        .get("/api/bio/get")
        .set({ Authorization: token });
      data = res.body.data;
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("get data successful!");
      expect(res.body.data).toEqual(data);
      //   expect(res.body.data).toStrictEqual({
      //     username: userTest.username,
      //     password: userTest.password,
      //   });
    } catch (err) {
      expect(err).toBe("error");
    }
  });
});

// tesr
