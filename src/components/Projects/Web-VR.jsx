import React, { PureComponent, PropTypes } from 'react';

export default class WebVR extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="md-grid md-cell md-cell--12 projects center-md-12 footer-push">
        <h1>Web VR</h1>
      </div>
    );
  }
}
