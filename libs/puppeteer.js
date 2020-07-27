module.exports = env => {
  const puppeteer = require('puppeteer');

  const init = async () => {
    const browser = await puppeteer.launch({ headless: false, timeout: 0 })
    const page = await browser.newPage()
    let isBlocked = true

    while (isBlocked) { 
      await page.goto(env.URL)
      isBlocked = !await bypassCaptcha(page)
    }
  }

  const bypassCaptcha = async (page) => {
      try {
        await page.waitFor('img[title="Zone Annuaire"]', { timeout: 15000 })
        return true
      } catch(err) {
        if (err.name !== 'TimeoutError') throw err
        return false
      }
  }

  (async () => { 
    await init() 
    console.log('ya pas de galere')
  })()
}