const body = document.querySelector(".body")
const toggle = document.querySelector(".toggle")

consple.log(darktheme())

function darktheme() {
    let checkBox = document.getElementById("checkBox")
    if (checkBox.checked == True) {
        document.getElementsById ("checkBox").className = "dark-theme"
    }
}