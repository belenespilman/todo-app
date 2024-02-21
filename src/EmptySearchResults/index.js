import { useTodos } from '../App/useTodos'
import './EmptySearchResults.css'

function EmptySearchResults() {
  const { searchValue } = useTodos()
  return (
    <div className="empty-search-results-container">
      <p className="empty-search-results">{`No hay ningun TODO con el nombre "${searchValue}"`}</p>
    </div>
  )
}

export { EmptySearchResults }
