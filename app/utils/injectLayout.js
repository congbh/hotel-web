import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Layout from 'components/Layout';

export default ({ active }) => (WrappedComponent) => {
  class LayoutInjector extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withLayout(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    render() {
      return <Layout active={active}><WrappedComponent {...this.props} /></Layout>;
    }
  }

  return hoistNonReactStatics(LayoutInjector, WrappedComponent);
};
