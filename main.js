// Creo la variabile del contenitore dove metterò i box
let container = document.getElementById("contenitoreBox");


for (let i = 1; i <= 100; i++) {

    // Divisibile sia per 3 che per 5 
    if (i % 3 == 0 && i % 5 == 0) {
        // Stampo il box`
        container.innerHTML += `
        <div class="col"><div id="fizzBuzz" class="box d-flex justify-content-center align-items-center mb-5">FizzBuzz</div></div>
        `
    }
    // Divisibile solo per 3 
    else if (i % 3 == 0) {
        container.innerHTML += `
        <div class="col"><div id="fizz" class="box d-flex justify-content-center align-items-center mb-5">Fizz</div></div>
        `
    }
    // Divisibile solo per 5
    else if (i % 5 == 0) {
        container.innerHTML += `
        <div class="col"><div id="buzz" class="box d-flex justify-content-center align-items-center mb-5">Buzz</div></div>
        `
    } else {
        container.innerHTML += `
        <div class="col"><div id="n" class="box d-flex justify-content-center align-items-center mb-5">${i}</div></div>
        `
    }
}