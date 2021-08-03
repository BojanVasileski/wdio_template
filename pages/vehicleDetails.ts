import Page from './base/page';

class VehicleDetailsPage extends Page {

  // We need to pass the offer id to this to nav to this page. Will we ever need to do that?
    get url() { return '/vehicle-details/<OfferID_placeholder>'; }

    buildTestSelector(x) {
        return $('//span[text()="'+x+'"]//following-sibling::span//div');
    }
    

  get mileage() { return this.buildTestSelector('Miles') }
  get vin() {return  this.buildTestSelector('VIN') }    
  get engine() {return this.buildTestSelector('Engine') }
  get body() {return this.buildTestSelector('Body') }
  get cylinders() {return this.buildTestSelector('Cylinders') }
  get transmission() {return  this.buildTestSelector('Transmission') }
  get drive() {return  this.buildTestSelector('Drive') }
  get seatMaterial() {return  this.buildTestSelector('Seat Material') }
  get exterior() {return  this.buildTestSelector('Exterior') }
  get interior() {return  this.buildTestSelector('Interior') }
  get source() {return  this.buildTestSelector('Source') }
  get location() {return  this.buildTestSelector('Location') }

  // Page specific functions/methods

}

export default new VehicleDetailsPage();
