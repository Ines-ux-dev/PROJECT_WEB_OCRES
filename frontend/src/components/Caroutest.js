import React, { Component } from 'react';
import '../event.css'
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
        <Carousel>
          {this.state.post.data.map(slide => (
            <Carousel.Item>
              <img src={`https://www.artic.edu/iiif/2/${slide.image_id}/full/843,/0/default.jpg`} alt="This is the first slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }

}

/*<div className="testcarou">
        <Carousel>
          <Carousel.Item>
            <img class="initial" src="https://lh3.googleusercontent.com/ogw/ADea4I7MODyPj5JDi34tINSyblaAsRaU6iskYSs4A_E1=s32-c-mo" alt="This is the first slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="logo.svg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <img src="test.png" alt="This is the First Slide" />
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>



      <Carousel.Item>
                        <p className="texxt">{this.state.post.data.title}</p>
                        <img src={`https://www.artic.edu/iiif/2/${this.state.post.data.image_id}/full/843,/0/default.jpg`} alt="This is the first slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I7MODyPj5JDi34tINSyblaAsRaU6iskYSs4A_E1=s32-c-mo" alt="This is the first slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://api.artic.edu/api/v1/artworks/129884" alt="This is the first slide" />
                    </Carousel.Item>*/




