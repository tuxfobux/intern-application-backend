const request = require("supertest");
const app = require("../../app");

describe("Categories controller", () => {
    it("GET /categories --> All categories", () => {
        return request(app)
            .get("/categories")
            .expect("Content-Type", /json/)
            .expect(200);
    });
});
