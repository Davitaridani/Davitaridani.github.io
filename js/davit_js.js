// untuk navbar 
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// untuk Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 450,
    duration: 1200,
    internal: 3000
});

// untuk parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// Scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    throttle: 100,
    scrollOffset: 30,


});