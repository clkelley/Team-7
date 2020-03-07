import React, { Component } from 'react';
import './Profile.css';
import img_state0_elRyan from './images/UploadPhotoPop2Screen_state0_elRyan_92175.jpg';
import img_state0_elLine from './images/UploadPhotoPop2Screen_state0_elLine.png';
import btn_icon_218715 from './images/btn_icon_218715.png';
import Camera from './Camera';
import btn_icon_808994 from './images/btn_icon_808994.png';
import img_state0_elLogo from './images/UploadPhotoPop2Screen_state0_elLogo_530330.jpg';

// UI framework component imports
import Container from 'muicss/lib/react/container';

export default class UploadPhotoPop2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elRyan = (ev) => {
  
  }
  
  
  onClick_state0_elFab = (ev) => {
    // Perform action 'Shoot' on element 'camera'
    this._state0_elCamera.savePicture()
  }
  
  
  onClick_state0_elClose = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elRyan = {
      backgroundImage: 'url('+img_state0_elRyan+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      borderRadius: '17.0px',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elTextBlock3 = {
      fontSize: 16.6,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_state0_elRectangle = {
      background: 'rgba(0, 0, 0, 1.000)',
      opacity: 0.15,
      borderRadius: '16.0px',
     };
    const style_state0_elTextBlock2 = {
      fontSize: 21.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_state0_elMyQuestionnaireButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    const style_state0_elTextBlock = {
      fontSize: 15.6,
      color: '#797979',
      textAlign: 'left',
     };
    
    const style_state0_elRectangle2 = {
      background: 'rgba(0, 0, 0, 1.000)',
      opacity: 0.15,
      borderRadius: '11.0px',
     };
    
    const style_state0_elLine = {
      backgroundImage: 'url('+img_state0_elLine+')',
      backgroundSize: '100% 100%',
      boxShadow: '0.0px 1.6px 2px rgba(0, 0, 0, 0.3000)',
     };
    const style_state0_elCard = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elCard_outer = {
      backgroundColor: 'white',
      boxShadow: '0.0px 1.8px 14px rgba(0, 0, 0, 0.1600)',
     };
    const style_state0_elFab = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_218715+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '105.158%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elCamera = {
      pointerEvents: 'auto',
     };
    const style_state0_elClose = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_808994+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '124.665%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elLogo = {
      backgroundImage: 'url('+img_state0_elLogo+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    return (
      <Container fluid={true} className="AppScreen UploadPhotoPop2Screen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_UploadPhotoPop2Screen_state0_elRyan_92175">
          <div className="state0_elRyan">
            <div style={style_state0_elRyan} onClick={this.onClick_state0_elRyan}  />
          </div>
          
          <div className="state0_elTextBlock3">
            <div className="font-robotoRegular" style={style_state0_elTextBlock3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.uploadphotopop2_textblock3_208407.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="state0_elRectangle">
            <div style={style_state0_elRectangle} />
          </div>
          
          <div className="state0_elTextBlock2">
            <div className="font-robotoRegular" style={style_state0_elTextBlock2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.uploadphotopop2_textblock2_77108.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          </div>
          <div className="state0_elMyQuestionnaireButton">
            <div style={style_state0_elMyQuestionnaireButton} />
          </div>
          
          <div className="state0_elTextBlock">
            <div className="font-robotoRegular" style={style_state0_elTextBlock}>
              <div>{this.props.locStrings.uploadphotopop2_textblock_114856}</div>
            </div>
          </div>
          
          <div className="state0_elRectangle2">
            <div style={style_state0_elRectangle2} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="state0_elLine" style={style_state0_elLine} />
            <div className="state0_elCard" style={style_state0_elCard_outer}>
              <div className="cardBg" style={style_state0_elCard} />
            </div>
            
            <button className="actionFont state0_elFab" style={style_state0_elFab} onClick={this.onClick_state0_elFab}  />
            <div className="state0_elCamera" style={style_state0_elCamera}>
              <Camera ref={(el)=> this._state0_elCamera = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <button className="actionFont state0_elClose" style={style_state0_elClose} onClick={this.onClick_state0_elClose}  />
            <div className="state0_elLogo" style={style_state0_elLogo} />
          </div>
        </div>
      </Container>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    
    return (
      <Container fluid={true} className="AppScreen UploadPhotoPop2Screen" style={baseStyle}>
      </Container>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  
}
