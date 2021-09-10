import Page from './base/page';

class OfferQueuePage extends Page {


    get url() { return '/'; }

    get inProgressButton() { return $("#in-progress-tab"); }
    

    // Page specific functions/methods
    selectAppraisal(offerId : string) {
        // DO NOT USE A CSS SELECTOR HERE - 
        // CSS spec doesn't support 'id' attributes that start with a number
        var selector = '//*[@id="'+offerId+'"]'
        $(selector).waitForDisplayed({timeout:60000});
        $(selector).click();
    }

}

export default new OfferQueuePage();
