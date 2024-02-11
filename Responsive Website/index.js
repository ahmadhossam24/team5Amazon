const res = document.querySelector('.navbar-collapse');
const res2 = document.querySelector('.navbar-toggler');

const toggleNavbar = () => {
    if (window.innerWidth >= 992) {
        res.classList.remove("show");
    }
};

res2.addEventListener("click", () => {
    res.classList.toggle("show");
});

window.addEventListener("resize", toggleNavbar);

toggleNavbar();