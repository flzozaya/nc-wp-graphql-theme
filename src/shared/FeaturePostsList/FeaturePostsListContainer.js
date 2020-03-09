import { graphql } from '@apollo/react-hoc';
import FEATURED_POSTS_QUERY from './featuredPostsQuery.gql';
import FeaturePostsListComponent from './FeaturePostsListComponent';


export default graphql(FEATURED_POSTS_QUERY)(FeaturePostsListComponent);