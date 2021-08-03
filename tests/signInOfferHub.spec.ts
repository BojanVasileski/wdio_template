const settings = require('../config/settings');
import { arrangeTestSession, waitForUrlToInclude } from '../utility/helpers'
import signInPage from '../pages/sign-in'

describe('Sign In', () => {
 
    // ******** We shouldn't test the Ping sign on. This is for example purposes only
    before(() => {
        arrangeTestSession(signInPage.url);
    });

    it('A user can sign in with valid credentials', () => {     
        signInPage.usernameInput.addValue(settings.username);
        signInPage.passwordInput.addValue(settings.password);
        signInPage.submitButton.click();

        //Wait for URL to include /queue
        waitForUrlToInclude('/queue');
        //Assert that we're redirected to the queue page
        browser.getUrl().should.contain('/queue');
    });

});