import { ENV, authFetch } from '../utils'
import { size } from 'lodash'

export class Cart {

    add(gameId) {

        const games = this.getAll()
        const objIndex = games.findIndex((game) => game.id === gameId)

        if(objIndex < 0) {
            games.push({ id: gameId, quantity: 1 })
        } else {
            const game = games[objIndex]
            games[objIndex].quantity = game.quantity + 1
        }

        localStorage.setItem( ENV.CART, JSON.stringify(games))
    }

    getAll () {
        const response = localStorage.getItem(ENV.CART)

        if(!response) {
            return []
        } else {
           return JSON.parse(response)
        }
        return response
    }
}