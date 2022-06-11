Implemented a VideoChat App using WebSockets in Django (as Signaling Server) and WebRTC in JS (WebRTC API Caller).

With the help of WebSockets in Django, a signaling server is setup which facilitates the connection between peers.
WebSockets help in forming groups and channels and broadcasting messages in a group. 

Peers can join the room using a link/roomcode which is generated at the server side on click of button.

When a new peer enters a room, it broadcasts a message in the group informing about its arrival and starts sending WebRTC offers.
All other participants in the room receive the inform message and offers , for which they generate their answers and send it back to the new joined peer.

The transfer of offers and answers happen through the Django Signaling Server. Code can be found in VideoChatWebApp/videochat/videocall/consumers.py .

When the mutual transfer of offers and answers are over the connection is built between the peers. In this implementation MESH architecture was used to have connection between peers. Once the connection is built then all the media transfer happens using client side JS (WebRTC Calls) .
Code can be found in VideoChatWebApp/videochat/static/js/videocall/videocall.js .
