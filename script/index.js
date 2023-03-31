const menuIcon=document.getElementById('menu-icon');
const menu=document.getElementById('menu');


menuIcon.addEventListener('click',()=>{
    
    if(menu.className=='hidden'){
        menu.classList.remove('hidden')
        console.log('clicked');

    }else{
        menu.classList.add('hidden')
    }
})