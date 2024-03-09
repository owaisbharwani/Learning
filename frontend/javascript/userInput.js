let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("inputResult").textContent = `Hello ${username}`;
}

document.getElementById("clear").onclick = function(){
    document.getElementById("inputResult").textContent = "";
}
