import { graphql } from '@apollo/react-hoc';
import MENU_ITEMS_QUERY from './menuItems.gql';
import NavigationComponent from './NavigationComponent';
import _get from 'lodash/get';
import { flowRight as compose } from 'lodash';

export default compose([
  graphql(MENU_ITEMS_QUERY, {
    options: { variables: { name: 'navigation' } },
    props: ({ data }) => ({ mainNavItems: _get(data, 'menus.nodes[0].menuItems.nodes', []) })
  }),
  graphql(MENU_ITEMS_QUERY, {
    options: { variables: { name: 'social' } },
    props: ({ data }) => ({ socialNavItems: _get(data, 'menus.nodes[0].menuItems.nodes', []) })
  })
])(NavigationComponent);
