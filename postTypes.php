<?php
function vac_type() {
    register_post_type('vacancy', array(
        'supports' => [ 'title', 'editor' ],
        'capability_type' => 'vacancy',
        'map_meta_cap' => true,
        'public' => true,
        'show_in_rest' => true,
        'labels' => array(
            'name' => 'Вакансії',
            'add_new_item' => 'Добавити вакансію',
            'edit_item' => 'Редагувати вакансію',
            'all_items' => 'Усі вакансії',
            'singular_name' => 'vacancy'
        ),
        'menu_icon' => 'dashicons-admin-multisite'
    ));
}
function language_type() {
    register_post_type('language', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Мови прогр.',
            'add_new_item' => 'Добавити мову прогр.',
            'edit_item' => 'Редагувати мову прогр.',
            'all_items' => 'Усі мови прогр.',
            'singular_name' => 'language'
        ),
        'menu_icon' => 'dashicons-html'
    ));
}
function non_technical_type() {
    register_post_type('nontech', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Нетехнічні',
            'add_new_item' => 'Добавити Нетехнічні',
            'edit_item' => 'Редактировати Нетехнічні',
            'all_items' => 'Усі Нетехнічні',
            'singular_name' => 'Нетехнічні'
        ),
        'menu_icon' => 'dashicons-money-alt'
    ));
}
function language_order($query) {
    if($query->is_admin) {

        if ($query->get('post_type') == 'language' || $query->get('post_type') == 'cities')
        {
            $query->set('orderby', 'title');
            $query->set('order', 'ASC');
        }
        if ($query->get('post_type') == 'work_format')
        {
            $query->set('orderby', 'date');
            $query->set('order', 'DESC');
        }
    }
    return $query;
}
add_filter('pre_get_posts', 'language_order');
function specialty_type() {
    register_post_type('specialty', array(
        'public' => true,
        'labels' => array(
            'name' => 'Фреймв., CMS',
            'add_new_item' => 'Добавити Фреймворки и CMS',
            'edit_item' => 'Редагувати Фреймворки и CMS',
            'all_items' => 'Усі Фреймворки и CMS',
            'singular_name' => 'specialty'
        ),
        'menu_icon' => 'dashicons-superhero'
    ));
}
function specialty_order($query) {
    if($query->is_admin) {

        if ($query->get('post_type') == 'specialty')
        {
            $query->set('orderby', 'title');
            $query->set('order', 'ASC');
        }
    }
    return $query;
}
add_filter('pre_get_posts', 'specialty_order');
function candidate_type() {
    register_post_type('candidate', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'База кандидатів',
            'add_new_item' => 'Добавити кандидата',
            'edit_item' => 'Редагувати кандидата',
            'all_items' => 'Усі кандидати',
            'singular_name' => 'candidate'
        ),
        'menu_icon' => 'dashicons-businessperson'
    ));
}
function rekomend_type() {
    register_post_type('rekomend', array(
        'show_in_rest' => true,
        'supports' => array('title', 'editor'),
        'capability_type' => 'rekomend',
        'map_meta_cap' => true,
        'public' => true,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Pipeline',
            'add_new_item' => 'Добавити рекомендацію',
            'edit_item' => 'Редагувати рекомендацію',
            'all_items' => 'Усі рекомендації',
            'singular_name' => 'rekomend'
        ),
        'menu_icon' => 'dashicons-welcome-write-blog'
    ));
}

