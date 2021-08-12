import express from 'express'

const app = express()

app.get('/', (req, res) => console.log('Get'))

app.listen(3333, () => console.log('Server is running...'))
