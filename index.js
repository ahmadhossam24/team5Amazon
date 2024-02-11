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



// Get the <ul> element
const menuList = document.getElementById('menuList');
// Get the <div> element containing the content to be changed
const contentDiv = document.getElementById('contentDiv');
// Get the paragraph inside the content <div>
const contentText = document.getElementById('contentText');

// Add event listener to the <ul> element
menuList.addEventListener('mouseover', function(event) {
    // Check if the hovered element is an <a> tag
    if (event.target.tagName === 'A') {
        // Get the text content of the hovered <a> tag
        const newText = event.target.textContent;
        // Change the text content of the paragraph inside the content <div>
        contentText.textContent = newText;
    }
});
