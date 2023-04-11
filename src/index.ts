import { config } from 'dotenv'
if (!process.env.TZ) config({ path: `params.${process.env.NODE_ENV}` })

import express from 'express'
import { Router, Request, Response } from 'express'

const app = express()
const route = Router()

app.use(express.json())
app.set('PORT', process.env.PORT || 8080)
const BASE_PATH = process.env.BASE_PATH

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use(`/${BASE_PATH}/hello`, route)

app.listen(app.get('PORT'), () => {
    console.log(`Express server listening on port ${app.get('PORT')}`)
})