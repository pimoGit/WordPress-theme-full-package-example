<?php
/**
 * Template Name: Preload home
 *
 * Description: A page template that preloads tha main prejects big images
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio
 */
 ?>       
        
<!--PROJECTS-->
	<?php 
	global $post;
	$tmp_post = $post;
	$args = array(
        'posts_per_page'  => 7,
        'offset'          => 0,
        'category'        => '',
        'orderby'         => 'menu_order',
        'order'           => 'ASC',
        'include'         => '',
        'exclude'         => '',
        'meta_key'        => '',
        'meta_value'      => '',
        'post_type'       => 'projects',
        'post_mime_type'  => '',
        'post_parent'     => '',
        'post_status'     => 'publish',
        'suppress_filters' => true ); 
	$postslist = get_posts( $args );
		?>        
        
		<?php foreach( $postslist as $post ) : setup_postdata($post); // looping on filtered posts ?>
            <?php the_post_thumbnail('full'); ?>

		<?php endforeach; ?>
        <?php  $post = $tmp_post; // end foreach and reset  post variable for other queries ?>
