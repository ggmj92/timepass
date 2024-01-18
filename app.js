const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endRouteRouter = require('./routes/endRoute');
const hourMiddleware = require('./middleware/hourMiddleware');
const validateHour = require('./middleware/validateHour');

app.use(hourMiddleware);
app.use('/endroute', validateHour, endRouteRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});