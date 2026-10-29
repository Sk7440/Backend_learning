exports.register = (req,res) =>{
    console.log(req.body);
    
console.log('register route hit');
res.status(200).json({msg: 'register successfull'})

}