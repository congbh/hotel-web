import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import Config from './DebugConfig';

if (Config.useReactotron) {
    // then add it to the plugin list
  Reactotron
    .configure({ name: 'uCare Web Chat' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  Reactotron.clear();

  console.tron = Reactotron; // eslint-disable-line no-console
} else {
  console.tron = { // eslint-disable-line no-console
    debug: () => {},
    info: () => {},
    warn: () => {},
    display: () => {},
  };
}
