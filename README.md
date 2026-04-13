🛒 E-Commerce Website – Project Description
📌 Introduction

This project is a basic e-commerce web application developed to demonstrate the core functionality of an online shopping system. It allows users to browse products, view detailed information, add items to a shopping cart, register/login, and place orders.

The system is built using:

Frontend: HTML, CSS, JavaScript
Backend: Express.js (Node.js)
Data Storage: In-memory arrays (can be extended to a database)
🎯 Objectives
To design a simple and user-friendly online shopping platform
To implement core e-commerce functionalities
To understand client-server interaction using REST APIs
To simulate real-world online purchase workflow
⚙️ System Features
1. 🛍️ Product Listing
Displays all available products on the homepage
Each product shows name and price
Users can navigate to detailed product view
2. 📄 Product Details Page
Displays complete information about a selected product
Includes:
Product name
Description
Price
Option to add product to cart
3. 🛒 Shopping Cart
Users can add multiple products
Cart is stored in browser (localStorage)
Displays list of selected items
Provides checkout option
4. 🔐 User Registration & Login
Users can create an account
Login system verifies credentials
Basic authentication implemented
5. 📦 Order Processing
Users can place an order from cart
Order details are sent to backend
Stored in server memory
🏗️ System Architecture
Frontend:
Handles UI and user interaction
Communicates with backend using fetch API
Backend:
Built using Express.js
Provides REST APIs:
/api/products
/api/login
/api/register
/api/order
🗄️ Database Design (Conceptual)

(Currently simulated using arrays)

Tables (if implemented with real DB):
Users: id, email, password
Products: id, name, price, description
Orders: order_id, user_id, product_list
🔄 Working Flow
User visits homepage
Views products
Selects product → views details
Adds product to cart
Registers/logs in
Proceeds to checkout
Order is placed and stored
🚧 Limitations
No real database (data not persistent)
No secure authentication
No payment gateway
Basic UI design
🚀 Future Enhancements
Integrate database (MongoDB/MySQL)
Add payment gateway (UPI/Card)
Improve UI/UX design
Implement admin panel
Add product search and filters
✅ Conclusion

This project successfully demonstrates the fundamental concepts of an e-commerce system, including product management, user interaction, and order processing. It provides a foundation for building more advanced and scalable online shopping applications.
