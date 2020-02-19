import React, { Component } from 'react';
import './Faraz.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
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

  onClick_elButton = (ev) => {
    // Go to screen 'Screen 2'
    this.props.appActions.goToScreen('screen2', { transitionId: 'fadeIn' });

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

    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };

    const style_elRectangle = {
      background: 'rgba(0, 0, 0, 1.000)',
     };

    const style_elRectangle2 = {
      background: 'rgba(0, 0, 0, 1.000)',
     };
    const style_elTextBlock4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };

    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_99130}
            </Button>
          </div>
        </div>

        <div className="screenFgContainer">
          <div className="foreground">
            <div className="elRectangle" style={style_elRectangle} />
            <div className="elRectangle2" style={style_elRectangle2} />
            <div className="baseFont elTextBlock4" style={style_elTextBlock4}>
              <div>{this.props.locStrings.screen2_textblock4_187320}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }

}
