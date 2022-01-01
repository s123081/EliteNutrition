import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'

// ...

const ArtistPage = ({
  data: {
    wpProteinBar: {proteinBarMeta: proteinbar},
  },
 }) => {
  const image = getImage(proteinbar.image.localFile)
  return (
    <Layout pageTitle="Artiesten Template">
    <div>
      <GatsbyImage image={image} alt={proteinbar.image.altText}/>
      <h3>{proteinbar.name}</h3>
      <h1>{proteinbar.name}</h1>
      <div dangerouslySetInnerHTML={{__html: proteinbar.description}} />
      <p>Weight: {proteinbar.weight}</p>
      <p>Flavour: {proteinbar.flavour}</p>
      <p>Grams Of Protein: {proteinbar.gramOfProtein}</p>
      <p>Calories: {proteinbar.calories}</p>
      <p>Ingredients: <br></br> {proteinbar.ingredients}</p>
      <p>Allergy: {proteinbar.allergy}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpProteinBar(id: {eq: $id}) {
    proteinBarMeta {
      name
      weight
      flavour
      calories
      gramsOfProtein
      ingredients
      allergy
      description
      image {
        localFile{
				childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}


`

export default ArtistPage