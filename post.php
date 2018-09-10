<?php
  // the query
  $wpb_all_query = new WP_Query(array('post_type'=>'post', 'post_status'=>'publish', 'posts_per_page'=>-1));

  if ( $wpb_all_query->have_posts() ) : while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>

      <article class="post">
        <a href="<?php the_permalink(); ?>">
          <header class="post_hover">
            <h2 class="post_hover__title"><?php the_title(); ?></h2>
            <h3 class="post_hover__cat"><?php $category = get_the_category(); echo $category[0]->cat_name; ?></h3>
            <p class="hidden">
              <?php echo get_the_excerpt(); ?>
            </p>
        </header><!-- / .post_hover -->
      </a>
      <?php the_post_thumbnail(); ?>
      </article><!-- / .post -->

      <?php endwhile; wp_reset_postdata(); else : ?>
      <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
