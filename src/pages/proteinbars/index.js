import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Proteinbar from "../../components/proteinbar"
import {
  hero,
  section,
  subtitle,
  artists,
  description,
} from "../../page.module.css"


const ProteinBarsPage = ({
  data: {
    allWpProteinBar: { edges: proteinbarsInfo },
    wpPage: { proteinBarsPage },
  },
}) => {
  const image = getImage(proteinBarsPage.headerProteinbars.picture.localFile)
  return (
    <Layout pageTitle="Protein bars of Elite Agency">
      <GatsbyImage
      className={hero}
        image={image}
        alt={proteinBarsPage.headerProteinbars.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{proteinBarsPage.headerProteinbars.title}</h2>
        <div
        className={description}
          dangerouslySetInnerHTML={{
            __html: proteinBarsPage.headerProteinbars.description,
          }}
        />
        <div className={artists}>
          {proteinbarsInfo.map(({ node: proteinbar }) => (
            <Proteinbar key={proteinbar.id} slug={proteinbar.slug} proteinbar={proteinbar} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "proteinbars"}) {
    proteinBarsPage {
      headerProteinbars {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          altText
        }
      }
    }
  }

allWpProteinBar {
  edges {
    node {
      proteinBarMeta {
        name
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
            }
          }
          altText
        }
      }
      slug
      id
    }
  }
}
}

`

/*
query MyQuery {
  wpPage(slug: {eq: "proteinbars"}) {
    proteinBarsPage {
      headerProteinbars {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          altText
        }
      }
    }
  }
}
*/

/*
query MyQuery {
  allWpProteinBar {
    edges {
      node {
        proteinBarMeta {
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
*/
export default ProteinBarsPage
