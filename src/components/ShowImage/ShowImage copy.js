import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import FooterSection from '../FooterSection/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SimpleEditor from 'react-simple-image-editor';

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
      <div style={{height: '2000px'}}>
        <Header imageData={"/img/logo-white.png"} />
        <section id="upload-picture" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{paddingTop: '400px',paddingBottom: '100px'}}>
                <div className="container" style={{paddingBottom: '100px'}}>
                <div style={{ maxHeight: '450px', maxWidth: '500px', alignContent: 'center', marginTop: '100px'}}>
                        <SimpleEditor
                          editorUI={{
                          theme: 'blue',
                          image: imagePreviewUrl
                          }}
                        />
                  </div>
                  <div style={{paddingBottom: '150px'}}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-lg-8">
                        <form onSubmit={this._handleSubmit}>
                          <input type="file" onChange={this._handleImageChange} />
                          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                        </form>
                    </div>
                  </div>
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={0}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    focusOnSelect={true}
                  >
                    <img src={imageData.back1} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back2} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back3} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back4} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back5} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back6} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back7} alt="" onClick={this._changePreview}/>
                    <img src={imageData.back8} alt="" onClick={this._changePreview}/>
                  </Carousel>
                  </div>
                </div>
          </section>
          <pre></pre>
          <FooterSection />
      </div>
    )
  }

}

export default ShowImage;

<div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-lg-8">
                        <form onSubmit={this._handleSubmit}>
                          <label for="file-upload" class="btn btn-outline-primary" style={{height:'50px', width:'160px', position: 'absolute', bottom: '-540px', left: '780px'}}>
                            Upload file
                          </label>
                          <input id="file-upload" type="file" onChange={this._handleImageChange} class="btn btn-outline-primary" style={{display:'none'}}/>
                          <button type="submit" class="btn btn-outline-primary" onClick={this._handleSubmit} style={{ position: 'absolute', bottom: '-540px', left: '585px', marginLeft:'10px'}}>Upload Image</button>
                        </form>
                    </div>
                  </div>