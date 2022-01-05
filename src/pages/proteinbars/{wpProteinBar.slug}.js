import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"



const ArtistPage = ({
  data: {
    wpProteinBar: {
      proteinBarMeta: proteinbar,
      diets: { nodes: diets},
    },
  },
 }) => {
  const image = getImage(proteinbar.image.localFile)
  const picture1 = getImage(proteinbar.pictures.picture1.localFile)
  const picture2 = getImage(proteinbar.pictures.picture2.localFile)
  const picture3 = getImage(proteinbar.pictures.picture3.localFile)

  return (
    <Layout pageTitle="Artiesten Template">
    <div className={header}>
        <div className={headerInfo}>
          {proteinbar.name && <h3 className={artistName}>{proteinbar.name}</h3>}
          <div className={artistRoles}>
            {diets.map((diet, i) => (
              <span key={i}>
                {diet.name} {i + 1 < diets.length && "- "}
              </span>
            ))}
          </div>
          
          <div className={artistDescription} dangerouslySetInnerHTML={{__html: proteinbar.description}} />
      <p><span className={artistInfo}>Weight: </span>{proteinbar.weight} </p>
      <p><span className={artistInfo}>Flavour: </span>{proteinbar.flavour}</p>
      <p><span className={artistInfo}>Grams Of Protein: </span>{proteinbar.gramsOfProtein}</p>
      <p><span className={artistInfo}>Calories: </span>{proteinbar.calories}</p>
      <p><span className={artistInfo}>Allergy: </span>{proteinbar.allergy}</p>
      <p><span className={artistInfo}>Ingredients: </span>{proteinbar.ingredients}</p>

    </div>
        <GatsbyImage className={headerPicture} image={image} alt={proteinbar.image.altText} />
      </div>
      <div className={artistPictures}>
        <GatsbyImage className={artistPicture} image={picture1} alt={proteinbar .pictures.picture1.altText} />
        <GatsbyImage className={artistPicture} image={picture2} alt={proteinbar.pictures.picture2.altText} />
        <GatsbyImage className={artistPicture} image={picture3} alt={proteinbar.pictures.picture3.altText} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpProteinBar(id: {eq: $id}) {
    proteinBarMeta {
      name
      flavour
      calories
      gramsOfProtein
      weight
      ingredients
      allergy
      description
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      pictures {
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    diets {
      nodes {
        name
      }
    }
  }
}
`

export default ArtistPage