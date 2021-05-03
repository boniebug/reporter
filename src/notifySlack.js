const axios = require('axios');
const WEBHOOK_URL = process.env.SLACK_WEBHOOK;

const notifySlack = () => {
  const data = {
    blocks: [
      {type: 'section', text: {type: 'mrkdwn', text: 'Hi :wave:'}},
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            '*Generated report and deployed at https://boniebug.github.io/reporter *',
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Report generated at *${new Date().toLocaleString()}*`,
        },
      },
    ],
  };
  axios.post(WEBHOOK_URL, data);
};

notifySlack();
