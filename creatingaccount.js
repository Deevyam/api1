const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;
const accounts = [];
app.use(bodyParser.json());
app.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', (req, res) => {
  const newAccount = {
    accountId: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    rollNumber: req.body.rollNumber,
    phone: req.body.phone,
    initialBalance: 10000
  };
  accounts.push(newAccount);
  res.status(201).json({
    status: 'success',
    ...newAccount
  });
});
