const textarea = document.querySelector("#exp")

// ____ Handle digits...
const nums = document.querySelectorAll(".num")
nums.forEach((num) => {
    num.addEventListener("click" ,() => {
        textarea.value += num.innerText
    })
})

// ____ Handle operators ...
const operatorButtons = document.querySelectorAll(".opr")
operatorButtons.forEach((opr) => {
    opr.addEventListener("click" ,() => {
        textarea.value += opr.innerText
    })
})

// ____ Handle expression...
const button = document.querySelector(".eval")
button.addEventListener("click" , () => {
    const calc = eval(textarea.value)
    textarea.value =calc 
})

// ____ Handle clear ...
const cbutton = document.querySelector(".c")
cbutton.addEventListener("click" , () => {
    textarea.value = ""
})