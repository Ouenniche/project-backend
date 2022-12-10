
const jwt=require('jsonwebtoken')
const isAuth=async(req,res,next)=>{
    try {
        const token=req.headers["authorization"]
        if(!token){
            return res.status(401).json({errors:[{msg:"unauthorized access"}]})
        }KEY
        const decoded = jwt.verify(token,process.en.SECRET_KEY)
        if(!decoded){
            return res.status(401).json({errors:[{msg:"unauthorized access"}]})
        }          
        req.user={
            id:decoded.id
        }
        next()
    } catch (error) {
        res.status(401).json({errors:[{msg:"unauthorized access"}]})
    }
}

module.exports=isAuth