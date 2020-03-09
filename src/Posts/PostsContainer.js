import { graphql } from '@apollo/react-hoc';
import POSTS_QUERY from './postsQuery.gql';
import PostsComponent from './PostsComponent';
import _get from 'lodash/get';

export default graphql(POSTS_QUERY, {
  options: ({ category }) => ({
    variables: {
      categoryName: category
    }
  }),
  props: ({ data }) => {
    return {
      postCount: _get(data, 'categories.nodes[0].count', 0),
      category: _get(data, 'categories.nodes[0].name', ''),
      postsList: _get(data, 'categories.nodes[0].posts.nodes', []),
      tags: _get(data, 'tags.nodes', [])
    };
  }
})(PostsComponent);
