'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCart } from '../hook'
import { Game } from '../api'
import { Cart } from '../components/Cart'

const gameCtrl = new Game

export default function page(props) {

  const {searchParams: { step = 1}} = props
  const [games, setGames] = useState(null)
  const{ cart } = useCart()
  // const stepNumber = useSearchParams().get('step')
  const currentStep = Number(step)

  useEffect(() => {
    (async() => {
      try {
        const data= []
        for await ( const item of cart) {
          const response = await gameCtrl.getGameById(item.id)
          data.push({...response.data, quantity: item.quantity})
        }
        setGames(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])
  
  return (
    <>
      { currentStep === 1 && <Cart.StepOne games={games} /> }
      { currentStep === 2 && <Cart.StepTwo games={games} /> }
      { currentStep === 3 && <Cart.StepThree /> }
    </>
  )
  
}
