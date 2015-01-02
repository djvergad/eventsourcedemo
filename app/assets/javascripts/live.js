var LiveClient = (function() {
    return {
        live: function(i) {
            var source = new EventSource("/stream/tick");
            source.addEventListener('messages.keepalive', function(e) {
                console.log("Client "+ i + ' received a message.');
            });
        }
    };
})();
