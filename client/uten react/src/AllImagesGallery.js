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
            // If your server allow directory listing
            //folderPath:"elements/",
            // else:
            images:[
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/1.jpg",
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/2.jpg",
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/3.jpg",
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/4.jpg",
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/5.jpg",
                "../lib/jquery.mb.bgndGallery-1.9.5/elements/hr/6.jpg"               
            ],
        });
        myGallery.images = this.images;     
    }    
}
