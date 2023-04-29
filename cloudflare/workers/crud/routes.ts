import { Router } from "itty-router";

const router = Router()


router.get('/', async()=>{
    return new Response('Index route')
})

router.get('/me', async ()=>{
    return new Response('Me Route hit...')
})

router.get('/products', async ()=>{
    const data = ['Mangos', 'Oranges', 'Apples', 'Avocados']
    return new Response(JSON.stringify(data))
})

router.get('*', async()=>{
    return new Response('404 Not Found')
})

export default router