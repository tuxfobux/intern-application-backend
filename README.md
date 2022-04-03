# Internship application for backend position
Primary tech used: NodeJS, Express, MySQL, Jest.

# Setup
* Clone the repository.
* Example config file can be found in `config/config.env.example`. Fill it and rename to `config/config.env`.
* Make sure the database you put into `config.env` is created and accessible with the user you added.
* Run SQL statements found in `create_tables.sql` and for testing purposes you can also fill the database with dummy data found here `insert_dummy_data.sql`
```sh
# In Linux environment it can be done like this
mysql -u <USER> -p < create_tables.sql
```
* Run `npm install` to install all the dependencies
* Tests can be run with `npm test` and application can be started with `npm start`

# Api routes
* Getting the list of products of the concrete category;
* `GET /categories`
* `GET /categories/{id}/products`
* Create/update/delete of category;
* `POST /categories`
* `PATCH /categories/{id}`
* `DELETE /categories/{id}`
* Create/update/delete of product;
* `POST /categories/{id}/products`
* `PATCH /categories/{id}/products`
* `DELETE /categories/{id}/products`
