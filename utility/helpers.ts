import { waitUntilTimeout } from '../config/settings';
import fileSystem = require('fs');
import faker = require('faker');
import rp = require('request-promise');
import signInPage from '../pages/sign-in';
const settings = require('../config/settings');

export const arrangeTestSession = (url: string) => {
    browser.url(url);
    browser.maximizeWindow();
};

export const arrangeTestSessionAndSignIn = () => {
    browser.maximizeWindow();
    signInPage.signin(settings.username, settings.password);
    // browser.pause(5000);
    // signInPage.zoneSelectButton.waitForDisplayed();
    // signInPage.zoneSelectButton.moveTo();
    // signInPage.AtlantaZone.click();
};



export function addAppraisal() {
    const sourceAssessmentId = Math.floor(Math.random() * 5555555) + 2222222;
    
    var options = {
        method: 'POST',
        uri: 'https://offers-legacyintake.sells-qa.carmax.com/LegacyIntake',
        resolveWithFullResponse: true,
        simple: false,
        body: 
        {
          "id": 0,
          "sourceAssessmentId": sourceAssessmentId,
          "legacyAppraisalId": 54848,
          "conditionAssessor": {
            "associateId": 54321,
            "firstName": "Test",
            "lastName": "Assessor"
          },
          "salesConsultant": {
            "associateId": 77777,
            "firstName": "Test",
            "lastName": "SalesConsultant"
          },
          "source": "Connect",
          "vin": "7FARW2H97JE033475",
          "year": 2018,
          "make": {
            "makeCode": "HO",
            "description": "Honda"
          },
          "model": {
            "modelCode": "CRV",
            "description": "Civic"
          },
          "trim": {
            "trimCode": "EX",
            "description": "EX"
          },
          "body": {
           "bodyCode": "S006",
            "description": "4D Sport Utility"
          },
          "engine": {
            "engineCode": "0015",
            "description": "1.5L"
          },
          "cylinders": "4",
          "transmission": {
            "transmissionCode": "A",
            "description": "Automatic"
          },
          "mileage": 7733,
          "location": {
            "locationNumber": 7103,
            "locationName": "Towncenter",
            "marketQueueName": "Atlanta"
          },
          "customer": {
            "firstName": "Testing",
            "lastName": "Sai"
          },
          "options": [
            {
              "optionCode": "1031",
              "optionDescription": "Sunroof(s)"
            },
                        {
              "optionCode": "3101",
              "optionDescription": "Seat Heaters - Front"
            },
                        {
              "optionCode": "1511",
              "optionDescription": "AM/FM Stereo"
            },
                        {
              "optionCode": "1513",
              "optionDescription": "CD Audio"
            },
                        {
              "optionCode": "1516",
              "optionDescription": "Auxiliary Audio Input"
            },
                        {
              "optionCode": "9755",
              "optionDescription": "Smart Key"
            }
                        
          ],
          "conditions": [
             {
                    "AutomationConditionCode": "1036",
                    "AutomationRatingCode": "30"
                },
                {
                    "AutomationConditionCode": "1028",
                    "AutomationRatingCode": "40"
                },
                {
                    "AutomationConditionCode": "1007",
                    "AutomationRatingCode": "20"
                },
                {
                    "AutomationConditionCode": "1035",
                    "AutomationRatingCode": "10"
                }
          ],
          "packages": [
            {}
          ],
          "images": [
            {
              "url": "https://img2.carmax.com/img/vehicles/17987963/1.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:41:32.699Z",
              "tags": [
              ]
            },
                        {
              "url": "https://img2.carmax.com/img/vehicles/17987963/1.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:42:32.699Z",
              "tags": [
              ]
            },
                        {
              "url": "https://img2.carmax.com/img/vehicles/17987963/2.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:42:33.699Z",
              "tags": [
              ]
            },
                        {
              "url": "https://img2.carmax.com/img/vehicles/17987963/3.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:42:34.699Z",
              "tags": [
              ]
            },
                        {
              "url": "https://img2.carmax.com/img/vehicles/17987963/4.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:42:34.699Z",
              "tags": [
              ]
            },
                        {
              "url": "https://img2.carmax.com/img/vehicles/17987963/5.jpg?cs=0&width=750",
              "description": "string",
              "timestamp": "2020-03-04T14:41:32.699Z",
              "tags": [
                        {
                            "Key": "ConditionId",
                            "Value": "1035"
                        },
                        {
                            "Key": "RatingId",
                            "Value": "10"
                        }
                    ]
            }
          ],
          "lemonLaw": false,
          "greyMarket": false,
          "exteriorColor": {
            "colorCode": 1200,
            "description": "Purple"
          },
          "interiorColor": {
            "colorCode": 25,
            "description": "Green"
          },
          "customerAlerts": [
            "Hey This Is An Automation Test Script"
          ],
          "comments": "Life will be easier with Regression",
          "canadian": false,
          "customerEntryTime": new Date().toISOString(),//"2019-07-23T20:30:35.101Z",
          "AssessmentCompleteTs": new Date().toISOString()//"2019-06-25T13:59:35.101Z"
        }
         ,
        headers: {
            'Authorization' : 'KMX-APIKEY hy68lgzF8xeZxYw65a3J3zzE7HeLWC7xBiM1u8oZ2J8=',
            'Content-Type': 'application/json'
        },
        json: true // Automatically stringifies the body to JSON
    };
    
    
    var offerRequestId;
    browser.call(() => {
        return rp(options)
            .then(function (response) {
                // console.log(response.body.offerRequestId);
                response.body.offerRequestId.should.not.be.empty;    
                offerRequestId = response.body.offerRequestId;
            })
            .catch(function (err) {
                console.error(err);
            });
    });
    return offerRequestId;
};

/*
**********Below functions were left mostly for example purposes**********
*/

export const getDateOfBirthOlderThan18 = () => {

    const today = new Date();
    const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const minimumYear = today.getFullYear() - 99;
    const eighteenYearsAgo = today.getFullYear() - 18;
    const year = faker.random.number({ min: minimumYear, max: eighteenYearsAgo });

    return `${month}${day}${year}`;
};

export const getRandomMonthYearString = () => {
    const today = new Date();
    const moveInOffset = faker.random.number({ min: today.getFullYear() - 20, max: today.getFullYear() });
    return `${("0" + (today.getMonth() + 1)).slice(-2)}${moveInOffset}`;

}

export const getFormattedDate = (date: Date) => {

    const day = date.getDate();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${month}${day}${year}`;
};

export const selectDropDownListValue = function (inputSelector: string, value: string) {
    let handle = $(`input[name=${inputSelector}] + div.kmx-select__wrapper`);
    handle.click();
    browser.pause(1000);
    let option = $(`div.kmx-select__option*=${value}`);
    browser.pause(1000);
    option.click();
    browser.pause(1000); // Wait for React component to update state
}

export const setValueIfNoValueExists = function (element: WebdriverIO.Element, value: any) {

    let textLength = element.getValue().length;

    if (textLength === 0) {
        element.setValue(value);
    }
}

export const browserExecuteClick = (element: WebdriverIO.Element) => {
    browser.execute("arguments[0].click();", element);
};

export const waitForUrlToInclude = (searchString: string) => {
    browser.waitUntil(() =>
        browser.getUrl().includes(searchString)
        ,{ timeout: waitUntilTimeout });
};

export const waitForUrlToEndWith = (searchString: string) => {
    browser.waitUntil(() => 
        browser.getUrl().endsWith(searchString)
    ,{ timeout: waitUntilTimeout });
};