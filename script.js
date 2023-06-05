

let cabecalho = document.getElementById('cabecalho');
let cabecalho__menu = document.getElementById('cabecalho__menu');
let apresentacao = document.getElementById('apresentacao');
let showSideBar = false;  

function toggleSideBar() 
{
    showSideBar = !showSideBar;
    if(showSideBar) 
    {
        cabecalho__menu.style.marginLeft = '-10vw';
        cabecalho__menu.style.animationName = 'showSideBar';
        apresentacao.style.filter = 'blur(2px)';
    } 
    else 
    {
        cabecalho__menu.style.marginLeft = '-100vw';
        cabecalho__menu.style.animationName = '';
        apresentacao.style.filter = '';
    }
}

function closeSideBar() 
{
    if(showSideBar)
    {
        toggleSideBar();
    }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 1200 && showSideBar)
    {
        toggleSideBar();
    }
});


