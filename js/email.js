const btn = document.getElementById('sendBtn')
const errContEl = document.querySelector(".error-cont")

// const timId = setTimeout(() => {
//     errContEl.style.display = "none";
// }, 5000)
// clearTimeout(timId)

btn.addEventListener("click", (e) => {
    e.preventDefault()
    emailEl = document.getElementById('email').value,
        messageEl = document.getElementById('message').value,
        errEl = document.getElementById('errorMsg'),
        nameEl = document.getElementById('name'),
        phoneEl = document.getElementById('phone'),
        projectEl = document.getElementById('project')
        ;
        // console.log(nameEl.value);
    if (nameEl.value === "") {
        errEl.innerHTML = "Please Enter your Full Name"
        // nameEl.value = nameEl.value;
    } else if(phoneEl.value === "") {
        errEl.innerHTML = "Please Enter your Telephone"
    }
    else if(messageEl === "") {
        errEl.innerHTML = "Please Drop a Message"
    }
    else if(emailEl === "") {
        errEl.innerHTML = "Please Enter your Email"
    }
    else if(projectEl.value === "") {
        errEl.innerHTML = "Please Enter a Project"
    }
    else {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "gyimahemwurld@gmail.com",
            Password: "49829EC38346CD2B03DA18A698D181CA7C1D",
            To: 'olatunbossemma17@gmail.com',
            From: emailEl,
            Subject: "Bro Ola Projec",
            Body: `<div style="color:White;height:15em;background-color: rgba(11, 146, 151, 0.719);padding:2em;"><p>${messageEl}</p></div>`
        })
            .then(
                errEl.innerHTML = `<p style="color:green;text-align:center">Sent</p>`
            // message => errEl.innerHTML = message
        )
    }
})

// function sendEmaile() {
    
// }
