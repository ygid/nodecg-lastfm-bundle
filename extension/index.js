'use strict';


module.exports = function (nodecg) 
{
	var lastfm_config = require("./model/Config.js")(nodecg)
	var api_key = lastfm_config.getApiKey();
	var username = lastfm_config.getUsername();

	nodecg.log.debug(api_key)
	
	nodecg.Replicant('textReplicant', {defaultValue: 'TEST 1'})
	
	nodecg.Replicant('API_KEY', api_key)
	nodecg.Replicant('USERNAME', username)

	const usernameReplicant = nodecg.Replicant('USERNAME');
	const apiKeyReplicant   = nodecg.Replicant('API_KEY');
	usernameReplicant.on('change', value=> {
		nodecg.log.debug("????")
		lastfm_config.setUsername(value);
	})
	
	require('./last-fm-api-ext')(nodecg);
};

