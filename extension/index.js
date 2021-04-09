'use strict';


module.exports = function (nodecg) 
{
	var lastfm_config = require("./model/Config.js")(nodecg)
	var api_key = lastfm_config.getApiKey();

	nodecg.log.debug(api_key)
	
	nodecg.Replicant('textReplicant', {defaultValue: 'TEST 1'})
	nodecg.Replicant('API_KEY', api_key)
	
	require('./last-fm-api-ext')(nodecg);
};

