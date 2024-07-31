# juliette-E-commerce Back End
E-Commerce Back End
Description
This project is the back end of an e-commerce application built using Node.js, Express.js, PostgreSQL, and Sequelize. The application provides a RESTful API for managing products, categories, and tags. It supports CRUD operations and demonstrates the use of relational database management with Sequelize as the ORM. The API is designed to handle data storage, retrieval, and manipulation, facilitating e-commerce functionalities such as inventory management and product categorization.

## Table of Contents
Installation
Usage
API Routes
Database Schema
Technologies Used
Walkthrough Video
Contributing
License
## Installation
Clone the Repository:
bash
Copy code
git clone https://github.com/juliettengum/juliette-E-commerce-Back-End
Navigate to the Project Directory:
bash
Copy code
cd e-commerce-backend
Install Dependencies:
bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following variables:
makefile
Copy code
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=5432
## Usage
Create Database Schema:

From the PostgreSQL shell, create the database using the name specified in your .env file.
Run the Sequelize migrations to create the schema:
bash
Copy code
npx sequelize-cli db:migrate
Seed the Database:

Populate the database with initial data:
bash
Copy code
npm run seed
Start the Server:

Run the application server:
bash
Copy code
npm start
## API Routes
# Categories

GET /api/categories: Get all categories
GET /api/categories/:id: Get a single category by ID
POST /api/categories: Create a new category
PUT /api/categories/:id: Update a category by ID
DELETE /api/categories/:id: Delete a category by ID

# Products

GET /api/products: Get all products
GET /api/products/:id: Get a single product by ID
POST /api/products: Create a new product
PUT /api/products/:id: Update a product by ID
DELETE /api/products/:id: Delete a product by ID
# Tags

GET /api/tags: Get all tags
GET /api/tags/:id: Get a single tag by ID
POST /api/tags: Create a new tag
PUT /api/tags/:id: Update a tag by ID
DELETE /api/tags/:id: Delete a tag by ID
Database Schema
The database schema includes the following tables:

Product: Represents products with attributes such as name, price, stock, etc.
Category: Represents categories that group products.
Tag: Represents tags associated with products.
ProductTag: Joins products and tags in a many-to-many relationship.
## Technologies Used
# Node.js
# Express.js
# PostgreSQL
# Sequelize
# dotenv
## Walkthrough Video
A comprehensive walkthrough video demonstrating the functionality of the application, including setting up the database, seeding data, starting the server, and testing API routes with Insomnia, can be found here.
[Walkthrough video](https://drive.google.com/file/d/1HY41LKHOHdQ8naEtNXMs4Pg_u9qs2uwv/view?usp=drive_link)demonstrating the functionality of the e-commerce backend.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
