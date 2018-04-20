const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;

const app = express();

app.use("/", express.static('./build/es5-bundled'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})