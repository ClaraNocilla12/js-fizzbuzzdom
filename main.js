let i;

let numeri;



    

for (i = 0; i < 100; i++) {
        numeri=i+1;
       console.log(numeri);

    if (numeri % 3 == 0 && numeri % 5 == 0) {
        document.getElementById("numeri").innerHTML += `<div class="col p-3 text-center fs-5">
    <div class=" py-4 my_bg_red"> FizzBuzz </div>`;
    } else if (numeri % 5 == 0) {
        document.getElementById("numeri").innerHTML += `<div class="col p-3 text-center fs-5">
    <div class=" py-4 my_bg_orange"> Buzz </div>`;
    } else if (numeri % 3 == 0 ){
        document.getElementById("numeri").innerHTML += `<div class="col p-3 text-center fs-5">
    <div class=" py-4 my_bg_green"> Fizz </div>`;
    }
    else{
    document.getElementById("numeri").innerHTML += `<div class="col p-3 text-center fs-5">
    <div class=" py-4 my_bg_blue"> ${numeri} </div>
    </div>`;
 }
    
}