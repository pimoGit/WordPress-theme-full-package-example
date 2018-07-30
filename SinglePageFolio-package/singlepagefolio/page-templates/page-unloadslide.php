<?php
/**
 * Template Name: Unload slideshow
 *
 * Description: A page template that unloads slideshows and realoads the main project image
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio
 */
 ?>       
        
<!--PROJECTS-->
	<?php //  temporary array  of filtered posts  (setting 1 post) for custom field for slideshow
        global $post;
        $tmp_post = $post;
      $args = array(
       'posts_per_page'  => 1,
       'post_type' => 'projects',
        'meta_query' => array(
            array(
                'key' => 'inslide',/*main project*/
                'value' => '1',
            )
        )
     );
    
    $postslist = get_posts( $args );
    ?>

    				<?php foreach( $postslist as $post ) : setup_postdata($post); // looping on filtered rpoject (1)?>
                                <?php the_post_thumbnail('full'); ?>
                    <?php endforeach; ?>
