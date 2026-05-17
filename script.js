// Welcome message
console.log("External JavaScript Connected");

// Alert when order form is submitted
const form = document.getElementById("orderForm");

if(form){
    form.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Your order has been placed successfully!");
    });
}

// Change background color slightly when page loads
document.body.style.transition = "0.5s";