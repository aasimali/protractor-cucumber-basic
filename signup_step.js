var login_steps = function () {

    this.Given("I am on the homepage", function (callback) {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.osianama.com').then(function () {
            callback();
        }, function (err) {
            callback('Unable to redirect to homepage');

        });

    });

    this.When("I click on the Sign up link", function (callback) {
        var signup = element(by.xpath("//a[text()=' Sign Up ']"));
        signup.click().then(function () {
            browser.sleep(5000).then(function () {
                callback();

            },
                function (err) {
                    callback("New Error " + err);
                });

        },
            function (err) {
                callback("New Error " + err);
            });

    });

};

module.exports = login_steps;