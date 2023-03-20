import './styles.scss'

export function Input({ value, onChange, label, width, placeholder, type }) {
  return (
    <div
      style={{
        width
        //is equal width: width
      }}
    >
      {label && <span>{label}</span>}
      <input
        type={Text}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        typeof={type}
      />
    </div>
  )
}
