export default function ({ onClick, name }) {
  const buttonEl = document.getElementsByName(name)

  if (buttonEl.length === 0) {
    console.warn(`No button with the name ${name} found!`)
    return
  }
  if (buttonEl.length > 1) {
    console.warn('There is more than one button with this name. onClick will be applied to the first one found!')
  }
  if (typeof onClick === 'function') {
    buttonEl[0].addEventListener('click', (e) => {
      e.preventDefault()
      onClick(e)
    })
  } else {
    console.warn('onClick is not a function!')
  }
}
