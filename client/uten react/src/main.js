function loadAlbumView(){
    $("#content").load("./nanogallery.template.html")
    $('#nanogallery2').nanogallery2('reload');
}

function loadSlideshowView() {
    var content = document.getElementById('content');
    content.innerHTML = '<div id="bgndGallery" ref="bgndGallery"></div>';
    loadBgndGallery();
}