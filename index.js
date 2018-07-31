const fs = require('fs')
const getContent = require('./utils/get-content')
const sendEmails = require('./utils/send-email')

const run = async () => {
  const html = await getContent()
  if (process.env.MODE === 'PRINT') fs.writeFileSync('test.html', html)
  else await sendEmails(html)
  return true
}

run()
