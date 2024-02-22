import './EmptySearchResults.css'

function EmptySearchResults({ value }) {
  return (
    <div className="empty-search-results-container">
      <p className="empty-search-results">{`No TODO matches "${value}"`}</p>
    </div>
  )
}

export { EmptySearchResults }
