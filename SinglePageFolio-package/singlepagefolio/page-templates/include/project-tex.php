<!-- MAIN PROJECTS text -->
        <div class="tex tbn<?php echo esc_attr($post->menu_order);?> notyet">
            <article>
                
                <div class="contscrolltex">
                        <header>
                            <?php if( get_post_meta(get_the_ID(), 'online_data', true)) { // // if the data exists?>
                                <h4>
                                    <?php $string = get_post_meta(get_the_ID(), 'online_data', true); //pick data from datepicker and change format
                                    $year = substr($string,0,4);
                                    $month = substr($string,4,2);
                                    $day = substr($string,6,2);
                                    $tmpFormat = mktime(0,0,0,$month,$day,$year);
                                    echo date("m/Y",$tmpFormat);
                                    ?>
                                </h4>
                            <?php } ?>
                            <h2><?php echo apply_filters('the_title', $post->post_title);?></h2>
                        </header>
                        <div class="txt"><?php echo apply_filters('the_content', $post->post_content); ?></div>
                        <div class="tags">
                        <?php     
                            $pjtags = get_the_terms($post->ID,'project_tag');

                            if ($pjtags) {
                              foreach($pjtags as $tag) {
                                echo '<div class="tag">' . $tag->name . '</div>'; 
                              }
                            }
                            ?>
                        </div>

                    </div>
                
        </article> 
        
         <?php if (get_post_meta(get_the_ID(), 'url_site', true)) { ?>
                <a href="<?php echo get_post_meta(get_the_ID(), 'url_site', true);?>" target="_blank"><?php echo get_post_meta(get_the_ID(), 'url_label', true);?>  <span class="dft">&gt;</span></a>
            <?php } ?>

        
        <a  class="close" closerel="tbn<?php echo esc_attr($post->menu_order);?>">X</a>
    </div>