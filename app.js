// ===== قاعدة بيانات الأطعمة =====
const foodDatabase = [
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
    { name: "زيت زيتون", category: "دهون", cal: 884, protein: 0, carbs: 0, fat: 100, per: "100 جم" },
    { name: "مكسرات مشكلة", category: "دهون", cal: 607, protein: 20, carbs: 16, fat: 54, per: "100 جم" },
    { name: "لوز", category: "دهون", cal: 579, protein: 21, carbs: 22, fat: 50, per: "100 جم" },
    { name: "فول سوداني", category: "دهون", cal: 567, protein: 26, carbs: 16, fat: 49, per: "100 جم" },
    { name: "أفوكادو", category: "دهون", cal: 160, protein: 2, carbs: 9, fat: 15, per: "100 جم" },
    { name: "زبدة فول سوداني", category: "دهون", cal: 588, protein: 25, carbs: 20, fat: 50, per: "100 جم" },
    { name: "تفاح", category: "فواكه", cal: 52, protein: 0.3, carbs: 14, fat: 0.2, per: "100 جم" },
    { name: "موز", category: "فواكه", cal: 89, protein: 1.1, carbs: 23, fat: 0.3, per: "100 جم" },
    { name: "برتقال", category: "فواكه", cal: 47, protein: 0.9, carbs: 12, fat: 0.1, per: "100 جم" },
    { name: "فراولة", category: "فواكه", cal: 32, protein: 0.7, carbs: 7.7, fat: 0.3, per: "100 جم" },
    { name: "عنب", category: "فواكه", cal: 69, protein: 0.7, carbs: 18, fat: 0.2, per: "100 جم" },
    { name: "مانجو", category: "فواكه", cal: 60, protein: 0.8, carbs: 15, fat: 0.4, per: "100 جم" },
    { name: "بطيخ", category: "فواكه", cal: 30, protein: 0.6, carbs: 8, fat: 0.2, per: "100 جم" },
    { name: "تمر", category: "فواكه", cal: 277, protein: 1.8, carbs: 75, fat: 0.2, per: "100 جم" },
    { name: "بروكلي", category: "خضروات", cal: 34, protein: 2.8, carbs: 7, fat: 0.4, per: "100 جم" },
    { name: "سبانخ", category: "خضروات", cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, per: "100 جم" },
    { name: "طماطم", category: "خضروات", cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, per: "100 جم" },
    { name: "خيار", category: "خضروات", cal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, per: "100 جم" },
    { name: "جزر", category: "خضروات", cal: 41, protein: 0.9, carbs: 10, fat: 0.2, per: "100 جم" },
    { name: "فلفل ألوان", category: "خضروات", cal: 31, protein: 1, carbs: 6, fat: 0.3, per: "100 جم" },
    { name: "باذنجان", category: "خضروات", cal: 25, protein: 1, carbs: 6, fat: 0.2, per: "100 جم" },
    { name: "خس", category: "خضروات", cal: 15, protein: 1.4, carbs: 2.9, fat: 0.2, per: "100 جم" },
    { name: "شاي بدون سكر", category: "مشروبات", cal: 2, protein: 0, carbs: 0.5, fat: 0, per: "كوب" },
    { name: "قهوة سوداء", category: "مشروبات", cal: 2, protein: 0.3, carbs: 0, fat: 0, per: "كوب" },
    { name: "حليب كامل الدسم", category: "مشروبات", cal: 61, protein: 3.2, carbs: 5, fat: 3.3, per: "100 مل" },
    { name: "زبادي يوناني", category: "ألبان", cal: 97, protein: 9, carbs: 3.6, fat: 5, per: "100 جم" },
    { name: "جبنة بيضاء", category: "ألبان", cal: 264, protein: 14, carbs: 4, fat: 21, per: "100 جم" },
    { name: "جبنة موزاريلا", category: "ألبان", cal: 280, protein: 28, carbs: 3, fat: 17, per: "100 جم" }
];

