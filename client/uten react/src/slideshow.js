
var images = [];

function loadBgndGallery(){
    
    this.getAllImages()
        .then((res) => {this.images = res.images})
        .then(this.loadGallery());
}

async function getAllImages()
{        
    const response = await fetch ('http://localhost:5000/api/albums/tur');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;  
}

function loadGallery(){                
    var gallery = new ({
        containment:"#bgndGallery", // or "#myGalleryElement"
        timer:4000,
        effTimer:2000,
        controls:"#gallery_controls",
        grayScale:false,
        images: this.images
    }); 
}