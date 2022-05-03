const { By } = require('selenium-webdriver');

const addMovie = async (driver) => {

    const addMovieInput = await driver.findElement(By.xpath('//input'));
  
    addMovieInput.sendKeys('Back to the future');
    // await.driver.findElement(By.xpath('//input')).sendKeys('Back to the Future');

    const addMovieButton = await driver.findElement(By.xpath('//button'));

    addMovieButton.click();
    //await driver.findElement(By.xpath('//button')).click();
  
    await driver.sleep(1000);
  
    const movie = await driver.findElement(By.xpath('//li'));
  
    const isDisplayed = movie.isDisplayed();
  
    expect(isDisplayed).toBeTruthy();
  };

  const deleteMovie = async (driver) => {
    // const lineItemMovie = await driver.findElement(By.xpath('//li'));

    const deleteMovieBtn = await driver.findElement(By.xpath('//li/button'));

    deleteMovieBtn.click();

    await driver.sleep(1000);
  };
  
  module.exports = { addMovie, deleteMovie };