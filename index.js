const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        status:true,
        msg:"Server is Live"
    })
})

// MongoDB Connection
mongoose.connect('mongodb+srv://anshumapunia0:anshumapunia0@cluster0.1af6tyi.mongodb.net/nowdigitaleasy?retryWrites=true&w=majority');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Use the userRoutes

app.use('/api', userRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
