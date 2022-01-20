export default function Section({ title, description, cta, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {
        description &&
        <p>
          {description}
        </p>
      }
      {children}
      {
        cta &&
        <a href="#">{cta}</a>
      }
    </div>

  )
}
