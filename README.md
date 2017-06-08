# Website for the Waverly Project Organization

Erratum: I tried to keep the code as readable as possible in [js](js) If you'd like to clone it and make your own pull/push, you are more than welcome!

	$ git clone https://github.com/fdch/wp

You can use [p-](p-) to make your pushes after you edit

	$ ./p- "useful description regarding your commit"

# How to update the website

Mostly everything updatable is on [updates](updates). There are also some other [smaller] updatable things in [js/config.js](js/config.js). Please read these instructions:

## Event

To make a new event:

1. Click on the **submit** menu. This menu item will prompt a new window. You might need to disable the Pop-Up Blocker for this.
2. Input the correct password.
3. Fill and submit the Google Form.
4. Close the pop-up window.
2. Click on the **events** menu and your event should now be added to the list.

## About

Edit the text in [updates/about.txt](updates/about.txt)

## People:

To add a new WP member:

### Take a picture

Add a small jpg picture of the member in [img/people](img/people).

### Rename that picture

Rename the picture with the name of the new member, like this:

	$ cd wp/img/people
	$ mv "Whatever-12345.JPG" "name_lastname"

*NOTE: no .jpg extension*

### Update [updates/people-list](updates/people-list)

Run this from root directory [wp]:

	$ ls img/people > updates/people-list

*Alternatively: edit the file directly on github*

## To add a new link in the links section:

Add a new link respecting format in [updates/links](updates/links)
