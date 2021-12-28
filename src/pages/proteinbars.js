import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ProteinBarsPage = ({data: {allWpProteinBar: {edges}}}) => {
  return (
    <Layout pageTitle="Protein bars of EliteNutrition">
      {edges.map((item) => {
        const bar = item.node;
        return <p key={item.node.id}>{bar.title}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
query {
  allWpProteinBar {
    edges {
      node {
        id
        title
      }
    }
  }
}

`


export default ProteinBarsPage