function client_type() {
    register_post_type('client', array(
        'supports' => array('title', 'editor'),
        'capability_type' => 'client',
        'map_meta_cap' => true,

        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Клієнти',
            'add_new_item' => 'Добавити клієнта',
            'edit_item' => 'Редагувати клієнта',
            'all_items' => 'Усі клієнти',
            'singular_name' => 'client'
        ),
        'menu_icon' => 'dashicons-businessperson'
    ));
}
function sotrudniki_type() {
    register_post_type('sotrudniki', array(
        'capability_type' => 'sotrudniki',
        'map_meta_cap' => true,
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Співпрацівники',
            'add_new_item' => 'Добавити Співпрацівника',
            'edit_item' => 'Редагувати Співпрацівника',
            'all_items' => 'Усі Співпрацівника',
            'singular_name' => 'sotrudnik'
        ),
        'menu_icon' => 'dashicons-car'
    ));
}
function sotrud_general_type() {
    register_post_type('sotrgeneral', array(
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Співпрацівники загальна',
            'add_new_item' => 'Добавити Співпрацівника загальну',
            'edit_item' => 'Редактировати Співпрацівника загальну',
            'all_items' => 'Співпрацівника загальна',
            'singular_name' => 'Співпрацівника загальна'
        ),
        'menu_icon' => 'dashicons-media-document'
    ));
}
function work_format_type() {
    register_post_type('work_format', array(
        'public' => true,
        'supports' => array('title'),
        'labels' => array(
            'name' => 'Формат роботи',
            'add_new_item' => 'Добавити Формат роботи',
            'edit_item' => 'Редагувати Формат роботи',
            'all_items' => 'Усі Формат роботи',
            'singular_name' => 'work_format'
        ),
        'menu_icon' => 'dashicons-admin-home'
    ));
}
function cities_type() {
    register_post_type('cities', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Міста',
            'add_new_item' => 'Добавити місто',
            'edit_item' => 'Редагувати місто',
            'all_items' => 'Усі міста',
            'singular_name' => 'cities'
        ),
        'menu_icon' => 'dashicons-admin-site-alt3'
    ));
}
function likes_type() {
    register_post_type('likes', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Голосовання',
            'add_new_item' => 'Проголосувати',
            'edit_item' => 'Редагувати',
            'all_items' => 'All likes',
            'singular_name' => 'Голосування'
        ),
        'menu_icon' => 'dashicons-heart'
    ));
}
function vstar_type() {
    register_post_type('vstar', array(
        'supports' => array('title'),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Мої Вакансії',
            'add_new_item' => 'Добавити Мої Вакансії',
            'edit_item' => 'Редавати Мої Вакансії',
            'all_items' => 'Мої Вакансії',
            'singular_name' => 'МоїВакансиї'
        ),
        'menu_icon' => 'dashicons-star-filled'
    ));
}
function rstar_type() {
    register_post_type('rstar', array(
        'supports' => array('title'),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Мої Реком-ї',
            'add_new_item' => 'Добавити Рекомендацію',
            'edit_item' => 'Редагувати Рекомендацію',
            'all_items' => 'Мої Рекомендації',
            'singular_name' => 'МоїРекомендації'
        ),
        'menu_icon' => 'dashicons-star-filled'
    ));
}
function freelcr_type() {
    register_post_type('freelcr', array(
        'capability_type' => 'freelancer',
        'map_meta_cap' => true,
       'supports' => array('title', 'editor', 'thumbnail'),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Фрілансери',
            'add_new_item' => 'Добавити Фрілансера',
            'edit_item' => 'Редагувати Фрілансера',
            'all_items' => 'Фрілансери',
            'singular_name' => 'Фрілансери'
        ),
        'menu_icon' => 'dashicons-id-alt'
    ));
}
function notif_type() {
    register_post_type('notification', array(
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Повідомлення',
            'add_new_item' => 'Добавити Повідомлення',
            'edit_item' => 'Редагувати Повідомлення',
            'all_items' => 'Повідомлення',
            'singular_name' => 'Повідомлення'
        ),
        'menu_icon' => 'dashicons-fullscreen-alt'
    ));
}
function notif_ajax_type() {
    register_post_type('notiajax', array(
        'show_in_rest' => true,
       'supports' => array('title'),
        'public' => false,
         'show_ui' => true,
        'labels' => array(
            'name' => 'Повідомл kanban',
            'add_new_item' => 'Добавити ajax Повідомлення',
            'edit_item' => 'Редагувати ajax Повідомлення',
            'all_items' => 'Повідомлення ajax',
            'singular_name' => 'Повідомлення kanban'
        ),
        'menu_icon' => 'dashicons-admin-tools'
    ));
}
function notif_hot_type() {
    register_post_type('notiHot', array(
        'show_in_rest' => true,
       'supports' => array('title'),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Повідомл hot',
            'add_new_item' => 'Добавити hot Повідомлення',
            'edit_item' => 'Редагувати hot Повідомлення',
            'all_items' => 'Повідомлення hot',
            'singular_name' => 'Повідомлення hot'
        ),
        'menu_icon' => 'dashicons-admin-tools'
    ));
}

function rekruter_type() {
    register_post_type('rekruter', array(
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Рекрутери',
            'add_new_item' => 'Добавити Рекрутера',
            'edit_item' => 'Редагувати Рекрутера',
            'all_items' => 'Рекрутери',
            'singular_name' => 'Рекрутери'
        ),
        'menu_icon' => 'dashicons-airplane'
    ));
}
function calendar_type() {
    register_post_type('gc', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Календар',
            'add_new_item' => 'Добавити Таск',
            'edit_item' => 'Редагувати Таск',
            'all_items' => 'Усі Таски',
            'singular_name' => 'Календар'
        ),
        'menu_icon' => 'dashicons-admin-tools'
    ));
}
function faq_type(){
    register_post_type('faq', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'FAQ',
            'add_new_item' => 'Добавити FAQ',
            'edit_item' => 'Редагувати FAQ',
            'all_items' => 'Усі FAQ',
            'singular_name' => 'FAQ'
        ),
        'menu_icon' => 'dashicons-admin-tools'
    ));
}
function history_type() {
    register_post_type('history', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Співбесіди',
            'add_new_item' => 'Добавити співбесіду',
            'edit_item' => 'Редагувати співбесіду',
            'all_items' => 'Усі співбесіди',
            'singular_name' => 'співбесіди'
        ),
        'menu_icon' => 'dashicons-format-chat'
    ));
}
function id_events_type() {
    register_post_type('id_events', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'IDs Events',
            'add_new_item' => 'Добавити ID Event',
            'edit_item' => 'Редагувати ID Event',
            'all_items' => 'ID Event',
            'singular_name' => 'IDs Кандидатів'
        ),
        'menu_icon' => 'dashicons-database-add'
    ));
}
function countries_type() {
    register_post_type('countries', array(
        'supports' => array('title'),
        'public' => true,
        'labels' => array(
            'name' => 'Країни',
            'add_new_item' => 'Добавити країну',
            'edit_item' => 'Редагувати країну',
            'all_items' => 'Усі країни',
            'singular_name' => 'countries'
        ),
        'menu_icon' => 'dashicons-admin-site-alt3'
    ));
}

function cust_post_types() {
    vac_type();
    language_type();
    specialty_type();
    non_technical_type();
    work_format_type();
    cities_type();
    candidate_type();
    rekomend_type();
    client_type();
    vstar_type();
    rstar_type();
    notif_type();
    notif_ajax_type();
    notif_hot_type();
    freelcr_type();
    sotrudniki_type();
    sotrud_general_type();
    faq_type();
    history_type();
    id_events_type();
    calendar_type();
    countries_type();
}
add_action('init', 'cust_post_types');




