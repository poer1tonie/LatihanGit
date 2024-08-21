// Function to display an alert message
function showAlert() {
    alert('Hello World!');
}

// Change the heading text after the page is loaded
window.onload = function() {
    // Update heading text
    document.querySelector('h1').innerText = "Latihan JavaScript Selesai";
    
    // Deklarasi variabel
    let name = "John";
    const age = 30;

    // Deklarasi array
    let fruits = ["Apple", "Banana", "Mango"];

    // Deklarasi objek
    let person = {firstName: "John", lastName: "Doe", age: 30};

    // Menampilkan informasi di dalam div dengan ID "output"
    let outputDiv = document.getElementById('output');
    
    // Menampilkan nama dan umur
    let outputContent = `<p>Name: ${name}</p><p>Age: ${age}</p>`;
    
    // Menampilkan buah-buahan
    outputContent += '<p>Fruits:</p><ul>';
    for (let i = 0; i < fruits.length; i++) {
        outputContent += `<li>${fruits[i]}</li>`;
    }
    outputContent += '</ul>';

    // Menampilkan informasi dari objek
    outputContent += `<p>Full Name: ${person.firstName} ${person.lastName}</p>`;

    // Memasukkan konten ke dalam elemen dengan ID "output"
    outputDiv.innerHTML = outputContent;
    displayResults();
    displayArray();
};

// Function to check the value from input and display messages
function checkValue() {
    // Membaca nilai dari input
    let userInput = document.getElementById('userInput').value;
    let outputDiv = document.getElementById('output');
    
    // Mengubah nilai input menjadi angka
    let number = parseInt(userInput, 10);
    let outputContent = '';

    // Memeriksa nilai dengan if...else
    if (number > 10) {
        outputContent += '<p>Nilai lebih besar dari 10</p>';
    } else if (number === 10) {
        outputContent += '<p>Nilai sama dengan 10</p>';
    } else if (number < 10) {
        outputContent += '<p>Nilai kurang dari 10</p>';
    } else {
        outputContent += '<p>Input tidak valid</p>';
    }

    // Menampilkan angka dari 1 hingga nilai input
    if (!isNaN(number) && number > 0) {
        outputContent += '<p>Angka dari 1 hingga ' + number + ':</p><ul>';
        for (let i = 1; i <= number; i++) {
            outputContent += `<li>${i}</li>`;
        }
        outputContent += '</ul>';
    }

}
// Function to greet a person with their name
function greet(name) {
    return `Hello, ${name}`;
}

// Function to calculate the square of a number
function calculateSquare(number) {
    return number * number;
}

// Arrow function to add two numbers
const addNumbers = (a, b) => a + b;

// Function to display results
function displayResults() {
    let outputDiv = document.getElementById('output');
    
    // Menampilkan hasil fungsi greet
    let greetResults = `
        <p>${greet("Alice")}</p>
        <p>${greet("Bob")}</p>
        <p>${greet("Charlie")}</p>
    `;
    
    // Menampilkan hasil fungsi calculateSquare
    let squareResults = `
        <p>Square of 2: ${calculateSquare(2)}</p>
        <p>Square of 5: ${calculateSquare(5)}</p>
        <p>Square of 10: ${calculateSquare(10)}</p>
    `;
    
    // Menampilkan hasil fungsi addNumbers
    let addResults = `
        <p>Sum of 5 and 3: ${addNumbers(5, 3)}</p>
        <p>Sum of 10 and 20: ${addNumbers(10, 20)}</p>
        <p>Sum of 7 and 14: ${addNumbers(7, 14)}</p>
    `;

    // Memasukkan semua hasil ke dalam elemen dengan ID "output"
    outputDiv.innerHTML += '<h2>Results of Functions:</h2>' + greetResults + squareResults + addResults;
}
// Function to display results from functions
function displayArray() {
    let outputDiv = document.getElementById('output');
    
    // Manipulasi Array
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David");
    let studentsOutput = '<p>Students:</p><ul>';
    students.forEach(student => {
        studentsOutput += `<li>${student}</li>`;
    });
    studentsOutput += '</ul>';

    // Manipulasi Objek
    let car = {brand: "Toyota", model: "Corolla", year: 2020};
    let carOutput = '<p>Car Details:</p>';
    for (let property in car) {
        carOutput += `<p>${property}: ${car[property]}</p>`;
    }

    // Array Objek
    let cars = [
        {brand: "Toyota", model: "Corolla", year: 2020},
        {brand: "Honda", model: "Civic", year: 2021},
        {brand: "Ford", model: "Focus", year: 2019}
    ];
    let carsOutput = '<p>Car List:</p>';
    cars.forEach(car => {
        carsOutput += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
    });

    // Memasukkan semua hasil ke dalam elemen dengan ID "output"
    outputDiv.innerHTML += '<h2>Array and Object Manipulation:</h2>' + studentsOutput + carOutput + carsOutput;
}