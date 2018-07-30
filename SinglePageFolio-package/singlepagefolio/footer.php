<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio 2.0
 */
?>

  
    
      <?php //Footer data
        $args=array(
            'post_type'      => 'footer',
            'post_status'    => 'publish',
            'orderby'         => 'menu_order',
            'order'           => 'ASC',
            'posts_per_page' => 1
        );
        $footer_data = get_posts( $args ); 
        ?>
          
	</div><!-- #main .wrapper -->
	<footer id="footer" >
	
    <?php if($footer_data) { ?>
    
    
		<div class="site-info">

         <span class="nomv">
              <?php  echo  get_post_meta($footer_data[0]->ID, 'footex1', true); ?>
           </span>
           
           <span class="onlymv">
              <?php echo  get_post_meta($footer_data[0]->ID, 'footex2', true); ?>
           </span>
      
		</div><!-- .site-info -->
        
        <div class="social">
            <?php if(get_post_meta($footer_data[0]->ID, 'foot_email', true)) { ?>
        	    <a href="mailto:<?php echo  get_post_meta($footer_data[0]->ID, 'foot_email', true); ?>" class="mail"></a>
            <?php } ?>
            <?php if(get_post_meta($footer_data[0]->ID, 'foot_linkedin_page', true)) { ?>
        	    <a href="<?php echo  get_post_meta($footer_data[0]->ID, 'foot_linkedin_page', true); ?>" target="_blank" class="linkedin"></a>
            <?php } ?>
            <?php if(get_post_meta($footer_data[0]->ID, 'foot_skype_user', true)) { ?>
        	    <a href="skype:<?php echo  get_post_meta($footer_data[0]->ID, 'foot_skype_user', true); ?>?chat" class="skype"></a>
            <?php } ?>
        	<?php if(get_post_meta($footer_data[0]->ID, 'foot_twitter_page', true)) { ?>
        	    <a href="<?php echo  get_post_meta($footer_data[0]->ID, 'foot_twitter_page', true); ?>" target="_blank" class="tweeter"></a>
            <?php } ?>
        	<?php if(get_post_meta($footer_data[0]->ID, 'foot_facebook_page', true)) { ?>
        	    <a href="<?php echo  get_post_meta($footer_data[0]->ID, 'foot_facebook_page', true); ?>" target="_blank" class="fb"></a>
            <?php } ?>
        	<?php if(get_post_meta($footer_data[0]->ID, 'foot_google_plus_page', true)) { ?>
        	    <a href="<?php echo  get_post_meta($footer_data[0]->ID, 'foot_google_plus_page', true); ?>" target="_blank" class="gplus"></a>
            <?php } ?>
        </div>
        
    <?php } ?>
        
	</footer><!-- #colophon -->
</div><!-- #page -->




<!--LIGHTBOX wishes-->
<?php //Modal data
        $args=array(
            'post_type'      => 'lightbox',
            'post_status'    => 'publish',
            'orderby'         => 'menu_order',
            'order'           => 'ASC',
            'posts_per_page' => 1
        );
        $lightbox_data = get_posts( $args ); 
        ?>
<?php   if ( is_page('portfolio') && $lightbox_data ) { ?>
<div id="overxmas14">
	<div class="desk">
        <img width="600" height="650" alt="lightbox image" src="<?php  echo the_field( 'img_desk', $lightbox_data[0]->ID ); ?>" >
        <img width="40" height="40" alt="chiudi - close" src="<?php echo get_template_directory_uri()?>/img/close.png" class="clozaug">
    </div>
    <div class="augmv">
        <img width="260" height="373" alt="lightbox image" src="<?php  echo  the_field('img_mv', $lightbox_data[0]->ID); ?>" >
        <img width="40" height="40" alt="chiudi - close" src="<?php echo get_template_directory_uri()?>/img/close.png" class="clozaug">
    </div>
</div>
<?php }  ?>


 <!-- COOKIES BANNER/MODAL -->
 <?php //Modal data
        $args=array(
            'post_type'      => 'modal',
            'post_status'    => 'publish',
            'orderby'         => 'menu_order',
            'order'           => 'ASC',
            'posts_per_page' => 1
        );
        $modal_data = get_posts( $args ); 
        ?>
<?php if($modal_data) { ?>
	 <div id="cookie-banner" class="notshow">      
        <?php echo apply_filters('the_content', $modal_data[0]->post_content); ?>
       <a href="#" class="btn cloz">X</a>
    </div>
<?php }  ?>
	 
	 

<?php wp_footer(); ?>
</body>
</html>