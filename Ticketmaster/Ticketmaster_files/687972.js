/*
EFEAT2746 Search Suggest: A/B Test Legacy vs. New UI (US)
Description: Declares the search_suggest_a_b variable to toggle between variants
Author: Chester Militante
Last Updated: 7/11/2016
*/
window.search_suggest_a_b = 2;

// Recent Searches links
jQuery("#search-suggest").delegate('#suggest-header:contains("Recent Searches") + ul > li', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_recent_searches_link"] ]);
});

// Categories links
jQuery("#search-suggest").delegate('#search-suggest-categories > li', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_categories_link"] ]);  
});

// Events Links
jQuery("#search-suggest").delegate('#events_bucket > li:not(:contains("See More"))', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_events_link"] ]);  
});

// See More Events Link
jQuery("#search-suggest").delegate('#events_bucket > li:contains("See More")', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_see_more_events_link"] ]);  
});

// Performers Links
jQuery("#search-suggest").delegate('#attractions_bucket > li:not(:contains("See More"))', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_performers_link"] ]);  
});

// See More Performers Link
jQuery("#search-suggest").delegate('#attractions_bucket > li:contains("See More")', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_see_more_performers_link"] ]);  
});

// Venues Links
jQuery("#search-suggest").delegate('#venues_bucket > li:not(:contains("See More"))', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_venues_link"] ]);  
});

// See More Venues Link
jQuery("#search-suggest").delegate('#venues_bucket > li:contains("See More")', "mousedown", function() { 
  window.monetateQ.push(["trackEvent",["ss_see_more_venues_link"] ]);  
});