import React, { Component } from 'react';
import { render } from 'react-dom';

export class Album extends Component {
    constructor() {
        super();
        this.state = {
            name : "",
            images : []
        };
    }
    render(){
        return (<div><h1>{this.state.name}</h1>{this.getImageList(this.state.images)}</div>);
    };

    componentDidMount() {  
        this.getAlbum()          
          .then(res => {
              this.setState({name: res.name});
              this.setState({images: res.images});
            })
          .catch(err => console.log(err));    
      }
    
      getAlbum = async () => 
      {
        const response = await fetch ('/api/albums/'+ this.props.name);
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);
        return body;
      }

      getImageList(images)
      {          
        return (
            <div class="imagelist"> 
                {images.map(img => {
                     return (<img src={img}/>);
                })}
            </div>
          );
      }
}