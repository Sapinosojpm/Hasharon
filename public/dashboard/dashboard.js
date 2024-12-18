document.addEventListener("DOMContentLoaded", () => {
    // PRODUCTS SECTION
    const productsTable = document.querySelector("#products tbody");
    const productsData = [
      { name: "Product A", price: 10, stock: 100 },
      { name: "Product B", price: 20, stock: 50 },
      { name: "Product C", price: 30, stock: 200 },
    ];
  
    // Render initial product data
    const renderProducts = () => {
      productsTable.innerHTML = "";
      productsData.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${product.name}</td>
          <td>₱${product.price}</td>
          <td>${product.stock}</td>
          <td>
            <button class="btn btn-sm btn-warning edit-product" data-index="${index}">Edit</button>
            <button class="btn btn-sm btn-danger delete-product" data-index="${index}">Delete</button>
          </td>
        `;
        productsTable.appendChild(row);
      });
    };
  
    renderProducts();
  
    // Add Product Event
    document.querySelector("#add-product-btn").addEventListener("click", () => {
      const name = prompt("Enter Product Name:");
      const price = parseFloat(prompt("Enter Product Price:"));
      const stock = parseInt(prompt("Enter Product Stock:"), 10);
  
      if (name && !isNaN(price) && !isNaN(stock)) {
        productsData.push({ name, price, stock });
        renderProducts();
        alert("Product added successfully!");
      } else {
        alert("Invalid input. Please try again.");
      }
    });
  
    // Edit and Delete Product
    productsTable.addEventListener("click", (event) => {
      const target = event.target;
      const index = parseInt(target.dataset.index, 10);
  
      if (target.classList.contains("edit-product")) {
        const name = prompt("Enter new Product Name:", productsData[index].name);
        const price = parseFloat(prompt("Enter new Product Price:", productsData[index].price));
        const stock = parseInt(prompt("Enter new Product Stock:", productsData[index].stock), 10);
  
        if (name && !isNaN(price) && !isNaN(stock)) {
          productsData[index] = { name, price, stock };
          renderProducts();
          alert("Product updated successfully!");
        }
      }
  
      if (target.classList.contains("delete-product")) {
        if (confirm("Are you sure you want to delete this product?")) {
          productsData.splice(index, 1);
          renderProducts();
          alert("Product deleted successfully!");
        }
      }
    });
  
    // ORDERS SECTION
    const ordersTable = document.querySelector("#orders tbody");
  
    const ordersData = [
      { id: "#123412", name: "Product A", date: "2024-12-12", status: "pending", payment: "cash on delivery", amount: 20000 },
      { id: "#124123", name: "Product B", date: "2024-12-12", status: "pending", payment: "cash on delivery", amount: 15000 },
      { id: "#91824", name: "Product C", date: "2024-12-11", status: "pending", payment: "cash on delivery", amount: 10000 },
    ];
  
    const renderOrders = () => {
      ordersTable.innerHTML = "";
      ordersData.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <th>${order.id}</th>
          <td>${order.name}</td>
          <td>${order.date}</td>
          <td>${order.status}</td>
          <td>${order.payment}</td>
          <td>₱${order.amount}</td>
          <td>
            <button class="btn btn-sm btn-warning edit-order" data-index="${index}">Edit</button>
            <button class="btn btn-sm btn-danger delete-order" data-index="${index}">Delete</button>
          </td>
        `;
        ordersTable.appendChild(row);
      });
    };
  
    renderOrders();
  
    // Edit and Delete Order
    ordersTable.addEventListener("click", (event) => {
      const target = event.target;
      const index = parseInt(target.dataset.index, 10);
  
      if (target.classList.contains("edit-order")) {
        const status = prompt("Enter new Order Status:", ordersData[index].status);
        const payment = prompt("Enter new Payment Method:", ordersData[index].payment);
  
        if (status && payment) {
          ordersData[index] = { ...ordersData[index], status, payment };
          renderOrders();
          alert("Order updated successfully!");
        }
      }
  
      if (target.classList.contains("delete-order")) {
        if (confirm("Are you sure you want to delete this order?")) {
          ordersData.splice(index, 1);
          renderOrders();
          alert("Order deleted successfully!");
        }
      }
    });
  
    // CUSTOMERS SECTION
    const customersTable = document.querySelector("#customers tbody");
  
    const customersData = [
      { name: "User 1", email: "user1@gmail.com", password: "password123", type: "admin" },
      { name: "User 2", email: "user2@gmail.com", password: "password456", type: "user" },
      { name: "User 3", email: "user3@gmail.com", password: "password789", type: "admin" },
    ];
  
    const renderCustomers = () => {
      customersTable.innerHTML = "";
      customersData.forEach((customer, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${customer.name}</td>
          <td>${customer.email}</td>
          <td>${"*".repeat(customer.password.length)}</td>
          <td>${customer.type}</td>
          <td>
            <button class="btn btn-sm btn-warning edit-customer" data-index="${index}">Edit</button>
            <button class="btn btn-sm btn-danger delete-customer" data-index="${index}">Delete</button>
          </td>
        `;
        customersTable.appendChild(row);
      });
    };
  
    renderCustomers();
  
    // Edit and Delete Customer
    customersTable.addEventListener("click", (event) => {
      const target = event.target;
      const index = parseInt(target.dataset.index, 10);
  
      if (target.classList.contains("edit-customer")) {
        const name = prompt("Enter new Customer Name:", customersData[index].name);
        const email = prompt("Enter new Email:", customersData[index].email);
        const password = prompt("Enter new Password:");
        const type = prompt("Enter new Type (admin/user):", customersData[index].type);
  
        if (name && email && password && type) {
          customersData[index] = { name, email, password, type };
          renderCustomers();
          alert("Customer updated successfully!");
        }
      }
  
      if (target.classList.contains("delete-customer")) {
        if (confirm("Are you sure you want to delete this customer?")) {
          customersData.splice(index, 1);
          renderCustomers();
          alert("Customer deleted successfully!");
        }
      }
    });
  });
  