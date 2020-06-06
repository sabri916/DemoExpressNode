const express = require('express');
const MyError = require('./models/error-models').ErrorModel;

//routes
const healthRouter = require('./routes/health-routes').router;
const appRouter = require('./routes/app-routes').router;

const app = express();
const port = 3000;


const userAuthMiddleware = (req, res, next) => {
    const token = req.get('Authorization');
    if(token === 'user' || token === 'admin'){
        next();
    } else {
        res.json(new MyError(1, 401, 'User Not Authorized'));
    }
}

app.use(express.json());
app.use('/health', healthRouter);
app.use('/app', userAuthMiddleware);
app.use('/app', appRouter);

//handle 404
app.use((req, res, next) => {
    res.status(404).json(new MyError(32, 404, 'Route not found =('));
});

//handle 500
app.use((err, req, res, next) => {
    console.log(JSON.stringify(err));
    res.status(500).json(new MyError(33, 500, 'Something went insanely wrong D='));
});

app.listen(port, () => console.log('Starting server...'));