<p align="center">
  <img src="https://pbs.twimg.com/profile_images/858598840504594433/9bUSplvn_400x400.jpg" height="200px"/>
  <br><br>
  <b>Repo for react newsletter</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/react-newsletter.svg?branch=master&maxAge=3600"/>
</p>

&nbsp;

#### usage

We need to create a new issue for every week based on date in `/issues` folder. It uses markdown, so you can use headings, images, lists, links, etc.

It will be picked up automatically by a cron running on travisCI

&nbsp;

#### development

- Clone this repo and run npm install

- The styles sit in `template/styles.css`

- You can run `npm run print` to create a `test.html`
  This is a sample file to see how will the email look. Emails are very limiting, so things might not look exactly how they look in html

- You can run `npm run sample` to send a test email to yourself
  This is the only reliable test. Copy `.env.sample` to `.env` and get a mailchimp token from @siddharthkp

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
