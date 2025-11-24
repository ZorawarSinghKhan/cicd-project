const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ msg: 'Hello CI/CD' }));
if (require.main === module) app.listen(3000, ()=> console.log('Listening 3000'));
module.exports = app;
