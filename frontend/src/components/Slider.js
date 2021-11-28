import React, { Component } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Slider.css"

export class Slider extends Component {

    state = {
        post: {
            data: []

        }
    }

    componentDidMount() {
        fetch('https://api.artic.edu/api/v1/artworks')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result })
                console.log(result)

            })
        console.log(this.state.post.data);
    }


    render() {
        return (
            <Carousel>
                {this.state.post.data.map(slide => (
                    <div key={slide.image_id}>
                        <img src={`https://www.artic.edu/iiif/2/${slide.image_id}/full/843,/0/default.jpg`}></img>

                    </div>
                ))}
            </Carousel>
        );
    }

}

/**key={slide.image_id} */
/**<div className="overlay">
                            <h2 className="overlay_title">{slide.title}</h2>
                        </div> */
/** autoPlay interval={6000}
                infiniteLoop thumbWidth={120}
        showIndicators={false}
                showStatus={false} */


