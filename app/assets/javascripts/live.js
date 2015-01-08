var LiveClient = (function() {
    return {
/*
        live: function(i) {
            var source = new EventSource("/stream/tick");
            source.addEventListener('messages.keepalive', function(e) {
                console.log("Client "+ i + ' received a message.');
            });
        },
*/
        abc: {},
        live_global: function(i) {
            // We set source as global, otherwise we were left
            // with sources remaining open after visiting internal
            // pages
            if (typeof this.abc != "undefined" && this.abc != null) {
                if (this.abc.OPEN) {
                    this.abc.close();
                    console.log("Closed source");
                }
            }
            this.abc = new EventSource("/stream/tick");
            this.abc.addEventListener('messages.keepalive', function(e) {
                console.log("Client "+ i + ' received a message.');
            });
        }
    };
})();
