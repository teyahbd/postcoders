# With more time I would have...

## Task 3 - Form

- BUG: Entering a postcode that fits my form criteria but doesn't exist on the API (after at least one successful API call in the session) will try to update the area count element to the new postcode, and then change to null leaving the line "Areas for null: (previous area count)". I would either remove this element and the results list for 404 errors OR keep the previous result and postcode in state.
- Make the postcode displayed in the results toUpperCase instead of lowercase
- Added more styling
- Added more conditional styling to show the user when an input is valid/invalid i.e. green colouring when the input is correct
- An autofill feature rather than a search so users can only select a valid address & no unnecessary API calls would need to be made. I checked to see if the zippopotamus API had a GET all valid postcodes to implement this but couldn't find anything.

## Task 4 - Cards

- Added more styling (esp. with more time to research MUI styling methods)
- Convert the latitude and longitude from decimal digits to the more readable degrees minutes seconds (i.e. 10 N, 15 W)
- Researched & used MUI Grid instead of flexbox

## Task 5

- Researched more about localStorage as I'm not completely sure it's the right way to implement a cache in this case.
- Added a cache clear to prevent results being stored endlessly in users memory.
