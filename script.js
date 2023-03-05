window.onscroll = () => {
    if (window.pageYOffset > 50) {
        document.getElementById('top-header').classList.add('top-header-white-backgroup');
    }
    else{
        document.getElementById('top-header').classList.remove('top-header-white-backgroup');
    }
}