import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

class ActionsItem extends React.PureComponent {
  onEditItem = () => this.props.onEdit(this.props.item);
  onDeleteItem = () => this.props.onDelete(this.props.item);
  render() {
    return (
      <div>
        <Button icon="edit" color="teal" size="mini" onClick={this.onEditItem} />
        <Button icon="delete" color="red" size="mini" onClick={this.onDeleteItem} />
      </div>
    );
  }
}

ActionsItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

const Table = ({
  data,
  onEditItem,
  onDeleteItem,
}) => {
  const columns = [{
    Header: 'Tên',
    accessor: 'name', // String-based value accessors!
  }, {
    Header: 'Số tầng',
    accessor: 'floor',
    maxWidth: 100,
    Cell: (item) => <span className="number">{item.value}</span>, // Custom cell components!
  }, {
    Header: 'Số phòng',
    accessor: 'room',
    maxWidth: 100,
    Cell: (item) => <span className="number">{item.value}</span>, // Custom cell components!
  }, {
    Header: 'Thành phố', // Custom header components!
    accessor: 'province',
    maxWidth: 200,
  }, {
    Header: 'Điện thoại', // Custom header components!
    accessor: 'phone',
    maxWidth: 200,
  }, {
    Header: 'Email', // Custom header components!
    accessor: 'email',
    maxWidth: 200,
  },
  {
    Header: 'Thao tác', // Custom header components!
    // accessor: 'id',
    maxWidth: 100,
    Cell: ({ original }) => <ActionsItem item={original} onEdit={onEditItem} onDelete={onDeleteItem} />, // eslint-disable-line
    className: 'center aligned',
  }];

  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      className="-striped -highlight ui striped table"
    />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default Table;
