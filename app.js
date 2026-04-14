// ===== قاعدة بيانات الأطعمة =====
const foodDatabase = [
    // بروتينات
    { name: "صدور دجاج مشوي", category: "بروتين", cal: 165, protein: 31, carbs: 0, fat: 3.6, per: "100 جم" },
    { name: "صدر دجاج مقلي", category: "بروتين", cal: 220, protein: 28, carbs: 6, fat: 10, per: "100 جم" },
    { name: "لحم بقري مفروم", category: "بروتين", cal: 250, protein: 26, carbs: 0, fat: 17, per: "100 جم" },
    { name: "ستيك لحم", category: "بروتين", cal: 271, protein: 26, carbs: 0, fat: 18, per: "100 جم" },
    { name: "سمك سلمون", category: "بروتين", cal: 208, protein: 20, carbs: 0, fat: 13, per: "100 جم" },
    { name: "سمك تونة معلبة", category: "بروتين", cal: 116, protein: 26, carbs: 0, fat: 1, per: "100 جم" },
    { name: "بيضة كاملة", category: "بروتين", cal: 155, protein: 13, carbs: 1.1, fat: 11, per: "100 جم" },
    { name: "بياض بيضة", category: "بروتين", cal: 52, protein: 11, carbs: 0.7, fat: 0.2, per: "100 جم" },
    { name: "جمبري", category: "بروتين", cal: 99, protein: 24, carbs: 0.2, fat: 0.3, per: "100 جم" },
    { name: "توفو", category: "بروتين", cal: 76, protein: 8, carbs: 1.9, fat: 4.8, per: "100 جم" },
    { name: "لحم غنم", category: "بروتين", cal: 294, protein: 25, carbs: 0, fat: 21, per: "100 جم" },
    { name: "كبدة دجاج", category: "بروتين", cal: 135, protein: 20, carbs: 0.8, fat: 5, per: "100 جم" },

    // كربوهيدرات
    { name: "أرز أبيض مطبوخ", category: "كربوهيدرات", cal: 130, protein: 2.7, carbs: 28, fat: 0.3, per: "100 جم" },
    { name: "أرز بني مطبوخ", category: "كربوهيدرات", cal: 112, protein: 2.3, carbs: 24, fat: 0.8, per: "100 جم" },
    { name: "معكرونة مطبوخة", category: "كربوهيدرات", cal: 131, protein: 5, carbs: 25, fat: 1.1, per: "100 جم" },
    { name: "خبز أبيض", category: "كربوهيدرات", cal: 265, protein: 9, carbs: 49, fat: 3.2, per: "100 جم" },
    { name: "خبز أسمر", category: "كربوهيدرات", cal: 247, protein: 13, carbs: 41, fat: 3.4, per: "100 جم" },
    { name: "شوفان", category: "كربوهيدرات", cal: 389, protein: 17, carbs: 66, fat: 7, per: "100 جم" },
    { name: "بطاطا حلوة", category: "كربوهيدرات", cal: 86, protein: 1.6, carbs: 20, fat: 0.1, per: "100 جم" },
    { name: "بطاطس مسلوقة", category: "كربوهيدرات", cal: 87, protein: 1.9, carbs: 20, fat: 0.1, per: "100 جم" },
    { name: "كينوا مطبوخة", category: "كربوهيدرات", cal: 120, protein: 4.4, carbs: 21, fat: 1.9, per: "100 جم" },
    { name: "فول مدمس", category: "كربوهيدرات", cal: 110, protein: 8, carbs: 19, fat: 0.4, per: "100 جم" },
    { name: "عدس مطبوخ", category: "كربوهيدرات", cal: 116, protein: 9, carbs: 20, fat: 0.4, per: "100 جم" },
    { name: "حمص مطبوخ", category: "كربوهيدرات", cal: 164, protein: 9, carbs: 27, fat: 2.6, per: "100 جم" },
    { name: "ذرة مشوية", category: "كربوهيدرات", cal: 96, protein: 3.2, carbs: 21, fat: 1.2, per: "100 جم" },
    { name: "أرز مكسيكي", category: "كربوهيدرات", cal: 150, protein: 3, carbs: 28, fat: 2.5, per: "100 جم" },

    // دهون
    { name: "زيت زيتون", category: "دهون", cal: 884, protein: 0, carbs: 0, fat: 100, per: "100 جم" },
    { name: "زبدة", category: "دهون", cal: 717, protein: 0.9, carbs: 0.1, fat: 81, per: "100 جم" },
    { name: "مكسرات مشكلة", category: "دهون", cal: 607, protein: 20, carbs: 16, fat: 54, per: "100 جم" },
    { name: "لوز", category: "دهون", cal: 579, protein: 21, carbs: 22, fat: 50, per: "100 جم" },
    { name: "جوز عادي", category: "دهون", cal: 654, protein: 15, carbs: 14, fat: 65, per: "100 جم" },
    { name: "فول سوداني", category: "دهون", cal: 567, protein: 26, carbs: 16, fat: 49, per: "100 جم" },
    { name: "أفوكادو", category: "دهون", cal: 160, protein: 2, carbs: 9, fat: 15, per: "100 جم" },
    { name: "زبدة فول سوداني", category: "دهون", cal: 588, protein: 25, carbs: 20, fat: 50, per: "100 جم" },

    // فواكه
    { name: "تفاح", category: "فواكه", cal: 52, protein: 0.3, carbs: 14, fat: 0.2, per: "100 جم" },
    { name: "موز", category: "فواكه", cal: 89, protein: 1.1, carbs: 23, fat: 0.3, per: "100 جم" },
    { name: "برتقال", category: "فواكه", cal: 47, protein: 0.9, carbs: 12, fat: 0.1, per: "100 جم" },
    { name: "فراولة", category: "فواكه", cal: 32, protein: 0.7, carbs: 7.7, fat: 0.3, per: "100 جم" },
    { name: "عنب", category: "فواكه", cal: 69, protein: 0.7, carbs: 18, fat: 0.2, per: "100 جم" },
    { name: "مانجو", category: "فواكه", cal: 60, protein: 0.8, carbs: 15, fat: 0.4, per: "100 جم" },
    { name: "بطيخ", category: "فواكه", cal: 30, protein: 0.6, carbs: 8, fat: 0.2, per: "100 جم" },
    { name: "تمر", category: "فواكه", cal: 277, protein: 1.8, carbs: 75, fat: 0.2, per: "100 جم" },
    { name: "رمان", category: "فواكه", cal: 83, protein: 1.7, carbs: 19, fat: 1.2, per: "100 جم" },
    { name: "كيوي", category: "فواكه", cal: 61, protein: 1.1, carbs: 15, fat: 0.5, per: "100 جم" },

    // خضروات
    { name: "بروكلي", category: "خضروات", cal: 34, protein: 2.8, carbs: 7, fat: 0.4, per: "100 جم" },
    { name: "سبانخ", category: "خضروات", cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, per: "100 جم" },
    { name: "طماطم", category: "خضروات", cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, per: "100 جم" },
    { name: "خيار", category: "خضروات", cal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, per: "100 جم" },
    { name: "جزر", category: "خضروات", cal: 41, protein: 0.9, carbs: 10, fat: 0.2, per: "100 جم" },
    { name: "بصل", category: "خضروات", cal: 40, protein: 1.1, carbs: 9, fat: 0.1, per: "100 جم" },
    { name: "فلفل ألوان", category: "خضروات", cal: 31, protein: 1, carbs: 6, fat: 0.3, per: "100 جم" },
    { name: "باذنجان", category: "خضروات", cal: 25, protein: 1, carbs: 6, fat: 0.2, per: "100 جم" },
    { name: "كوسا", category: "خضروات", cal: 17, protein: 1.2, carbs: 3.1, fat: 0.3, per: "100 جم" },
    { name: "ثوم", category: "خضروات", cal: 149, protein: 6.4, carbs: 33, fat: 0.5, per: "100 جم" },
    { name: "خس", category: "خضروات", cal: 15, protein: 1.4, carbs: 2.9, fat: 0.2, per: "100 جم" },

    // مشروبات
    { name: "شاي بدون سكر", category: "مشروبات", cal: 2, protein: 0, carbs: 0.5, fat: 0, per: "كوب 240 مل" },
    { name: "قهوة سوداء", category: "مشروبات", cal: 2, protein: 0.3, carbs: 0, fat: 0, per: "كوب 240 مل" },
    { name: "عصير برتقال طبيعي", category: "مشروبات", cal: 112, protein: 1.7, carbs: 26, fat: 0.5, per: "كوب 240 مل" },
    { name: "حليب كامل الدسم", category: "مشروبات", cal: 61, protein: 3.2, carbs: 5, fat: 3.3, per: "100 مل" },
    { name: "سفن أب", category: "مشروبات", cal: 41, protein: 0, carbs: 11, fat: 0, per: "100 مل" },
    { name: "ماء", category: "مشروبات", cal: 0, protein: 0, carbs: 0, fat: 0, per: "كوب 240 مل" },
    { name: "سموذي فراولة", category: "مشروبات", cal: 90, protein: 3, carbs: 18, fat: 1, per: "كوب 240 مل" },
    { name: "نسكافيه بالحليب", category: "مشروبات", cal: 120, protein: 4, carbs: 15, fat: 5, per: "كوب 240 مل" },

    // ألبان
    { name: "زبادي يوناني", category: "ألبان", cal: 97, protein: 9, carbs: 3.6, fat: 5, per: "100 جم" },
    { name: "جبنة شيدر", category: "ألبان", cal: 403, protein: 25, carbs: 1.3, fat: 33, per: "100 جم" },
    { name: "جبنة بيضاء", category: "ألبان", cal: 264, protein: 14, carbs: 4, fat: 21, per: "100 جم" },
    { name: "جبنة موزاريلا", category: "ألبان", cal: 280, protein: 28, carbs: 3, fat: 17, per: "100 جم" },
    { name: "لبن رايب", category: "ألبان", cal: 60, protein: 3.1, carbs: 4.5, fat: 3.3, per: "100 مل" },
    { name: "كريمة حليب", category: "ألبان", cal: 340, protein: 2, carbs: 3, fat: 36, per: "100 جم" },
];

