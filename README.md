# E-Commerce Project

A full-stack e-commerce application built with Spring Boot backend and Angular frontend.

## 🏗️ Project Structure

This project consists of two main components:

- **`eticaret-backend/`** - Spring Boot REST API backend
- **`eticaret-ui/`** - Angular frontend application

## 🚀 Backend (Spring Boot)

### Technology Stack
- **Java 17**
- **Spring Boot 3.5.4**
- **Spring Data JPA** - For database operations
- **Spring Data REST** - For automatic REST API generation
- **PostgreSQL** - Database
- **Lombok** - Reduces boilerplate code
- **Maven** - Build tool

### Features
- **Product Management**: CRUD operations for products
- **Category Management**: Product categorization system
- **RESTful API**: Auto-generated REST endpoints
- **Database Integration**: JPA entities with PostgreSQL

### Key Entities
- **Product**: Contains product information (name, description, price, stock, etc.)
- **ProductCategory**: Product classification system

### Running the Backend
```bash
cd eticaret-backend
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`

## 🎨 Frontend (Angular)

### Technology Stack
- **Angular 18.2.0**
- **Bootstrap 5.3.7** - UI framework
- **ng-bootstrap** - Angular Bootstrap components
- **FontAwesome** - Icons
- **TypeScript** - Programming language

### Features
- **Product List**: Display all available products
- **Product Details**: Detailed product information view
- **Category Menu**: Product category navigation
- **Search Functionality**: Product search capabilities
- **Shopping Cart**: Add/remove products from cart
- **Responsive Design**: Mobile-friendly interface

### Components
- `product-list` - Main product catalog
- `product-details` - Individual product view
- `product-category-menu` - Category navigation
- `search` - Product search
- `card-status` - Shopping cart status

### Running the Frontend
```bash
cd eticaret-ui
npm install
npm start
```

The application will be available at `http://localhost:4200`

## 🗄️ Database

The application uses PostgreSQL as the primary database. Make sure to:
1. Install PostgreSQL
2. Create a database
3. Update `application.properties` with your database credentials

## 🔧 Configuration

### Backend Configuration
Update `eticaret-backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Frontend Configuration
The frontend is configured to proxy API calls to the backend. See `eticaret-ui/proxy.conf.json` for details.

## 🚀 Getting Started

1. **Clone the repository**
2. **Set up the database**
3. **Start the backend**: `cd eticaret-backend && ./mvnw spring-boot:run`
4. **Start the frontend**: `cd eticaret-ui && npm start`
5. **Access the application**: Open `http://localhost:4200` in your browser

## 📱 Features

- **Product Catalog**: Browse products by category
- **Search**: Find products quickly
- **Shopping Cart**: Add products to cart
- **Responsive Design**: Works on all devices
- **RESTful API**: Clean, standardized backend interface

## 🛠️ Development

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL
- Maven
- Angular CLI

### Building
```bash
# Backend
cd eticaret-backend
./mvnw clean install

# Frontend
cd eticaret-ui
npm run build
```

## 📄 License

This project is for educational/demo purposes.

## 👨‍💻 Author

Dilara - E-commerce project demonstration
