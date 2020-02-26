import { useEffect } from 'react'

interface PageHelmetProps {
  title: string
  link: string
}

export default function PageHelmet(props: PageHelmetProps) {
  useEffect(() => {
    document.title = props.title || 'Neigevoir'
    const link = props.link || window.location.pathname
    const linkRel = 'canonical'
    const node = document.getElementsByTagName('link')
    let isHadLink = false
    for (let i = 0; i < node.length; i++) {
      // NOTE:有link直接修改即可
      if (node[i].rel === linkRel) {
        isHadLink = true
        node[i].href = link
        break
      }
    }
    if (!isHadLink) {
      const newLink = document.createElement('link')
      newLink.rel = linkRel
      newLink.href = link
      document.head.appendChild(newLink)
    }
  }, [props.title, props.link])
  return null
}
