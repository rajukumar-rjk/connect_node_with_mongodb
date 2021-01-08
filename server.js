const express = require('express');
const userRouter = require('./routes/api/user');
app = express();


app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started at ${PORT}`))
