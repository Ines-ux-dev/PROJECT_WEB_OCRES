import React, { Component } from 'react';
import '../caroutest.css'
import { Carousel } from 'react-bootstrap';

export class Caroutest extends Component {

  state = {
    post: {

      data: []
    }
  }

  componentDidMount() {
    //retourner une promesse : récuperer les données depuis l'API

    fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ post: result })
        console.log(result)

      })
  }

  render() {
    return (

      <div className="testcarou">
        <Carousel id="carou">
          {this.state.post.data.map(slide => (
            <Carousel.Item>
              <img src={`https://www.artic.edu/iiif/2/${slide.image_id}/full/270,/0/default.jpg`} alt=" " />
              <p id="car">{slide.title}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}




