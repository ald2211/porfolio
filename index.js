let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}




nop=()=>{
    return alert('sorry ,the project was not finished yet')
}
// google sheeta conect //

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCP84BJMaLUojPe3WMno-4KdWs1XMt0JH6yL3MjA0IkZMjK-bb0NfVEPA6tPBgyUmMvA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById('msg')
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