// ===== قاعدة بيانات وجبات مقترحة =====
const mealTemplates = {
    lose: {
        breakfast: [
            { name: "شوفان بالحليب قليل الدسم", qty: "50 جم", cal: 195, p: 9, c: 33, f: 4 },
            { name: "بيضتان مسلوقتان", qty: "100 جم", cal: 155, p: 13, c: 1, f: 11 },
            { name: "شريحة خبز أسمر", qty: "30 جم", cal: 74, p: 4, c: 12, f: 1 }
        ],
        snack1: [
            { name: "تفاحة متوسطة", qty: "150 جم", cal: 78, p: 0, c: 21, f: 0 },
            { name: "لوز", qty: "15 جم", cal: 87, p: 3, c: 3, f: 8 }
        ],
        lunch: [
            { name: "صدور دجاج مشوي", qty: "150 جم", cal: 248, p: 47, c: 0, f: 5 },
            { name: "أرز بني", qty: "80 جم", cal: 90, p: 2, c: 19, f: 1 },
            { name: "سلطة خضراء", qty: "200 جم", cal: 35, p: 2, c: 6, f: 0 },
            { name: "زيت زيتون للسلطة", qty: "5 مل", cal: 44, p: 0, c: 0, f: 5 }
        ],
        dinner: [
            { name: "سمك سلمون مشوي", qty: "120 جم", cal: 250, p: 24, c: 0, f: 16 },
            { name: "خضروات سوتيه", qty: "150 جم", cal: 60, p: 2, c: 10, f: 2 },
            { name: "بطاطا حلوة", qty: "100 جم", cal: 86, p: 2, c: 20, f: 0 }
        ]
    },
    maintain: {
        breakfast: [
            { name: "أومليت بـ 3 بيضات", qty: "150 جم", cal: 233, p: 19, c: 2, f: 17 },
            { name: "خبز أبيض", qty: "60 جم", cal: 159, p: 5, c: 29, f: 2 },
            { name: "جبنة بيضاء", qty: "30 جم", cal: 79, p: 4, c: 1, f: 6 },
            { name: "طماطم وخيار", qty: "100 جم", cal: 17, p: 1, c: 4, f: 0 }
        ],
        snack1: [
            { name: "موزة", qty: "120 جم", cal: 107, p: 1, c: 28, f: 0 },
            { name: "زبادي يوناني", qty: "150 جم", cal: 146, p: 14, c: 5, f: 8 }
        ],
        lunch: [
            { name: "لحم بقري مفروم", qty: "150 جم", cal: 375, p: 39, c: 0, f: 26 },
            { name: "أرز أبيض", qty: "120 جم", cal: 156, p: 3, c: 34, f: 0 },
            { name: "سلطة خضراء كبيرة", qty: "250 جم", cal: 40, p: 3, c: 8, f: 0 },
            { name: "حمص", qty: "80 جم", cal: 131, p: 7, c: 22, f: 2 }
        ],
        dinner: [
            { name: "صدر دجاج مشوي", qty: "180 جم", cal: 297, p: 56, c: 0, f: 6 },
            { name: "معكرونة", qty: "100 جم", cal: 131, p: 5, c: 25, f: 1 },
            { name: "صوص طماطم", qty: "80 جم", cal: 25, p: 1, c: 5, f: 0 },
            { name: "جبنة موزاريلا", qty: "30 جم", cal: 84, p: 8, c: 1, f: 5 }
        ]
    },
    gain: {
        breakfast: [
            { name: "شوفان بالحليب كامل الدسم", qty: "80 جم", cal: 370, p: 16, c: 53, f: 10 },
            { name: "3 بيضات مقلية بالزبدة", qty: "150 جم", cal: 280, p: 19, c: 2, f: 22 },
            { name: "موزتان", qty: "240 جم", cal: 214, p: 3, c: 55, f: 1 },
            { name: "زبدة فول سوداني", qty: "30 جم", cal: 176, p: 8, c: 6, f: 15 }
        ],
        snack1: [
            { name: "زبادي يوناني بالموز", qty: "200 جم", cal: 220, p: 18, c: 30, f: 4 },
            { name: "مكسرات مشكلة", qty: "40 جم", cal: 243, p: 8, c: 6, f: 22 }
        ],
        lunch: [
            { name: "صدور دجاج مقلي", qty: "200 جم", cal: 440, p: 56, c: 12, f: 20 },
            { name: "أرز أبيض", qty: "180 جم", cal: 234, p: 5, c: 50, f: 1 },
            { name: "سلطة خضراء + زيت زيتون", qty: "200 جم", cal: 90, p: 2, c: 6, f: 8 },
            { name: "أفوكادو", qty: "80 جم", cal: 128, p: 2, c: 7, f: 12 }
        ],
        dinner: [
            { name: "ستيك لحم بقري", qty: "200 جم", cal: 542, p: 52, c: 0, f: 36 },
            { name: "بطاطا حلوة كبيرة", qty: "200 جم", cal: 172, p: 3, c: 40, f: 0 },
            { name: "بروكلي مطبوخ", qty: "150 جم", cal: 51, p: 4, c: 11, f: 1 },
            { name: "خبز أسمر", qty: "60 جم", cal: 148, p: 8, c: 25, f: 2 }
        ]
    }
};

