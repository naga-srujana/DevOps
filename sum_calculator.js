const { Builder } = require('selenium-webdriver');
require('chromedriver');
const path = require('path');

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Open local HTML file
    await driver.get('file://' + path.resolve(__dirname, 'index.html'));

    // Wait indefinitely until user manually enters numbers and clicks "="
    console.log("✅ Page opened. Enter numbers manually and click '=' to see the result.");

  } catch (e) {
    console.error('❌ Error:', e);
  }
})();

