require 'streamer/sse'

class StreamController < ApplicationController
  include ActionController::Live
  def tick
    response.headers['Content-Type'] = 'text/event-stream'
    sse = Streamer::SSE.new(response.stream)
    ActiveRecord::Base.connection.close

    loop do
      sleep 5;
      sse.write("OK".to_json, event: 'messages.keepalive')
    end

  end
end
