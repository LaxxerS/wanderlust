import _ from 'lodash';

import stub from '../stubs/colour';

export default {
  stub,

  state: {
    colours: [stub],
  },

  init(colours) {
    this.state.colours = colours;
  }
}
