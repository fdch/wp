# Website for the Waverly Project Organization

Erratum: I tried to keep the code as readable as possible in [js/main.js](js/main.js) If you'd like to clone it and make your own pull/push, you are more than welcome!

# How to update the website

Mostly everything updatable is on [updates](updates). There are also some other [smaller] updatable things in [js/config.js](js/config.js). Please read these instructions:

## Event

Click on **submit**, it will prompt for password and open an Event Form.

## About

Edit the text in [updates/about.txt](updates/about.txt)

## People:

To add a new WP member:

### Picture

Add a small jpg picture of the member in [img/people](img/people).

### Rename Picture Filename

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
