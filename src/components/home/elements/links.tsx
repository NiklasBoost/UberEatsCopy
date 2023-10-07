import { UnderSiteLinksProps } from "../../../types/home/elements/linksTypes"


export function UnderSiteLinks({ linkClass, linkText }: UnderSiteLinksProps) {
  return (
    <a 
      href=""
      className={linkClass}
    >
      {linkText}
    </a>

  )
}