// ===== حالة التطبيق =====
let mealPlan = {
    breakfast: [],
    snack1: [],
    lunch: [],
    snack2: [],
    dinner: []
};

let selectedGender = 'male';
let selectedGoal = 'maintain';
let modalTargetMeal = 'breakfast';
let selectedFoodForModal = null;

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initCounters();
    initCalculator();
    initMealPlanner();
    initFoodDatabase();
    initMacroCalculator();
    initRevealAnimations();
    calcMacro(); // احسب الماكرو الافتراضي
});

// ===== جزيئات الخلفية =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // إنشاء الجزيئات
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.4 + 0.1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            // إعادة التموضع عند الخروج
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // رسم الجزيء
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
            ctx.fill();

            // رسم الخطوط بين الجزيئات القريبة
            for (let j = i + 1; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(34, 197, 94, ${0.06 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }
    animate();
}

// ===== شريط التنقل =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // تأثير التمرير
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // تحديث الرابط النشط
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(sec => {
            const top = sec.offsetTop - 100;
            const bottom = top + sec.offsetHeight;
            const id = sec.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                if (window.scrollY >= top && window.scrollY < bottom) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });

    // قائمة الموبايل
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // إغلاق القائمة عند النقر على رابط
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// ===== عداد الأرقام =====
function initCounters() {
    const counters = [
        { el: document.getElementById('counter-foods'), target: 75 },
        { el: document.getElementById('counter-recipes'), target: 120 },
        { el: document.getElementById('counter-users'), target: 8500 }
    ];

    let started = false;

    function startCounting() {
        if (started) return;
        started = true;

        counters.forEach(c => {
            let current = 0;
            const step = Math.ceil(c.target / 60);
            const interval = setInterval(() => {
                current += step;
                if (current >= c.target) {
                    current = c.target;
                    clearInterval(interval);
                }
                c.el.textContent = current >= 1000
                    ? (current / 1000).toFixed(1) + 'K'
                    : current;
            }, 30);
        });
    }

    // ابدأ العد عند ظهور القسم
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) startCounting();
        });
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('hero'));
}

