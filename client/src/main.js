function loadAlbumView(){
    $("#content").load("./nanogallery.template.html");
    $('#nanogallery2').nanogallery2('reload');
}

function playSlideshow()
{
    var items = $("#nanogallery2").nanogallery2('itemsSelectedGet');
    var selectedAlbums = [];
    this.images = [];    
    if(items.length > 0)
    {
        for(var i = 0; i < items.length; i++) {
            var item = items[i];         
            getAllImages(item.title)
                .then(res => {
                    this.images = this.images.concat(res.images);                    
                    this.loadGallery();
                });
        }
    }
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

async function getAllImages(albumName)
{        
    const response = await fetch (serverUrl+'/api/albums/'+ albumName);
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