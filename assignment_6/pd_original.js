var key = 11;
var key1 = 10;
var key2 = 1;

//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var productCount = 1;
//taking price value in variable
var price = document.getElementById("pd_price").innerText;

//price calculation function
function priceTotal() {
    var total = Math.round(((productCount * price) + Number.EPSILON) * 100) / 100;
    document.getElementById("pd_price").innerText = total
}
 
//quantity button plus
document.querySelector(".plus-btn").addEventListener("click", function() {
    productCount = document.getElementById("pd_productCount").value;
    productCount++;
    document.getElementById("pd_productCount").value = productCount;

    if (productCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    priceTotal()
})

//quantity button minus
document.querySelector(".minus-btn").addEventListener("click", function() {
    productCount = document.getElementById("pd_productCount").value;
    productCount--;
    document.getElementById("pd_productCount").value = productCount

    if (productCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }

    priceTotal()
})

document.getElementById("product_detail_add_bag_button").addEventListener("click", function() {
    //append to obj array
	console.log("add_bag_click");
	
	var packValue;
	if(key1 == 10){ packValue = "1_pack" }
	else if(key1 == 20){ packValue = "3_pack" }
	else if(key1 == 30){ packValue = "6_pack" }
	else if(key1 == 40){ packValue = "12_pack" }

	var glazeValue;
	if(key2 == 1){ glazeValue = "none" }
	else if(key2 == 2){ glazeValue = "sugar" }
	else if(key2 == 3){ glazeValue = "vanilla" }
	else if(key2 == 4){ glazeValue = "choco" }

	let itemObj = {
		bun: "original",
		pack: packValue,
		glaze: glazeValue,
		quantity: productCount
	};

	let itemObj_serial = JSON.stringify(itemObj);

	console.log(localStorage.getItem("itemCount"));

	var itemCount = Number(localStorage.getItem("itemCount"));
	itemCount += 1;
	var itemKey = "item" + (itemCount);
	localStorage.setItem(itemKey, itemObj_serial);
	localStorage.setItem("itemCount", itemCount)

	document.getElementById("nav_button_bag_count").innerText = itemCount;
});

document.getElementById("nav_button_shop").addEventListener("click", function() {
    location.replace("browse.html")
    console.log(nav_shop_click);
});

document.getElementById("nav_button_bag").addEventListener("click", function() {
    location.replace("mybag.html")
    console.log(nav_bag_click);
});

function swapImage(image) {
    var pack;
	var glaze;
	
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