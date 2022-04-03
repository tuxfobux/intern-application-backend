const request = require("supertest");
const app = require("../../app");

describe("Products controller", () => {
    let categoryName = "bbbbbbbbbbbbbbb";
    it("POST /categories --> Add new category", () => {
        const params = {
            name: categoryName
        };
        return request(app)
            .post("/categories")
            .send(params)
            .expect("Content-Type", /json/)
            .expect(201);
    });
    let addedCategoryId;
    it("GET /categories --> All categories", () => {
        return request(app)
            .get("/categories")
            .expect("Content-Type", /json/)
            .expect(200).then(res => {
                addedCategoryId = res.body.categories.find(elem => elem.name == categoryName).id;
            });
    });
    let productContent = "ccccccccccccccccccc";
    it("POST /categories/:id/products --> Add new product with no content", () => {
        const params = {
            content: ""
        };
        return request(app)
            .post(`/categories/${addedCategoryId}/products`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    it("POST /categories/:id/products --> Add new product", () => {
        const params = {
            content: productContent
        };
        return request(app)
            .post(`/categories/${addedCategoryId}/products`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(201);
    });
    let addedProductId;
    it("GET /categories/:id/products --> Products of a category", () => {
        return request(app)
            .get(`/categories/${addedCategoryId}/products`)
            .expect("Content-Type", /json/)
            .expect(200).then(res => {
                addedProductId = res.body.products.find(elem => elem.content == productContent).id;
            });
    });
    it("PATCH /categories/:id/products --> Patch created product", () => {
        const params = {
            content: "newandrandomcontent that is unique Hopefully",
            id: addedProductId
        };
        return request(app)
            .patch(`/categories/${addedCategoryId}/products`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(200);
    });
    it("DELETE /categories/:id/products --> Delete non-existing product", () => { // todo
        const params = {
            id: addedProductId + 999
        };
        return request(app)
            .delete(`/categories/${addedCategoryId}/products`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(400);
    });
    it("DELETE /categories/:id/products --> Delete created product", () => { // todo
        const params = {
            id: addedProductId
        };
        return request(app)
            .delete(`/categories/${addedCategoryId}/products`)
            .send(params)
            .expect("Content-Type", /json/)
            .expect(200);
    });
    it("DELETE /categories --> Delete added category", () => {
        return request(app)
            .delete(`/categories/${addedCategoryId}`)
            .expect("Content-Type", /json/)
            .expect(200);
    });
});