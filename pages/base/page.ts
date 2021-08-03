export default abstract class Page {
    //Base class for page-classes
    //https://webdriver.io/docs/pageobjects.html#making-a-page-object

    get zoneSelectButton() { return $(".zone-icon"); };
    get AtlantaZone() {return $("//div/ul/li[@value='atlanta']");};
    //get zone(zone: string ) {return $("//div/ul/li[@value='${zone}']");};

    protected baseUrl = (global as any).baseUrl;

    title: string;

    abstract get url(): string;    

    open() {
        browser.url(this.url);
        browser.pause(1000);
    }
}