// ===== قاعدة بيانات التمارين =====
const exerciseTemplates = {
    lose: [
        { name: "جري متواصل", type: "cardio", icon: "fa-person-running", duration: "30-40 دقيقة", burn: "300-400", sets: "—", rest: "—", desc: "اجري بسرعة متوسطة لمدة 30-40 دقيقة. يساعد في حرق الدهون مباشرة وتحسين اللياقة القلبية." },
        { name: "قفز حبل", type: "hiit", icon: "fa-heart-pulse", duration: "15-20 دقيقة", burn: "250-350", sets: "8 جولات × 2 دقيقة", rest: "30 ثانية راحة", desc: "من أفضل تمارين حرق السعرات. اقفز لمدة دقيقتين ثم استرح 30 ثانية وكرر." },
        { name: "تمارين مقاومة خفيفة", type: "strength", icon: "fa-dumbbell", duration: "30 دقيقة", burn: "150-200", sets: "3 × 12 تكرار", rest: "45 ثانية", desc: "استخدم أوزان خفيفة لتحفيز العضلات بدون حجم زائد. ركز على تمارين الجسم الكامل." },
        { name: "ركوب دراجة هوائية", type: "cardio", icon: "fa-bicycle", duration: "40-50 دقيقة", burn: "350-500", sets: "—", rest: "—", desc: "ركوب بسرعة متوسطة إلى عالية. رياضة منخفضة التأثير على المفاصل وممتازة لحرق الدهون." },
        { name: "يوغا أو تمدد", type: "flex", icon: "fa-spa", duration: "20 دقيقة", burn: "60-100", sets: "—", rest: "—", desc: "بعد التمرين الرئيسي قم بتمارين يوغا لتحسين المرونة وتقليل التوتر وتسريع التعافي." },
        { name: "مشي سريع على ميل", type: "cardio", icon: "fa-person-walking", duration: "30-40 دقيقة", burn: "200-300", sets: "—", rest: "—", desc: "اشغل السير بميل 10-15% ومشي بسرعة. حرق أعلى من المشي العادي بـ 60%." }
    ],
    maintain: [
        { name: "تمارين مقاومة متوسطة", type: "strength", icon: "fa-dumbbell", duration: "45 دقيقة", burn: "250-350", sets: "4 × 10 تكرار", rest: "60 ثانية", desc: "تمارين تشكيل العضلات: سكوات، ديدليفت، بنش برس، روينغ. وزن متوسط مع تقدم تدريجي." },
        { name: "كارديو معتدل", type: "cardio", icon: "fa-person-running", duration: "25-30 دقيقة", burn: "200-280", sets: "—", rest: "—", desc: "جري أو دراجة بسرعة معتدلة 3 مرات أسبوعياً. يحافظ على صحة القلب." },
        { name: "تمارين HIIT مختلطة", type: "hiit", icon: "fa-bolt", duration: "20 دقيقة", burn: "250-350", sets: "6 جولات × 3 تمارين", rest: "20 ثانية", desc: "تتابع سريع: بيربي وسكوات قفز وماونتن كلايمبرز. 40 ثانية عمل و20 ثانية راحة." },
        { name: "تمارين البطن والكور", type: "strength", icon: "fa-person-praying", duration: "15 دقيقة", burn: "80-120", sets: "3 × 15 تكرار", rest: "30 ثانية", desc: "بلانك وكرانش وروسيان تويست وليج رايز. يقوي الجذع ويحسن الأداء الرياضي." },
        { name: "سباحة", type: "cardio", icon: "fa-person-swimming", duration: "30-40 دقيقة", burn: "300-450", sets: "—", rest: "—", desc: "تمرين شامل يتحرك فيه كل الجسم. ممتاز لصحة القلب وتقوية العضلات." },
        { name: "تمدد واستطالة", type: "flex", icon: "fa-spa", duration: "15 دقيقة", burn: "40-60", sets: "—", rest: "—", desc: "تمدد كل مجموعة عضلية لمدة 30 ثانية. يحسن المدى الحركي ويمنع الإصابات." }
    ],
    gain: [
        { name: "تمارين مقاومة ثقيلة", type: "strength", icon: "fa-dumbbell", duration: "50-60 دقيقة", burn: "300-400", sets: "5 × 5 تكرار", rest: "90-120 ثانية", desc: "بروتوكول 5×5: سكوات وبنش برس وباربل روينغ. أوزان ثقيلة مع راحة طويلة." },
        { name: "تمارين حجم العضلات", type: "strength", icon: "fa-weight-hanging", duration: "45-50 دقيقة", burn: "250-350", sets: "4 × 8-12 تكرار", rest: "60-90 ثانية", desc: "تقسيم العضلات: يوم صدر وترايس ويوم ظهر وبايس ويوم رجلين." },
        { name: "كارديو خفيف", type: "cardio", icon: "fa-person-walking", duration: "15-20 دقيقة", burn: "80-120", sets: "—", rest: "—", desc: "مشي سريع أو دراجة خفيفة بعد التمرين. الهدف تحسين التعافي بدون التأثير على البناء." },
        { name: "تمارين مركبة متقدمة", type: "strength", icon: "fa-fire", duration: "40 دقيقة", burn: "300-400", sets: "4 × 6-8 تكرار", rest: "90 ثانية", desc: "ديدليفت روماني وأوفرهد برس وبولغاريان سكوات وبول آپ. تمارين مركبة قوية." },
        { name: "إحماء ديناميكي", type: "flex", icon: "fa-person-praying", duration: "10 دقيقة", burn: "40-60", sets: "—", rest: "—", desc: "إحماء ديناميكي قبل التمرين: دوائر الذراعين ولونج بروتيشن وهيب هينج." },
        { name: "راحة نشطة", type: "flex", icon: "fa-bed", duration: "15 دقيقة", burn: "30-50", sets: "—", rest: "—", desc: "فوم رولر للعضلات المتعبة وتمدد خفيف وتنفس عميق. العضل يبني أثناء الراحة." }
    ]
};

