const express = require('express')
const path = require('path');
const _ = require('lodash');
const app = express()
const port = 3000

var cityObj = [
  {
    name_en: "MRF Quatro",
    name_ar: "MRF Quatro",
    name_ku: "MRF قواترۆ",
    name_ba: "MRF Quatro",
    api: "https://test.papi.lucid.studio",
    logo: "https://mrf.group/images/mrflogo.svg",
    sort: 1,
    city: "erbil",
  },
];

app.get('/city', (req, res) => {
  const city = req.query.q || false;
  if (city) {
    let Filtered = _.filter(cityObj, (p) => _.includes(p.city, city));
    res.status(200).json(Filtered);
  } else {
    res.status(200).json(cityObj);
  }
})


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})