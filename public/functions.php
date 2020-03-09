<?php

    /*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// Set post thumbnail size.
	set_post_thumbnail_size( 300, 200 );

	// Add custom image size used in Cover Template.
	add_image_size( 'twentytwenty-fullscreen', 1980, 9999 );


	// add_action( 'graphql_register_types', function() {
	// 	register_graphql_field( 'Page', 'heroText', [
	// 	   'type' => 'String',
	// 	   'description' => __( 'Them main text of the page', 'wp-graphql' ),
	// 	   'resolve' => function() {
	// 		 $heroText = json_encode(the_meta());
	// 		 return ! empty( $heroText ) ? $heroText : 'something??';
	// 	   }
	// 	] );
	// } );


	// add_action( 'graphql_register_types', function() {
	// 	register_graphql_field( 'Post', 'color', [
	// 	   'type' => 'String',
	// 	   'description' => __( 'The color of the post', 'wp-graphql' ),
	// 	   'resolve' => function( $post ) {
	// 		 $color = get_post_meta( $post->ID, 'color', true );
	// 		 return ! empty( $color ) ? $color : 'blue';
	// 	   }
	// 	] );
	// } );