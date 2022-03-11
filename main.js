let container = document.getElementById("contenitoreBox");

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        container.innerHTML += `
        <div class="col"><div class="box d-flex justify-content-center align-items-center mb-5">FizzBuzz</div></div>
        `
        // console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        container.innerHTML += `
        <div class="col"><div class="box d-flex justify-content-center align-items-center mb-5">Fizz</div></div>
        `
        // console.log("Fizz")
    } else if (i % 5 == 0) {
        container.innerHTML += `
        <div class="col"><div class="box d-flex justify-content-center align-items-center mb-5">Buzz</div></div>
        `
        // console.log("Buzz");
    } else {
        container.innerHTML += `
        <div class="col"><div class="box d-flex justify-content-center align-items-center mb-5">${i}</div></div>
        `
        // console.log(i);
    }
}