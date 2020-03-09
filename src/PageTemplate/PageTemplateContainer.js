import { graphql } from '@apollo/react-hoc';
import PageTemplate from './PageTemplateComponent';
import ABOUT_PAGE_QUERY from './pageTemplateQuery.gql';
import _get from 'lodash/get';

export default graphql(ABOUT_PAGE_QUERY, {
  options: props => ({
    variables: {
      name: props.name
    }
  }),
  props: ({ data }) => {
    return {
      featuredImage: _get(data, 'pages.nodes[0].featuredImage', {}),
      content: _get(data, 'pages.nodes[0].content', ''),
      title: _get(data, 'pages.nodes[0].title', ''),
      tags: _get(data, 'tags.nodes', [])
    };
  }
})(PageTemplate);
