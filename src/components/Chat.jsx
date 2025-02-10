import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Chat() {
    useEffect(() => {
        (function(d, m){
            var kommunicateSettings =             
            {"appId":"33d633a5f2bfa767d3549b8bb4011b30f","popupWidget":true,"automaticChatOpenOnNavigation":true};         
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;         
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";         
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);         
            window.kommunicate = m; m._globals = kommunicateSettings;     
        })(document, window.kommunicate || {});
    }, []); 
}