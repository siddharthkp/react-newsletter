const moment = require('moment')
const getIssue = require('./get-issue.js')
const getUpcomingMeetups = require('./get-upcoming-meetups.js')
const mergeContents = require('./merge-contents')

const getContent = async () => {
  /*
    Build issue for today:
    1. Get today's issue from repository
    2. Get upcoming meetups
    3. Merge contents and get full HTML
  */

  // 1. Get today's issue from repository
  const today = moment().format('YYYY-MM-DD')
  const issue = getIssue(today)

  // 2. Get upcoming meetups
  const meetups = await getUpcomingMeetups()

  // 3. Merge contents and get full HTML
  const content = mergeContents(issue, meetups)

  return content
}

module.exports = getContent
