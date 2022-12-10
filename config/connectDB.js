const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DATA_URL)
        console.log(`database is connected successfully`)
    } catch (error) {
        console.log(`database did not connect`)
    }
}

module.exports=connectDB