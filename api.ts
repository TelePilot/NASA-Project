import { Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts'

import * as planets from './models/planets.ts'

const router = new Router()

router.get('/', (ctx) => {
	ctx.response.body = ` o   o  O  o-o  O   o   o-O-oo-oo-o-O-o-o o   o 
    |\  | / \|    / \  |\ /| | |  |    |o   o|\  | 
    | \ |o---oo-oo---o | O | |  o-oo-o ||   || \ | 
    |  \||   |   |   | |   | |     |  ||o   o|  \| 
    o   oo   o--oo   o o   o-O-o--o--o-O-o-o o   o 
                                                   
                                                   
      o-o-o o   o-O-o--o  o-o o                    
     / o   o|\  | | |   |o   o|                    
    O  |   || \ | | O-Oo |   ||                    
     \ o   o|  \| | |  \ o   o|                    
      o-o-o o   o o o   o o-o O---o    `
})

router.get('/planets', (ctx) => {
	ctx.response.body = planets.getAllPlanets()
})

export default router
