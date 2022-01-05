import * as React from "react"
import Layout from "../components/layout"
import {  graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Proteinbar from "../components/proteinbar"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  section,
  subtitle,
  featuredBars,
} from "../page.module.css"

const IndexPage = ({data: {wpPage: {eliteNutritionPage}}}) => {
  const image = getImage(eliteNutritionPage.headerHome.picture.localFile)  
  return (
    <Layout>
    <div className={header}>
      <div className={headerInfo}>
        <h1 className={headerTitle}>{eliteNutritionPage.headerHome.title}</h1>
        <div dangerouslySetInnerHTML={{__html: eliteNutritionPage.headerHome.description}}/>
      </div>
        <div>
          <GatsbyImage image={image} className={headerPicture} alt={eliteNutritionPage.headerHome.picture.altText}/>
        </div>
      </div>

      <div className={section}>
    <h2 className={subtitle}> {eliteNutritionPage.featuredProducts.title}</h2>
    <p> {eliteNutritionPage.featuredProducts.description}</p>
    <div className={featuredBars}> {eliteNutritionPage.featuredProducts.proteinBars.map(proteinbar => (
      <Proteinbar slug={`proteinbars/${proteinbar.slug}`} key={proteinbar.id} proteinbar={proteinbar} />))}
    </div>
  </div>
  </Layout>
  )
}


export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    eliteNutritionPage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      callToAction {
        description
        link
      }
      featuredProducts {
        proteinBars {
          ... on WpProtein_bar {
            id
            proteinBarMeta {
              name
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            slug
          }
        }
        description
        title
      }
    }
  }
}
`

export default IndexPage