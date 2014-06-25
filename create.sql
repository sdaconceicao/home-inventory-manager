CREATE TABLE users (
   id INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR( 40 ) NOT NULL,
   password VARCHAR( 40 ) NOT NULL,
   email VARCHAR( 255 ) NOT NULL,
   firstName VARCHAR( 40 ) NOT NULL,
   lastName VARCHAR( 40 ) NOT NULL,
   UNIQUE (
     username,
     email
   )
);

CREATE TABLE inventories (
   id INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	inventory_id INT(10) NOT NULL,
   name VARCHAR(40) NOT NULL,
   user_id INT(10) NOT NULL
);

CREATE TABLE items (
   id INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	inventory_id INT(10) NOT NULL,
   name VARCHAR( 40 ) NOT NULL,
   subCategory_id INT(10),
   make_id INT(10),
   modelNumber VARCHAR(100),
   value INT(10),
   purchase DATE,
   notes VARCHAR(255)
);

CREATE TABLE categories (
   id INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR( 40 ) NOT NULL
);

CREATE TABLE subCategories (
   id INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   category_id INT(10) NOT NULL,
   name VARCHAR( 40 ) NOT NULL,
   user_id int(10) NOT NULL
);
