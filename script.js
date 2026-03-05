// Sidebar toggle

const menuBtn = document.getElementById("menuBtn")
const sidebar = document.getElementById("sidebar")

menuBtn.onclick = () => {

if(sidebar.style.right === "0px"){

sidebar.style.right = "-250px"

}else{

sidebar.style.right = "0px"

}

}


// Theme toggle

const themeBtn = document.getElementById("themeToggle")

themeBtn.onclick = () => {

document.body.classList.toggle("light")

}