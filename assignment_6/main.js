//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var productCount;
//taking price value in variable
var price = document.getElementById("pd_price").innerText;

//price calculation function
function priceTotal() {
    var total = Math.round(((productCount * price) + Number.EPSILON) * 100) / 100;
    document.getElementById("pd_price").innerText = total
}
 
//quantity button plus
document.querySelector(".plus-btn").addEventListener("click", function() {
    //console.log("click");

    //getting value of input
    productCount = document.getElementById("pd_productCount").value;

    //input value increment by 1
    productCount++;

    //setting increment input value
    document.getElementById("pd_productCount").value = productCount;

    if (productCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    //calling price function
    priceTotal()
})

//quantity button minus
document.querySelector(".minus-btn").addEventListener("click", function() {
    //getting value of input
    productCount = document.getElementById("pd_productCount").value;

    //input value increment by 1
    productCount--;

    //setting increment input value
    document.getElementById("pd_productCount").value = productCount

    if (productCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }

    //calling price function
    priceTotal()
})

document.getElementById("nav_button_shop").addEventListener("click", function() {
    location.replace("browse.html")
});

document.getElementById("nav_button_bag").addEventListener("click", function() {
    location.replace("mybag.html")
});

document.getElementById("product_detail_add_bag_button").addEventListener("click", function() {
    //append to obj array
});

function swapImage(image) {
    var pack;
	var glaze;
	var key = 11;
	var key1 = 10;
	var key2 = 1;
	
	for (var i = 1; i <= 4; i++) {
		pack = document.getElementById("pack" + i);
		
		if (pack.checked) {
			key1 = parseInt(pack.value);
		}
	}
	
	for (var j = 1; j <= 4; j++) {
		glaze = document.getElementById("glaze" + j);
		
		if (glaze.checked) {
			key2 = parseFloat(glaze.value);
		}
	}
	
    key = key1 + key2;
    
    if(key == 11){ showImage("Images/original_1_none.svg"); }
	if(key == 12){ showImage("Images/original_1_sugar.svg"); }
	if(key == 13){ showImage("Images/original_1_vanilla.svg"); }
	if(key == 14){ showImage("Images/original_1_choco.svg"); }
	
	if(key == 21){ showImage("Images/original_3_none.svg"); }
	if(key == 22){ showImage("Images/original_3_sugar.svg"); }
	if(key == 23){ showImage("Images/original_3_vanilla.svg"); }
	if(key == 24){ showImage("Images/original_3_choco.svg"); }
	
	if(key == 31){ showImage("Images/original_6_none.svg"); }
	if(key == 32){ showImage("Images/original_6_sugar.svg"); }
	if(key == 33){ showImage("Images/original_6_vanilla.svg"); }
	if(key == 34){ showImage("Images/original_6_choco.svg"); }
	
	if(key == 41){ showImage("Images/original_12_none.svg"); }
	if(key == 42){ showImage("Images/original_12_sugar.svg"); }
	if(key == 43){ showImage("Images/original_12_vanilla.svg"); }
	if(key == 44){ showImage("Images/original_12_choco.svg"); }
}

function showImage(srcText){
    document.getElementById("product_image").src = srcText;
}