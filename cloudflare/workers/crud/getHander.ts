const getHandler: ExportedHandler = {
    async fetch(req: Request): Promise<Response> {
        const JSONResponse = JSON.stringify({
            name: 'Wilson gichuhi', 
            methodHit: '@GET',
            msg:'Auf Wiedersehen'
        })

        return new Response(JSONResponse, {
            headers:{
                'content-type': 'application/json'
            }
        })
    }
}

export default getHandler