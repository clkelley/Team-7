import React, { Component } from 'react';
import './App.css';
import img_elRyan from './images/StartScreen_elRyan_829122.jpg';
import img_elLine from './images/StartScreen_elLine.png';
import img_elLogo from './images/StartScreen_elLogo_711498.jpg';
import btn_icon_1021899 from './images/btn_icon_1021899.png';

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
    const style_elLogo = {
      backgroundImage: 'url('+img_elLogo+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elRecommended = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    const style_elMyEventsButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    const style_elExploreButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
     };
    const style_elRecommendedText = {
      fontSize: 18.5,
      color: '#7fb2ff',
      textAlign: 'left',
     };
    const style_elExploreText = {
      fontSize: 18.5,
      color: '#7fb2ff',
      textAlign: 'left',
     };
    const style_elMyEventsText = {
      fontSize: 17.5,
      color: '#7fb2ff',
      textAlign: 'left',
     };
    const style_elUsername = {
      fontSize: 15.6,
      color: '#797979',
      textAlign: 'left',
     };
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_1021899+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '91.339%',
      backgroundPosition: '50% 0%',
      fontSize: 0.0,
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_StartScreen_elRyan_829122">
          <div className="elRyan">
            <div style={style_elRyan} />
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
            <div className="elLogo" style={style_elLogo} />
            <div className="elRecommended" style={style_elRecommended} />
            <div className="actionFont elMyEventsButton" style={style_elMyEventsButton} />
            <div className="elExploreButton" style={style_elExploreButton} />
            <div className="font-robotoRegular  elRecommendedText" style={style_elRecommendedText}>
              <div>{this.props.locStrings.start_textblock_703058}</div>
            </div>
            <div className="font-robotoRegular  elExploreText" style={style_elExploreText}>
              <div>{this.props.locStrings.start_textblock2_498949}</div>
            </div>
            <div className="font-robotoRegular  elMyEventsText" style={style_elMyEventsText}>
              <div>{this.props.locStrings.start_textblock_385998}</div>
            </div>
            <div className="font-robotoRegular  elUsername" style={style_elUsername}>
              <div>{this.props.locStrings.start_textblock_978444}</div>
            </div>
            <button className="systemFontRegular  elIconButton" style={style_elIconButton} />
          </div>
        </div>
      </Container>
    )
  }
  
}
