import React from 'react';
import {Link} from 'react-router-dom'

export class AlbumList extends React.Component {
    constructor(albums) {
        super();
        this.props = {
            albums : []
        };        
    }

    render() {
        return <ul className="album">{this.getAlbumItems()}</ul>        
    };

    getAlbumItems = function()
    {
        return this.props.albums.map(function(album){
            return <Link to= {album.name}> {album.name}</Link>
        });
    }
}