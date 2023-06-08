const express = require('express');
const bodyParser = require('body-parser')
const { techCompanySignUp } = require('./tests/techSignup.test')
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the actual server')
});

app.post('/webhook', async (req, res) => {
  try {
    const testLog = await techCompanySignUp();
    const responseData = {
      message: 'Hello Zapier',
      testLog
    }
    res.status(200).json(responseData)
  }
  catch (error) {
    res.status(400).json({ message: "Ooops, smth went wrong on /webhook end point, check details", error })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
