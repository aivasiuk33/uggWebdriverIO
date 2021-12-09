describe('Test', async function() {
    it('Test', async function() {
        await browser.url('https://www.ugg.com/login')

        await browser.getTitle().then(function(title) {
            console.log('Title is: ' + title)
        })
        await browser.pause(10000)
    })
})