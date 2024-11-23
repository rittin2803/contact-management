const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConfig;