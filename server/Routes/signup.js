import express from 'express';

const router = express.Router();

router.post('/signup',function(req,res){

    User.register(new User({username:req.body.username, email: req.body.email}),req.body.password,function(err,user){
        if(err) {
            console.log(err);
            return res.status(200).json({message: err});
        }
        passport.authenticate("local")(req,res,function(){
            res.status(200).json({message: 'Authentication Successful'});
        });
    });
});

export default router; 