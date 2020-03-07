import React, { Component } from 'react';
import './Profile.css';
import img_elRyan from './images/UploadPhotoPop2Screen_state0_elRyan_92175.jpg';
import img_elLine from './images/UploadPhotoPopScreen_elLine.png';
import btn_icon_475022 from './images/btn_icon_475022.png';
import btn_icon_785537 from './images/btn_icon_785537.png';
import img_elLogo from './images/UploadPhotoPop2Screen_state0_elLogo_530330.jpg';

// UI framework component imports
import Container from 'muicss/lib/react/container';

export default class UploadPhotoPopScreen extends Component {

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

  onClick_elRyan = (ev) => {
  
  }
  
  
  onClick_elUpload = (ev) => {
    // Go to screen 'Upload photo pop 2'
    this.props.appActions.goToScreen('uploadphotopop2', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elClose = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elRyan = {
      backgroundImage: 'url('+img_elRyan+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      borderRadius: '17.0px',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elTextBlock3 = {
      fontSize: 16.6,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elRectangle = {
      background: 'rgba(0, 0, 0, 1.000)',
      opacity: 0.15,
      borderRadius: '16.0px',
     };
    const style_elTextBlock2 = {
      fontSize: 21.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elMyQuestionnaireButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    const style_elTextBlock = {
      fontSize: 15.6,
      color: '#797979',
      textAlign: 'left',
     };
    
    const style_elRectangle2 = {
      background: 'rgba(0, 0, 0, 1.000)',
      opacity: 0.15,
      borderRadius: '11.0px',
     };
    
    const style_elLine = {
      backgroundImage: 'url('+img_elLine+')',
      backgroundSize: '100% 100%',
      boxShadow: '0.0px 1.6px 2px rgba(0, 0, 0, 0.3000)',
     };
    const style_elCard = {
      width: '100%',
      height: '100%',
     };
    const style_elCard_outer = {
      backgroundColor: 'white',
      boxShadow: '0.0px 1.8px 14px rgba(0, 0, 0, 0.1600)',
     };
    const style_elUpload = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_475022+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '68.390%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elClose = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_785537+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '124.665%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elLogo = {
      backgroundImage: 'url('+img_elLogo+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elTextBlock4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    return (
      <Container fluid={true} className="AppScreen UploadPhotoPopScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_UploadPhotoPopScreen_elRyan_572490">
          <div className="elRyan">
            <div style={style_elRyan} onClick={this.onClick_elRyan}  />
          </div>
          
          <div className="elTextBlock3">
            <div className="font-robotoRegular" style={style_elTextBlock3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.start2_textblock3_999602.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>
          
          <div className="elTextBlock2">
            <div className="font-robotoRegular" style={style_elTextBlock2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.start2_textblock2_204166.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          </div>
          <div className="elMyQuestionnaireButton">
            <div style={style_elMyQuestionnaireButton} />
          </div>
          
          <div className="elTextBlock">
            <div className="font-robotoRegular" style={style_elTextBlock}>
              <div>{this.props.locStrings.start2_textblock_589427}</div>
            </div>
          </div>
          
          <div className="elRectangle2">
            <div style={style_elRectangle2} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elLine" style={style_elLine} />
            <div className="elCard" style={style_elCard_outer}>
              <div className="cardBg" style={style_elCard} />
            </div>
            
            <button className="actionFont elUpload" style={style_elUpload} onClick={this.onClick_elUpload}  />
            <button className="actionFont elClose" style={style_elClose} onClick={this.onClick_elClose}  />
            <div className="elLogo" style={style_elLogo} />
            <div className="headlineFont elTextBlock4" style={style_elTextBlock4}>
              <div>{this.props.locStrings.start2_textblock4_923994}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  
}
