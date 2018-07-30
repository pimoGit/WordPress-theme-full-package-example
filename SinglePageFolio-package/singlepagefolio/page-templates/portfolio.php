<?php
/**
 * Template Name: Portfolio
 *
 * Description: A page template that provides the core page of the theme. The real core single page.
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio
 */
 

get_header(); ?>
<div id="preloader" ></div>


    <!--ABOUT-->
    <section>
        <div id="about" class="liteb">
                <?php // about page
                    $about_page_slug = 'about';
                    $args=array(
                        'name'           => $about_page_slug,
                        'post_type'      => 'page',
                        'post_status'    => 'publish',
                        'posts_per_page' => 1
                    );
                    $about_page_data = get_posts( $args );
                    
                    ?>

                <div class="pagetexabout">
                    <div class="contscrolltex">

						<?php if( $about_page_data ) {
                        echo apply_filters('the_content', $about_page_data[0]->post_content);
                    }?>

                            <?php
							  $args = array(
							   //'get'  => 'all',
							   'orderby'  => 'count',
							   'order' => 'DESC'
							 );
                             $tags = get_terms('project_tag',$args);
							 ?>
                            <div class="tags">
                            <?php foreach ( $tags as $tag ) {
                                echo '<div class="tag">' . $tag->name . '</div>';	
                                 } ?>
                            </div> 

                    </div>
            </div>
                      
            <a  class="close">X</a>
        </div>
    </section>    
    <!--/ABOUT-->
    
    <!--CONTACT-->
    <section>
        <div id="contact" class="liteb">
            <div class="pagetexcontact">
            	<div class="contscrolltex">
            	<?php //contact page
                    $contact_page_slug = 'contact';
                    $args=array(
                        'name'           => $contact_page_slug,
                        'post_type'      => 'page',
                        'post_status'    => 'publish',
                        'posts_per_page' => 1
                    );
                    $contact_page_data = get_posts( $args ); 
                    if( $contact_page_data ) {
                        echo apply_filters('the_content', $contact_page_data[0]->post_content);
                    }
                    ?>
                </div>
            </div>
            <a  class="close">X</a>
        </div>
    </section>
    <!--/CONTACT-->
    
    
	<div id="portfolio" class="site-content"  role="main">
        
<!--SLIDESHOW AND MAIN PROJECT-->
	<?php // temporary array  of filtered posts  (setting 1 post) for custom field for slideshow
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
    <section>
    <div class="progetto posn<?php echo esc_attr($post->menu_order); ?>" id="primopiano" mvtexrel="tbn<?php echo esc_attr($post->menu_order);?>"> 
                   <div class="loader"></div>
      
                        
                    <div id="pslider-container">
    				<?php foreach( $postslist as $post ) : setup_postdata($post); // looping on filtered posts (1)?>
                                <?php the_post_thumbnail('full',array('class' => 'start')); ?>
                    <?php endforeach; ?>
                    
                    </div>
                       
					
                    <div class="overl" texrel="tbn<?php echo esc_attr($post->menu_order);?>">
                        <a  rel="<?php echo get_permalink(); ?>" class="info">+</a>
                    </div>
				            

    </div>

            <?php get_template_part( 'page-templates/include/project-tex' ); ?>

            <?php  $post = $tmp_post; // end foreach and reset  post variable for other queries ?>

    	<div id="backpp" rel="<?php echo esc_url( home_url( '/unloadslide/' ) );?>"></div>      
    </section>    
<!--/SLIDESHOW-->
        
<!--PROJECTS (NOT MAIN)-->
<section>
	<?php 
	global $post;
	$tmp_post = $post;
	$args = array(
        'posts_per_page'  => 7,
        'offset'          => 1,
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
        <div class="progetto posn<?php echo esc_attr($post->menu_order);?>"  mvtexrel="tbn<?php echo esc_attr($post->menu_order);?>">
           <div class="loader"></div>
            <?php the_post_thumbnail('full',array('class' => 'start')); ?>
            

            <div class="overl" texrel="tbn<?php echo esc_attr($post->menu_order);?>">
            	<a  rel="<?php echo get_permalink(); ?>" class="info">+</a>
            </div>
        </div>

			<?php get_template_part( 'page-templates/include/project-tex' ); ?>
			

		<?php endforeach; ?>
        <?php  $post = $tmp_post; // end foreach and reset  post variable for other queries ?>

</section>        
<!--/PROJECTS-->


<div class="overall"></div>
<div class="overallxarch"></div>

<div class="wait"></div>


	</div><!-- #primary -->


<section>
    <div id="archive" arcrel="<?php echo esc_url( home_url( '/archivio/' ) ); ?>">
    <div id="loadarch">
           <div class="loader"></div>
    </div>
    <a  class="close">X</a>
</div>
</section>

<?php get_sidebar('void-bar'); ?>
<?php get_footer(); ?>