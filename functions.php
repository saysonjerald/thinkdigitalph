<?php 

//ENQUEUE SCRIPTS
function wpp_enqueue(){

    //debuging 
    define('DEV_MODE',  true);
    $ver_debug = DEV_MODE ? time(): false;


        //CSS
        wp_register_style('style', get_stylesheet_directory_uri() . '/style.css', [], $ver_debug, 'all');
        wp_enqueue_style('style');


        //JS    
        wp_register_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', [], $ver_debug, true);
        wp_enqueue_script('gsap');

        wp_register_script('fullPageJs', get_stylesheet_directory_uri() . '/js/fullpage.min.js' , ['gsap'], $ver_debug, true);
        wp_enqueue_script('fullPageJs');

        wp_register_script('script', get_stylesheet_directory_uri() . '/js/script.js', [], $ver_debug, true);
        wp_enqueue_script('script');
}
add_action('wp_enqueue_scripts', 'wpp_enqueue', 15);


//Menu
register_nav_menus([
    "frontPageMenu" => "FrontPage Menu",
    "footerMenu" => "Footer Menu",
    "socialMediaLinks" => "Social Media Links",
]); 


//THEME SUPPORT
add_theme_support('menus');
add_theme_support( 'widgets' );
add_theme_support( 'custom-logo' );
add_theme_support( 'custom-background' );
add_theme_support( 'custom-header' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'post-settings' );


//CONTACT FORM 7 CONFIG
add_filter( 'wpcf7_load_css', '__return_false' );
add_filter( 'wpcf7_autop_or_not', '__return_false' );
?>