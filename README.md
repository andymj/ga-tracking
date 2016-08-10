# ga-tracking
This is a tool to help you simplify your custom events and cross domain tracking with Google Tag Manager. You should understand how to create tags with Google Tag Manager or have someone to do that for you.

# How to use it?
You need to make sure you have done the following:

1. Set up the ```dataLayer``` above your container snippet (step 2).

2. Add Google Tag Manager snippet before ```</body>```.
  
Check the [official guide](https://developers.google.com/tag-manager/quickstart "Quick Start Guide") if you need help with either step.

# Track Custom Events
* Add the ga-tracking.js file to the footer.
* On your callback function, see the example below to push a custom event.
* ```gaTracker.pushEvent(event_name, event_category, event_type, event_label, event_value)```.
* Where ```event_name, event_category, event_type, event_label``` the Type of the values should be String, and ```event_value``` must be a Number.

# Cross Domain Tracking
```gaTracker.decorateLink(url)```, returns a decorated URL.

Use this only if you need to decorate custom Links.
