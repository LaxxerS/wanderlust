import ls from 'local-storage';

export default {
  get(key, defaultValue = null) {
    var value = ls(key);

    return value ? value : defaultValue
  },

  set(key, value) {
    return ls(key, value);
  },

  remove(key) {
    return ls.remove(key);
  }
};
