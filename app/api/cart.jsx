import { ENV, authFetch } from '../utils'
import { size } from 'lodash'

export class Cart {
    add(gameId) {
        localStorage.setItem( ENV.CART, JSON.stringify([gameId]))
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