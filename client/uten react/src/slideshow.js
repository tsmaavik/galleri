
var images = [];
var gallery;
const serverUrl = "http://localhost:5000";

function loadBgndGallery(){
    
    this.getAllImages()
        .then((res) => {this.images = res.images})
        .then(this.loadGallery());
}

async function getAllImages()
{        
    const response = await fetch (serverUrl+'/api/albums/tur',);
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
        images: this.images
    });    
}