const router = require('express').Router()
const authRouter = require('./auth.routes')
const tokensRouter = require('./tokens.routes')
const themesRouter = require('./themes.routes')
const scoresRouter = require('./scores.routes')
const answersRouter = require('./answers.routes')


router.use('/auth', authRouter)
router.use('/tokens', tokensRouter)
router.use('/themes', themesRouter)
router.use('/scores', scoresRouter)
router.use('/answers', answersRouter)


module.exports=router