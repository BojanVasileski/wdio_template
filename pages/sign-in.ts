import Page from './base/page';

class SignInPage extends Page {


    get url() { return '/'; }

    get usernameInput() { return $("#username"); }
    get passwordInput() { return $("#password"); }
    get submitButton() { return $("#signOnButton"); }

    // Page specific functions/methods
    signin(email : string, password: string) {
        this.open();
        this.usernameInput.setValue(email);
        this.passwordInput.setValue(password);
        this.submitButton.click();
    }
}

export default new SignInPage();