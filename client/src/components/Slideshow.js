import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from './JQuery' 
import mbBgndGallery from 'jquery.mb.bgndgallery';

export class Slideshow extends Component{
    constructor()
    {
        super();
        this.images = [];
    }

    render(){
        return <div id="bgndGallery"></div>
    }

    componentDidMount(){
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
        $.mbBgndGallery({
            containment:"#bgndGallery", // or "#myGalleryElement"
            timer:4000,
            effTimer:2000,
            controls:"#gallery_controls",
            grayScale:false,
            images: this.images
        }); 
        //myGallery.changeGallery(this.images);        
    } 
}