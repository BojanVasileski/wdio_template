import { addAppraisal, arrangeTestSessionAndSignIn } from '../utility/helpers'
import offerQueue from 'pages/offerQueue'
import vehicleDetailsPage from 'pages/vehicleDetails';
import {mileage, VIN, engine, body, cylinders, exterior, interior, transmission, drive} from '../constants/text'


describe('Legacy Intake?', () => {
 
    var offerRequestId;
    before(() => {
        // add an appraisal through legacy intake and assign the Id
        offerRequestId = addAppraisal();
        // maximize the browser window and sign into the Offer Hub
        arrangeTestSessionAndSignIn();  
        // select the appraisal that was added through legacy intake
        offerQueue.selectAppraisal(offerRequestId);   
       
    });

    // it("Select Zone: Atlanta", () => {
    //     vehicleDetailsPage.zoneSelectButton.waitForDisplayed();
    //     vehicleDetailsPage.zoneSelectButton.click();
    //     vehicleDetailsPage.AtlantaZone.click();
    // })

    it('The Mileage ..', () => {    
        vehicleDetailsPage.mileage.getText().should.equal(mileage);
    });

    it('Verify VIN Number is displayed in Details Section',() => {
        vehicleDetailsPage.vin.getText().should.equal(VIN);
    });

    it('Verify Engine is displayed in Details Section',() => {
        vehicleDetailsPage.engine.getText().should.equal(engine);
    });

    it('Verify Body is displayed in Details Section',() => {
        vehicleDetailsPage.body.getText().should.equal(body);
    });

    it('Verify Cylinders is displayed in Details Section',() => {
        vehicleDetailsPage.cylinders.getText().should.equal(cylinders);
    });

    it('Verify Transmission is displayed in Details Section',() => {
        vehicleDetailsPage.transmission.getText().should.equal(transmission);
    });

    it('Verify Drive is displayed in Details Section',() => {
        vehicleDetailsPage.drive.getText().should.equal(drive);
    });

    it('Verify Exterior is displayed in Details Section',() => {
        vehicleDetailsPage.exterior.getText().should.equal(exterior);
    });

    it('Verify Interior is displayed in Details Section',() => {
        vehicleDetailsPage.interior.getText().should.equal(interior);
    });

});
