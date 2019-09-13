# chrome-extension-ui-events-recorder
v 2.2.1

Installation
1) Open chrome . 
2) Go to chrome://extensions/ 
3) Turn on developer mode on top right corner. 
4) Click on load unpacked and select the folder chrome extension containing content.js or manifest.json etc... files. 
5) Now you can see the extension installed.

After Installation 
1) Left click on ui-extension . 
2) Hover mouse over “This can read and change site data”. 
3) Click on “On All Sites”.

Usage
1) For accessing the extension click on the record icon adjacent to url bar to see pop up window. 
2) Go to trademe.co.nz on the current tab you clicked the icon from 
3) Click on links and buttons it will appear on external browser window. 
4) If you are switching between the tabs, please wait for tab to finish loading or refresh the tab

Key Points
1) Please wait for browser page to be loaded completely before triggering the event. 
2) Even switching between new URLs, please wait for the page to be loaded completely 
3) Make sure the ui-event window is also open.

Password as Input event
1) Password is dashed to static value rather than hashing to improve the speed of the script.
2) Password will not be displayed to anyone

Click Event
1) The Event handler will grab the clicked fields such as link, button very precisely all over the page. 
2) Adjacent point 1 is improved as the event handler grabs other elements such as img, div, span, h1 with their inner text. 
Provided their children nodes to be 0.
3) Value may be empty if there is no value specified by the site itself or the children is not text or may contain another 
element as child. 
For Example: <a> <img><div></div></a> As You see above a link tag “a” is containing other children tag where text value is empty.

Input Event
1) The Event handler will grab input value by ID when user click on input field and type something. 
2) Also when you press tab key 
3) When input does not have ID, then it grabs by input name.
Limitation: 
1) Cannot grab autofill or saved values by browser. 
2) Search engine suggestions are deferred too.

Checks
1) You can check by inspect page and view the console of browsing window of page and see ui recorder is running
When Not in use 
1)Please disable the extension from left click the extension and manage extension or go to chrome://extensions/ 
2) Turn blue button to left in ui recorder extension

Download the script as Json
1) You can see the download button in ui-recorder window. 
2) Click the button an file will be downloaded as json.

Errors
1) You may see errors when you got to chrome://extensions/ in ui recorder window.
2) You can clear the errors by clicking on errors box and clear all on next window.
