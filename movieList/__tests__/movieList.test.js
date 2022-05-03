const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, deleteMovie } = require('../functions/movieFunctions');

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html');
});

afterAll(async () => {
    await driver.sleep(1000);
    await driver.quit();
});

it('should add new movie to list', async () => {
    await addMovie(driver);
});

it('should delete the movie from list', async () => {
    await deleteMovie(driver);
});