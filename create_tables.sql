CREATE TABLE categories ( 
 id INT NOT NULL AUTO_INCREMENT, 
 name VARCHAR(15), 
 PRIMARY KEY (id),
 UNIQUE (name)
);

CREATE TABLE posts ( 
 id INT NOT NULL AUTO_INCREMENT, 
 content VARCHAR(140), 
 category INT NOT NULL,
 PRIMARY KEY (id)
);