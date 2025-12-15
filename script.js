// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Product Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviews: 1250,
        isDeal: true,
        prime: true,
        freeShipping: true
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "fitness",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.7,
        reviews: 890,
        isDeal: true,
        prime: true,
        freeShipping: true
    },
    {
        id: 3,
        name: "Professional DSLR Camera",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
        price: 799.99,
        originalPrice: 999.99,
        rating: 4.8,
        reviews: 450,
        isDeal: false,
        prime: true,
        freeShipping: true
    },
    {
        id: 4,
        name: "Designer Handbag",
        category: "fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.6,
        reviews: 320,
        isDeal: true,
        prime: false,
        freeShipping: false
    },
    {
        id: 5,
        name: "Air Fryer Oven",
        category: "home",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.4,
        reviews: 2100,
        isDeal: true,
        prime: true,
        freeShipping: true
    },
    {
        id: 6,
        name: "Premium Skincare Set",
        category: "beauty",
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=400",
        price: 89.99,
        originalPrice: 149.99,
        rating: 4.9,
        reviews: 780,
        isDeal: true,
        prime: true,
        freeShipping: true
    },
    {
        id: 7,
        name: "Yoga Mat Premium",
        category: "fitness",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.3,
        reviews: 1560,
        isDeal: false,
        prime: true,
        freeShipping: true
    },
    {
        id: 8,
        name: "Bestseller Novel Collection",
        category: "books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.7,
        reviews: 420,
        isDeal: true,
        prime: false,
        freeShipping: true
    },
    {
        id: 9,
        name: "Gaming Laptop",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
        price: 1299.99,
        originalPrice: 1599.99,
        rating: 4.8,
        reviews: 890,
        isDeal: true,
        prime: true,
        freeShipping: true
    },
    {
        id: 10,
        name: "Smart Home Speaker",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 3200,
        isDeal: true,
        prime: true,
        freeShipping: true
    }
];

// Format price
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '★';
    if (halfStar) stars += '½';
    for (let i = 0; i < emptyStars; i++) stars += '☆';
    
    return stars;
}

// Create product card
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}" data-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-meta">
                    ${product.isDeal ? '<span class="deal-badge">🔥 Hot Deal</span>' : ''}
                    ${product.prime ? '<span class="prime-badge">✓ Prime</span>' : ''}
                    ${product.freeShipping ? '<span class="shipping-badge">🚚 Free Shipping</span>' : ''}
                </div>
                <button class="btn-buy" onclick="window.open('https://www.amazon.com/s?k=${encodeURIComponent(product.name)}', '_blank')">
                    <i class="fas fa-shopping-cart"></i> View on Amazon
                </button>
            </div>
        </div>
    `;
}

// Load products on home page
function loadHomeProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        const featuredProducts = products.slice(0, 6);
        productsGrid.innerHTML = featuredProducts.map(createProductCard).join('');
    }
}

// Load all products on products page
function loadAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(createProductCard).join('');
        setupFilters();
    }
}

// Setup filters
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRange = document.getElementById('priceRange');
    const currentPrice = document.getElementById('currentPrice');
    const productSearch = document.getElementById('productSearch');
    
    if (priceRange && currentPrice) {
        priceRange.addEventListener('input', (e) => {
            currentPrice.textContent = `$${e.target.value}`;
            filterProducts();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (productSearch) {
        productSearch.addEventListener('input', filterProducts);
    }
    
    // Add event listeners to checkboxes
    document.querySelectorAll('.rating-filter input, .deal-filter input').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

// Filter products
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRange = document.getElementById('priceRange');
    const productSearch = document.getElementById('productSearch');
    const productCards = document.querySelectorAll('.product-card');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const maxPrice = priceRange ? parseInt(priceRange.value) : 1000;
    const searchQuery = productSearch ? productSearch.value.toLowerCase() : '';
    
    // Get checked ratings
    const checkedRatings = Array.from(document.querySelectorAll('.rating-filter input:checked'))
        .map(cb => parseInt(cb.value));
    
    // Get deal filters
    const showDeals = document.querySelector('.deal-filter input[type="checkbox"]:checked') !== null;
    
    productCards.forEach(card => {
        const category = card.dataset.category;
        const price = parseFloat(card.dataset.price);
        const name = card.querySelector('.product-title').textContent.toLowerCase();
        const rating = parseFloat(card.querySelector('.stars').textContent.replace(/[^0-9.]/g, ''));
        
        let show = true;
        
        // Category filter
        if (selectedCategory !== 'all' && category !== selectedCategory) {
            show = false;
        }
        
        // Price filter
        if (price > maxPrice) {
            show = false;
        }
        
        // Search filter
        if (searchQuery && !name.includes(searchQuery)) {
            show = false;
        }
        
        // Rating filter
        if (checkedRatings.length > 0 && !checkedRatings.some(minRating => rating >= minRating)) {
            show = false;
        }
        
        // Deal filter
        if (showDeals && !card.querySelector('.deal-badge')) {
            show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// Newsletter subscription
function setupNewsletter() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                form.querySelector('input[type="email"]').value = '';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHomeProducts();
    loadAllProducts();
    setupNewsletter();
    
    // Update price display on range input
    const priceRange = document.getElementById('priceRange');
    const currentPrice = document.getElementById('currentPrice');
    
    if (priceRange && currentPrice) {
        priceRange.addEventListener('input', (e) => {
            currentPrice.textContent = `$${e.target.value}`;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add loading animation to buy buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-buy') || e.target.closest('.btn-buy')) {
            const button = e.target.classList.contains('btn-buy') ? e.target : e.target.closest('.btn-buy');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }
    });
});