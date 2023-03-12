import './styles.scss'

export function Input({ value, onChange, label, width, placeholder }) {
  return (
    <div
      style={{
        width
        //is equal width: width
      }}
    >
      {label && <span>{label}</span>}
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
