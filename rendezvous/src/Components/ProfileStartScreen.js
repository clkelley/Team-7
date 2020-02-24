import React, { Component } from 'react';
import './Profile.css';
import img_elRyan from './images/StartScreen_elRyan_639361.jpg';
import img_elLine from './images/StartScreen_elLine.png';
import btn_icon_82944 from './images/btn_icon_82944.png';
import img_elLogo from './images/StartScreen_elLogo_711498.jpg';

// UI framework component imports
import Container from 'muicss/lib/react/container';

export default class StartScreen extends Component {

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
    // Go to screen 'Upload photo pop'
    this.props.appActions.goToScreen('uploadphotopop', { transitionId: 'fadeIn' });
  
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
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_82944+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '91.339%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elLogo = {
      backgroundImage: 'url('+img_elLogo+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elRecommended = {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 18.7,
      color: '#7fb2ff',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elUsername = {
      fontSize: 15.6,
      color: '#797979',
      textAlign: 'left',
     };
    const style_elExplore = {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 18.7,
      color: '#7fb2ff',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elMyEvents = {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 18.7,
      color: '#7fb2ff',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_StartScreen_elRyan_639361">
          <div className="elRyan">
            <div style={style_elRyan} onClick={this.onClick_elRyan}  />
          </div>
          
          <div className="elTextBlock3">
            <div className="font-robotoRegular" style={style_elTextBlock3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.start_textblock3_430445.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>
          
          <div className="elTextBlock2">
            <div className="font-robotoRegular" style={style_elTextBlock2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.start_textblock2_475093.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          </div>
          <div className="elMyQuestionnaireButton">
            <div style={style_elMyQuestionnaireButton} />
          </div>
          
          <div className="elTextBlock">
            <div className="font-robotoRegular" style={style_elTextBlock}>
              <div>{this.props.locStrings.start_textblock_231961}</div>
            </div>
          </div>
          
          <div className="elRectangle2">
            <div style={style_elRectangle2} />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elLine" style={style_elLine} />
            <button className="actionFont elIconButton" style={style_elIconButton} />
            <div className="elLogo" style={style_elLogo} />
            <button className="font-SFUITextRegular  elRecommended" style={style_elRecommended}>
              {this.props.locStrings.start_button_710441}
            </button>
            <div className="font-robotoRegular  elUsername" style={style_elUsername}>
              <div>{this.props.locStrings.start_textblock_978444}</div>
            </div>
            <button className="font-SFUITextRegular  elExplore" style={style_elExplore}>
              {this.props.locStrings.start_recommendedcopy_77289}
            </button>
            <button className="font-SFUITextRegular  elMyEvents" style={style_elMyEvents}>
              {this.props.locStrings.start_recommendedcopy_685214}
            </button>
          </div>
        </div>
      </Container>
    )
  }
  
}
