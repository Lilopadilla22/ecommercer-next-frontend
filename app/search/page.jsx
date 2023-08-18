// 'use client'
// import React, { useEffect } from 'react'
import { Layout } from '../layout/layout'
import { Game } from '../api'
import { GridGames, NoResult, Pagination, Separator, Search } from '../components/Shared'

export default async function SearchPage(props) {

  const {searchParams: {s, page = 1}} = props
  
  const gameCtrl = new Game
  const responseGames = await gameCtrl.searchGames(s, page); 
  const hasGames = responseGames.data.length 

  return (
    <>
      <Search/>
      <Layout relative isOpenSearch>
        <div style={{paddingLeft: 40, paddingRight: 40}}>
          <Separator height={50}/>
          <h2>Buscando: {s}</h2>
          {
            hasGames > 0
              ? 
                (
                  <>
                    <GridGames games={responseGames.data}/>
                    <Separator height={30}/>
                    <Pagination  currentPage={responseGames.meta.pagination.page} totalPages={responseGames.meta.pagination.pageCount}/>
                  </>
                ) 
              : 
                (
                  <NoResult text ='No se han encontrado resultado'/>
                )
          } 
          <Separator height={100}/>
        </div>
      </Layout>
    </>

  )
}



// { params: {}, searchParams: { s: 'hola todos' } } PROPS
// hola todos viene la s
// ResponseGames {
//   data: [],
//   meta: { pagination: { page: 1, pageSize: 30, pageCount: 0, total: 0 } }
// }

// games: responseGames.data
// pagintation: responseGames.meta.pagination
// searchText: s
