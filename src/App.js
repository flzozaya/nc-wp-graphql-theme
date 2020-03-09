import React from 'react';
import { Router } from '@reach/router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { CloudinaryContext } from 'cloudinary-react';

import Home from './Home';
import PageTemplate from './PageTemplate';
import Footer from './Footer';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Navigation from './Navigation';

import './App.css';

const cloudinaryCloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_ROOT_URL}/graphql`
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CloudinaryContext cloudName={cloudinaryCloudName}>
        <Navigation />
        <Router>
          <Home path="/" name="home" />
          <PageTemplate path="/about" name="about" />
          <PageTemplate path="/contact" name="contact" />
          <Posts path="/:category" name="posts" />
          <SinglePost path="/:category/:postName" name="single-post" />
        </Router>
        <Footer />
      </CloudinaryContext>
    </ApolloProvider>
  );
};

export default App;
