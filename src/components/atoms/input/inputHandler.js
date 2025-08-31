export default function ({ name, onChange }) {
  const inputEl = document.getElementsByName(name)

  if (inputEl.length === 0) {
    console.warn(`No input with the name ${name} found!`)
    return
  }
  if (inputEl.length > 1) {
    console.warn('There is more than one input with this name. onChange will be applied to the first one found!')
  }
  if (typeof onChange === 'function') {
    inputEl[0].addEventListener('input', (e) => {
      console.log(`A value was entered into the field ${name}`)
      onChange(e)
    })
  } else {
    console.warn(`onChange is not a function!`)
  }
}
