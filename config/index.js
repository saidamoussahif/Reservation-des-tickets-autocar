module.exports ={
    PORT: process.env.PORT || 5500,
    DB_URI: process.env.DB_URI || "mongodb://127.0.0.1:27017/BookingSystemDB",
    MONGOOSE_OPTIONS:  {useNewUrlParser: true, useUnifiedTopology: true }
} 