// ===== حاسبة السعرات =====
function initCalculator() {
    // تبديل الجنس
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedGender = btn.dataset.gender;
        });
    });

    // تبديل الهدف
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedGoal = btn.dataset.goal;
        });
    });

    // زر الحساب
    document.getElementById('calcBtn').addEventListener('click', calculateCalories);
}

function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // التحقق من المدخلات
    if (!age || !weight || !height || age < 10 || weight < 30 || height < 100) {
        showToast('يرجى إدخال بيانات صحيحة', 'fa-exclamation-triangle');
        return;
    }

    // حساب BMR (معادلة Mifflin-St Jeor)
    let bmr;
    if (selectedGender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // حساب TDEE
    const tdee = Math.round(bmr * activity);

    // حساب السعرات المستهدفة
    let targetCal;
    let goalText = '';
    let goalClass = '';

    switch (selectedGoal) {
        case 'lose':
            targetCal = tdee - 500;
            goalText = 'إنقاص الوزن';
            goalClass = 'red';
            break;
        case 'gain':
            targetCal = tdee + 400;
            goalText = 'زيادة الوزن';
            goalClass = 'orange';
            break;
        default:
            targetCal = tdee;
            goalText = 'ثبات الوزن';
            goalClass = '';
    }

    targetCal = Math.max(1200, Math.round(targetCal));

    // حساب الماكرو التقريبي (30/40/30)
    const protein = Math.round((targetCal * 0.30) / 4);
    const carbs = Math.round((targetCal * 0.40) / 4);
    const fat = Math.round((targetCal * 0.30) / 9);

    // عرض النتيجة
    const resultCard = document.getElementById('calcResult');
    resultCard.innerHTML = `
        <div class="calc-result">
            <div class="result-bmr">
                <p class="result-label">معدل الأيض الأساسي (BMR)</p>
                <p class="result-value">${Math.round(bmr)} <span class="result-unit">سعرة/يوم</span></p>
            </div>
            <div class="result-tdee">
                <p class="result-label">احتياجك اليومي الكامل (TDEE)</p>
                <p class="result-value orange">${tdee} <span class="result-unit">سعرة/يوم</span></p>
            </div>
            <div class="result-target">
                <p class="result-label">السعرات المستهدفة — ${goalText}</p>
                <p class="result-value ${goalClass}">${targetCal} <span class="result-unit">سعرة/يوم</span></p>
            </div>
            <div class="result-macros">
                <div class="result-macro-item macro-protein">
                    <strong>${protein}جم</strong>
                    <span>بروتين</span>
                </div>
                <div class="result-macro-item macro-carbs">
                    <strong>${carbs}جم</strong>
                    <span>كربوهيدرات</span>
                </div>
                <div class="result-macro-item macro-fat">
                    <strong>${fat}جم</strong>
                    <span>دهون</span>
                </div>
            </div>
        </div>
    `;

    // تحديث حاسبة الماكرو بالسعرات المستهدفة
    document.getElementById('macroCalories').value = targetCal;
    calcMacro();

    showToast('تم حساب السعرات بنجاح', 'fa-check-circle');
}

// ===== منظم الوجبات =====
function initMealPlanner() {
    // فتح المودال
    document.querySelectorAll('.add-food-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modalTargetMeal = btn.dataset.meal;
            const mealNames = {
                breakfast: 'الفطور',
                snack1: 'سناك صباحي',
                lunch: 'الغداء',
                snack2: 'سناك مسائي',
                dinner: 'العشاء'
            };
            document.getElementById('modalTargetMeal').textContent = mealNames[modalTargetMeal];
            selectedFoodForModal = null;
            document.getElementById('modalQtyArea').style.display = 'none';
            document.getElementById('modalFoodSearch').value = '';
            renderModalFoodList('');
            document.getElementById('addFoodModal').classList.add('open');
        });
    });

    // إغلاق المودال
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('addFoodModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // بحث في المودال
    document.getElementById('modalFoodSearch').addEventListener('input', (e) => {
        renderModalFoodList(e.target.value);
    });

    // إضافة الطعام
    document.getElementById('modalAddBtn').addEventListener('click', addFoodToMeal);
}

function closeModal() {
    document.getElementById('addFoodModal').classList.remove('open');
}

function renderModalFoodList(query) {
    const list = document.getElementById('modalFoodList');
    const filtered = foodDatabase.filter(f =>
        f.name.includes(query) || f.category.includes(query)
    ).slice(0, 20);

    list.innerHTML = filtered.map(f => `
        <div class="modal-food-item ${selectedFoodForModal && selectedFoodForModal.name === f.name ? 'selected' : ''}" 
             data-name="${f.name}">
            <div class="modal-food-info">
                <strong>${f.name}</strong>
                <span>${f.per} — ${f.category}</span>
            </div>
            <span class="modal-food-cal">${f.cal} سعرة</span>
        </div>
    `).join('');

    // اختيار طعام
    list.querySelectorAll('.modal-food-item').forEach(item => {
        item.addEventListener('click', () => {
            const foodName = item.dataset.name;
            selectedFoodForModal = foodDatabase.find(f => f.name === foodName);
            // تحديث التحديد
            list.querySelectorAll('.modal-food-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            // إظهار حقل الكمية
            document.getElementById('modalQtyArea').style.display = 'flex';
        });
    });
}

function addFoodToMeal() {
    if (!selectedFoodForModal) {
        showToast('اختر طعاماً أولاً', 'fa-exclamation-triangle');
        return;
    }

    const qty = parseFloat(document.getElementById('modalQty').value) || 100;
    const ratio = qty / 100;

    const item = {
        name: selectedFoodForModal.name,
        qty: qty,
        cal: Math.round(selectedFoodForModal.cal * ratio),
        protein: Math.round(selectedFoodForModal.protein * ratio * 10) / 10,
        carbs: Math.round(selectedFoodForMeal.carbs * ratio * 10) / 10,
        fat: Math.round(selectedFoodForMeal.fat * ratio * 10) / 10
    };

    // خطأ: أصلح اسم المتغير
    item.protein = Math.round(selectedFoodForModal.protein * ratio * 10) / 10;
    item.carbs = Math.round(selectedFoodForModal.carbs * ratio * 10) / 10;
    item.fat = Math.round(selectedFoodForModal.fat * ratio * 10) / 10;

    mealPlan[modalTargetMeal].push(item);
    renderMealPlan();
    closeModal();
    showToast(`تمت إضافة ${item.name} إلى الوجبة`, 'fa-check-circle');
}

function renderMealPlan() {
    let totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

    Object.keys(mealPlan).forEach(meal => {
        const slot = document.querySelector(`.meal-slot[data-meal="${meal}"]`);
        const list = slot.querySelector('.meal-items-list');
        const calSpan = slot.querySelector('.meal-cal-count');
        let mealCal = 0;

        list.innerHTML = mealPlan[meal].map((item, idx) => {
            mealCal += item.cal;
            totalCal += item.cal;
            totalProtein += item.protein;
            totalCarbs += item.carbs;
            totalFat += item.fat;

            return `
                <li class="meal-item">
                    <div class="meal-item-info">
                        <span class="meal-item-name">${item.name}</span>
                        <span class="meal-item-qty">${item.qty} جم</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:12px">
                        <span class="meal-item-cal">${item.cal} سعرة</span>
                        <button class="meal-item-remove" data-meal="${meal}" data-idx="${idx}" aria-label="حذف">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </li>
            `;
        }).join('');

        calSpan.textContent = mealCal + ' سعرة';
    });

    // تحديث الإجمالي
    document.getElementById('totalCalories').textContent = totalCal;
    document.getElementById('totalProtein').textContent = Math.round(totalProtein);
    document.getElementById('totalCarbs').textContent = Math.round(totalCarbs);
    document.getElementById('totalFat').textContent = Math.round(totalFat);

    // ربط أزرار الحذف
    document.querySelectorAll('.meal-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const meal = btn.dataset.meal;
            const idx = parseInt(btn.dataset.idx);
            mealPlan[meal].splice(idx, 1);
            renderMealPlan();
            showToast('تم حذف العنصر', 'fa-trash-alt');
        });
    });
}

