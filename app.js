'user strict'

const btnDesign = document.querySelector('#btn')
const bodyHtml = document.querySelector('body')

btnDesign.addEventListener('click', function (){
    // bodyHtml.classList.toggle('dark_theme')
    if (bodyHtml.classList.contains('light')) {
        bodyHtml.classList.remove('light')
        bodyHtml.classList.add('dark')
        btnDesign.classList.remove('btnLight')
        btnDesign.classList.add('btnDark')
    }else {
        bodyHtml.classList.remove('dark')
        bodyHtml.classList.add('light')
        btnDesign.classList.remove('btnDark')
        btnDesign.classList.add('btnLight')
    }

    

    let bodyClassName = document.body.className

    if (bodyClassName == 'light'){
        bodyHtml.className.textContent = 'dark'
    } else {
        bodyHtml.className.textContent = 'light'
    }

    console.log('current class name: ' + bodyClassName)
})


