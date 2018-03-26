class AllImagesGallery {    
    constructor(){
        this.images = [];
    }    
       
    load() {
        this.getAllImages()
            .then((res) => {this.images = res.images})
            .then(this.loadGallery());
    }    

    async getAllImages()
    {        
        const response = await fetch ('/api/album/tur');
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);
        return body;  
    }

    loadGallery(){        
        var myGallery = new mbBgndGallery({
            containment:"bgndGallery", // or "#myGalleryElement"
            timer:4000,
            effTimer:2000,
            controls:"#gallery_controls",
            grayScale:false,
            images: this.images            
        });
        myGallery.images = this.images;     
    }    
}

export function load(){};