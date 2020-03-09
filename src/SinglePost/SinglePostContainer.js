import { graphql } from '@apollo/react-hoc';
import _get from 'lodash/get';
import SinglePostComponent from './SinglePostComponent';
import SINGLE_POST_QUERY from './singlePostQuery.gql';

export default graphql(SINGLE_POST_QUERY, {
  options: ({ postName, category }) => ({
    variables: {
      postName,
      categoryName: category
    }
  }),
  props: ({ data }) => ({
    featuredImage: _get(data, 'posts.nodes[0].featuredImage', {}),
    content: _get(data, 'posts.nodes[0].content', ''),
    title: _get(data, 'posts.nodes[0].title', ''),
    uri: _get(data, 'posts.nodes[0].uri', ''),
    tags: _get(data, 'posts.nodes[0].tags.nodes', [])
  })
})(SinglePostComponent);