// ===== قاعدة الأطعمة =====
function initFoodDatabase() {
    renderFoodGrid(foodDatabase);

    document.getElementById('foodSearch').addEventListener('input', filterFoods);
    document.getElementById('foodCategory').addEventListener('change', filterFoods);
}

function filterFoods() {
    const query = document.getElementById('foodSearch').value;
    const category = document.getElementById('foodCategory').value;

    const filtered = foodDatabase.filter(f => {
        const matchName = f.name.includes(query) || f.category.includes(query);
        const matchCat = category === 'all' || f.category === category;
        return matchName && matchCat;
    });

    renderFoodGrid(filtered);
}

function renderFoodGrid(foods) {
    const grid = document.getElementById('foodGrid');

    if (foods.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--fg-muted);">
                <i class="fas fa-search" style="font-size:3rem;opacity:0.2;display:block;margin-bottom:16px;"></i>
                <p>لم يتم العثور على نتائج</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = foods.map(f => `
        <div class="food-card reveal">
            <div class="food-card-header">
                <span class="food-card-name">${f.name}</span>
                <span class="food-card-category">${f.category}</span>
            </div>
            <div class="food-card-cal">
                <strong>${f.cal}</strong>
                <span>سعرة / ${f.per}</span>
            </div>
            <div class="food-card-macros">
                <div class="food-macro fm-protein">
                    <strong>${f.protein}</strong>
                    <span>بروتين</span>
                </div>
                <div class="food-macro fm-carbs">
                    <strong>${f.carbs}</strong>
                    <span>كربوهيدرات</span>
                </div>
                <div class="food-macro fm-fat">
                    <strong>${f.fat}</strong>
                    <span>دهون</span>
                </div>
            </div>
        </div>
    `).join('');

    // أعد تفعيل أنيميشن الظهور للعناصر الجديدة
    initRevealAnimations();
}

