# Thai Culinary Explorer (เสน่ห์สำรับไทย) 🌶️🍲

เว็บแอปพลิเคชันแนะนำอาหารไทย 4 ภาค แบบอินเตอร์แอคทีฟ ที่เน้นความสวยงาม ประณีต (Premium Aesthetics) และเป็นมิตรต่อผู้ใช้งาน โครงการนี้พัฒนาขึ้นโดยใช้ **Vanilla HTML, CSS และ JavaScript** เพื่อแสดงทักษะและการสาธิตการทำงานร่วมกันระหว่าง **JavaScript Array** และ **JavaScript Object** ร่วมกับการควบคุม DOM (Document Object Model)

---

## 📂 โครงสร้างโฟลเดอร์โครงการ (File Structure)
โครงการตั้งอยู่ที่โฟลเดอร์ [week-01/first-meet-git/](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/) ประกอบด้วยไฟล์หลักดังนี้:
* **[index.html](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/index.html)**: โครงสร้าง Markup หลักของหน้าเว็บ (Semantic HTML5)
* **[style.css](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/style.css)**: ไฟล์จัดแต่งสไตล์หรูหรา ธีมสมุนไพร-ทองคำไทย (Gold & Herbal Green) พร้อมเอฟเฟกต์ Glassmorphism และ Responsive
* **[array.js](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/array.js)**: ส่วนประมวลผลฐานข้อมูลอาหารไทยหลักและการจัดการ Array (ค้นหา, กรองภูมิภาค, เรียงลำดับ, คำนวณสถิติแคลอรีเฉลี่ย)
* **[object.js](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/object.js)**: ส่วนประมวลผลข้อมูลสูตรอาหารเชิงลึก (Nested Object) และคำนวณปรับสเกลสัดส่วนวัตถุดิบ
* **[PRD.md](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/PRD.md)**: เอกสารข้อกำหนดผลิตภัณฑ์และการออกแบบ (Product Requirements Document)
* **[README.md](file:///C:/Users/wicha/OneDrive/Desktop/JSD13/week-01/first-meet-git/README.md)**: เอกสารอธิบายโครงการและการติดตั้งใช้งาน (ไฟล์นี้)

---

## ✨ คุณลักษณะเด่นของแอปพลิเคชัน (Key Features)

### 1. 🔍 ระบบค้นหาและการกรองข้อมูล (Search & Filtering)
* **ค้นหาแบบเรียลไทม์ (Search):** ค้นหาเมนูอาหารผ่านแถบค้นหาจากชื่อภาษาไทย ภาษาอังกฤษ หรือแฮชแท็กประเภทอาหาร (Tags)
* **คัดกรองตามภูมิภาค (Filter by Region):** เลือกดูรายการอาหารแยกตามภาคต่าง ๆ (กลาง, อีสาน, เหนือ, ใต้) โดยการใช้ `Array.prototype.filter()`
* **เรียงลำดับอัจฉริยะ (Sort):** เรียงลำดับเมนูตามราคาและระดับความเผ็ดร้อน (Chili Rating) โดยใช้ `Array.prototype.sort()`

### 2. 📊 แผงรายงานสถิติสด (Live Statistics)
* แสดงจำนวนเมนูอาหารทั้งหมดที่อยู่ในระบบขณะนั้น
* คำนวณหาค่าเฉลี่ยแคลอรีของสำรับอาหารที่แสดงผลอยู่ทั้งหมด โดยเรียกใช้ `Array.prototype.map()` เพื่อดึงชุดข้อมูลแคลอรี และ `Array.prototype.reduce()` ในการวิเคราะห์ประมวลผลผลลัพธ์แบบไดนามิก

### 3. 🍲 หน้ารายละเอียดอาหารและตัวปรับสเกลสูตร (Interactive Detail Viewer)
* เมื่อคลิกเลือกการ์ดอาหาร ระบบจะดึงข้อมูล Nested Object ลึก 3 ชั้น จาก `object.js` มาเรนเดอร์ใน Modal ที่สวยงาม
* **สไลเดอร์ปรับสัดส่วน (Serving Slider):** ผู้ใช้งานสามารถสไลด์ปรับจำนวนที่รับประทาน (1 - 10 จาน) ระบบจะคำนวณและแสดงผลปริมาณวัตถุดิบที่ต้องใช้ทันทีผ่าน Method `calculateScale()` ภายในตัว Object
* แสดงโภชนาการแบบการ์ดขนาดเล็ก (โปรตีน, ไขมัน, คาร์บ, โซเดียม) และแสดงขั้นตอนการปรุงอาหารเป็นลำดับเลข

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
* **HTML5:** โครงสร้างเว็บที่เป็นระเบียบ ค้นหาง่าย และรองรับการทำ SEO เบื้องต้น
* **CSS3 (Vanilla):** ตกแต่งหน้าจอพรีเมียม สไตล์ Modern Dark/Warm Theme รองรับการไล่ระดับสี (Gradients) การ์ดโปร่งแสง (Glassmorphism) และเอฟเฟกต์ยกตัวการ์ดเมื่อชี้ (Hover transitions)
* **JavaScript (ES6+):** การจัดการ Logic และ DOM Manipulation
* **Typography:** นำเข้าฟอนต์จาก Google Fonts ได้แก่ **"Kanit"** (ภาษาไทยสไตล์โมเดิร์น) และ **"Cinzel"** (สไตล์คลาสสิกสำหรับหัวข้อหลัก)

---

## 🚀 วิธีการเข้าชมและเปิดใช้งาน
1. ดาวน์โหลดหรือ Clone โฟลเดอร์โครงการลงเครื่องคอมพิวเตอร์ของคุณ
2. เข้าไปยังไดเรกทอรี `week-01/first-meet-git/`
3. ดับเบิลคลิกไฟล์ **`index.html`** เพื่อเปิดเล่นโปรแกรมผ่านเว็บเบราว์เซอร์ใดก็ได้ทันที (ไม่ต้องติดตั้งเซิร์ฟเวอร์หรือคอมไพล์โค้ด)
