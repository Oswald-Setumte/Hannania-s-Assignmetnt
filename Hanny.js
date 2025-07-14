let breakfast = document.getElementById("time-breakfast")
let lunch = document.getElementById("time-lunch")
let dinner = document.getElementById("time-dinner")

//breakfast On the Menu
let breakfastHouse = document.getElementById("breakfast")
let chooseBreakfast = document.getElementById("breakfast-ip")
let quantityBreakfast = document.getElementById("breakfast-quantity")
let breakfastSay = document.getElementById('breakfastTotal')

//lunch On the Menu
let lunchHouse = document.getElementById("lunch")
let chooseLunch= document.getElementById("lunch-ip")
let quantityLunch = document.getElementById("lunch-quantity")
let LunchSay = document.getElementById('lunchTotal')

//dinner On the Menu
let dinnerHouse = document.getElementById("dinner")
let chooseDinner = document.getElementById("dinner-ip")
let quantityDinner = document.getElementById("dinner-quantity")
let DinnerSay = document.getElementById('dinnerTotal')
 
let meal = [{
    food1 : "Eggs Benedict",
    food2 : "Avocado Toast",
    food3: "Yougurt Parfait",
    price1: 8.99,
    price2: 6.99,
    price3: 5.99
}, {
    food1 : "Grilled Chicken Sandich",
    food2 : "Caesar Salad",
    food3: "Turkey Wrap",
    price1: 9.99,
    price2: 8.99,
    price3: 7.99
    }, {
    food1 : "Baked Salmon",
    food2 : "Steak",
    food3: "Vegetarian Wrap",
    price1: 14.99,
    price2: 19.99,
    price3: 12.99
}]

function Submit() {
    let checkBreakfast = breakfast.checked
    let checkLunch = lunch.checked
    let checkDinner = dinner.checked

    if (checkBreakfast) {
        breakfastHouse.style.display = "inline"
        morning()
    
    } else if(checkLunch){
        lunchHouse.style.display = "inline"
        afternoon()
        
    } else if (checkDinner) {
        dinnerHouse.style.display = "inline"
        evening()
    }
}

function morning() {
    if (chooseBreakfast.value === meal[0].food1) {
        let total = meal[0].price1 * quantityBreakfast.value
        breakfastSay.textContent = `Please Payment price is $ ${total}` 
        
    } else if (chooseBreakfast.value === meal[0].food2) {
        let total = meal[0].price2 * quantityBreakfast.value
        breakfastSay.textContent = `Please Payment price is $ ${total}`  
        
    } else if (chooseBreakfast.value === meal[0].food3) {
        let total = meal[0].price3 * quantityBreakfast.value
        breakfastSay.textContent = `Please Payment price is $ ${total}`  
       
    }
}
   
function afternoon() {
    if (chooseLunch.value === meal[1].food1) {
        let total = meal[1].price1 * quantityLunch.value
        LunchSay.textContent = `Please Payment price is $ ${total}` 
        
    } else if (chooseLunch.value === meal[1].food2) {
        let total = meal[1].price2 * quantityLunch.value
        LunchSay.textContent = `Please Payment price is $ ${total}`  
        
    } else if (chooseLunch.value === meal[1].food3) {
        let total = meal[1].price3 * quantityLunch.value
        LunchSay.textContent = `Please Payment price is $ ${total}`  

       
    }
}
function evening() {
    if (chooseDinner.value === meal[2].food1) {
        let total = meal[2].price1 * quantityDinner.value
        DinnerSay.textContent = `Please Payment price is $ ${total}`
        
    } else if (chooseDinner.value === meal[2].food2) {
        let total = meal[2].price2 * quantityDinner.value
        DinnerSay.textContent = `Please Payment price is $ ${total}`
        
    } else if (chooseDinner.value === meal[2].food3) {
        let total = meal[2].price3 * quantityDinner.value
        DinnerSay.textContent = `Please Payment price is $ ${total}`
       
    }
}