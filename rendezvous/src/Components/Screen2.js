import React, { Component } from 'react';
import './Faraz.css';
import img_elTest_concert1 from './images/Screen2_elTest_concert1_707178.jpg';
import img_elConcert2 from './images/Screen2_elConcert2_620532.jpg';
import btn_icon_728041 from './images/btn_icon_728041.png';
import btn_icon_627836 from './images/btn_icon_627836.png';
import btn_icon_165529 from './images/btn_icon_165529.png';
import btn_icon_477171 from './images/btn_icon_477171.png';
import btn_icon_951116 from './images/btn_icon_951116.png';
import btn_icon_67980 from './images/btn_icon_67980.png';
import btn_icon_439264 from './images/btn_icon_439264.png';
import btn_icon_323737 from './images/btn_icon_323737.png';
import btn_icon_718726 from './images/btn_icon_718726.png';
import btn_icon_948814 from './images/btn_icon_948814.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Screen2 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);

    this.state = {
      elConcert2_visible: false,
      elButton_visible: true,
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

  onClick_elV3rdImage = (ev) => {
    this.setState({elConcert2_visible: !this.state.elConcert2_visible});

  }


  onClick_elV4thButton = (ev) => {
    this.setState({elConcert2_visible: true});

  }


  onClick_elV1stButton = (ev) => {
    this.setState({elConcert2_visible: !this.state.elConcert2_visible});

  }


  onClick_elTextBlock = (ev) => {

  }


  onClick_elButtonCopy = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });

  }


  onClick_elButton2 = (ev) => {
    this.setState({elButton_visible: !this.state.elButton_visible});

  }


  onClick_elButton = (ev) => {
    this.setState({elButton_visible: !this.state.elButton_visible});

  }


  onClick_elButtonCopy2 = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });

  }


  onClick_elButtonCopy3 = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });

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

    const style_elTest_concert1 = {
      backgroundImage: 'url('+img_elTest_concert1+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elConcert2 = {
      backgroundImage: 'url('+img_elConcert2+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const elConcert2 = this.state.elConcert2_visible ? (
      <div className="elConcert2">
        <div style={style_elConcert2} />
      </div>

     ) : null;
    const style_elTextBlock6 = {
      fontSize: 47.5,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elBuyTickets = {
      display: 'block',
      fontSize: 19.0,
      color: 'white',
      textAlign: 'center',
     };
    const style_elButtonCopy6 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_728041+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '65.917%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elV3rdImage = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_627836+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '65.917%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elV4thButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_165529+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '65.917%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elTextBlock7 = {
      fontSize: 47.5,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    const style_elRectangle2 = {
      background: 'rgba(0, 0, 0, 1.000)',
     };

    const style_elRectangle = {
      background: 'rgba(0, 0, 0, 1.000)',
     };
    const style_elV1stButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_477171+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '65.917%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elTextBlock5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextBlock4 = {
      fontSize: 19.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextBlock3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextBlock2 = {
      fontSize: 38.0,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
     };
    const style_elTextBlock = {
      fontSize: 66.5,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elButtonCopy = {
      display: 'block',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elButton2 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_67980+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '57.238%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_439264+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '56.247%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const elButton = this.state.elButton_visible ? (
      <div className="elButton">
        <button className="actionFont" style={style_elButton} onClick={this.onClick_elButton}  />
      </div>

     ) : null;
    const style_elButtonCopy2 = {
      display: 'block',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elButton4 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_718726+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '28.624%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
     };
    const style_elButtonCopy3 = {
      display: 'block',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    return (
      <div className="AppScreen Screen2" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_Screen2_elTest_concert1_707178">
          <div className="elTest_concert1">
            <div style={style_elTest_concert1} />
          </div>

          { elConcert2 }
          <div className="elTextBlock6">
            <div className="font-arialBoldMT" style={style_elTextBlock6}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.screen2_textblock6_479716.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>

          <div className="elBuyTickets">
            <Button className="systemFontBold" style={style_elBuyTickets}  color="accent" >
              {this.props.locStrings.screen2_button3_1028705}
            </Button>
          </div>

          <div className="elButtonCopy6">
            <button className="actionFont" style={style_elButtonCopy6} />
          </div>

          <div className="elV3rdImage">
            <button className="actionFont" style={style_elV3rdImage} onClick={this.onClick_elV3rdImage}  />
          </div>

          <div className="elV4thButton">
            <button className="actionFont" style={style_elV4thButton} onClick={this.onClick_elV4thButton}  />
          </div>

          <div className="elTextBlock7">
            <div className="font-helveticaBold" style={style_elTextBlock7}>
              <div>{this.props.locStrings.screen2_textblock7_244897}</div>
            </div>
          </div>

          <div className="elRectangle2">
            <div style={style_elRectangle2} />
          </div>

          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>

          <div className="elV1stButton">
            <button className="actionFont" style={style_elV1stButton} onClick={this.onClick_elV1stButton}  />
          </div>

          <div className="elTextBlock5">
            <div className="baseFont" style={style_elTextBlock5}>
              <div>{this.props.locStrings.screen2_textblock5_707567}</div>
            </div>
          </div>

          <div className="elTextBlock4">
            <div className="font-helvetica" style={style_elTextBlock4}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.screen2_textblock4_529195.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>

          <div className="elTextBlock3">
            <div className="baseFont" style={style_elTextBlock3}>
              <div>{this.props.locStrings.screen2_textblock3_419439}</div>
            </div>
          </div>

          <div className="elTextBlock2">
            <div className="font-helveticaBold" style={style_elTextBlock2}>
              <div>{this.props.locStrings.screen2_textblock2_602587}</div>
            </div>
          </div>

          <div className="elTextBlock">
            <div className="font-helveticaBoldOblique" style={style_elTextBlock} onClick={this.onClick_elTextBlock} >
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.screen2_textblock_25509.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>

          <div className="elButtonCopy">
            <Button className="baseFont" style={style_elButtonCopy}  variant="fab" onClick={this.onClick_elButtonCopy} >
              <img src={btn_icon_951116} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>

          <div className="elButton2">
            <button className="actionFont" style={style_elButton2} onClick={this.onClick_elButton2}  />
          </div>

          { elButton }
          <div className="elButtonCopy2">
            <Button className="baseFont" style={style_elButtonCopy2}  variant="fab" onClick={this.onClick_elButtonCopy2} >
              <img src={btn_icon_323737} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>

          </div>
          <div className="elButton4">
            <button className="actionFont" style={style_elButton4} />
          </div>

          <div className="flowRow flowRow_Screen2_elButtonCopy3_948814">
          <div className="elButtonCopy3">
            <Button className="baseFont" style={style_elButtonCopy3}  variant="fab" onClick={this.onClick_elButtonCopy3} >
              <img src={btn_icon_948814} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>

          </div>
        </div>

      </div>
    )
  }

}
