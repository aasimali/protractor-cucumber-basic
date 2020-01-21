
describe("Read OTP", function () {

    it("should find the otp and store it", function (callback) {
        var defer = protractor.promise.defer();


        var ews = require('ews-javascript-api');
        var service = new ews.ExchangeService(ews.ExchangeVersion.Exchange2013);
        service.Credentials = new ews.ExchangeCredentials("Aasim_anwar@outlook.com", "*********");
        service.Url = new ews.Uri("https://outlook.office365.com/Ews/Exchange.asmx");
        ews.Folder.Bind(service, ews.WellKnownFolderName.Inbox).then(function (MailInbox) {
            var view = new ews.ItemView(10);
            view.PropertySet = new ews.PropertySet(ews.BasePropertySet.FirstClassProperties);

            MailInbox.FindItems("Verification token", view).then(function (mailItems) {
                console.log("1")

                for (let item of mailItems.Items) {
                    console.log("2")
                    console.log(item.Subject);
                    console.log(item.DateTimeReceived.toString());

                    (item.Load(new ews.PropertySet(ews.BasePropertySet.FirstClassProperties, [ews.EmailMessageSchema.Body]))).
                    then(function () {
                        console.log(item.Body.Text.replace(/<\/?[^>]+(>|$)/g, ""));

                    }, function (err) {
                        callback('err is ' + err);

                    })
                    // console.log(item.Body.Text.replace(/<\/?[^>]+(>|$)/g, ""));

                    //Store this item.Body.Text in a variable and write a simple logic to get the otp and use it.
                }

            }, function (err) {
                callback('err is ' + err);

            })
        }, function (err) {
            callback('err is ' + err);


        });



    }) // end of it
    callback()

}) // end of desc
