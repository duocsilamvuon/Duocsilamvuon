document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-grid");
  const filterContainer = document.getElementById("product-filters");
  
  if (!productsContainer || !filterContainer) return;

  // Fixed categories
  const FIXED_CATEGORIES = ["Tất cả", "Chăm sóc cá nhân", "Đồ dùng hàng ngày", "Khác"];

  // Fetch product data
  fetch('assets/data/products.json')
    .then(response => response.json())
    .then(data => {
      const activeProducts = data.filter(p => p.active);
      renderFilters(activeProducts);
      renderProducts(activeProducts);
    })
    .catch(error => {
      console.error("Error loading products:", error);
      productsContainer.innerHTML = `<p class="text-error w-full text-center py-10">Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.</p>`;
    });

  function renderFilters(products) {
    filterContainer.innerHTML = '';
    
    // Always render the fixed categories
    FIXED_CATEGORIES.forEach(category => {
      const btn = document.createElement("button");
      const isAll = category === "Tất cả";
      
      btn.className = isAll 
        ? "pill-shaped bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 filter-btn active"
        : "pill-shaped bg-surface-container text-on-surface-variant px-6 py-2 rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors filter-btn";
        
      btn.textContent = category;
      btn.dataset.category = category;
      
      btn.addEventListener("click", (e) => {
        // Update active class
        document.querySelectorAll(".filter-btn").forEach(b => {
          b.className = "pill-shaped bg-surface-container text-on-surface-variant px-6 py-2 rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors filter-btn";
          b.classList.remove("active");
        });
        
        btn.className = "pill-shaped bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 filter-btn active";
        
        // Filter products
        if (category === "Tất cả") {
          renderProducts(products);
        } else {
          // Normalise category strings for comparison to be safe
          const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
          renderProducts(filtered);
        }
      });
      
      filterContainer.appendChild(btn);
    });
  }

  function renderProducts(products) {
    if (products.length === 0) {
      productsContainer.innerHTML = `<div class="col-span-full text-center py-10 glass-card rounded-2xl"><p class="text-on-surface-variant text-body-lg italic">Đợi mình update nha!</p></div>`;
      return;
    }

    productsContainer.innerHTML = '';
    
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "group relative glass-card rounded-xl overflow-hidden flex flex-col transition-all duration-300";
      
      const noteHtml = product.note ? `<p class="text-secondary text-body-sm italic mt-2">"${product.note}"</p>` : '';
      
      // Update object-cover to object-contain and add white background for product images
      card.innerHTML = `
        <a class="block aspect-square overflow-hidden bg-white/70 backdrop-blur-sm p-4" href="${product.shopeeUrl}" target="_blank" rel="noopener noreferrer sponsored">
          <div
            class="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-110"
            style="background-image: url('${product.image}');"
            role="img" aria-label="${product.name}"
          ></div>
        </a>
        <div class="p-md flex flex-col flex-grow">
          <span class="font-label-md text-label-md text-primary mb-xs uppercase tracking-widest">${product.category}</span>
          <h3 class="font-headline-lg text-2xl font-bold text-on-surface mb-sm">${product.name}</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant flex-grow">${product.description}</p>
          ${noteHtml}
          <a
            class="mt-md w-full text-center py-3 border border-primary text-primary rounded-full font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all duration-300"
            href="${product.shopeeUrl}" target="_blank" rel="noopener noreferrer sponsored"
          >
            Xem trên Shopee
          </a>
        </div>
      `;
      productsContainer.appendChild(card);
    });
  }
});
