document.getElementById("nav_button_bag_count").innerText = localStorage.length;

document.getElementById("nav_button_shop").addEventListener("click", function() {
    location.replace("browse.html")
    console.log("nav_shop_click");
});

document.getElementById("nav_button_bag").addEventListener("click", function() {
    location.replace("mybag.html")
    console.log("nav_bag_click");
});
