// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require('./router/user.router');

// const app = express();
// const PORT = 3000; 
// app.use(express.json()); 
// mongoose.connect('mongodb://localhost:27017/bmi', {
//     anujSaini: true,
//     deepakSaini: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("DB connection error:", err));

// app.use('/users', userRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// const mongoose = require('mongoose');
// const express = require('express');
// const userRouter = require('./router/user.router');
// const app = express();
// const PORT = 5000;

// app.use(express.json());
// mongoose.connect("mongodb://localhost:27017/anuj",
//     {
//         dbName: "auser"
//     }
// ).then(() => console.log("MongoDb connected"))
//     .catch(err => console.log("MongoDb Connection Error", err));
// app.use('/users', userRouter);
// app.listen(PORT, () => console.log(`Starting a mongodb://localhost:${PORT}`))


// const express = require('express');
// const mongoose = require('mongoose');
// const anujRouter = require('./router/user.router');
// const app = express();
// const PORT = 3000;
// app.use(express.json());
// mongoose.connect('mongodb://localhost:27017', { dbName: "anujsaini" })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.error('Mongodb Connection Error', err))
// app.use('/checking', anujRouter);
// app.listen(PORT, () => console.log(`Starting a server localhost:${PORT}`))

// const express = require('express');
// const mongoose = require('mongoose');
// const userRouter = require('./router/user.router')
// const app = express();
// const PORT = 3000;
// app.use(express.json());
// mongoose.connect('mongodb://localhost:27017', { dbName: "newdatabase" })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDb Connection Error", err))
// app.use('/users', userRouter);
// app.listen(PORT, () => console.log(`Server Starting a localhost:${PORT}`))

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


const userRouter = require('./router/user.router');
const productRouter = require('./router/product.router');
const { dbconnect } = require('./config/database');
dbconnect()

const app = express();

app.use(cors({
    origin:"*",
    credentials :true,
}));
app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// mongoose.connect("mongodb://localhost:27017/data", {
//     dbName: 'bmiupdate'
// })
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch(err => console.error("❌ MongoDB Connection Error:", err));



app.use('/api/users', userRouter);
app.use('/api/product', productRouter)

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));