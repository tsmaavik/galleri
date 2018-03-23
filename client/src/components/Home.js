import React, { Component } from 'react';
import { render } from 'react-dom';
import {jQuery} from '../../node_modules/jquery/dist/jquery';
import {nanogallery2} from '../../node_modules/nanogallery2/dist/jquery.nanogallery2';

export class Home extends Component {
    constructor()  { 
        super();
      }
    render() {
      return (    
        <div id="nanogallery2" data-nanogallery2='{
          "userID": "44761156@N00",
          "kind": "flickr",
          "thumbnailWidth": "auto",
          "thumbnailHeight": "200",
          "thumbnailSelectable": true, 
          "thumbnailLabel": {
            "display":false            
          },
          "thumbnailL1Label": { 
            "display": true,
            "align": "left",
            "position": "overImageOnBottom"
          },
          "thumbnailHoverEffect2": "toolsAppear|imageScale150",
          "thumbnailAlignment": "justified"
        }'>
        </div>
      );
/*
            "userID": "44761156@N00",
            "kind": "flickr",

            "kind":             "nano_photos_provider2",
            "dataProvider":     "http://localhost:8080/nano_photos_provider2.php",
*/
    }
}