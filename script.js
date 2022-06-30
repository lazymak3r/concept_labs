(function(){
    const menu = document.querySelector('.small_header_links_block');
    const openMenuIcon = document.querySelector('.burger-menu');
    const closeMenuIcon = document.querySelector('.close-menu');


    window.addEventListener('load', ()=>{
        openMenuIcon.addEventListener('click', toggleMenu)
        closeMenuIcon.addEventListener('click', toggleMenu)
    })

    function toggleMenu(){
        menu.classList.toggle('open')
    }
})()
