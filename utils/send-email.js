const Mailchimp = require('mailchimp-api-v3')
const moment = require('moment')

require('dotenv').config()

const mailchimp = new Mailchimp(process.env.MAILCHIMP_TOKEN)
const logger = (err, response) => console.log(err, response)

const createCampaign = () => {
  console.log('creating a new campaign')
  return mailchimp.post({
    path: `/campaigns`,
    body: {
      type: 'regular',
      recipients: { list_id: 'f58dfbfd5d' }, // internal variable
      settings: {
        folder_id: '3406b9472d', // internal variable
        subject_line: 'React newsletter ' + moment().format('Do MMM'),
        from_name: 'React Bangalore',
        reply_to: 'siddharth.kshetrapal@gmail.com'
      }
    }
  })
}

const putContents = (id, html) => {
  console.log('inserting content')
  return mailchimp.put({
    path: `/campaigns/${id}/content`,
    body: { html }
  })
}

const testCampaign = id => {
  console.log('sending test email')
  return mailchimp.post({
    path: `/campaigns/${id}/actions/test`,
    body: {
      test_emails: ['enter-your-email-here@gmail.com'],
      send_type: 'html'
    }
  })
}

const sendCampaign = id => {
  console.log('sending emails')
  return mailchimp.post({
    path: `/campaigns/${id}/actions/send`
  })
}

const sendEmails = async html => {
  const { id } = await createCampaign()
  await putContents(id, html)

  if (process.env.MODE === 'SAMPLE') await testCampaign(id)
  else if (process.env.MODE === 'PRODUCTION' && process.env.TRAVIS_EVENT_TYPE === 'cron') {
    await sendCampaign(id)
  } else {
    console.log('nothing to do here')
  }
}

module.exports = sendEmails
