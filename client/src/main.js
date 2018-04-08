function loadAlbumView(){
    $("#content").load("./nanogallery.template.html");
    $('#nanogallery2').nanogallery2('reload');
}

function loadSlideshowView() {
    $("#content").addClass("hidden");
    $("#head").addClass("hidden");
    loadBgndGallery();
}


var images = [];
var gallery;
const serverUrl = "http://localhost:5000";

function loadBgndGallery(){
    
    this.getAllImages()
        .then((res) => {
            this.images = res.images;
            this.loadGallery();
        });
}

async function getAllImages()
{        
    const response = await fetch (serverUrl+'/api/albums/tur');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;  
}

function loadGallery(){                
     gallery = new mbBgndGallery({
        containment:"body",
        timer:4000,
        effTimer:2000,
        controls:"#gallery_controls",
        grayScale:false,
        images: this.images,

        onStart: function() {},
        onPause: galleryPause(),
        onPlay: function( opt ) {},
        onChange: function( opt, idx ) {},
        onNext: function( opt ) {},
        onPrev: function( opt ) {}
    });    
}

function galleryPause() {
    $("#head").removeClass("hidden");
}