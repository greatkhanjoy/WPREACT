<?php

/*
Plugin Name: Floating Survey - Greatkhanjoy
Plugin URI: https://greatkhanjoy.me/
Description: Survey Plugin with react.
Version: 1.0
Author: GreatKhanJoy
Author URI: https://greatkhanjoy.me/
License: GPLv2 or later
Text Domain: gfsurvey
Domain Path: /languages/
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}



class Greatkhanjoy_Floating_Survey
{
    public function __construct()
    {
        add_action('init', array($this, 'activate'));
    }



    // Add menu page
    function gfsurvey_add_menu_page()
    {
        add_menu_page(
            'My Plugin',
            'My Plugin',
            'manage_options',
            'gfsurvey-settings',
            array($this, 'gfsurvey_settings_page'),
            'dashicons-admin-settings',
            20
        );
    }

    //Render Admin Page
    function gfsurvey_settings_page()
    {
?>
        <div class="wrap" id="gfsurvey-admin"> </div>
<?php
    }


    // Load Assets
    public function load_assets()
    {

        wp_register_script('gfsurvey-frontend-js', plugins_url('build/frontend.js', __FILE__), array('wp-i18n', 'wp-element'));
        wp_register_style('gfsurvey-frontend-css', plugins_url('build/index.css', __FILE__));

        wp_enqueue_script('gfsurvey-frontend-js');
        wp_enqueue_style('gfsurvey-frontend-css');
    }

    function gfsurvey_floating()
    {
        echo '<div id="gfsurvey-floating-button"></div>';
    }




    //Admin Scripts
    function gfsurvey_admin_scripts()
    {
        wp_register_script('gfsurvey-admin-js', plugins_url('build/index.js', __FILE__), array('wp-i18n', 'wp-plugins', 'wp-edit-post', 'wp-element'));
        wp_register_style('gfsurvey-admin-css', plugins_url('build/index.css', __FILE__));

        wp_localize_script('gfsurvey-admin-js', 'gfsurvey', array(
            'api_url' => esc_url_raw(rest_url()),
            'nonce' => wp_create_nonce('wp_rest')
        ));

        wp_enqueue_script('gfsurvey-admin-js');
        wp_enqueue_style('gfsurvey-admin-css');
    }

    // Activate the plugin
    public function activate()
    {
        flush_rewrite_rules();

        add_action('wp_enqueue_scripts', array($this, 'load_assets'));
        add_action('admin_enqueue_scripts', array($this, 'gfsurvey_admin_scripts'));
        add_action('wp_footer', array($this, 'gfsurvey_floating'));
        add_action('admin_menu', array($this, 'gfsurvey_add_menu_page'));
    }

    // Deactivate the plugin
    public function deactivate()
    {
        flush_rewrite_rules();
    }
}


// Initialize the plugin
$greatkhanjoyFloatingServey = new Greatkhanjoy_Floating_Survey();
