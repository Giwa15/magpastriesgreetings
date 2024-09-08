function oruko() {

    var nimi = prompt("What is your name ?");
    if (nimi) {
        document.getElementById("name").innerText = "Hello, " + nimi + "! Welcome to MAG Pastries.";
    }else{
        alert("You didn't enter your name. ");
    }

    
}




