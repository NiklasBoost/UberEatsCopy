import { UnderSiteLinks } from "./links"
import { PictureElementGroupProps } from "../../../types/home/elements/groupTypes";


//source und picture headline müssen variable eingefügt werden können
export const PictureElementGroup = ( { headLine, image, linkText }: PictureElementGroupProps ) => {
  const linkClass = 'link-to-undersite';
  return (
    <div className="one-picture-block">
      <a>
        <img className="one-picture" src={image} />
        <h2 className="picture-headline">{headLine}</h2>
        <UnderSiteLinks
          linkClass={linkClass}
          linkText={linkText}
        />
      </a>
    </div>
  )
}
