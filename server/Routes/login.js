import express from 'express';
const router = express.Router();

router.post('/login',passport.authenticate("local",{successRedirect:'/campgrounds',failureRedirect:'/login'}),function(req,res){
    
});

export default router;