// ===== حالة التطبيق =====
var selectedGender = "male";
var selectedGoal = "maintain";

document.addEventListener("DOMContentLoaded", function() {
    initParticles();
    initNavbar();
    initCounters();
    initCalculator();
    initFoodDatabase();
    initRevealAnimations();
});

// ===== جزيئات الخلفية =====
function initParticles() {
    var canvas = document.getElementById("particles-canvas");
    var ctx = canvas.getContext("2d");
    var particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (var i = 0; i < 45; i++) {
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
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(34, 197, 94, " + p.opacity + ")";
            ctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
                var dx = p.x - particles[j].x;
                var dy = p.y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = "rgba(34, 197, 94, " + (0.06 * (1 - dist / 140)) + ")";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== شريط التنقل =====
function initNavbar() {
    var navbar = document.getElementById("navbar");
    var menuToggle = document.getElementById("menuToggle");
    var navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        var sections = document.querySelectorAll("section[id]");
        for (var i = 0; i < sections.length; i++) {
            var sec = sections[i];
            var top = sec.offsetTop - 100;
            var bottom = top + sec.offsetHeight;
            var id = sec.getAttribute("id");
            var link = navLinks.querySelector("a[href='#" + id + "']");
            if (link) {
                if (window.scrollY >= top && window.scrollY < bottom) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        }
    });

    menuToggle.addEventListener("click", function() {
        menuToggle.classList.toggle("open");
        navLinks.classList.toggle("open");
    });

    var allLinks = navLinks.querySelectorAll("a");
    for (var i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener("click", function() {
            menuToggle.classList.remove("open");
            navLinks.classList.remove("open");
        });
    }
}

// ===== عداد الأرقام =====
function initCounters() {
    var counters = [
        { el: document.getElementById("counter-foods"), target: 75 },
        { el: document.getElementById("counter-recipes"), target: 120 },
        { el: document.getElementById("counter-users"), target: 8500 }
    ];
    var started = false;

    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting && !started) {
                started = true;
                for (var j = 0; j < counters.length; j++) {
                    (function(c) {
                        var cur = 0;
                        var step = Math.ceil(c.target / 60);
                        var iv = setInterval(function() {
                            cur += step;
                            if (cur >= c.target) {
                                cur = c.target;
                                clearInterval(iv);
                            }
                            if (cur >= 1000) {
                                c.el.textContent = (cur / 1000).toFixed(1) + "K";
                            } else {
                                c.el.textContent = cur;
                            }
                        }, 30);
                    })(counters[j]);
                }
            }
        }
    }, { threshold: 0.3 });

    observer.observe(document.getElementById("hero"));
}

