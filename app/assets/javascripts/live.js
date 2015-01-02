var LiveClient = (function() {
    return {
        live: function(i) {
            var source = new EventSource("/stream/tick");
            source.addEventListener('messages.keepalive', function(e) {
                console.log("Client "+ i + ' received a message.');
            });
        },
        live_global: function(i) {
            // We set source as global, otherwise we were left
            // with sources remaining open after visiting internal
            // pages
            if (typeof source != "undefined" && source != null) {
                if (source.OPEN) {
                    source.close();
                    console.log("Closed source");
                }
            }
            source = new EventSource("/stream/tick");
            source.addEventListener('messages.keepalive', function(e) {
                console.log("Client "+ i + ' received a message.');
            });
        }
    };
})();
