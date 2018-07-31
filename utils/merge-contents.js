const fs = require('fs')
const path = require('path')

const header = require('../templates/header')
const meetups = require('../templates/meetups')
const styles = fs.readFileSync(path.join(__dirname, '../templates/styles.css'), 'utf8')

const mergeContents = (issue, meetupList) => {
  console.log('merging content')

  /* Get meetup HTML by passing meetup list */
  const meetupHTML = meetups(meetupList)

  /* Replace hardcoded string with HTML */
  const body = issue.replace('{{upcoming_meetups}}', meetupHTML)

  /* Add styles and header */
  return `
    <html>
      <head>
        <style>${styles}</style>
      </head>
      <body>
        ${header}
        ${body}
      </body>
    </html>
  `
}

module.exports = mergeContents
