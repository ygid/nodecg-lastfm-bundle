module.exports = function (nodecg) {
	var $ = require('jquery')
    
    var ROUTE_LASTFM_API     = null;
    var USERNAME_LASTFM_API  = null;
    var IMAGE_LASTFM_NOIMAGE = null; // will be a resource from nodecg

	function load_lastfm_api() {

        if (!ROUTE_LASTFM_API || !USERNAME_LASTFM_API) {
            return
        }

        $.ajax({
            type: "get",
            url: ROUTE_LASTFM_API,
            data: {
                username: USERNAME_LASTFM_API
            }
        }).done(function (response) {
    
            console.log(response.content);
            if (response.content == false) {
            //    $(".lastfm_img").attr('src', IMAGE_LASTFM_NOIMAGE );
            //    $(".lastfm_artist").html('-');
            //    $(".lastfm_album").html('-');
            //    $(".lastfm_song").html('-');
            } else {
                if (response.content.artwork != '') {
                    $(".lastfm_img").attr('src', response.content.artwork);
                } else {
                    $(".lastfm_img").attr('src', IMAGE_LASTFM_NOIMAGE);
                }
                $(".lastfm_url").attr('href', response.content.url);
                $(".lastfm_artist").html(response.content.artist);
                $(".lastfm_album").html(response.content.album);
                $(".lastfm_song").html(response.content.trackName);
            }
        });
    }
    load_lastfm_api()
};

