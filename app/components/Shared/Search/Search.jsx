'use client'
import { useEffect } from 'react'

export function Search() {

    useEffect(() => {
        document.getElementById('search-games').focus()
    }, []) 

  return null
}
