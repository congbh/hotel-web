import React from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { pure, compose as recompose, withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

const CommonLayout = ({ children, visible, onNavHotelList, onToggleVisibility, active }) => (
  <div className="dashboard">
    <Menu text>
      <Menu.Item active onClick={onToggleVisibility}><Icon size="large" name="bars" /> Dashboard</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation="slide along" color="teal" width="thin" visible={visible} vertical>
        <Menu.Item>
          <Menu.Header>Hotels</Menu.Header>
          <Menu.Menu>
            <Menu.Item active={active === 'hotel'} name="hotel" onClick={onNavHotelList}>
              <Icon name="hotel" color="teal" />
              List Hotels
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad" />
              Games
            </Menu.Item>
        <Menu.Item name="camera">
          <Icon name="camera" />
              Channels
            </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

CommonLayout.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node,
  visible: PropTypes.bool,
  onNavHotelList: PropTypes.func,
  onToggleVisibility: PropTypes.func,
};
export default recompose(
    withRouter,
    withState('visible', 'onSetVisible', false),
    withHandlers({
      onToggleVisibility: ({ visible, onSetVisible }) => () => {
        onSetVisible(!visible);
      },
      onNavHotelList: ({ history }) => () => {
        history.push('/hotel');
      },
    }),
    pure,
)(CommonLayout);

// export default CommonLayout;
