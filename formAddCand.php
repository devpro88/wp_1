<article class="popup_form addNewCand">
    <div class="popup_bgr" data-popup="close"></div>
    <div class="popup_box">
        <div class="pop_box_inn">
            <button type="button" class="close-modal" data-popup="close">×</button>
            <h3 class="cloud-title">Створити кандидата<span class="cuID1 dnone"><?php echo get_current_user_id(); ?></span>
        <!-- <input id="cutime" type="datetime" value="<?php
        date_default_timezone_set('Europe/Kiev');
        $date = date('m-d-Y H:i:s', time()); echo $date; ?>"> -->
        </h3>
            <section class="p_form">
                <?php while (have_posts()) : the_post(); ?>
                    <?php acf_form(array(
                        'post_id' => 'new_post',
                        'post_title' => true,
                        'post_content' => true,
                        'new_post' => array(
                            'post_type' => 'rekomend',
                            'post_status' => 'publish'
                        ),
                        'submit_value' => 'Створити кандидата'
                    )); ?>
                <?php endwhile;
                $teamPageData = new WP_Query(array(
                    'post_per_page' => 2,
                    'meta_key' => 'dataStart',
                    'orderby' => 'meta_value_num',
                    'order' => 'DESC',
                    'post_type' => 'vacancy',
                    'suppress_filters' => false,
                    'meta_query' => array(
                        array(
                            'key' => 'show_v',
                            'compare' => '=',
                            'value' => 1
                        )

                    )
                )); ?>
                <input readonly value="<?php echo $teamPageData->post_count; ?>" id="phpCount"
                       class="dp_post_count dnone">
                <div class="vw">
                    <button class="addVacToCand">Підібрати вакансію</button>
                    <div class="cv5w">
                        <?php

                        while ($teamPageData->have_posts()) {
                            $teamPageData->the_post(); ?>
                            <div class="cv5">
                                <input type="checkbox"
                                       value="<?php the_ID(); ?>, <?php the_title(); ?>"><span> #<?php the_ID(); ?>, </span>
                                <span><?php the_title(); ?></span>
                                - <?php the_field('zarplata'); ?>$;
                                / <?php
                                $cand_ctegory = get_field('gorod');
                                foreach ($cand_ctegory as $k) {
                                    echo $k->post_title;
                                    ?><span class="transp">a</span><?php
                                }
                                ?>/
                                <?php the_field('opyt'); ?> years of experience;
                                <?php the_field('angl'); ?> Eng
                            </div>
                            <?php
                        }
                        wp_reset_postdata();
                        ?>
                    </div>
                </div>
            </section>

        </div>
    </div>
</article>