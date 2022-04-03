const request = require("supertest");
const app = require("../../app");

describe("Categories controller", () => {
    it("POST /categories --> Add new category over max limit", () => {
        const params = {
            name: "aaaaaaaaaaaaaaaaaaa"
        };
        return request(app)
            .post("/categories")
            .send(params)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    it("POST /categories --> Add new category", () => {
        const params = {
            name: "aaaaaaaaaaaaaaa"
        };
        return request(app)
            .post("/categories")
            .send(params)
            .expect("Content-Type", /json/)
            .expect(201);
    });
    it("POST /categories --> Add new category with existing name", () => {
        const params = {
            name: "aaaaaaaaaaaaaaa"
        };
        return request(app)
            .post("/categories")
            .send(params)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    let addedCategoryId;
    it("GET /categories --> All categories", () => {
        return request(app)
            .get("/categories")
            .expect("Content-Type", /json/)
            .expect(200).then(res => {
                addedCategoryId = res.body.categories.find(elem => elem.name == "aaaaaaaaaaaaaaa").id;
            });
    });
    it("PATCH /categories --> Patch non-existing category", () => {
        const params = {
            name: "aaaaaaaaaaaaaab"
        };
        return request(app)
            .patch(`/categories/${addedCategoryId + 999}`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    it("PATCH /categories --> Patch existing category", () => {
        const params = {
            name: "aaaaaaaaaaaaaab"
        };
        return request(app)
            .patch(`/categories/${addedCategoryId}`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(200);
    });
    it("DELETE /categories --> Delete non-existing category", () => {
        return request(app)
            .delete(`/categories/${addedCategoryId + 999}`)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    it("DELETE /categories --> Delete added category", () => {
        return request(app)
            .delete(`/categories/${addedCategoryId}`)
            .expect("Content-Type", /json/)
            .expect(200);
    });
});
