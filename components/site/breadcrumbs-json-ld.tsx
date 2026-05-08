'use client'

import { usePathname } from 'next/navigation'

export function BreadcrumbsJsonLd() {
  const pathname = usePathname() || '/'
  const baseUrl = 'https://yanko.cl'

  const getCrumbs = () => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const crumbs: any[] = [{ 
      '@type': 'ListItem', 
      position: 1, 
      name: 'Inicio', 
      item: baseUrl + '/' 
    }]

    let path = ''
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i]
      path += '/' + segment
      let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      const pathMap: Record<string, string> = {
        '/proyectos': 'Proyectos',
        '/servicios': 'Servicios',
        '/nosotros': 'Nosotros',
        '/contacto': 'Contacto',
        '/sistemas-de-construccion': 'Sistemas de Construcción'
      }
      if (pathMap[path]) {
        name = pathMap[path]
      }
      crumbs.push({
        '@type': 'ListItem',
        position: crumbs.length + 1,
        name,
        item: baseUrl + path + '/'
      })
    }
    return crumbs
  }

  const itemListElement = getCrumbs()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}