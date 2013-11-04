Puljautus
=========

A game where player tries to guess persons name, position, project etc. Live demo at http://www.amigapallo.org/akinnunen/webdev/facequiz/. Code was written in 3 days at Avaus Consulting's hackathon.

## Production configuration

* create a new spreadsheet into google docs
* add sheet per game mode
![image](http://www.amigapallo.org/akinnunen/webdev/gd_example.jpg)
* column A1 has to contain text 'label' and A2 text 'imgUrl'
* add at least 5 rows per sheet
* publish your spreadsheet and copy the spreadsheet key into app.js

## Development

* git clone --recursive git@github.com:akinnunen/puljautus.git
* vagrant up
* vagrant ssh
* cd /vagrant && grunt server
* navigate to http://localhost:9000

### Requirements

* git client >= 1.8.0
* virtualbox >= 4.2.6
* http://downloads.vagrantup.com/tags/v1.3.5

## Issues

* questions are totally random so same questions can be asked multiple times
* 3 out of 4 answers are also picked randomly so there can be same answer multiple times
* grunt currently fails minifying main.css because of https://github.com/yeoman/yeoman/issues/411