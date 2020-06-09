const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector('.scrollToTop');
window.addEventListener("scroll", function() {
    let height = headerEl.getBoundingClientRect().height;
    if (window.pageYOffset - height > 700) {
        if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add('sticky');
        }
    } else {
        headerEl.classList.remove('sticky');
    }

    if (window.pageYOffset > 2000) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";

    }

})


const burger = document.querySelector('header .burger');
const nav = document.querySelector('header nav');
burger.addEventListener("click", function() {

    nav.classList.toggle("active");


})




const glide = new Glide('.glide');
const captionsEl = document.querySelectorAll('.slide-caption');

// /mount.after加载后  run.after轮播后
glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEl[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: 'linear',
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0]
    });
});

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption>*").forEach(el => {
        el.style.opacity = 0;
    });
});



glide.mount();


const isotope = new Isotope(".cases", {
    layoutMode: "fitRows",
    itemSelector: ".case-item",
});

const filterBtens = document.querySelector(".filter-btns");

filterBtens.addEventListener("click", e => {
    let { target } = e;
    const filterOption = target.getAttribute("data-filter");
    console.log(filterOption);
    if (filterOption) {
        document.querySelectorAll(".filter-btn.active").forEach(btn => {
            btn.classList.remove("active");
        });
        target.classList.add("active");
        isotope.arrange({ filter: filterOption });
    }
})


const option = {
    delay: 300,

    duration: 500,
    easing: "ease-in-out",
    origin: "buttom",
    distance: "50px",
    // 从下到上有50px的移动

}
ScrollReveal().reveal(".feature", {...option, interval: 300 });
ScrollReveal().reveal(".service-item", {...option, interval: 300 });
ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: ".data-section .num",
            innerHTML: el => {
                return [0, el.innerHTML]
            },
            duration: 2000,
            round: 1, //按1增长
            easing: "easeInExpo"

        });



    }
});

// const scroll = new SmoothScroll("nav a[href*='#'],.scrollToTop a[href*='#']", {
//     header: header,
//     offset: 80,
// })

const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]', {
    // 自动计算固定导航的高度
    header: "header",
    // 偏移80象素
    offset: 80
});

// 探索更多按钮的处理函数
const exploreBtnEl = document.querySelectorAll(".explore-btn");

exploreBtnEl.forEach(el => {
    el.addEventListener("click", () => {
        scroll.animateScroll(document.querySelector("#about-us"));
    })
})