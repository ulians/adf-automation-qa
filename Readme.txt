Readme

Prerequisites:

Install protractor, webdriver-manager.

npm install -g protractor
webdriver-manager update

Install the jasmine reporters:

npm install -g jasmine-spec-reporter
npm install -g protractor-jasmine2-screenshot-reporter

Run "webdriver-manager start" to start the selenium server (will use default address http://localhost:4444/wd/hub).

Steps:
1) Unzip alfresco.zip to C:/ or /home/
2) cd to alfresco unzip directory and run : protractor conf.js. This will run all three *_spec.js tests (files, login and settings).
