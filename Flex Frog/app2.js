const buttonElement = document.querySelector('button')
const textAreaElement = document.querySelector('textarea')
const foreAtt = document.querySelector('.forefront')

function addCSS() {
   const css = textAreaElement.value
   foreAtt.style.cssText = css
    
}

function nextLevel(){
   let btnInput = document.querySelector('.forefront');
   window.location.href = "main3.html";  
  
}

textAreaElement.addEventListener('keydown',addCSS)
buttonElement.addEventListener('click', nextLevel)
