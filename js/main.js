// 导航下拉
$(document).on('mouseenter','.navbar li.has-dropdown',function(){
    $(this).addClass('dropdown-show');
});

$(document).on('mouseleave','.navbar li.has-dropdown',function(){
    $(this).removeClass('dropdown-show');
});

$(document).on('click','.navbar-dropdown dl a',function(){
    $(this).parents('li.has-dropdown').removeClass('dropdown-show');
});

// 设置中英文
$(document).ready(function(){
    loadProperties();
    createSideNav();
    setInpProperties();

    (function() {
        if($('.pop-page').length){
            var share = new Sona.Share({
                title: 'AI实验室博士生奖学金计划',
                desc: '申请进行中，海内外人工智能领域的博士学霸们，别错过哦~',
                thumb: '/images/share.png'
            });
        } else{
            var share = new Sona.Share({
                title: 'AI Lab',
                desc: '让 AI 无处不在',
                thumb: '/images/share.png'
            });
        }
    })();
});

function loadProperties() {
    var cookie_lang = $.cookie('ai_language');
    var lang;
    if( cookie_lang ){
        lang = cookie_lang
    } else if( navigator.language ){
        lang = navigator.language;
    } else{
        lang = 'cn';
    }
    if (lang.indexOf('en') != -1){
        lang = 'en';
    } else{
        lang = 'cn';
    }
    $.cookie('ai_language', lang);  // 设置cookie

    jQuery.i18n.properties({
        name: 'main',
        path: '/media/',
        mode: 'both',
        language: lang,
        callback: function() {
            $(document).find('title').html(msg_document_title);
            // 首页
            $('.page1-title').text(msg_page1_title);
            $('.page1-info').html(msg_page1_info);
            $('.page2 .study-title').text(msg_page2_title);
            $('.page2 .search-cats a').eq(0).text(msg_page2_search_cats1);
            $('.page2 .search-cats a').eq(1).text(msg_page2_search_cats2);
            $('.page2 .search-content li').eq(0).find('h4').text(msg_page2_search_tit1);
            $('.page2 .search-content li').eq(1).find('h4').text(msg_page2_search_tit2);
            $('.page2 .search-content li').eq(2).find('h4').text(msg_page2_search_tit3);
            $('.page2 .search-content li').eq(3).find('h4').text(msg_page2_search_tit4);
            $('.page2 .search-content li').eq(0).find('p').text(msg_page2_search_desc1);
            $('.page2 .search-content li').eq(1).find('p').text(msg_page2_search_desc2);
            $('.page2 .search-content li').eq(2).find('p').text(msg_page2_search_desc3);
            $('.page2 .search-content li').eq(3).find('p').text(msg_page2_search_desc4);
            $('.page2 .application-content li').eq(0).find('h4').text(msg_page2_application_tit1);
            $('.page2 .application-content li').eq(1).find('h4').text(msg_page2_application_tit2);
            $('.page2 .application-content li').eq(2).find('h4').text(msg_page2_application_tit3);
            $('.page2 .application-content li').eq(3).find('h4').text(msg_page2_application_tit4);
            $('.page2 .application-content li').eq(0).find('p').text(msg_page2_application_desc1);
            $('.page2 .application-content li').eq(1).find('p').text(msg_page2_application_desc2);
            $('.page2 .application-content li').eq(2).find('p').text(msg_page2_application_desc3);
            $('.page2 .application-content li').eq(3).find('p').text(msg_page2_application_desc4);
            $('.page2-btn').text(page2_btn);
            $('.page3-title span').text(msg_page3_title);
            $('.page3-info-1').text(msg_page3_info_1);
            $('.page3-info-2').text(msg_page3_info_2);
            $('.page4-title span').text(msg_page4_title);
            $('.page4-info-1').text(msg_page4_info_1);
            $('.page4-info-2').text(msg_page4_info_2);
            $('.page5-title span').text(msg_page5_title);
            $('.page5-info-1').text(msg_page5_info_1);
            $('.page5-info-2').text(msg_page5_info_2);
            $('.page6-title').text(msg_page6_title);
            $('.page6-btn').text(msg_page6_btn);
            $('.page7-title').text(msg_page7_title);
            $('.page7-btn').text(msg_page7_btn);
            $('.page8-title').text(msg_page8_title);
            $('.page8-text').text(msg_page8_text);
            $('.page8-title-2').text(msg_page8_title_2);
            $('.page8-text-2').text(msg_page8_text_2);
            $('.page8-btn').text(msg_page8_btn);
            $('.page8-title-3').text(msg_page8_title_3);
            $('.page8-text-3').text(msg_page8_text_3);
            $('.page8-btn2').text(msg_page8_btn2);

            // 上一页下一页
            $('.paper-prev .prev').text(msg_paper_prev);
            $('.paper-next .next').text(msg_paper_next);

            // 导航
            $('.navbar li:eq(0)').find('span').text(msg_nav_1);
            $('.navbar li:eq(1)').find('span').text(msg_nav_7);
            $('.navbar li:eq(2)').find('span').text(msg_nav_2);
            $('.navbar li:eq(3)').find('span').text(msg_nav_3);
            $('.navbar li:eq(4)').find('span').text(msg_nav_4);
            $('.navbar li:eq(5)').find('span').text(msg_nav_5);
            $('.navbar li:eq(6)').find('span').text(msg_nav_8);
            $('.navbar li:eq(7)').find('span').text(msg_nav_6);
            

            // 论文
            $('.paper-list-tit').text(msg_nav_2);
            $('.search-filter-title').text(research_title);
            $('.pagep-btn').text(msg_pagep_btn);

            // 新闻
            $('.related-title').text(related_title)

            // 合作
//            $('.banner-academic h2').html(banner_academic);
//            $('.academic-desc').html(academic_desc);

//            $('.news-title-common').html(msg_nav_3);
//            $('.academic-list').html(academic_list);

            // 招聘
            $('.banner-recruit h2').html(msg_banner_recruit);
            $('.recruit-list').html(msg_recruit_list);
            

            // 关于我们
            $('.banner-about h2').text(msg_about_banner);
            $('.about-member h3').text(msg_about_title);
            $('.about-member h3').text(msg_about_title);
            $('.member-item .btn-page').text(msg_about_btn_page);
            $('.member1 .member-name').text(msg_member1_name);
            $('.member1 .member-position').html(msg_member1_pos);
            $('.member1 .member-desc').html(msg_member1_desc);
            $('.member2 .member-name').text(msg_member2_name);
            $('.member2 .member-position').text(msg_member2_pos);
            $('.member2 .member-desc').html(msg_member2_desc);
            $('.member3 .member-name').text(msg_member3_name);
            $('.member3 .member-position').text(msg_member3_pos);
            $('.member3 .member-desc').html(msg_member3_desc);
            $('.member4 .member-name').text(msg_member4_name);
            $('.member4 .member-position').text(msg_member4_pos);
            $('.member4 .member-desc').html(msg_member4_desc);
            $('.member5 .member-name').text(msg_member5_name);
            $('.member5 .member-position').text(msg_member5_pos);
            $('.member5 .member-desc').html(msg_member5_desc);
            $('.member6 .member-name').text(msg_member6_name);
            $('.member6 .member-position').text(msg_member6_pos);
            $('.member6 .member-desc').html(msg_member6_desc);
            $('.member7 .member-name').text(msg_member7_name);
            $('.member7 .member-position').text(msg_member7_pos);
            $('.member7 .member-desc').html(msg_member7_desc);
            $('.member8 .member-name').text(msg_member8_name);
            $('.member8 .member-position').text(msg_member8_pos);
            $('.member8 .member-desc').html(msg_member8_desc);
            $('.member9 .member-name').text(msg_member9_name);
            $('.member9 .member-position').text(msg_member9_pos);
            $('.member9 .member-desc').html(msg_member9_desc);
            $('.member10 .member-name').text(msg_member10_name);
            $('.member10 .member-position').text(msg_member10_pos);
            $('.member10 .member-desc').html(msg_member10_desc);
            $('.member11 .member-name').text(msg_member11_name);
            $('.member11 .member-position').text(msg_member11_pos);
            $('.member11 .member-desc').html(msg_member11_desc);
            $('.member12 .member-name').text(msg_member12_name);
            $('.member12 .member-position').text(msg_member12_pos);
            $('.member12 .member-desc').html(msg_member12_desc);
            $('.member13 .member-name').text(msg_member13_name);
            $('.member13 .member-position').text(msg_member13_pos);
            $('.member13 .member-desc').html(msg_member13_desc);

            
            $('.search-area h3').text(search_area_h3);
            $('.search-area-list li').eq(0).find('h4').html(search_list_tit1);
            $('.search-area-list li').eq(1).find('h4').html(search_list_tit2);
            $('.search-area-list li').eq(2).find('h4').html(search_list_tit3);
            $('.search-area-list li').eq(3).find('h4').html(search_list_tit4);
            $('.search-area-list li').eq(0).find('p').html(search_list_desc1);
            $('.search-area-list li').eq(1).find('p').html(search_list_desc2);
            $('.search-area-list li').eq(2).find('p').html(search_list_desc3);
            $('.search-area-list li').eq(3).find('p').html(search_list_desc4);
            $('.application-area h3').text(application_area_h3);
            $('.application-area-list li').eq(0).find('h4').html(application_list_tit1);
            $('.application-area-list li').eq(1).find('h4').html(application_list_tit2);
            $('.application-area-list li').eq(2).find('h4').html(application_list_tit3);
            $('.application-area-list li').eq(3).find('h4').html(application_list_tit4);
            $('.application-area-list li').eq(0).find('p').html(application_list_desc1);
            $('.application-area-list li').eq(1).find('p').html(application_list_desc2);
            $('.application-area-list li').eq(2).find('p').html(application_list_desc3);
            $('.application-area-list li').eq(3).find('p').html(application_list_desc4);
            
            // 数据
            $('.data .data-page-title').text(msg_data);
            $('.data .recruit-item:eq(0)').html(msg_dataset);
//            $('.data .recruit-item:eq(2) div:eq(0)').html(msg_column_info_unit);
//            $('.data .recruit-item:eq(2) div:eq(3)').html(msg_column_info_term);
            $('.data .recruit-tit:eq(1)').text(msg_dataset_dl);
            $('.data .recruit-tit:eq(2)').text(msg_column_info);
            $('.data .news-item h4:eq(0)').text(msg_dataset_personal);
            $('.data .news-item h4:eq(1)').text(msg_dataset_school);			
            $('.data .news-item h4:eq(2)').text(msg_dataset_unit);
            $('.data .news-item h4:eq(3)').text(msg_dataset_term);
			$('.data .news-item h4:eq(4)').text(msg_dataset_family);
            $('.data .news-item h4:eq(5)').text(msg_dataset_psy);
			
			$('.data .news-item p:eq(0)').text(msg_dataset_personal_info);
            $('.data .news-item p:eq(1)').text(msg_dataset_school_info);
            $('.data .news-item p:eq(2)').text(msg_dataset_unit_info);
            $('.data .news-item p:eq(3)').text(msg_dataset_term_info);
			$('.data .news-item p:eq(4)').text(msg_dataset_family_info);
            $('.data .news-item p:eq(5)').text(msg_dataset_psy_info);
			
			$('.data .recruit-item h5:eq(0)').text(msg_column_info_personal);
            $('.data .recruit-item h5:eq(1)').text(msg_column_info_school);
            $('.data .recruit-item h5:eq(2)').text(msg_column_info_test);
			$('.data .recruit-item h5:eq(3)').text(msg_column_info_family);
            $('.data .recruit-item h5:eq(4)').text(msg_column_info_psy);
			
            $('.unit .data-page-title').text(msg_dataset_dl_unit);
            $('.unit .paper-main a:eq(0)').text(msg_dataset_unit_chn);
            $('.unit .paper-main a:eq(1)').text(msg_dataset_unit_math);
            $('.unit .paper-main a:eq(2)').text(msg_dataset_unit_eng);
            $('.unit .paper-main a:eq(3)').text(msg_dataset_unit_phy);
            $('.unit .paper-main a:eq(4)').text(msg_dataset_unit_che);
            $('.unit .paper-main a:eq(5)').text(msg_dataset_unit_bio);
            $('.unit .paper-main a:eq(6)').text(msg_dataset_unit_his);
            $('.unit .paper-main a:eq(7)').text(msg_dataset_unit_geo);

            $('.term .data-page-title').text(msg_dataset_dl_term);
            $('.term .paper-main a:eq(0)').text(msg_dataset_term_chn);
            $('.term .paper-main a:eq(1)').text(msg_dataset_term_math);
            $('.term .paper-main a:eq(2)').text(msg_dataset_term_eng);
            $('.term .paper-main a:eq(3)').text(msg_dataset_term_phy);
//            $('.term .paper-main a:eq(4)').text(msg_dataset_term_che);
            $('.term .paper-main a:eq(4)').text(msg_dataset_term_bio);
            $('.term .paper-main a:eq(5)').text(msg_dataset_term_his);
            $('.term .paper-main a:eq(6)').text(msg_dataset_term_geo);
        }
    });

    // 初始化页面中英文
    if (lang.indexOf('en') != -1) {
        $('body').attr('class', 'lang-en');
        $('#en').attr('class', 'on');
        $('#cn').attr('class', ' ');
    } else {
        $('body').attr('class', 'lang-cn');
        $('#en').attr('class', ' ');
        $('#cn').attr('class', 'on');
    }

    setTimeout(dotLang,100);

    // dotLang();
    function dotLang(){
        if (lang.indexOf('en') != -1) {
            $('.cndot').hide();
            $('.endot').show();
        } else {
            $('.cndot').show();
            $('.endot').hide();
        }
    }
}

