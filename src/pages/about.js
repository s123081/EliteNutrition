import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
  missionSection,
  missionInfo,
} from "../page.module.css"


const AboutPage = ({
  data: {
    wpPage: {
      aboutUs: { headerAboutUs},
    },
  },
}) => {
  const imageHeader = getImage(headerAboutUs.picture.localFile)
  return (
<Layout pageTitle="About Us">
      <div className={header}>
        <div className={headerInfo}>
          <h2 className={subtitle}>{headerAboutUs.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: headerAboutUs.description,
            }}
          />
        </div>
        <GatsbyImage className={headerPicture} image={imageHeader} alt={headerAboutUs.picture.altText} />
      </div>
      
    </Layout>
  )
}



export const query = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUs {
      headerAboutUs {
        title
        description
        picture {
          localFile {
            childrenImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  }
}
`

export default AboutPage