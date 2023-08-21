'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCart } from '../hook'
import { Game } from '../api'

const gameCtrl = new Game

export default function page() {

  const [games, setGames] = useState(null)

  const{ cart } = useCart()
  const step = useSearchParams().get('step')
  const currentStep = Number(step)


  useEffect(() => {
    (async() => {
      try {
        const data= []
        for await ( const item of cart) {
          const response = await gameCtrl.getGameById(item.id)
          data.push({...response.data, quantity: item.quantity})
          console.log(response, 'QUE ESESTO🤷‍♀️')
        }
        console.log(data, 'DATAAAAAA')
        setGames(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])
  

  return (
    <>
      { currentStep === 1 && <p>StepOne</p> }
      { currentStep === 2 && <p>StepTwo</p> }
      { currentStep === 3 && <p>stepThree</p> }
    </>
  )
  
}
