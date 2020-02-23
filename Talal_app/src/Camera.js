import React, { Component } from 'react';

export default class Camera extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  componentDidMount() {
    let video = this.videoElement;
    
    let handleStream = (stream) => {
      if ('srcObject' in video) {
        video.srcObject = stream;
      } else {
        // fallback for older browsers
        video.src = window.URL.createObjectURL(stream);      
      }
    }
    let handleError = (err) => {
      console.log("** video error: ", err);      
    }
    
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, handleStream, handleError);
    } else {
      setTimeout(function() {
        alert("Sorry, camera support is not available in this web browser.");
      }, 1);
    }
  }
  
  // Interactions made in React Studio can call this component to take a picture.
  // In the plugin's Main.js, we expose this method as the 'shoot' action in 'publishedInteractActions'.
  savePicture() {
    let canvas = document.createElement('canvas');
    canvas.width = this.videoElement.videoWidth;
    canvas.height = this.videoElement.videoHeight;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    let imageDataUrl = canvas.toDataURL('image/jpeg');
    let saveToDataSlot = null;
    saveToDataSlot = (v) => { this.props.appActions.updateDataSlot("ds_activeLang", v) };
    
    if (saveToDataSlot && imageDataUrl)
      saveToDataSlot(imageDataUrl);    
  }
  
  render() {
    const cameraStyle = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'black',
    }

    const videoElStyle = {
      width: '100%',
      height: '100%',
    }
    
    return (<div className="Camera" style={cameraStyle}>
      <video autoPlay={true} className="liveVideo" style={videoElStyle} ref={(el) => { this.videoElement = el; }}>
      </video>
    </div>)
  }
}
