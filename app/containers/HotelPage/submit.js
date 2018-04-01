// import { SubmissionError } from 'redux-form/immutable';
import { addHotelRequest } from './actions';
function submit(values, dispatch, props) { // eslint-disable-line
  const name = values.get('name');
  const floor = values.get('floor');
  const room = values.get('room');
  const address = values.get('address');
  const province = values.get('province');
  const phone = values.get('phone');
  const email = values.get('email');
  const note = values.get('note');
  const website = values.get('website');
  const created_by = values.get('website'); // eslint-disable-line
  const activated = true;

  dispatch(
    addHotelRequest({
      name,
      floor,
      room,
      address,
      province,
      phone,
      email,
      note,
      website,
      created_by,
      activated,
    })
  );
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
