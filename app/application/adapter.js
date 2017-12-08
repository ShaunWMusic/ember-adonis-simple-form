import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  // authorizer: 'authorizer:token',

  host: config.DS.host,
  namespace: config.DS.namespace,
});
