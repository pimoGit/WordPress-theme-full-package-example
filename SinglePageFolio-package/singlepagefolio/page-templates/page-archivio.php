<?php
/**
 * Template Name: Prject archive
 *
 * Description: A page template that provide the project archive
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio
 */
 
 
 
?> 

<div id="contarch">
    <div id="contscroll">
    <!--PROJECTS-->
        <?php 
        global $post;
        $tmp_post = $post;
        $args = array(
            'posts_per_page'  => 20,
            'offset'          => 8,
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
      <div class="progetto-arch" texrel="tbn<?php echo esc_attr($post->menu_order);?>">
                <?php the_post_thumbnail('archive_thumb', array('style' => 'display:none;')); ?>
                            
                    <?php get_template_part( 'page-templates/include/archivio-tex' ); ?>
    
            </div>
    
    
            <?php endforeach; ?>
            <?php  $post = $tmp_post; // end foreach and reset  post variable for other queries  ?>
    
    <!--/PROJECTS-->
    </div>
</div>
