<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage singlepagefolio 
 * @since singlepagefolio 2.0
 */
$post_type=get_post_type();

if ($post_type == 'projects'){
    $postid=get_the_ID();
	/*loading in home portfolio*/
	
        global $post;
        $tmp_post = $post;
      $args = array(
       'posts_per_page'  => 1,
       'post_type' => 'projects',
        'include'         => $postid
     );
    
    $postslist = get_posts( $args );
	
?>
                
            <div class="sps_images"><ul>

            <?php foreach( $postslist as $post ) : setup_postdata($post); // looping on filtered (1)?>

                    <?php if( get_field('img_carousel_1') ):?><!--if something-->
                    <li class="element-0">
                        <img src="<?php the_field('img_carousel_1');?>"  alt="<?php echo apply_filters('the_title', $post->post_title);?> thumb 1" id="sps_0" /> 
                    </li>
                    <?php endif;?>
                    <?php if( get_field('img_carousel_2') ):?><!--if something-->
                    <li class="element-1">
                        <img src="<?php the_field('img_carousel_2');?> "   alt="<?php echo apply_filters('the_title', $post->post_title);?>thumb 2" id="sps_1" /> 
                    </li>
                    <?php endif;?>
                    <?php if( get_field('img_carousel_3') ):?><!--if something-->
                    <li class="element-2">
                        <img src="<?php the_field('img_carousel_3');?> "   alt="<?php echo apply_filters('the_title', $post->post_title);?> thumb 3"  id="sps_2" /> 
                    </li>
                    <?php endif;?>
                                        
            <?php endforeach; ?>
            </ul></div>
            
            
            <?php  $post = $tmp_post; // end foreach and reset variable for other query ?>
            


<?php 	
	/*else blog*/
 } else {

get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main">
			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', get_post_format() ); ?>

				<nav class="nav-single">
					<h3 class="assistive-text"><?php _e( 'Post navigation', 'singlepagefolio' ); ?></h3>
					<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'singlepagefolio' ) . '</span> %title' ); ?></span>
					<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'singlepagefolio' ) . '</span>' ); ?></span>
				</nav><!-- .nav-single -->

				<?php comments_template( '', true ); ?>

			<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>

<?php } ?>