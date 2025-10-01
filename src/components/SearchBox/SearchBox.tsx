import type { DebouncedState } from "use-debounce"
import css from "./SearchBox.module.css"

interface SearchBoxProps{
  onChange:DebouncedState<(value: string) => void>
  text:string
}


export default function SearchBox({onChange, text}:SearchBoxProps) {
 
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={text}
      onChange={handleChange}
    />
  )
}
