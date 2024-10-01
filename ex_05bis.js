function getBasketContent(selectedCount) {
    const fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"];
    
    if (selectedCount > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return [];
    } else {
        console.log(`${selectedCount} fruit(s) selected`);
        return fruits.slice(0, selectedCount);
    }
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
    const fruits = getBasketContent(80); // Vous pouvez changer la valeur ici pour tester différentes quantités
    showMyBasket(fruits);
}
