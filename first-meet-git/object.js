// object.js - Managing Individual Dish Details and Interactive Scaling

// Detailed Nested Object representation of each Thai Dish
const dishDetails = {
    1: {
        id: 1,
        nameTH: "ต้มยำกุ้งน้ำข้น",
        nameEN: "Tom Yum Goong",
        imageUrl: "images/tom_yum.jpg",
        description: "แกงไทยยอดนิยมระดับโลก รสจัดจ้านโดดเด่นด้วยรสเปรี้ยว เค็ม เผ็ดร้อน หอมกลิ่นสมุนไพรสด เช่น ข่า ตะไคร้ และใบมะกรูด ผสมกับนมข้นจืดที่ทำให้น้ำซุปข้นกลมกล่อม",
        ingredients: [
            { name: "กุ้งแม่น้ำ (แกะเปลือก)", amount: 150, unit: "กรัม" },
            { name: "เห็ดฟาง", amount: 50, unit: "กรัม" },
            { name: "ข่าหั่นแว่น", amount: 15, unit: "กรัม" },
            { name: "ตะไคร้ทุบหั่นท่อน", amount: 20, unit: "กรัม" },
            { name: "ใบมะกรูดฉีก", amount: 3, unit: "ใบ" },
            { name: "น้ำพริกเผาไทย", amount: 1.5, unit: "ช้อนโต๊ะ" },
            { name: "มะนาว", amount: 2, unit: "ช้อนโต๊ะ" },
            { name: "นมข้นจืด", amount: 50, unit: "มิลลิลิตร" }
        ],
        nutrition: {
            protein: "18 กรัม",
            fat: "6 กรัม",
            carbs: "10 กรัม",
            sodium: "950 มิลลิกรัม"
        },
        recipeSteps: [
            "ต้มน้ำซุปในหม้อให้เดือดปานกลาง จากนั้นใส่ข่า ตะไคร้ และใบมะกรูด ต้มต่อจนส่งกลิ่นสมุนไพรหอมกรุ่น",
            "ใส่เห็ดฟางและกุ้งแม่น้ำลงไป ต้มจนกุ้งเริ่มเปลี่ยนสีเป็นสีส้มและสุกกำลังดี",
            "ละลายน้ำพริกเผาลงในหม้อ ตามด้วยนมข้นจืด คนผสมให้เข้ากันจนเดือดอีกครั้ง",
            "ปิดเตาไฟทันที บีบน้ำมะนาวและน้ำปลาตามชอบ ตกแต่งด้วยพริกขี้หนูบุบและผักชีโรยหน้าก่อนตักเสิร์ฟ"
        ],
        // Calculation Method inside Object to scale ingredients
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                // Round to 1 decimal place to look nice
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return {
                    name: ingredient.name,
                    amount: scaledAmount,
                    unit: ingredient.unit
                };
            });
        }
    },
    2: {
        id: 2,
        nameTH: "ส้มตำไทยไข่เค็ม",
        nameEN: "Som Tum (Papaya Salad with Salted Egg)",
        imageUrl: "images/som_tum.jpg",
        description: "ส้มตำไทยรสชาติครบรส เปรี้ยว หวาน เค็ม เผ็ดกำลังดี ผสมผสานความมันของไข่เค็มชั้นดีที่คลุกเคล้าเข้ากับมะละกอดิบขูดเส้นกรอบ ๆ มะเขือเทศ ถั่วฝักยาว และกุ้งแห้ง",
        ingredients: [
            { name: "มะละกอดิบขูดเส้น", amount: 100, unit: "กรัม" },
            { name: "ไข่เค็มสุก", amount: 0.5, unit: "ฟอง" },
            { name: "ถั่วฝักยาว", amount: 20, unit: "กรัม" },
            { name: "มะเขือเทศสีดา", amount: 2, unit: "ลูก" },
            { name: "พริกขี้หนูเม็ดเล็ก", amount: 3, unit: "เม็ด" },
            { name: "กระเทียมไทย", amount: 4, unit: "กลีบ" },
            { name: "น้ำตาลปี๊บ", amount: 1, unit: "ช้อนโต๊ะ" },
            { name: "น้ำปลาและน้ำมะนาว", amount: 1.5, unit: "ช้อนโต๊ะ" }
        ],
        nutrition: {
            protein: "8 กรัม",
            fat: "4.5 กรัม",
            carbs: "12 กรัม",
            sodium: "890 มิลลิกรัม"
        },
        recipeSteps: [
            "โขลกกระเทียมและพริกขี้หนูในครกให้พอแตก ไม่ต้องละเอียดมาก",
            "หั่นถั่วฝักยาว มะเขือเทศ และถั่วลิสงคั่วลงไป โขลกเบา ๆ ให้วัตถุดิบเข้าเนื้อ",
            "ปรุงรสด้วยน้ำตาลปี๊บ น้ำปลา และน้ำมะนาว ใช้สากกวนจนน้ำตาลละลายเข้ากันดี",
            "ใส่เส้นมะละกอลงไปตำเบา ๆ คลุกเคล้าจนเข้าเนื้อ ตักใส่จานแล้วแต่งหน้าด้วยไข่เค็มหั่นสี่ส่วน"
        ],
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return { name: ingredient.name, amount: scaledAmount, unit: ingredient.unit };
            });
        }
    },
    3: {
        id: 3,
        nameTH: "น้ำพริกอ่องผักสด",
        nameEN: "Nam Prik Ong",
        imageUrl: "images/nam_prik_ong.jpg",
        description: "น้ำพริกพื้นบ้านล้านนาที่มีรสชาติกลมกล่อมสามรส เปรี้ยวมะเขือเทศ เค็มหวานเผ็ดอ่อน ๆ คลุกเคล้าหมูสับและเครื่องพริกแกง เสิร์ฟพร้อมผักเคียงนานาชนิด",
        ingredients: [
            { name: "หมูบดติดมัน", amount: 120, unit: "กรัม" },
            { name: "มะเขือเทศสีดา", amount: 80, unit: "กรัม" },
            { name: "พริกแห้งเม็ดใหญ่", amount: 3, unit: "เม็ด" },
            { name: "หอมแดง", amount: 4, unit: "หัว" },
            { name: "กระเทียมล้านนา", amount: 5, unit: "กลีบ" },
            { name: "กะปิแท้", amount: 0.5, unit: "ช้อนชา" },
            { name: "น้ำมันพืชสำหรับผัด", amount: 1, unit: "ช้อนชา" }
        ],
        nutrition: {
            protein: "14 กรัม",
            fat: "11 กรัม",
            carbs: "7 กรัม",
            sodium: "650 มิลลิกรัม"
        },
        recipeSteps: [
            "โขลกพริกแห้ง หอมแดง กระเทียม กะปิ และเกลือเล็กน้อยรวมกันให้ละเอียดเพื่อทำเป็นพริกแกง",
            "ตั้งกระทะใส่น้ำมันพืชเล็กน้อย นำเครื่องแกงลงผัดจนหอมฉุน",
            "ใส่หมูสับลงไปผัดจนเริ่มสุก จากนั้นตามด้วยมะเขือเทศสีดาหั่นเต๋า ผัดจนมะเขือเทศนุ่มและมีน้ำออกมา",
            "ปรุงรสด้วยน้ำตาลทรายและน้ำปลาเล็กน้อย เคี่ยวต่อจนน้ำขลุกขลิก ตักเสิร์ฟพร้อมผักสดตามชอบ"
        ],
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return { name: ingredient.name, amount: scaledAmount, unit: ingredient.unit };
            });
        }
    },
    4: {
        id: 4,
        nameTH: "คั่วกลิ้งหมูสับ",
        nameEN: "Khua Kling",
        imageUrl: "images/khua_kling.jpg",
        description: "คั่วกลิ้งหมูสับ อาหารใต้รสเด็ดเผ็ดร้อนถึงใจ ผัดแห้งแห้งจนน้ำพริกแกงใต้สีเหลืองเข้มจากขมิ้นเคลือบหมูสับทุกอณู หอมกรุ่นด้วยตะไคร้สดและใบมะกรูดซอยฝอย",
        ingredients: [
            { name: "หมูสับละเอียด", amount: 150, unit: "กรัม" },
            { name: "พริกแกงคั่วกลิ้งใต้", amount: 1.5, unit: "ช้อนโต๊ะ" },
            { name: "กะปิใต้", amount: 0.5, unit: "ช้อนชา" },
            { name: "ใบมะกรูดหั่นฝอย", amount: 4, unit: "ใบ" },
            { name: "พริกชี้ฟ้าแดงหั่นแฉลบ", amount: 1, unit: "เม็ด" },
            { name: "น้ำตาลทรายและน้ำปลา", amount: 0.5, unit: "ช้อนชา" }
        ],
        nutrition: {
            protein: "22 กรัม",
            fat: "14 กรัม",
            carbs: "4 กรัม",
            sodium: "1100 มิลลิกรัม"
        },
        recipeSteps: [
            "ตั้งกระทะให้ร้อน (ไม่ต้องใส่น้ำมัน) ใส่หมูสับลงไปคั่วจนน้ำเนื้อหมูออกและสุกเล็กน้อย",
            "ใส่พริกแกงใต้และกะปิลงไป คลุกเคล้าและผัดกับหมูให้เข้ากันด้วยไฟอ่อน",
            "คั่วต่อไปเรื่อย ๆ จนกระทั่งเนื้อหมูแห้งและแห้งสนิทตามแบบฉบับคั่วกลิ้งใต้",
            "ปรุงรสด้วยน้ำปลาและน้ำตาลทรายเล็กน้อย โรยใบมะกรูดซอยและพริกชี้ฟ้าแดง คลุกให้เข้ากันอีกรอบแล้วปิดไฟ"
        ],
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return { name: ingredient.name, amount: scaledAmount, unit: ingredient.unit };
            });
        }
    },
    5: {
        id: 5,
        nameTH: "ผัดไทยกุ้งสดห่อไข่",
        nameEN: "Pad Thai Goong Sod",
        imageUrl: "images/pad_thai.jpg",
        description: "อาหารประจำชาติสตรีทฟู้ดยอดนิยม เส้นจันทน์นุ่มเหนียว ผัดกับซอสผัดไทยรสอมเปรี้ยวอมหวานจากน้ำมะขามเปียก ห่อด้วยไข่เจียวแผ่นบางสวยงามน่ารับประทาน",
        ingredients: [
            { name: "เส้นจันทน์ (แช่น้ำ)", amount: 80, unit: "กรัม" },
            { name: "กุ้งสดแกะเปลือก", amount: 3, unit: "ตัว" },
            { name: "เต้าหู้เหลืองหั่นเต๋า", amount: 20, unit: "กรัม" },
            { name: "ไชโป๊หวานสับ", amount: 1, unit: "ช้อนชา" },
            { name: "ซอสผัดไทยมะขามเปียก", amount: 2.5, unit: "ช้อนโต๊ะ" },
            { name: "ถั่วงอกสดและกุยช่าย", amount: 40, unit: "กรัม" },
            { name: "ไข่ไก่", amount: 1.5, unit: "ฟอง" },
            { name: "ถั่วลิสงคั่วบด", amount: 1, unit: "ช้อนโต๊ะ" }
        ],
        nutrition: {
            protein: "16 กรัม",
            fat: "13 กรัม",
            carbs: "54 กรัม",
            sodium: "920 มิลลิกรัม"
        },
        recipeSteps: [
            "ผัดเต้าหู้เหลืองและไชโป๊ในกระทะจนหอม จากนั้นใส่กุ้งลงไปผัดพอสุก ตักกุ้งขึ้นพักไว้ก่อน",
            "ใส่เส้นจันทน์และซอสผัดไทยลงไป ผัดจนเส้นเหนียวนุ่มและดูดซึมซอสจนแห้งดี",
            "เกลี่ยเส้นไว้ข้างกระทะ ตอกไข่ใส่ลงไป ยีพอแตกแล้วเกลี่ยเส้นลงมาทับ ใส่ถั่วงอกและใบกุยช่าย ผัดเร็ว ๆ ให้เข้ากัน",
            "ทำแผ่นไข่เจียวบาง ๆ วางบนกระทะ นำผัดไทยที่เสร็จแล้ววางลงบนไข่ ห่อพับขอบสี่ด้าน เสิร์ฟเคียงมะนาวและพริกป่น"
        ],
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return { name: ingredient.name, amount: scaledAmount, unit: ingredient.unit };
            });
        }
    },
    6: {
        id: 6,
        nameTH: "ข้าวซอยไก่โบราณ",
        nameEN: "Khao Soi Kai",
        imageUrl: "images/khao_soi.jpg",
        description: "บะหมี่แกงกะหรี่ภาคเหนือขนานแท้ น้ำซุปเข้มข้น หอมเครื่องแกงและกะทิ รสละมุนกลมกล่อม มีทั้งเส้นบะหมี่สุกนุ่มและเส้นบะหมี่ทอดกรอบด้านบน เสิร์ฟกับน่องไก่ตุ๋นจนเปื่อย",
        ingredients: [
            { name: "น่องไก่", amount: 1, unit: "ชิ้น" },
            { name: "เส้นบะหมี่ไข่ (ต้มสุก)", amount: 70, unit: "กรัม" },
            { name: "เส้นบะหมี่ไข่ (ทอดกรอบ)", amount: 15, unit: "กรัม" },
            { name: "พริกแกงข้าวซอย", amount: 1.5, unit: "ช้อนโต๊ะ" },
            { name: "กะทิสดหอมมัน", amount: 120, unit: "มิลลิลิตร" },
            { name: "น้ำตาลมะพร้าว", amount: 1, unit: "ช้อนชา" },
            { name: "ผงกะหรี่", amount: 0.5, unit: "ช้อนชา" },
            { name: "ผักกาดดอง หอมแดงซอย", amount: 15, unit: "กรัม" }
        ],
        nutrition: {
            protein: "24 กรัม",
            fat: "18 กรัม",
            carbs: "38 กรัม",
            sodium: "940 มิลลิกรัม"
        },
        recipeSteps: [
            "ผัดพริกแกงข้าวซอยและผงกะหรี่กับหัวกะทิจนแตกมันหอมฉุน",
            "ใส่น่องไก่ลงไปผัดคลุกเคล้ากับพริกแกงแกง เติมหางกะทิตามลงไป ปิดฝาหม้อเคี่ยวต่อด้วยไฟอ่อนจนไก่เปื่อยนุ่ม",
            "ปรุงรสด้วยน้ำตาลมะพร้าวและน้ำปลาเล็กน้อย ชิมรสชาติให้เข้มข้นกลมกล่อมเค็มนำหวานตาม",
            "จัดเส้นบะหมี่ลวกใส่ชาม ตักน่องไก่และน้ำแกงราด ท็อปปิ้งด้วยบะหมี่กรอบ เสิร์ฟพร้อมผักกาดดอง หอมแดง และมะนาว"
        ],
        calculateScale: function(servings) {
            return this.ingredients.map(ingredient => {
                const scaledAmount = Math.round(ingredient.amount * servings * 10) / 10;
                return { name: ingredient.name, amount: scaledAmount, unit: ingredient.unit };
            });
        }
    }
};

