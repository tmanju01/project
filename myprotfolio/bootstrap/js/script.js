        header_div = document.getElementById('nav');
		label_div = document.getElementById('logo');
        menu=document.getElementById('menu-fon');
        link=document.getElementById('navbarNavDropdown');

function scrollPage(){
    if(document.documentElement.scrollTop > 50){
        header_div.style.top = "0";
        header_div.style.height = " 100px";
        header_div.style.background="#1b2f45"
        logotag.style.top = "0";
        logotag.style.height = "70px";
        link.style.color="white";

    }
    else{
        header_div.style.top = "0px";
        header_div.style.background="transparent"
				header_div.style.height = " 100px";
				label_div.style.lineHeight = "95px";
    }
}