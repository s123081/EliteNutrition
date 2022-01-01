import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// ...

const ProteinBarsPage = ({data: {allWpProteinBar: {edges}}}) => {
  return (
    <Layout pageTitle="Protein bars of Elite Agency">
      {edges.map((item) => {
        const proteinbar = item.node.proteinBarMeta;
        const slug = item.node.slug;
        return <Link to={`/proteinbars/${slug}`}>
          <p>{proteinbar.name}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query {
  allWpProteinBar {
    edges {
      node {
        proteinBarMeta{
          name
        }
        id
        slug
      }
    }
  }
}

`


export default ProteinBarsPage