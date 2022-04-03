CREATE TABLE categories ( 
 id INT NOT NULL AUTO_INCREMENT, 
 name VARCHAR(15), 
 PRIMARY KEY (id),
 UNIQUE (name)
);

CREATE TABLE products ( 
 id INT NOT NULL AUTO_INCREMENT, 
 content VARCHAR(140), 
 category_id INT NOT NULL,
 PRIMARY KEY (id)
);
