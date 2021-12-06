import React, { Component } from 'react';
import '../carouselOeuvres.css'
import { Carousel } from 'react-bootstrap';

export class CarouselOeuvres extends Component {

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


      <Carousel id="carou">
        {this.state.post.data.map(slide => (
          <Carousel.Item>
            <div className="carouitations">
              <img src={`https://www.artic.edu/iiif/2/${slide.image_id}/full/300,/0/default.jpg`} alt=" " />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    )
  }
}


//<p id="car">{slide.title}</p>

