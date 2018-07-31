const fs = require('fs')
const path = require('path')
const showdown = require('showdown')

const converter = new showdown.Converter()

const getIssue = date => {
  console.log("reading today's issue")

  /* Read today's issue from issues folder */
  let filePath = path.join(process.cwd(), 'issues', date + '.md')

  /*
    Check if file exists

    If we forget/miss a week, the newsletter should not stop
    It will pick up _backup.md

    If we miss a week, we can change the articles in _backup.md for next time
  */

  const exists = fs.existsSync(filePath)
  if (!exists) filePath = path.join(process.cwd(), 'issues', '_backup.md')

  const markdown = fs.readFileSync(filePath, 'utf8')
  const html = converter.makeHtml(markdown)
  return html
}

module.exports = getIssue
