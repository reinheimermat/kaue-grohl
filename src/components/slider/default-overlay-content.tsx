interface DefaultOverlayContentProps {
  label: string
  description: string
}

export function DefaultOverlayContent({
  label,
  description,
}: DefaultOverlayContentProps) {
  return (
    <div>
      <header>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </header>

      <button type="button">Custom Order</button>
      <button type="button">Existing Inventory</button>
    </div>
  )
}
