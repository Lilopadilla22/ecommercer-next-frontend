import React, { useEffect, useState } from 'react'
import { Game } from '../../../../api'


const gameCtrl = new Game()
const limit = 9
const platformId = null

export default function LatestGames() {

    const [games, setGames] = useState(null)

    useEffect(() => {
      
        (async ()=> {
            try {
                const response = await gameCtrl.getLatestPublished({limit, platformId})
                setGames(response.data)
            } catch (error) {
                console.error(error)
            }
        })()

    }, [])

    if(!games) return null
    
    return (
        <div>
            Soy el Latest Game
        </div>
    )
}
