export default function ({ linkId, navigate }) {
  if (!linkId) {
    console.warn(`Link element does not exist. Path: ${navigate}`)
    return
  }
  if (typeof navigate !== 'function') {
    console.warn(`navigate is not a function! LinkId: ${linkId}`)
  }
  const linkEl = document.getElementById(linkId)
  const hrefAttrValue = linkEl?.getAttribute('href')

  if (linkEl && hrefAttrValue) {
    linkEl.addEventListener('click', (e) => {
      e.preventDefault()
      navigate(e, hrefAttrValue)
    })
  }
}