// ===== حاسبة السعرات =====
function initCalculator() {
    var genderBtns = document.querySelectorAll(".gender-btn");
    for (var i = 0; i < genderBtns.length; i++) {
        genderBtns[i].addEventListener("click", function() {
            var allBtns = document.querySelectorAll(".gender-btn");
            for (var j = 0; j < allBtns.length; j++) allBtns[j].classList.remove("active");
            this.classList.add("active");
            selectedGender = this.getAttribute("data-gender");
        });
    }

    var goalBtns = document.querySelectorAll(".goal-btn");
    for (var i = 0; i < goalBtns.length; i++) {
        goalBtns[i].addEventListener("click", function() {
            var allBtns = document.querySelectorAll(".goal-btn");
            for (var j = 0; j < allBtns.length; j++) allBtns[j].classList.remove("active");
            this.classList.add("active");
            selectedGoal = this.getAttribute("data-goal");
        });
    }

    document.getElementById("calcBtn").addEventListener("click", calculateAndPlan);
}

function calculateAndPlan() {
    var nameInput = document.getElementById("userName").value.trim();
    var name = nameInput || "رياضي";
    var age = parseFloat(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activity = parseFloat(document.getElementById("activity").value);

    if (!age || !weight || !height || age < 10 || weight < 30 || height < 100) {
        showToast("يرجى إدخال بيانات صحيحة", "fa-exclamation-triangle");
        return;
    }

    var bmr;
    if (selectedGender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var tdee = Math.round(bmr * activity);

    var targetCal, goalText, goalClass;
    if (selectedGoal === "lose") {
        targetCal = tdee - 500;
        goalText = "إنقاص الوزن";
        goalClass = "red";
    } else if (selectedGoal === "gain") {
        targetCal = tdee + 400;
        goalText = "زيادة الوزن";
        goalClass = "orange";
    } else {
        targetCal = tdee;
        goalText = "ثبات الوزن";
        goalClass = "";
    }
    targetCal = Math.max(1200, Math.round(targetCal));

    var protein = Math.round((targetCal * 0.30) / 4);
    var carbs = Math.round((targetCal * 0.40) / 4);
    var fat = Math.round((targetCal * 0.30) / 9);

    // عرض نتيجة الحساب
    var resultCard = document.getElementById("calcResult");
    resultCard.innerHTML =
        '<div class="calc-result">' +
            '<div style="margin-bottom:12px">' +
                '<span style="background:var(--accent-glow);color:var(--accent);padding:6px 16px;border-radius:20px;font-size:0.9rem;font-weight:600">' +
                    '<i class="fas fa-user"></i> ' + name +
                '</span>' +
            '</div>' +
            '<div class="result-bmr">' +
                '<p class="result-label">معدل الأيض الأساسي (BMR)</p>' +
                '<p class="result-value">' + Math.round(bmr) + ' <span class="result-unit">سعرة/يوم</span></p>' +
            '</div>' +
            '<div class="result-tdee">' +
                '<p class="result-label">احتياجك اليومي الكامل (TDEE)</p>' +
                '<p class="result-value orange">' + tdee + ' <span class="result-unit">سعرة/يوم</span></p>' +
            '</div>' +
            '<div class="result-target">' +
                '<p class="result-label">السعرات المستهدفة — ' + goalText + '</p>' +
                '<p class="result-value ' + goalClass + '">' + targetCal + ' <span class="result-unit">سعرة/يوم</span></p>' +
            '</div>' +
            '<div class="result-macros">' +
                '<div class="result-macro-item macro-protein"><strong>' + protein + 'جم</strong><span>بروتين</span></div>' +
                '<div class="result-macro-item macro-carbs"><strong>' + carbs + 'جم</strong><span>كربوهيدرات</span></div>' +
                '<div class="result-macro-item macro-fat"><strong>' + fat + 'جم</strong><span>دهون</span></div>' +
            '</div>' +
        '</div>';

    // عرض خطة الأكل
    renderMealPlan(name, targetCal, selectedGoal);

    // عرض خطة التمارين
    renderExercisePlan(name, selectedGoal);

    showToast("أهلاً " + name + "، تم إعداد خطتك بنجاح", "fa-check-circle");

    setTimeout(function() {
        document.getElementById("mealPlanSection").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
}

// ===== عرض خطة الأكل =====
function renderMealPlan(name, targetCal, goal) {
    var section = document.getElementById("mealPlanSection");
    var grid = document.getElementById("mealsSuggestGrid");
    var templates = mealTemplates[goal];

    document.getElementById("planUserName").textContent = name;

    // حساب مجموع السعرات في القالب
    var totalTemplateCal = 0;
    var keys = Object.keys(templates);
    for (var k = 0; k < keys.length; k++) {
        var meal = templates[keys[k]];
        for (var m = 0; m < meal.length; m++) {
            totalTemplateCal += meal[m].cal;
        }
    }

    var ratio = targetCal / Math.max(1, totalTemplateCal);

    var mealInfo = [
        { key: "breakfast", label: "الفطور", time: "7:00 - 8:00 ص", icon: "fa-sun", iconClass: "icon-breakfast" },
        { key: "snack1", label: "سناك صباحي", time: "10:30 - 11:00 ص", icon: "fa-cookie-bite", iconClass: "icon-snack" },
        { key: "lunch", label: "الغداء", time: "1:00 - 2:00 م", icon: "fa-cloud-sun", iconClass: "icon-lunch" },
        { key: "dinner", label: "العشاء", time: "7:00 - 8:00 م", icon: "fa-moon", iconClass: "icon-dinner" }
    ];

    var totalDayCal = 0, totalDayP = 0, totalDayC = 0, totalDayF = 0;
    var cardsHTML = "";

    for (var i = 0; i < mealInfo.length; i++) {
        var info = mealInfo[i];
        var items = templates[info.key];
        var mealCal = 0, mealP = 0, mealC = 0, mealF = 0;
        var itemsHTML = "";

        for (var j = 0; j < items.length; j++) {
            var item = items[j];
            var adjCal = Math.round(item.cal * ratio);
            var adjP = Math.round(item.p * ratio);
            var adjC = Math.round(item.c * ratio);
            var adjF = Math.round(item.f * ratio);
            mealCal += adjCal;
            mealP += adjP;
            mealC += adjC;
            mealF += adjF;

            itemsHTML +=
                '<div class="meal-suggest-item">' +
                    '<div>' +
                        '<span class="meal-suggest-item-name">' + item.name + '</span>' +
                        '<span class="meal-suggest-item-detail"> — ' + item.qty + '</span>' +
                    '</div>' +
                    '<span class="meal-suggest-item-cal">' + adjCal + '</span>' +
                '</div>';
        }

        totalDayCal += mealCal;
        totalDayP += mealP;
        totalDayC += mealC;
        totalDayF += mealF;

        cardsHTML +=
            '<div class="meal-suggest-card reveal">' +
                '<div class="meal-suggest-top">' +
                    '<div class="meal-suggest-icon ' + info.iconClass + '"><i class="fas ' + info.icon + '"></i></div>' +
                    '<div><h4>' + info.label + '</h4><span class="meal-time">' + info.time + '</span></div>' +
                    '<span class="meal-cal-badge">' + mealCal + ' سعرة</span>' +
                '</div>' +
                '<div class="meal-suggest-body">' +
                    itemsHTML +
                    '<div class="meal-suggest-macros">' +
                        '<div class="meal-suggest-macro sm-p"><strong>' + mealP + 'جم</strong><span>بروتين</span></div>' +
                        '<div class="meal-suggest-macro sm-c"><strong>' + mealC + 'جم</strong><span>كربوهيدرات</span></div>' +
                        '<div class="meal-suggest-macro sm-f"><strong>' + mealF + 'جم</strong><span>دهون</span></div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }

    grid.innerHTML = cardsHTML;

    document.getElementById("planCalSummary").textContent =
        "المجموع التقريبي: " + totalDayCal + " سعرة | بروتين: " + totalDayP + "جم | كربوهيدرات: " + totalDayC + "جم | دهون: " + totalDayF + "جم";

    section.style.display = "block";
    initRevealAnimations();
}

// ===== عرض خطة التمارين =====
function renderExercisePlan(name, goal) {
    var section = document.getElementById("exerciseSection");
    var grid = document.getElementById("exerciseGrid");
    var exercises = exerciseTemplates[goal];

    document.getElementById("exUserName").textContent = name;

    var goalLabels = { lose: "حرق دهون وتنحيف", maintain: "محافظة على اللياقة", gain: "بناء عضلات وقوة" };
    document.getElementById("exGoalSummary").textContent = "الهدف: " + goalLabels[goal];

    var typeMap = { cardio: "ex-type-cardio", strength: "ex-type-strength", flex: "ex-type-flex", hiit: "ex-type-hiit" };

    var cardsHTML = "";
    for (var i = 0; i < exercises.length; i++) {
        var ex = exercises[i];
        var typeClass = typeMap[ex.type] || "ex-type-strength";

        cardsHTML +=
            '<div class="exercise-card reveal">' +
                '<div class="exercise-card-top">' +
                    '<div class="exercise-type-icon ' + typeClass + '"><i class="fas ' + ex.icon + '"></i></div>' +
                    '<div><h4>' + ex.name + '</h4><span class="ex-dur">' + ex.duration + '</span></div>' +
                '</div>' +
                '<div class="exercise-stats">' +
                    '<div class="ex-stat"><strong>' + ex.burn + '</strong><span>سعرة محروقة</span></div>' +
                    '<div class="ex-stat"><strong>' + ex.sets + '</strong><span>مجموعات/تكرار</span></div>' +
                    '<div class="ex-stat"><strong>' + ex.rest + '</strong><span>راحة</span></div>' +
                '</div>' +
                '<p class="exercise-desc">' + ex.desc + '</p>' +
                '<div class="exercise-burn-badge"><i class="fas fa-fire"></i> ' + ex.burn + ' سعرة</div>' +
            '</div>';
    }

    grid.innerHTML = cardsHTML;
    section.style.display = "block";
    initRevealAnimations();
}

// ===== قاعدة الأطعمة =====
function initFoodDatabase() {
    renderFoodGrid(foodDatabase);
    document.getElementById("foodSearch").addEventListener("input", filterFoods);
    document.getElementById("foodCategory").addEventListener("change", filterFoods);
}

function filterFoods() {
    var query = document.getElementById("foodSearch").value;
    var category = document.getElementById("foodCategory").value;
    var filtered = [];
    for (var i = 0; i < foodDatabase.length; i++) {
        var f = foodDatabase[i];
        var matchName = f.name.indexOf(query) !== -1 || f.category.indexOf(query) !== -1;
        var matchCat = category === "all" || f.category === category;
        if (matchName && matchCat) filtered.push(f);
    }
    renderFoodGrid(filtered);
}

function renderFoodGrid(foods) {
    var grid = document.getElementById("foodGrid");
    if (foods.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--fg-muted);"><i class="fas fa-search" style="font-size:3rem;opacity:0.2;display:block;margin-bottom:16px;"></i><p>لم يتم العثور على نتائج</p></div>';
        return;
    }
    var html = "";
    for (var i = 0; i < foods.length; i++) {
        var f = foods[i];
        html +=
            '<div class="food-card reveal">' +
                '<div class="food-card-header">' +
                    '<span class="food-card-name">' + f.name + '</span>' +
                    '<span class="food-card-category">' + f.category + '</span>' +
                '</div>' +
                '<div class="food-card-cal"><strong>' + f.cal + '</strong><span>سعرة / ' + f.per + '</span></div>' +
                '<div class="food-card-macros">' +
                    '<div class="food-macro fm-protein"><strong>' + f.protein + '</strong><span>بروتين</span></div>' +
                    '<div class="food-macro fm-carbs"><strong>' + f.carbs + '</strong><span>كربوهيدرات</span></div>' +
                    '<div class="food-macro fm-fat"><strong>' + f.fat + '</strong><span>دهون</span></div>' +
                '</div>' +
            '</div>';
    }
    grid.innerHTML = html;
    initRevealAnimations();
}

// ===== أنيميشن الظهور =====
function initRevealAnimations() {
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add("visible");
            }
        }
    }, { threshold: 0.1 });

    var elements = document.querySelectorAll(".reveal:not(.visible)");
    for (var i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
    }

    var allCards = document.querySelectorAll(".tip-card, .food-card, .meal-suggest-card, .exercise-card, .calc-form-card, .calc-result-card");
    for (var i = 0; i < allCards.length; i++) {
        if (!allCards[i].classList.contains("reveal")) {
            allCards[i].classList.add("reveal");
        }
        observer.observe(allCards[i]);
    }
}

// ===== التوست =====
function showToast(message, icon) {
    icon = icon || "fa-info-circle";
    var container = document.getElementById("toastContainer");
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + message;
    container.appendChild(toast);
    setTimeout(function() {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}