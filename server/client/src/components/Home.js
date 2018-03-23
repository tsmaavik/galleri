import React, { Component } from 'react';
import { render } from 'react-dom';
import {AlbumList} from './AlbumList';
import nanogallery2 from 'nanogallery2';

export class Home extends Component {
    constructor()  { 
        super();
        this.state = {
          albums : []
        };
      }
    render() {
      return (    
        <div id="nanogallery2" data-nanogallery2='{"thumbnailHeight": 210, "thumbnailWidth": 210, "itemsBaseURL": "/api/albums/"}'>
          {this.getAlbumCovers()}
        </div>
      );
    }

    componentDidMount() {  
        this.getAlbums()          
          .then(res => {this.setState({albums: res.albums});})
          .catch(err => console.log(err));    
      }
    
      getAlbums = async () => 
      {
        const response = await fetch ('/api/albums/');
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);
        return body;
      };

      getAlbumCovers()
      {
        return this.state.albums.map(function(album) {
          return (<a href="" data-ngkind="album" data-ngid={album.name}  data-ngthumb={album.coverUrl}>{album.name}</a>);
        });
      }
}