const express = require('express');

const app = express();

app.use(() => {
    console.log('hello server');
    console.log('papap')
    console.log('jelek')
})

app.listen(4000);