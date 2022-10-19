import { menuArray } from "./data.js";

const renderOrderDiv = document.getElementById("renderOrderSummary");
function renderMenuItem() {
	let renderMenu = "";
	for (let menuItem of menuArray) {
		renderMenu += `
        <div class="single-menu">
                <img class="menu-img" src="${menuItem.emoji}" alt="${menuItem.name}">
                <div class="menu-details col-big">
                    <h3>${menuItem.name}</h3>
                    <p>${menuItem.ingredients}</p>
                    <span id="price">$${menuItem.price}</span>
                </div>
                <span title="Add to Basket" class="add-basket" id="add-basket-${menuItem.id}">+</span>
            </div>
        `;
	}
	return renderMenu;
}

function renderInWeb() {
	const renderDiv = document.getElementById("renderMenuList");
	renderDiv.innerHTML = renderMenuItem();
}
renderInWeb();



for(let menuItem of menuArray) {
    let addBasket = document.getElementById(`add-basket-${menuItem.id}`);
    addBasket.addEventListener("click", function (e) {
        renderOrderDiv.innerHTML += `
        <div class="complete-order ">
        <h3 class="order-summary">Order Summary</h3>
        <div class="order-item">
            <div class="single-order">
                <h4> ${menuItem.name}<span>remove</span></h4>
                <p>$${menuItem.price}</p>
            </div>
        </div>
        <div class="total-price">
            <h4>Total Price</h4>
            <p>$00</p>
        </div>
        <div class="completeorder-btn">
            <button id="complete-btn">Complete order</button>
        </div>
        </div>
        `;

    });
}


