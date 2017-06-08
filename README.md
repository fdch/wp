# How to update the website

## To add a new event

* Click on [submit], it will prompt for your password and open an Event Form.

## To change the "about" text:

* Edit [this file]{updates/about.txt}

## To add a new WP member:

1. Add a small jpg picture of the member in [img/people]{img/people}.
2. Rename the picture with the name of the new member, like this:

	$ cd wp/img/people
	$ mv "Whatever-12345.JPG" "name_lastname"

	*NOTE: no .jpg extension*

3. Change back to root directory (wp) and run:
	
	$ ls img/people > updates/people-list

	*Alternatively: add a new line to [this file]{updates/people-list}*

## To add a new link in the links section:

* Add a new link respecting format in [here]{updates/links}

## Clone the repository if you want to make more changes:

	$ git clone https://github.com/fdch/wp

## Be sure to read through [this file]{js/main.js}