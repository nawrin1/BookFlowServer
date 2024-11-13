# BOOKFLOW - Library Management System API

## Table of Contents

- [Project Description](#project-description)
- [Technology Stack](#technology-stack)

 - [Installation Guidelines](#installation-guidelines)
 - [Features](#features)
 - [LiveLink](#live-link)





## Project Description

Bookflow will support essential operations to streamline the library's management of books, members, and borrowing activities. Utilizing UUIDs for unique identification, it will feature CRUD (Create, Read, Update, Delete) operations for book and member records. Additionally, the API will offer endpoints to handle borrowing and returning books, tracking each borrow record for accountability. With structured routes, library staff can manage inventory, update member information, and oversee borrowing transactions, while members will be able to interact with borrowing functionalities, enhancing library access and operational efficiency.


## Technology Stack

- Prisma ORM
- Node.js
- PostgreSQL
- Express.js
- TypeScript



## Installation Guideline

### Prerequisites

- Node.js
- npm or yarn


### Installation Steps

1. Clone the repository:

   ```
   git clone https://github.com/nawrin1/BookFlowServer
   

   ```
2. Install Dependencies: 

   ```
   npm install
   ```
### Configuration

   
  1. Set up environment. Your .env file should look like this
   ```
   DATABASE_URL="postgresql://<postgresql username>:<postgresqlpass>@localhost:5432/<db name>?schema=public"       
   ```
### Usage
   1. Run the project:
   ```
   npm run dev
   ```



## Features

- **CRUD Operations:** Manage books, members, and borrowing records through Create, Read, Update, and Delete operations.
- **UUID-Based Identification:** Unique identification for all books, members, and borrow records using UUIDs.
- **Borrowing and Returning Books:** Separate endpoints for borrowing and returning books, recording each transaction.
- **Overdue Tracking:** Identify overdue books and calculate the overdue days.
- **Inventory Management:** Track available and borrowed copies of each book.
- **Comprehensive Error Handling:** Validation and error messaging for smooth and reliable operations.
- **Database Transactions:** Use of transactions for consistent data updates, such as during borrow or return processes.


## LiveLink
[BookFlow:book](https://book-flow-ashy.vercel.app)



