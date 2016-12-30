import React, { PureComponent, PropTypes } from 'react';
import NewComp from '../../components/NewComp';
import './home-styles.scss';

export default class Home extends PureComponent {
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
      <div className="md-cell--12">
        <div className="">
          <h1 className="header md-text-container md-text-center">Chance Eakin, Software Developer</h1>
        </div>
        <div className="md-cell md-cell--5">
          <h3 className="md-text-center">I can redux!</h3>
          <NewComp />
        </div>
      </div>
    );
  }
}
