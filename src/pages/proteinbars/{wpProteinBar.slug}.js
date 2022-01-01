import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const ArtistPage = ({data: {wpProteinBar: {proteinBarMeta: proteinbar}}}) => {
  return (
    <Layout pageTitle="Artiesten Template">
    <div>
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
      gramsOfProtein
      calories
      ingredients
      allergy
      description
    }
  }
}

`

export default ArtistPage