function updateCart(){
    var subtotal_price = 0.0;
    let item_array = [];

    var i;
    var arrayLength = Number(localStorage.getItem("itemCount"));
    for(i = 1; i <= arrayLength; i++){
        var item_obj = JSON.parse(localStorage.getItem("item" + i));
        item_array.push(item_obj);
    }
    
    //console.log(item_array);
    
    //<div id="bag_body_grid">
    var grid = document.getElementById("bag_body_grid");
    
    //<ul id="bag_item_nq_list">
    var nq_ul = document.getElementById("bag_item_nq_list");
    
    //<ul id="bag_item_price_list">
    var price_ul = document.getElementById("bag_item_price_list");
    
    var j;
    for(j = 0; j < arrayLength; j++){
        var current_item = item_array[j];
    
        //<div class="bag_item_panel_info">
        var panel_info_1 = document.createElement('p');
        panel_info_1.classList.add("item_title_quantity");
        panel_info_1.appendChild(document.createTextNode(current_item.bun + " x" + current_item.quantity));
        var panel_info_2 = document.createElement('p');
        panel_info_2.classList.add("item_total_price");
        panel_info_2.appendChild(document.createTextNode("Price: $" + current_item.price));
        var panel_delete = document.createElement('button');
        panel_delete.classList.add("delete_item_button");
        panel_delete.value = j;
        panel_delete.appendChild(document.createTextNode("DELETE"));
    
        var panel_info = document.createElement('div');
        panel_info.classList.add("bag_item_panel_info");
        panel_info.appendChild(panel_info_1);
        panel_info.appendChild(panel_info_2);
        panel_info.appendChild(panel_delete);
    
        //<div class="bag_item_panel">
        var panel_image = document.createElement('img');
        var key = current_item.picture;
        if(key == 11){ panel_image.src = "Images/original_1_none.svg"; }
        if(key == 12){ panel_image.src = "Images/original_1_sugar.svg"; }
        if(key == 13){ panel_image.src = "Images/original_1_vanilla.svg"; }
        if(key == 14){ panel_image.src = "Images/original_1_choco.svg"; }
    
        if(key == 21){ panel_image.src = "Images/original_3_none.svg"; }
        if(key == 22){ panel_image.src = "Images/original_3_sugar.svg"; }
        if(key == 23){ panel_image.src = "Images/original_3_vanilla.svg"; }
        if(key == 24){ panel_image.src = "Images/original_3_choco.svg"; }
    
        if(key == 31){ panel_image.src = "Images/original_6_none.svg"; }
        if(key == 32){ panel_image.src = "Images/original_6_sugar.svg"; }
        if(key == 33){ panel_image.src = "Images/original_6_vanilla.svg"; }
        if(key == 34){ panel_image.src = "Images/original_6_choco.svg"; }
    
        if(key == 41){ panel_image.src = "Images/original_12_none.svg"; }
        if(key == 42){ panel_image.src = "Images/original_12_sugar.svg"; }
        if(key == 43){ panel_image.src = "Images/original_12_vanilla.svg"; }
        if(key == 44){ panel_image.src = "Images/original_12_choco.svg"; }
    
        var panel = document.createElement('div');
        panel.classList.add("bag_item_panel");
        panel.appendChild(panel_image);
        panel.appendChild(panel_info);
        
        grid.appendChild(panel);
        
        var nq_li = document.createElement('li');
        nq_li.appendChild(document.createTextNode(current_item.bun + " x" + current_item.quantity));
        nq_ul.appendChild(nq_li);
        
        var price_li = document.createElement('li');
        price_li.appendChild(document.createTextNode("$" + current_item.price));
        price_ul.appendChild(price_li);
        
        subtotal_price += current_item.price;
    }
    
    var subtotal_price_label = document.getElementById("summary_subtotal_price");
    subtotal_price_label.innerText = "$" + subtotal_price;

    document.getElementById("nav_button_bag_count").innerText = Number(localStorage.getItem("itemCount"));

    
    setDeleteBtnListeners();
}

function setDeleteBtnListeners(){
    var deleteBtns = document.getElementsByClassName("delete_item_button");
    for(var i = 0; i < deleteBtns.length; i++){
        var btn = deleteBtns[i];
        btn.addEventListener('click', function(event){
            removeItem(event);
        });
    }
}

function removeItem(event){
    var btnClicked = event.target;
    var index = Number(btnClicked.value);

    //recreate item_array
    let item_array = [];
    var arrayLength = Number(localStorage.getItem("itemCount"));
    for(var i = 1; i <= arrayLength; i++){
        var item_obj = JSON.parse(localStorage.getItem("item" + i));
        item_array.push(item_obj);
    }

    item_array.splice(index, 1);
    
    console.log(item_array);
    
    localStorage.clear();
    localStorage.setItem("itemCount", "0");
    
    var itemCount = 0;

    for(var l = 0; l < item_array.length; l++){
        var bunName = item_array[l].bun;
        var packValue = item_array[l].pack;
        var glazeValue = item_array[l].glaze;
        var key = item_array[l].picture;
        var totalPrice = item_array[l].price;
        var productCount = item_array[l].quantity;
        
        let itemObj = {
            bun: bunName,
            pack: packValue,
            glaze: glazeValue,
            picture: key,
            price: totalPrice,
            quantity: productCount
        };
        
        let itemObj_serial = JSON.stringify(itemObj);
        itemCount += 1;
        var itemKey = "item" + (itemCount);
        localStorage.setItem(itemKey, itemObj_serial);
    }
    localStorage.setItem("itemCount", itemCount);
    
    //clear div
    var grid_node = document.getElementById("bag_body_grid");
    grid_node.textContent = '';

    var nq_node = document.getElementById("bag_item_nq_list");
    nq_node.textContent = '';

    var price_node = document.getElementById("bag_item_price_list");
    price_node.textContent = '';
    
    item_array = [];

    document.getElementById("nav_button_bag_count").innerText = itemCount;
    
    //updateCart
    updateCart();
}

document.getElementById("check_out_button").addEventListener("click", function() {
    localStorage.clear();
    localStorage.setItem("itemCount", "0");
    
    var grid_node = document.getElementById("bag_body_grid");
    grid_node.textContent = '';

    var nq_node = document.getElementById("bag_item_nq_list");
    nq_node.textContent = '';

    var price_node = document.getElementById("bag_item_price_list");
    price_node.textContent = '';

    var subtotal_node = document.getElementById("summary_subtotal_price");
    subtotal_node.textContent = '$0';

    document.getElementById("nav_button_bag_count").innerText = Number(localStorage.getItem("itemCount"));
});

document.getElementById("nav_button_shop").addEventListener("click", function() {
    location.replace("browse.html")
    //console.log("nav_shop_click");
});