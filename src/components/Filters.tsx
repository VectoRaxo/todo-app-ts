import { TODO_FILTERS, FILTERS_BUTTONS } from "../consts"

interface Props {
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('All')
          }}
          >
            Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('active')
          }}
          >
            Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => {
            onFilterChange('completed')
          }}
          >
            Completados
        </a>
      </li>
    </ul>
  )
}
