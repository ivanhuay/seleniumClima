var webdriverio = require("webdriverio");

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .element("input[name=q]").waitForVisible(3000)
    .setValue("input[name=q]","clima")
    .click("button[value=Buscar]")
    .waitForExist("#wob_wc",5000)
    .getText("#wob_wc").then(function(text){
      console.log("Clima: "+text);
    })
    .end();
