'use client'
import React, { useEffect } from 'react'
import { Layout } from '../layout/layout'
import { Game } from '../api'
import { Container } from 'semantic-ui-react'
import { GridGames, NoResult, Pagination, Separator } from '../components/Shared'

export default function SearchPage(props) {

  // const {searchParams: {s, page = 1}} = props
  
  // const gameCtrl = new Game
  // const responseGames = await gameCtrl.searchGames(s, page); 

  //games: responseGames.data
  //pagintation: responseGames.meta.pagination
  //searchText: s

    useEffect(() => {
     document.getElementById('search-games').focus()
    }, []) 

  return (
    <Layout relative isOpenSearch>
      <Container>
        <Separator height={50}/>
        <h2>Buscando: searchText</h2>

        {/* {
          responseGames.data ? 
          (<>
            <GridGames games={responseGames.data}/>
            <Separator height={30}/>
            <Pagination  currentPage={responseGames.meta.pagination.page} totalPages={responseGames.meta.pagination.pageCount}/>
          </>) : 
          <NoResult text ='No se han encontrado resultado'/>
        } */}
        <Separator height={100}/>
      </Container>
    </Layout>
  )
}



// { params: {}, searchParams: { s: 'hola todos' } } PROPS
// hola todos viene la s
// ResponseGames {
//   data: [],
//   meta: { pagination: { page: 1, pageSize: 30, pageCount: 0, total: 0 } }
// }
