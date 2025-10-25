const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D264434993625956352%26scope%3Didentify%26redirect_uri%3Dhttps%253A%252F%252Ftop.gg%252Flogin%252Fcallback%26response_type%3Dcode');

        //login
        await driver.findElement(By.name('email')).sendKeys(''); //email
        await driver.findElement(By.name('password')).sendKeys('', Key.ENTER); //password

        await function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }
        await new Promise(resolve => setTimeout(resolve, 9000));
     
        await driver.findElement(By.className('button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN')).sendKeys(Key.RETURN);
        await new Promise(resolve => setTimeout(resolve, 6000));
    
        await driver.findElement(By.id('search-input-bar')).sendKeys('Barold', Key.RETURN);
        await new Promise(resolve => setTimeout(resolve, 9000));
      
        await driver.findElement(By.className('btn-like btn')).sendKeys(Key.RETURN);
        await new Promise(resolve => setTimeout(resolve, 30000));
    
        await (await driver.findElement(By.className('voting btn btn-orange btn-4x'))).click();
    }
    finally {
    }

})();
