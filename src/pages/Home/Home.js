import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { UserContext } from 'context'
import { useHistory } from 'react-router-dom'

import Flex from 'components/atoms/flex'
import Loader from 'components/atoms/loader'
import Header from 'components/Layout/Header'
// import Landing from 'pages/Landing'
import Explore from 'components/Explore'

import WelcomeContent from 'pages/Welcome/Content'
import UpdatesFeed from 'components/organisms/feeds/updates_feed'

export default () => {
  const { user, fetching } = useContext(UserContext)
  const { push } = useHistory()

  useEffect(() => {
    if (window.analytics) {
      window.analytics.page('home')
    }
  }, [])

  useEffect(() => {
    // If user doesn't follow anyone - redirect him to welcome page
    if (
      user &&
      user.favoriteBooks.length === 0 &&
      user.books.length === 0 &&
      user.following.length === 0
    ) {
      push('/welcome')
    }
  }, [user, push])

  if (fetching) {
    return (
      <div className="asdh2jj">
        <Loader />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="page-home">
        <Header />
        <Flex column style={{ marginTop: 124 }}>
          <Explore />
        </Flex>
        {/*
      <Footer centered />
      */}
      </div>
    )
  }

  // return <UpdatesFeed />

  return (
    <div className="page-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calmpaper</title>
      </Helmet>
      <Header />
      <div className="page-empty" style={{ marginTop: -84 }}>
        <WelcomeContent />
      </div>
      <Flex column style={{ marginTop: -128 }}>
        <UpdatesFeed />
      </Flex>
    </div>
  )
}
