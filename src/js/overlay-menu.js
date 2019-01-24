//alert("welcome ");


var btnMenu=document.getElementById("nav-btn-menu");
btnMenu.addEventListener("click",toggleMenu)

function toggleMenu(e)
{
    var divOverlay=document.getElementsByClassName("nav-overlay")[0];
    var eventTarget=e.target;
    var speed=10;
    if( eventTarget.className=="nav-btn-open")
    {
        fadeIn(divOverlay,speed);
        eventTarget.className="nav-btn-close";
    }
    else if( eventTarget.className=="nav-btn-close")
    {
        fadeOut(divOverlay,speed);
        eventTarget.className="nav-btn-open";
    }
}
function fadeIn(elem,speed)
{
    var inInterval=setInterval(function(){
    elem.style.display="block";
    elem.style.opacity=Number(elem.style.opacity) + 0.02;
    if(elem.style.opacity >= 1)
    {
        elem.style.opacity=1;
        clearInterval(inInterval);

    }


    },speed);
}

function fadeOut(elem,speed)
{
    var outInterval = setInterval(function(){
    elem.style.opacity = Number(elem.style.opacity) - 0.02;
    if(elem.style.opacity <= 0)
    {
        elem.style.opacity = 0;
        clearInterval(outInterval);
        elem.style.display="none";
    }

    }, speed);

}
