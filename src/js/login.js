const input = document.querySelector('.login-input')
const button = document.querySelector('login-button')

const validateInput = ({target})=> {
   if (target.value.length > 3)
    button.removeAttribute('disabled')
    
}

input.addEventListener('input',validateInput)