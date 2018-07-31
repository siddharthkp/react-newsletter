/* in markdown */
const getBlock = meetup => `
  <div class="meetup">
    <h2>
      <a href="${meetup.link}">${meetup.name}</a>
    </h2>
    <p>${meetup.date}</p>
`

const meetups = list => {
  if (list.length) {
    return `
      <div>
        ${list.map(meetup => getBlock(meetup)).join('\n')}
      </div>
    `
  } else {
    return `<p>To be announced soon!</p>`
  }
}

module.exports = meetups
