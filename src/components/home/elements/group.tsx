import { UnderSiteLinks } from "./links"


//source und picture headline müssen variable eingefügt werden können
export function PictureElementGroup ( { linkText } ) {
  const linkClass = 'link-to-undersite';
  return (
    <div className="one-picture-block">
      <a>
        <img className="one-picture" src="" />
        <h2 className="picture-headline"></h2>
        <UnderSiteLinks
          linkClass={linkClass}
          linkText={linkText}
        />
      </a>
    </div>
  )
}
