import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
  proteinbarInfo,
  proteinbarName,
} from "./proteinbar.module.css"


export const Proteinbar = ({ proteinbar, slug }) => {
  const profile = getImage(proteinbar.proteinBarMeta.image.localFile)
  return (
    <Link 
    className={wrapper}
    to={slug}>
      <GatsbyImage
      className={image}
        image={profile}
        alt={proteinbar.proteinBarMeta.image.altText}
      />
      <div className={proteinbarInfo}>
        {proteinbar.proteinBarMeta.name && <p>{proteinbar.proteinBarMeta.name}</p>}
        <p className={proteinbarName}>
          {proteinbar.proteinBarMeta.name}
        </p>
      </div>
    </Link>
  )
}

export default Proteinbar;