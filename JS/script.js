const body = document.querySelector(".body")
const submit = document.querySelector("#frm-btn")

const Contentinfo = [
                   { 
                    email: "youremail@fake.com", 
                    name: "your name", 
                    service: "Some service, facial transmogrification", 
                    message: "Your message about the service, it doesn't tranmogrify my face" 
                   }
                 ]

submit.addEventListener("click", (e) =>{
    const message = document.querySelector(".message")
    const name = document.querySelector(".name")
    const email = document.querySelector(".email")
   
    let content = {
        message: message.value,
        name: name.value,
        email: email.value
    }

    Contentinfo.push(content)
    e.preventDefault()
})


let checkBox = document.getElementById("checkBox")
if (checkBox.checked == True) {
    document.getElementsById ("checkBox").className = ".dark-theme"
}