// 点击切换英文
$(document).on('click', '#en', function() {
    $.cookie('ai_language', 'en');  // 设置cookie
    $('body').attr('class', 'lang-en');
    $('.cndot').hide();
    $('.endot').show();
    loadProperties();
    createSideNav();
    setInpProperties();
});

// 点击切换中文
$(document).on('click', '#cn', function() {
    $.cookie('ai_language', 'cn');  // 设置cookie
    $('body').attr('class', 'lang-cn');
    $('.cndot').show();
    $('.endot').hide();
    loadProperties();
    createSideNav();
    setInpProperties();
});
// window.location.replace('url')

// 侧边点
function dotShow(){
    $('.swiper-pagination-h span').eq(0).html('<em class="cndot">AI Lab</em><em class="endot">AI Lab</em>');
    $('.swiper-pagination-h span').eq(1).html('<em class="cndot">研究与应用</em><em class="endot">Research Areas</em>');
    $('.swiper-pagination-h span').eq(2).html('<em class="cndot">论文成果</em><em class="endot">Publications</em>');
    $('.swiper-pagination-h span').eq(3).html('<em class="cndot">最新动态</em><em class="endot">News</em>');
    $('.swiper-pagination-h span').eq(4).html('<em class="cndot">加入腾讯</em><em class="endot">Join Us</em>');
}


