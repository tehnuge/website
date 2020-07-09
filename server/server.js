const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.post('/send', (err, req, res, next) => {
   console.error(err.stack)

   console.log(req.body)
   res.send("success")
})

app.listen(port, () => {
   console.log('Server is up!');
});