// Creo la variabile del contenitore dove metterò i box
let container = document.getElementById("contenitoreBox");

// Variabile che mi permette di cambiare tutti gli Id
let x;

for (let i = 1; i <= 100; i++) {

    // Trasformo il numero i in una stringa
    x = i.toString();

    // Divisibile sia per 3 che per 5 
    if (i % 3 == 0 && i % 5 == 0) {
        // Stampo il box
        container.innerHTML += `
        <div class="col"><div id="fizzBuzz${x}" class="box d-flex justify-content-center align-items-center mb-5">FizzBuzz</div></div>
        `

        // Do il background al box utlizzando un Id[i] diverso ogni volta
        document.getElementById(`fizzBuzz${x}`).style.backgroundColor = "#f0466f";
    }
    // Divisibile solo per 3 
    else if (i % 3 == 0) {
        container.innerHTML += `
        <div class="col"><div id="fizz${x}" class="box d-flex justify-content-center align-items-center mb-5">Fizz</div></div>
        `
        document.getElementById(`fizz${x}`).style.backgroundColor = "#0bd6a1";
    }
    // Divisibile solo per 5
    else if (i % 5 == 0) {
        container.innerHTML += `
        <div class="col"><div id="buzz${x}" class="box d-flex justify-content-center align-items-center mb-5">Buzz</div></div>
        `
        document.getElementById(`buzz${x}`).style.backgroundColor = "#ffd166";
    } else {
        container.innerHTML += `
        <div class="col"><div id="n${x}" class="box d-flex justify-content-center align-items-center mb-5">${i}</div></div>
        `
        document.getElementById(`n${x}`).style.backgroundColor = "#1389b2";
    }
}