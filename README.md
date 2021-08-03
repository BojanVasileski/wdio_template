# webdriver-io-template
WebDriverIO framework w/ Mocha and carmax.com sign-in example

### Prerequisites:
1. Visual Studio Code (recommended - https://code.visualstudio.com/download) or any IDE/code editor that supports JS
2. NodeJS version 10 or later (https://nodejs.org/en/download/) 

### Setup
1. Clone the repo and open the project folder in your IDE/code Editor
2. Open a terminal at the project directory and run ```npm install``` to download the dependencies

### Run the tests
In the terminal, run ```npm run test:local-qa```  
This should open a new Chrome browser instance on your local machine  
To run a single test, run ```npm run test:local-qa -- --spec <file-location>```  
    Example ```npm run test:local-qa -- --spec .\tests\signInOfferHub.spec.ts```

---
## Helpful Links


### WDIO Basics
			
* Getting Started - https://webdriver.io/docs/gettingstarted.html
* Test Execution - https://webdriver.io/docs/runprogrammatically.html
* WDIO CLI Options - https://webdriver.io/docs/clioptions.html
	
	
### Commands/Libraries

* WDIO API Commands - https://webdriver.io/docs/api.html
* JSForce (JS Salesforce Library) - https://jsforce.github.io/document/
* Sybase Library - https://github.com/mscamargo/sybase-promised
		
### Automated Testing Best Practices
		
* Page Object Model - https://webdriver.io/docs/pageobjects.html 
* Organizing Test Suite - https://webdriver.io/docs/organizingsuites.html
* Defining UI Elements/Locators - https://webdriver.io/docs/selectors.html
	
	
### Other Helpful Links
  
* Retry Flaky Tests - https://webdriver.io/docs/retry.html
* Debugging - https://webdriver.io/docs/debugging.html
* Parallel Execution - https://webdriver.io/docs/multiremote.html