function createSideNav(){
    // 生成侧边栏
    if($('.academic-content h4').length){
        // $('.academic-content').prepend('<h4 class="first">项目介绍</h4>');
        var headHeight = $('.header').height();
        var arrEle = [];
        var sideLink = $('<div class="academic-side-link"></div>');
        $('.academic-content .acadeindex').each(function(index){
            var content = $(this).html();
            $(this).attr('id',content);
            var tag = $('<h5>');
            var link = $('<a href="">');
            link.attr('href','#'+ content);
            link.html(content);
            tag.html(link);
            sideLink.append(tag);
            if(index == 0){
                tag.addClass('active');
            }
            arrEle.push($(this).offset().top);
        });

        if(!$('.paper-side').find('.academic-side-link').length){
            $('.paper-side').prepend(sideLink);
        }

        function switchNav(scrt){
            $(arrEle).each(function(i){
                var groups = $(".academic-side-link h5");
                var _this = groups.eq(i);
                var range = scrt + 5;
                if( range >= arrEle[i]){
                    if(!_this.hasClass("active")){
                        groups.removeClass("active");
                        _this.addClass("active");
                    }
                }
            });
        }
        $(window).scroll(function(){
            var winScrt = $(this).scrollTop();
            switchNav(winScrt);
        })

        // 侧边栏固定
        var paperTop = $('.paper-content').offset().top;
        $(window).on('scroll',sidebarFixed);
        $(window).on('resize',function(){
            var paperTop = $('.paper-content').offset().top;
            sidebarFixed();
        });


        function sidebarFixed(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop >= paperTop){
                $('.paper-side').addClass('fixed');
            } else{
                $('.paper-side').removeClass('fixed');
            }
        }
    }
}

