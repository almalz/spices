import { button } from './Button.css'

export const Button = ({ label }: { label: string }) => (
  <button className={button}>{label}</button>
)
