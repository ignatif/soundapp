import React from 'react'
import { useHistory } from 'react-router-dom'
import { getUserSlug, getUserDisplayName } from 'helpers'
import BookCover from 'components/atoms/book-cover'
import Ratings from './Ratings'

export default ({ chapter }) => {
  const book = chapter.book
  const { push } = useHistory()

  return (
    <div className="read-book-main">
      <div className="container">
        <div className="col col01">
          <h1 className="title size01">
            {chapter.book.name}
            <br />
            {chapter.title}
          </h1>
          <div
            className="author"
            onClick={() => push(`/${getUserSlug(book.author)}`)}
          >
            {getUserDisplayName(book.author)}
          </div>
          <Ratings chapter={chapter} />
        </div>
        <div className="col col02">
          {book.image ? (
            <img src={book.image || '/img/placeholder.jpg'} alt={book.name} />
          ) : (
            <BookCover book={book} isChapterPage />
          )}
        </div>
      </div>
    </div>
  )
}
