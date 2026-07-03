// array.js - Managing the Thai Dishes Collection

// Array of Thai Dishes (database)
const thaiDishes = [
    {
        id: 1,
        nameTH: "ต้มยำกุ้งน้ำข้น",
        nameEN: "Tom Yum Goong",
        region: "Central",
        spiciness: 4, // 1 to 5 chili rating
        calories: 220,
        price: 250,
        imageUrl: "images/tom_yum.jpg",
        tags: ["Spicy", "Soup", "Seafood"]
    },
    {
        id: 2,
        nameTH: "ส้มตำไทยไข่เค็ม",
        nameEN: "Som Tum (Papaya Salad)",
        region: "Northeast",
        spiciness: 3,
        calories: 140,
        price: 95,
        imageUrl: "images/som_tum.jpg",
        tags: ["Spicy", "Salad", "Healthy"]
    },
    {
        id: 3,
        nameTH: "น้ำพริกอ่องผักสด",
        nameEN: "Nam Prik Ong",
        region: "North",
        spiciness: 2,
        calories: 180,
        price: 150,
        imageUrl: "images/nam_prik_ong.jpg",
        tags: ["Mild", "Dip", "Pork"]
    },
    {
        id: 4,
        nameTH: "คั่วกลิ้งหมูสับ",
        nameEN: "Khua Kling",
        region: "South",
        spiciness: 5,
        calories: 260,
        price: 130,
        imageUrl: "images/khua_kling.jpg",
        tags: ["Very Spicy", "Stir-fried", "Pork"]
    },
    {
        id: 5,
        nameTH: "ผัดไทยกุ้งสดห่อไข่",
        nameEN: "Pad Thai Goong Sod",
        region: "Central",
        spiciness: 1,
        calories: 450,
        price: 120,
        imageUrl: "images/pad_thai.jpg",
        tags: ["Noodle", "Seafood", "Street Food"]
    },
    {
        id: 6,
        nameTH: "ข้าวซอยไก่โบราณ",
        nameEN: "Khao Soi Kai",
        region: "North",
        spiciness: 3,
        calories: 380,
        price: 160,
        imageUrl: "images/khao_soi.jpg",
        tags: ["Spicy", "Noodle", "Chicken", "Curry"]
    }
];

// Current filtered state
let currentDishes = [...thaiDishes];
let activeRegion = 'all';

// DOM Elements
const dishesGrid = document.getElementById('dishes-grid');
const statCount = document.getElementById('stat-count');
const statAvgCalories = document.getElementById('stat-avg-calories');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortSelect = document.getElementById('sort-select');
const regionFilters = document.getElementById('region-filters');

// Render Spicy Chilis
function getChiliHTML(rating) {
    let chiliHTML = '';
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= rating ? 'active' : '';
        chiliHTML += `
            <svg class="chili-icon ${isActive}" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.5 11 3C11 3.5 11.2 4 11.5 4.5C11.8 5 12 5.5 12 6C12 7 11 8 9.5 9C8 10 7 11.5 7 13.5C7 16.5 9.2 19 12 19C14.8 19 17 16.5 17 13.5C17 11 16 9.5 14.5 8.5C13.5 7.8 13 7.2 12.7 6.6C12.4 6 12.5 5.5 12.5 5C12.5 4 12 3 12 2Z" />
            </svg>`;
    }
    return chiliHTML;
}

// Render Dishes Grid
function renderDishes(dishes) {
    dishesGrid.innerHTML = '';
    if (dishes.length === 0) {
        dishesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>ไม่พบเมนูอาหารที่คุณค้นหา</p>
            </div>`;
        return;
    }
    
    dishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.setAttribute('data-id', dish.id);
        
        card.innerHTML = `
            <div class="dish-img-container">
                <img src="${dish.imageUrl}" alt="${dish.nameTH}">
                <span class="dish-region-badge">${dish.region}</span>
            </div>
            <div class="dish-info">
                <div class="dish-title-group">
                    <h3 class="dish-title-th">${dish.nameTH}</h3>
                    <span class="dish-title-en">${dish.nameEN}</span>
                </div>
                <div class="dish-tags">
                    ${dish.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="dish-details">
                    <span class="dish-price">฿${dish.price}</span>
                    <div class="dish-spicy">
                        ${getChiliHTML(dish.spiciness)}
                    </div>
                </div>
            </div>
        `;
        
        // Add click event for details modal (integrated with object.js)
        card.addEventListener('click', () => {
            if (typeof window.viewDishDetails === 'function') {
                window.viewDishDetails(dish.id);
            }
        });
        
        dishesGrid.appendChild(card);
    });
}

// Update Statistics Panel using map & reduce
function updateStats(dishes) {
    statCount.textContent = dishes.length;
    
    if (dishes.length === 0) {
        statAvgCalories.textContent = 0;
        return;
    }
    
    // Map to calories array, then reduce to sum
    const totalCalories = dishes
        .map(dish => dish.calories)
        .reduce((sum, calories) => sum + calories, 0);
        
    const avg = Math.round(totalCalories / dishes.length);
    statAvgCalories.textContent = avg;
}

// Handle Filtering by Region
function filterDishes() {
    let filtered = [...thaiDishes];
    
    // 1. Region filter
    if (activeRegion !== 'all') {
        filtered = filtered.filter(dish => dish.region === activeRegion);
    }
    
    // 2. Search keyword filter
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword) {
        filtered = filtered.filter(dish => 
            dish.nameTH.toLowerCase().includes(keyword) || 
            dish.nameEN.toLowerCase().includes(keyword) ||
            dish.tags.some(tag => tag.toLowerCase().includes(keyword))
        );
    }
    
    // 3. Sorting
    const sortVal = sortSelect.value;
    if (sortVal === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'spicy-asc') {
        filtered.sort((a, b) => a.spiciness - b.spiciness);
    } else if (sortVal === 'spicy-desc') {
        filtered.sort((a, b) => b.spiciness - a.spiciness);
    }
    
    currentDishes = filtered;
    renderDishes(currentDishes);
    updateStats(currentDishes);
}

// Event Listeners for Filters
regionFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // Toggle active button style
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        activeRegion = e.target.getAttribute('data-region');
        filterDishes();
    }
});

// Event Listeners for Sort
sortSelect.addEventListener('change', filterDishes);

// Event Listeners for Search
searchBtn.addEventListener('click', filterDishes);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterDishes();
    }
});

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderDishes(thaiDishes);
    updateStats(thaiDishes);
});
