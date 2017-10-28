const Botkit = require('botkit')

const token = process.env.SLACK_TOKEN

const controller = Botkit.slackbot({
  // reconnect to Slack when connection goes bad
  retry: Infinity,
  debug: false,
})

controller.spawn({
  token,
// eslint-disable-next-line no-unused-vars
}).startRTM((err, bot, payload) => {
  if (err) {
    throw new Error('Could not connect to Slack')
  }
})

controller.on('bot_channel_join', (bot, message) => {
  bot.reply(message, 'I\'m here!')
})

controller.hears(['hi'], ['ambient', 'direct_message', 'direct_mention', 'mention'], (bot, message) => {
  bot.reply(message, 'Hello.')
})
