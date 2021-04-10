'use strict';


module.exports = function (nodecg) 
{
	// var lastfm_config = require("./model/Config.js")(nodecg)
	// var api_key = lastfm_config.getApiKey();
	// var username = lastfm_config.getUsername();
	// nodecg.log.debug(api_key)
	
	nodecg.Replicant('textReplicant', {defaultValue: 'TEST 1'})
	
	nodecg.Replicant('API_KEY', {defaultValue: "", persistent: true})
	nodecg.Replicant('USERNAME', {defaultValue: "", persistent: true})
	
	require('./last-fm-api-ext')(nodecg);
};

