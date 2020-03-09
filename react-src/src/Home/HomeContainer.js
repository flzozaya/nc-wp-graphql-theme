// import React from 'react';
import { graphql } from '@apollo/react-hoc';
import HomeComponent from './HomeComponent';
import HOME_PAGE_QUERY from './homePageQuery.gql'
import _get from 'lodash/get';

export default graphql(HOME_PAGE_QUERY, {
  options: props => ({
    variables: {
      name: props.name
    }
  }),
  props: ({ data }) => ({
    featuredImage: _get(data, 'pages.nodes[0].featuredImage', {}),
    content: _get(data, 'pages.nodes[0].content', '')
  })
})(HomeComponent);