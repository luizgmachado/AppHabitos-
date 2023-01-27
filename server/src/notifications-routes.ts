import WebPush from 'web-push'
import { FastifyInstance } from "fastify";
import { z } from "zod"

//console.log(WebPush.generateVAPIDKeys())

const publicKey = 'BPHWh_mi_KFPVPKM91zcK6CTrERudq799FffO99MUnGRgUfddLvLHGumr9tdq0cGY28GU9OqhClF5RGzPzPz35M'
const privateKey = '3jpHDs3EynhVknA95-A_TwA25JbPqyshdcYT6Yr-9hw'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public-key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()

        })
      })
    })
    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(()=> {
      WebPush.sendNotification(subscription, 'HELLO DO BACKEND')
    }, 5000)

    return reply.status(201).send()
  })    
}

