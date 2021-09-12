import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import FooterSection from '../FooterSection/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SimpleEditor from 'react-simple-image-editor';
//import styles from "./Removebpage.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const imageData = {
  back1: "/img/back1.jpg",
  back2: "/img/back2.jpg",
  back3: "/img/back3.jpg",
  back4: "/img/back4.jpg",
  back5: "/img/back5.jpg",
  back6: "/img/back6.jpg",
  back7: "/img/back7.jpg",
  back8: "/img/back8.jpg"
}

class ShowImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _changePreview() {
    this.setState({
      imagePreviewUrl: '/img/back1.jpg'
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{ maxHeight: '500px', maxWidth: '500px' }}/>);
    }

    return (
      <body class="wrapper">
        <div class="wrapper">
          <h1 class="wrapper">Static Layout Example</h1>
          <header class="wrapper">HEADER</header>
          <nav class="wrapper">NAV</nav>
          <section class="wrapper">SECTION</section>
        </div>
      </body>
    )
  }

}

export default ShowImage;
