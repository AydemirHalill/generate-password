const input = document.getElementById('input')
const eyeIcon = document.getElementById('eye')
const copyIcon = document.getElementById('copy')
const generate = document.getElementById('generateButton')


// The password hide / show cod start
eyeIcon.onclick = () => {
    const isPassword = input.type === 'password'
    eyeIcon.classList.toggle('bi-eye-slash' , !isPassword)
    eyeIcon.classList.toggle('bi-eye', isPassword)
    input.type = isPassword ? 'text' : 'password'
}
// The password hide / show cod end
// !--------------------------------------------------
// The password copied cod start
copyIcon.onclick = () => {
    navigator.clipboard.writeText(input.value)
    .then(()=> {
        alert('COPIED')
        console.log(input.value);
    })
    .catch(()=> {
        console.error('Could not copy,');
    })
}
// The password copied cod end
// !--------------------------------------------------

// The password generate start

const lenghtPass = 12
const symbol = '@^#%&$(~)[]{}!?.:;*-+=_/><|'
const number = '1234567890'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const allChars = lowerCase + upperCase + number + symbol


function createPass() {
    let password = ''
    password += lowerCase[Math.floor(Math.random() * lowerCase.length )]
    password += upperCase[Math.floor(Math.random() * upperCase.length )]
    password += number[Math.floor(Math.random() * number.length )]
    password += symbol[Math.floor(Math.random() * symbol.length )]
    while(lenghtPass > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length )]
    }
    input.value = password
}


// The password generate end