// 统计数据
var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.2";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500355814");
    mta.setAttribute("cid", "500357202");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();

// 移动端导航
$(document).on('touchstart','.nav_btn',function(){
    $nav =  $(this).parents('.header').find('.navbar');
    $nav.hasClass('show') ? $nav.removeClass('show') : $nav.addClass('show');
});
$(document).on('touchmove',function(e){
   $('.navbar').removeClass('show');
});

// 表单下拉选择
$(document).on('click','.mod-select',function(e){
    $('.mod-select').removeClass('active');
    $('.pop-select').hide();
    var $this = $(this);
    var content = $this.find('.pop-select');
    if($this.hasClass('active')){
        $this.removeClass('active');
        content.hide();
        return;
    }
    $this.addClass('active');
    content.show();
    e.stopPropagation();
});
$(document).on('click',function(){
    if($('.mod-select').hasClass('active')){
        $('.mod-select').removeClass('active');
        $('.pop-select').hide();
    }
});
$(document).on('click','.pop-select .select-item',function(e){
    var _this = $(this);
    var parent = _this.parents('.mod-select');
    var selected = parent.find('a');
    var content = _this.parents('.pop-select')
    if(!_this.hasClass('active')){
        _this.siblings().removeClass('active');
        _this.addClass('active');
    }
    selected.html(_this.html());
    selected.addClass('selected')
    parent.removeClass('active');
    content.hide();
    e.stopPropagation();
});

