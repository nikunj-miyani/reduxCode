import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CTSLoader} from '../components';

class SettingsProvider extends Component {
  render() {
    const {rootLoader, rootLoaderTitle, rootLoaderTrue} = this.props;
    return (
      <>
        {this.props.children}
        <CTSLoader
          isVisible={rootLoader}
          title={rootLoaderTitle}
          isTrue={rootLoaderTrue}
        />
      </>
    );
  }
}

function mapStateToProps({activityIndicator}) {
  return {
    rootLoader: activityIndicator.rootLoader,
    rootLoaderTitle: activityIndicator.rootLoaderTitle,
  };
}
export default connect(mapStateToProps, null)(SettingsProvider);
