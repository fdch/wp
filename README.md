# How to update the website

## Event

Click on **submit**, it will prompt for password and open an Event Form.

## About

Edit the text in [updates/about.txt]{updates/about.txt}

## People:

To add a new WP member:

### Picture

Add a small jpg picture of the member in [img/people]{img/people}.

### Rename Picture Filename

Rename the picture with the name of the new member, like this:

	$ cd wp/img/people
	$ mv "Whatever-12345.JPG" "name_lastname"

	*NOTE: no .jpg extension*

3. Run this from root directory (wp):

	$ ls img/people > updates/people-list

	*Alternatively: add a new line to [updates/people-list]{updates/people-list}*

## To add a new link in the links section:

Add a new link respecting format in [updates/links]{updates/links}

## Clone the repository if you want to make more changes:

	$ git clone https://github.com/fdch/wp

## Be sure to read through [js/main.js]{js/main.js}