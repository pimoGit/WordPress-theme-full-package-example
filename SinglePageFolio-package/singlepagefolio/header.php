<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage singlepagefolio
 * @since singlepagefolio 2.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta name="format-detection" content="telephone=no"><!-- remove formatting numbers on smartphones -->
<?php //this condition just To add backwards compatibility for older versions on title_tag, request from wp 4.1 https://codex.wordpress.org/Title_Tag
if ( ! function_exists( '_wp_render_title_tag' ) ) {
	function theme_slug_render_title() {
?>
<title><?php wp_title( '|', true, 'right' ); ?></title>
<?php
	}
	add_action( 'wp_head', 'theme_slug_render_title' );
}
?>
<meta name="description" content="<?php bloginfo( 'description' ); ?>"/>
<meta name="keywords" content="Singlepagefolfio, sigle page creative portfolio, sigle purpose portfolio" /> 
<meta name="robots" content="index,follow"/>
<link rel="image_src" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/singlepagefolio/screenshot.png" /><!--formatted-->
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--place here google analytics code-->
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="maskbg"></div>
<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" >  
            <?php if ( is_page('portfolio') ) { ?>
			<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
            <?php } else { ?>
			<h1 class="site-description"><?php bloginfo( 'description' ); ?></h1>
            <?php }?>


		<nav id="site-navigation" class="main-navigation">
            <?php if ( is_page('portfolio') ) {
				wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu' => 'portfolio' ) );
				?>
            <div class="disablemenu"></div>
             <?php 
            } else {
                wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu' => 'blog' ) );

            }?>
		</nav><!-- #site-navigation -->
        
		<?php 
        if(function_exists("qtranxf_generateLanguageSelectCode"))
        {
            echo qtranxf_generateLanguageSelectCode('image'); 
        }
        ?> 

		<?php $header_image = get_header_image();
		if ( ! empty( $header_image ) ) : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" /></a>
		<?php endif; ?>
	</header><!-- #masthead -->

	<div id="main" class="wrapper">