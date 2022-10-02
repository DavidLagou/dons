function toggleMenu(){
    var collapseMenu = document.getElementById("collapseMenu");

    console.log('c:' + collapseMenu.style.display);
    // basically toggle the menu
    if(collapseMenu.style.display == 'none' || collapseMenu.style.display == ''){
        collapseMenu.style.display = 'flex';
    }
    else{
        collapseMenu.style.display = 'none';
    }
}


