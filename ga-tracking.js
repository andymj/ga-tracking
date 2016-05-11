var gaTracker = (function(dLayer){

	// Push the object to the dataLayer
	// Parameters:
	// eventName, category, action, label, Type String
	// value Type Number (int)
	var trackEvent = function(eventName, category, action, label, value) 
		dLayer.push({
			"event" 	: eventName,			// on GTM this would be the event that triggers the tag.
			"category" 	: category,				
			"action"	: action,
			"label"		: label,
			"value"		: value 
		});	
	};

	// decorate target URL for cross domain tracker.
	var decorateLink = function(url) {
		var trackers, linker;

		//decorate the url
		//if universal analytics is used
       	if(typeof ga !== "undefined" && typeof ga.getAll === 'function') {
         	trackers = ga.getAll();
         	if(trackers.length) {
           		linker = new window.gaplugins.Linker(trackers[0]);
           		url = linker.decorate(url);
         	} 
       	}

       //if classic analytics is used
       	if( typeof _gat !== "undefined" && typeof _gat._getTrackers === 'function') {
     		trackers = _gat._getTrackers();
     		if(trackers.length) {
       			url = trackers[0]._getLinkerUrl(url);
     		}
       	} 
       
       	return url;
        
    };

	var tracker = {
		"event" : trackEvent,
		"decorateLink" : decorateLink
	};

	return tracker;

})(dataLayer);