import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Icon, Header } from 'semantic-ui-react';

const HeaderBar = ({
    title,
    onAddBtnClick,
}) => (
  <Grid padded="vertically">
    <Grid.Row>
      <Grid.Column width={12}>
        <Header as="h2" size="large">
          <Icon name="settings" />
          <Header.Content>
            {title}
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={4} textAlign="right">
        <Button color="teal" onClick={onAddBtnClick}>
          <Icon name="add circle" />
            Add
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

HeaderBar.propTypes = {
  title: PropTypes.string,
  onAddBtnClick: PropTypes.func,
};

export default HeaderBar;