// 弹窗关闭
$(document).on('click','.pop-page .btn-detail',function(){
    $(this).parents('.pop-page').fadeOut(200);
});
$(document).on('click','[data-func="close"]',function(){
    $(this).parents('.pop-common-wrap').fadeOut(200);
});

// 表单页面-设置文件上传属性
function setInpProperties(){
    if($('#upload-profile').length){
        $('#upload-profile').prop({
            maxAmount: 1,
            minAmount: 1,
            currentFileAmount: 0,
            maxSize: 20,
            allowType: '.pdf,.doc,.docx,.txt,.ppt,.pptx',
        })
        $('#upload-recommendation').prop({
            maxAmount: 1,
            minAmount: 1,
            maxSize: 20,
            currentFileAmount: 0,
            allowType: '.zip,.rar,.7z',
        })
        $('#upload-certificate').prop({
            maxAmount: 1,
            minAmount: 1,
            maxSize: 30,
            currentFileAmount: 0,
            allowType: '.zip,.rar,.7z',
        })
    }

    if($('#upload-application-form').length){
        $('#upload-application-form').prop({
            maxAmount: 1,
            minAmount: 1,
            currentFileAmount: 0,
            maxSize: 5,
            allowType: '.zip,.doc,.docx,',
        })
    }
}

// 生成鉴权信息
function generateAuthenticationInfo () {
  var app_id = 1000028,
      secret_id = 'K6mtfKz6DazxssUKugsCbGHsL8dcN4SG',
      secret_key = 'xozueSmw0iqz8p97mw713IZxSPDGwhrF'
  var timestamp = Math.round(new Date().getTime() / 1000),
      rand = Math.floor(Math.random() * 1000000000)

  var strs = 'app_id=' + app_id + '&secret_id=' + secret_id + '&timestamp=' + timestamp + '&rand=' + rand
  var sign = sha256.hmac(secret_key, strs)

  var auth_info = {
    app_id: app_id,
    secret_id: secret_id,
    timestamp: timestamp,
    rand: rand,
    sign: sign
  }
  return auth_info
}
