var gaTracker = (function(dLayer) {

    // Push the object to the dataLayer
    // Parameters:
    // eventName, category, action, label, Type String
    // value Type Number (int)
    var pushEventToDataLayer = function(eventName, category, action, label, value) {
        dLayer.push({
            'event': eventName, // on GTM this would be the event that triggers the tag.
            'category': category,
            'action': action,
            'label': label,
            'value': value
        });
    };

    var isUniversalAnalytics = function(ga) {
        return typeof ga !== 'undefined' && typeof ga.getAll === 'function' ? true : false;
    };

    var isClassicAnalytics = function(_gat) {
        return typeof _gat !== 'undefined' && typeof _gat._getTrackers === 'function' ? true : false;
    };

    // decorate target URL for cross domain tracker.
    var decorateLink = function(url) {
        var trackers, linker;

        if (isUniversalAnalytics(ga)) {
            trackers = ga.getAll();
            if (trackers.length) {
                linker = new window.gaplugins.Linker(trackers[0]);
                url = linker.decorate(url);
            }
        } else if (isClassicAnalytics(_gat)) {
            trackers = _gat._getTrackers();
            if (trackers.length) {
                url = trackers[0]._getLinkerUrl(url);
            }
        }

        return url;
    };

    return {
        event: pushEventToDataLayer,
        decorateLink: decorateLink
    };

})(dataLayer);
