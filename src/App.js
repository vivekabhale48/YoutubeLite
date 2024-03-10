import React from 'react'
import { ApiContext } from './context/contextApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResults from './components/SearchResults'
import VideoDetails from './components/VideoDetails'

const App = () => {
  return (
    <ApiContext>
      <BrowserRouter>
        <div className='main-wrapper-header'>
          <Header />
          <Routes>
            <Route path='/' element={<Feed />}/>
            <Route path='/searchResults/:searchQuery' element={<SearchResults />}/>
            <Route path='/video/:videoId' element={<VideoDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ApiContext>
  )
}

export default App