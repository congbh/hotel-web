import React from 'react';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DashboardPage = ({
  visible,
  onToggleVisibility,
  onNavHotelList,
}) => (
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
            <Menu.Item name="hotel" onClick={onNavHotelList}>
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
        <Segment basic>
          <Header as="h3">Application Content</Header>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

DashboardPage.propTypes = {
  visible: PropTypes.bool,
  onToggleVisibility: PropTypes.func,
  onNavHotelList: PropTypes.func,
};

export default DashboardPage;
