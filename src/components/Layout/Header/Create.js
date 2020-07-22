import React, { useState, useContext } from 'react'
import { UserContext } from 'context'
import { useRouteMatch, Link } from 'react-router-dom'
import { useQuery } from 'urql'
import { getBookQuery } from 'api'

const CreatePopup = ({ bookId }) => {
  if (!bookId) return <AddBook />
  return (
    <div
      className="sidebar-box sidebar-catalog btn-br"
      style={{
        position: 'absolute',
        top: 72,
        padding: '8px 0',
        marginLeft: '-40px',
      }}
    >
      <Link
        to={`/books/${bookId}/new-chapter`}
        className="header-nav__link"
        style={{ padding: '16px 24px', margin: 0 }}
      >
        Add chapter
      </Link>
      <Link
        to="/new-book"
        className="header-nav__link"
        style={{ padding: '16px 24px', margin: 0 }}
      >
        New book
      </Link>
    </div>
  )
}

const AddBook = () => {
  return (
    <Link to="/new-book" className="header-nav__link">
      Create
    </Link>
  )
}

const AddChapter = ({ bookId }) => {
  return (
    <Link to={`/books/${bookId}/new-chapter`} className="header-nav__link">
      Create
    </Link>
  )
}

export default () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const bookMatch = useRouteMatch('/books/:book')
  const bookId = bookMatch && bookMatch.params.book
  const { user } = useContext(UserContext)

  const [{ data: { book } = {}, fetching, error }] = useQuery({
    pause: !bookId,
    query: getBookQuery,
    variables: {
      id: parseInt(bookId),
    },
  })

  if (!bookId || (book && book.author.id !== user.id)) return <AddBook />

  return (
    <span
      className="header-nav__link"
      onClick={() => setShowDropdown(!showDropdown)}
      style={{ cursor: 'pointer' }}
    >
      Create
      {showDropdown && <CreatePopup bookId={bookId} />}
    </span>
  )
}
