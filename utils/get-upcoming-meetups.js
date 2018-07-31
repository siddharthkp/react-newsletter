const axios = require('axios')
const moment = require('moment')

const url = 'https://api.meetup.com/ReactJS-Bangalore/events?status=upcoming'

const getMeetups = async () => {
  console.log('fetching meetups')
  const response = await axios.get(url)

  const meetups = response.data.map(meetup => ({
    name: meetup.name,
    date: moment(meetup.local_date).format('Do MMM'),
    link: meetup.link
  }))

  return meetups
}

module.exports = getMeetups
