import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()
app.use('*', logger())
app.get('/', (c) => {
  return c.text('Hello World')
})

const port = 3000
console.log('server is running on port ${port}')

serve({
  fetch: app.fetch, 
  port
})
