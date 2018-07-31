require('dotenv').config()

const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_TOKEN)
const logger = (err, response) => console.log(err, response)

const options = {
  type: 'regular',
  recipeints: { list_id: 'f58dfbfd5d' },
  settings: { folder_id: '3406b9472d' }
}

const createCampaign = () => {
  console.log('creating a new campaign')
  return mailchimp.post('campaigns', options)
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
  // await testCampaign(id)  // uncomment this line to test
  await sendCampaign(id) // comment this line in test mode!
}

module.exports = sendEmails