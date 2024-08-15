const router = require('express').Router()
const authRouter = require('./auth.routes')
const tokensRouter = require('./tokens.routes')


router.use('/auth', authRouter)
router.use('/tokens', tokensRouter)


module.exports=router