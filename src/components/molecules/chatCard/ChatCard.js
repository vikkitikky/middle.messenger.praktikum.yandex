import Link from '../../atoms/link/Link.js'

export default function ({ chatId, navigate }) {
  Link({
    linkId: chatId,
    navigate,
  })
}