// State variables for details page
let activeDishId = null;
let currentServings = 2; // Default starting servings

// DOM elements for Modal
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseBackdrop = document.getElementById('modal-close-backdrop');

// Render scaled ingredients in the list
function renderScaledIngredients(dish, servings) {
    const listContainer = document.getElementById('modal-ingredients-list');
    if (!listContainer) return;
    
    const scaledIngredients = dish.calculateScale(servings);
    
    listContainer.innerHTML = scaledIngredients.map(item => `
        <li>
            <span>${item.name}</span>
            <span class="ingredient-amount">${item.amount} ${item.unit}</span>
        </li>
    `).join('');
}

// Open modal and show details
window.viewDishDetails = function(id) {
    const dish = dishDetails[id];
    if (!dish) return;
    
    activeDishId = id;
    currentServings = 2; // Reset serving count on open
    
    modalBody.innerHTML = `
        <div class="detail-layout">
            <div class="detail-left">
                <img src="${dish.imageUrl}" alt="${dish.nameTH}">
                <div class="detail-section-title">คุณค่าทางโภชนาการ (Nutrition)</div>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <span class="nutrition-label">โปรตีน</span>
                        <span class="nutrition-val">${dish.nutrition.protein}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">ไขมัน</span>
                        <span class="nutrition-val">${dish.nutrition.fat}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">คาร์บ</span>
                        <span class="nutrition-val">${dish.nutrition.carbs}</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">โซเดียม</span>
                        <span class="nutrition-val">${dish.nutrition.sodium}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-right">
                <h2>${dish.nameTH}</h2>
                <div class="name-en">${dish.nameEN}</div>
                <p class="detail-desc">${dish.description}</p>
                
                <div class="detail-section-title">สัดส่วนวัตถุดิบและจานเสิร์ฟ</div>
                <div class="serving-selector-box">
                    <div class="serving-label-row">
                        <span>จำนวนจานรับประทาน:</span>
                        <span id="serving-val-display" class="serving-count">${currentServings} จาน</span>
                    </div>
                    <input type="range" id="serving-slider-input" class="serving-slider" min="1" max="10" value="${currentServings}">
                </div>
                
                <ul class="ingredients-list" id="modal-ingredients-list">
                    <!-- Loaded dynamically -->
                </ul>
                
                <div class="detail-section-title">ขั้นตอนการทำอาหาร (Recipe Steps)</div>
                <ol class="recipe-steps">
                    ${dish.recipeSteps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    
    // Initial Render of Ingredients
    renderScaledIngredients(dish, currentServings);
    
    // Setup Servings Slider Event Listener
    const slider = document.getElementById('serving-slider-input');
    const display = document.getElementById('serving-val-display');
    
    slider.addEventListener('input', (e) => {
        currentServings = parseInt(e.target.value);
        display.textContent = `${currentServings} จาน`;
        renderScaledIngredients(dish, currentServings);
    });
    
    // Open Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

// Close Modal functions
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable background scrolling
    activeDishId = null;
}

modalCloseBtn.addEventListener('click', closeModal);
modalCloseBackdrop.addEventListener('click', closeModal);

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
