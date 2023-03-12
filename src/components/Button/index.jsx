import './styles.scss'

export function Button({ title, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {title}
    </button>
  )
}
