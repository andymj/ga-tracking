# ga-tracking.
Track custom events and decorate custom links. You need to understand how to create tags on Google Tag Manager or have someone to do that for you, this is a tool to help you simplify your custom events and cross domain tracking. 

# How to use it?
you need to make sure you have done the following:

1. you must have set up the ```dataLayer``` above your container snippet (step 2).

2. you added already Google Tag Manager snippet before ```</body>```.
  
Don't know how to set up the steps above, [here](https://developers.google.com/tag-manager/quickstart "Quick Start Guide") is the guide.

# Track Custom Events.
* add the ga-tracking.js file to the footer.
* on your callback function, see the example below to push a custom event.
.... ```gaTracker.event(event_name, event_category, event_type, event_label, event_value)```.
* Where ```event_name, event_category, event_type, event_label``` the Type of the values should be String, and ```event_value``` must be a Number.

# Cross Domain Tracking.
Use this only if you need to decorate custom Links.
```gaTracker.decorateLink(url)```, returns a decorated URL.