// ===== حاسبة الماكرو =====
function initMacroCalculator() {
    document.getElementById('calcMacro').addEventListener('click', calcMacro);
    document.getElementById('macroCalories').addEventListener('change', calcMacro);
    document.getElementById('macroStyle').addEventListener('change', calcMacro);
}

function calcMacro() {
    const calories = parseFloat(document.getElementById('macroCalories').value) || 2000;
    const style = document.getElementById('macroStyle').value;

    // نسب الماكرو حسب النمط
    const presets = {
        balanced: { p: 0.30, c: 0.40, f: 0.30 },
        lowcarb: { p: 0.40, c: 0.25, f: 0.35 },
        highprotein: { p: 0.45, c: 0.30, f: 0.25 },
        keto: { p: 0.20, c: 0.05, f: 0.75 }
    };

    const preset = presets[style] || presets.balanced;

    const proteinG = Math.round((calories * preset.p) / 4);
    const carbsG = Math.round((calories * preset.c) / 4);
    const fatG = Math.round((calories * preset.f) / 9);

    // تحديث النصوص
    document.getElementById('macroTotalDisplay').textContent = calories;
    document.getElementById('macroProteinVal').textContent = proteinG + 'جم';
    document.getElementById('macroCarbsVal').textContent = carbsG + 'جم';
    document.getElementById('macroFatVal').textContent = fatG + 'جم';

    // تحديث الأشرطة
    const maxPercent = Math.max(preset.p, preset.c, preset.f);
    document.querySelector('.protein-bar').style.width = (preset.p / maxPercent * 100) + '%';
    document.querySelector('.carbs-bar').style.width = (preset.c / maxPercent * 100) + '%';
    document.querySelector('.fat-bar').style.width = (preset.f / maxPercent * 100) + '%';

    // رسم الدائرة
    drawMacroChart(preset.p, preset.c, preset.f);
}

function drawMacroChart(p, c, f) {
    const canvas = document.getElementById('macroCanvas');
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radius = Math.max(1, center - 20);
    const lineWidth = 28;

    ctx.clearRect(0, 0, size, size);

    const segments = [
        { value: p, color: '#e74c3c' },
        { value: c, color: '#f1c40f' },
        { value: f, color: '#e67e22' }
    ];

    let startAngle = -Math.PI / 2;

    segments.forEach(seg => {
        const sweepAngle = seg.value * Math.PI * 2;

        ctx.beginPath();
        ctx.arc(center, center, radius, startAngle, startAngle + sweepAngle);
        ctx.strokeStyle = seg.color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        startAngle += sweepAngle + 0.04; // فجوة صغيرة
    });
}

// ===== أنيميشن الظهور =====
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // أضف الكلاس للعناصر التي لم تحصل عليه بعد
    document.querySelectorAll('.tip-card, .food-card, .meal-slot, .calc-form-card, .calc-result-card, .summary-card, .macro-input-area, .macro-result-area').forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
    });

    // أعد ربط المراقب
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== التوست =====
function showToast(message, icon = 'fa-info-circle') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    container.appendChild(toast);

    // حذف بعد 3 ثواني
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}