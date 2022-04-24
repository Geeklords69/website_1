
const products= document.querySelector(".productholder");


function createcard([img,product,category,brandname,rating,price,offer]) {

    let code = `
    <div class = "card" >
               <img src="${img}" height="400" width="280" alt="${product}">
               <div class="cardtext">
                   <p class="categorytext">${category}</p>
                   <h2 class="brandtext">${brandname}</h2>
                   <h5>${rating}</h5>
                   <p class="pricetext">${price}</p>
                   <p class="offertext">${offer}</p>
               </div>
            </div>

    `;
    products.innerHTML+=code;
}


let item1 = ["images/products/scrunchies1.jpeg",
			"Scrunchies",
			"scrunchies",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 200",
			"50% off"];

let item2 = ["images/products/scrunchies2.jpeg",
			"Scrunhies",
			"scrunchies",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 250",
			"20% off"];

let item3 = ["images/products/scrunchies3.jpeg",
			"Scrunchies",
			"scrunchies",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 270",
			"24% off"];

let item4 = ["images/products/scrunchies4.jpeg",
			"Scrunchies",
			"scrunchies",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 250",
			"20% off"];

let item5 = ["images/products/scrunchies5.jpeg",
			"Scrunchies",
			"scrunchies",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 150",
			"10% off"];

let item6 = ["images/products/babyoutfit1.jpeg",
			"Baby Outfit",
			"Baby Outfit",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 725",
			"7% off"];
let item7 = ["images/products/babyoutfit2.jpeg",
			"Baby Outfit",
			"Baby Outfit",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 800",
			"23% off"];
let item8 = ["images/products/babyoutfit3.jpeg",
			"Baby Outfit",
			"Baby Outfit",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 620",
			"17% off"];
let item9 = ["images/products/babyoutfit4.jpeg",
			"Baby Outfit",
			"Baby Outfit",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 770",
			"15% off"];
let item10 = ["images/products/babyoutfit5.jpeg",
			"Baby Outfit",
			"Baby Outfit",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 815",
			"20% off"];


let item11 = ["images/products/saree1.jpeg",
			"Sarees",
			"Sarees",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 1150",
			"30% off"];
let item12 = ["images/products/saree2.jpeg",
			"Sarees",
			"Sarees",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 2120",
			"5% off"];
let item13 = ["images/products/saree3.jpeg",
			"Sarees",
			"Sarees",
			"Dreams of Fashions",
			"⭐⭐⭐⭐",
			"₹ 2530",
			"21% off"];
let item14 = ["images/products/saree4.jpeg",
			"Sarees",
			"Sarees",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 1320",
			"24% off"];
let item15 = ["images/products/saree5.jpeg",
			"Sarees",
			"Sarees",
			"Dreams of Fashions",
			"⭐⭐⭐⭐⭐",
			"₹ 1770",
             "25% off"];


createcard(item1);
createcard(item2);
createcard(item3);
createcard(item4);
createcard(item5);
createcard(item6);
createcard(item7);
createcard(item8);
createcard(item9);
createcard(item10);
createcard(item11);
createcard(item12);
createcard(item13);
createcard(item14);
createcard(item15);
