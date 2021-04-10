module.exports = function (nodecg) {
    const { JSDOM } = require( "jsdom" );
    const { window } = new JSDOM( "" );
    const $ = require( "jquery" )( window );
    
    var LASTFM_API_KEY       = nodecg.Replicant('API_KEY');
    var LASTFM_USERNAME      = nodecg.Replicant('USERNAME');
    var IMAGE_LASTFM_NOIMAGE = null;                          // will be a resource from nodecg


	function load_lastfm_data() {

        if (!ROUTE_LASTFM_API || !USERNAME_LASTFM_API) {
            nodecg.log.debug('NOT ENOUGH DATA')
            return
        } else {
            nodecg.log.debug('REQUESTING')
        }

    }

    function makeRequest()
    {
        var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user="
        +LASTFM_USERNAME+"&api_key="+LASTFM_API_KEY+"&format=json";
        nodecg.log.debug(url)
        $.getJSON(url, function(data) {
            nodecg.log.debug(url)
            nodecg.Replicant('lastFmResponse', data)
        });

    }
    
    makeRequest()
};

