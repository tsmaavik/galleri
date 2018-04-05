function loadAlbumView(){
    $("#content").load("./nanogallery.template.html");
    $('#nanogallery2').nanogallery2('reload');
}

function loadSlideshowView() {
    $("#content").load("./bgndgallery.template.html");
    
    // var content = document.getElementById('content');
    // content.innerHTML = '<div id="bgndGallery" class="fullscreen" ref="bgndGallery"></div>';
    // loadBgndGallery();
}