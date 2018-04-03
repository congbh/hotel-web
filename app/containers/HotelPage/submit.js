// import { SubmissionError } from 'redux-form/immutable';
import _ from 'lodash';
import {
  createHotelRequest,
  updateHotelRequest,
  hotelRequestFailure,
} from './actions';

function submit(values, dispatch, props) { // eslint-disable-line
  let hotel = {
    name: values.get('name'),
    floor: _.toNumber(values.get('floor')),
    room: _.toNumber(values.get('room')),
    address: values.get('address'),
    province: values.get('province'),
    phone: values.get('phone'),
    email: values.get('email'),
    note: values.get('note'),
    website: values.get('website'),
    activated: true,
  };
  const { isCreate } = props;
  if (!isCreate) {
    const id = values.get('id');
    const created_by = values.get('created_by'); // eslint-disable-line
    hotel = { ...hotel, id, created_by };
    dispatch(updateHotelRequest(hotel));
  } else {
    const created_by =  window.sessionStorage.getItem('uid'); // eslint-disable-line
    if (!created_by) {  // eslint-disable-line
      dispatch(hotelRequestFailure('UnAuthorization'));
    } else {
      hotel = { ...hotel, created_by };
      dispatch(createHotelRequest(hotel));
    }
  }
//   const name = values.get('name');
//   addHotelRequest({
//     name,
//   });
    //   .log('values >>>', values.get('name'));
//   console.log('values >>>', getIn(values, ['name']));
    // return sleep(1000) // simulate server latency
    //   .then(() => {
    //     if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
    //       throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    //     } else if (values.password !== 'redux-form') {
    //       throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
    //     } else {
    //       window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    //     }
    //   })
}

export default submit;
