# Angular Bootcamp Task One (v2)

A modular e-commerce web application built with **Angular 20**, demonstrating core Angular concepts like **dependency injection**, **services**, and **component-based architecture**. The app showcases featured products and product lists using **reusable components** and **ZardUI** styling.  

**Includes search and sort functionalities** to easily find and organize products.

---

## **Features**
- Responsive layout using **ZardUI components**
- Modular component structure:
  - `nav-bar` for navigation
  - `hero-section` as landing banner
  - `featured-products` for highlighted products
  - `product-card` for individual product display
  - `button-group` for actions and filters
  - `product-list` to display multiple products
- **Search functionality** to filter products by name
- **Sort functionality** to organize products by price or category
- **ProductService** provides data using **dependency injection**
- Clean separation of concerns and maintainable architecture

---

## **Technologies Used**
- Angular 20  
- TypeScript  
- ZardUI components  

---

## **Project Structure**
src/
│
├─ app/
│ ├─ components/
│ │ ├─ layout/
│ │ │ └─ nav-bar/
│ │ ├─ hero-section/
│ │ ├─ featured-products/
│ │ ├─ product-card/
│ │ ├─ button-group/
│ │ └─ product-list/
│ ├─ services/
│ │ └─ product-service.ts
│ └─ models/
│ ├─ IFeaturedProducts.ts
│ └─ IProductsResponse.ts

---

### **Future Improvements**

Pagination for product lists

Cart management and checkout flow

Enhanced responsive design for mobile
