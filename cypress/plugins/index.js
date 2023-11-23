// cypress/plugins/index.js
import 'cypress-audit/commands';


const { lighthouse, prepareAudit } = require('cypress-audit');

module.exports = (on, config) => {
  on('task', {
    lighthouse: lighthouse(),
    prepareAudit: prepareAudit(),
  });

  return config;
};
