import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { twiml } from 'twilio'

const app = new Hono()
app.use('*', logger())
app.post('/incoming-call', (c) => {
  const voiceResponse = new twiml.VoiceResponse()
  voiceResponse.say("Hello, Welcome to Living Word Bible Church.")

  c.header("Content-Type", "application/xml")
  return c.body(voiceResponse.toString())
})

const port = 3000
console.log('server is running on port ${port}')

serve({
  fetch: app.fetch, 
  port
})
