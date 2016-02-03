import _ from 'lodash';

import stub from '../stubs/tag';

export default {
  stub,

  state: {
    tags: [stub],
  },

  init(tags) {
    this.state = tags;
  }
}
