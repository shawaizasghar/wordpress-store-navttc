jQuery(window).on("load",function(){jQuery(".product-images").each(function(){!jQuery(this).find("img").length&&jQuery(this).find(".onsale").length&&jQuery(this).css("min-height","45px")})}),jQuery(document).ready(function(){var e,t,i,o,n,a;for(jQuery("body").on("click",".add_to_cart_button.ajax_add_to_cart",function(){var e=jQuery(this).closest(".product, li"),t=e.find(".cart-loading"),i=!!e.hasClass("post-card")&&e.find(".fusion-image-wrapper");i&&i.addClass("hover"),t.find("i").removeClass("awb-icon-check-square-o").addClass("awb-icon-spinner"),t.fadeIn(),setTimeout(function(){t.find("i").hide().removeClass("awb-icon-spinner").addClass("awb-icon-check-square-o").fadeIn(),t.closest(".fusion-clean-product-image-wrapper, li").addClass("fusion-item-in-cart"),i&&i.removeClass("hover")},2e3)}),jQuery(".products .product, .fusion-woo-slider li, .post-card.product").on({mouseenter:function(){var e=jQuery(this).find(".cart-loading");e.find("i").hasClass("awb-icon-check-square-o")&&e.fadeIn()},mouseleave:function(){var e=jQuery(this).find(".cart-loading");e.find("i").hasClass("awb-icon-check-square-o")&&e.fadeOut()}}),e=avadaWooCommerceVars.title_style_type.split(" "),t="","",i="title-heading-left",o=0;o<e.length;o++)t+=" sep-"+e[o];t.indexOf("underline"),jQuery("body").hasClass("rtl")&&(i="title-heading-right"),jQuery(".woocommerce.single-product .related.products > h2").each(function(){jQuery(this).replaceWith(function(){return'<div class="fusion-title title'+t+'"><h'+avadaWooCommerceVars.related_products_heading_size+' class="'+i+'">'+jQuery(this).html()+"</h"+avadaWooCommerceVars.related_products_heading_size+'><span class="awb-title-spacer"></span><div class="title-sep-container"><div class="title-sep'+t+' "></div></div></div>'})}),jQuery(".woocommerce.single-product .upsells.products > h2").each(function(){jQuery(this).replaceWith(function(){return'<div class="fusion-title title'+t+'"><h3 class="'+i+'">'+jQuery(this).html()+'</h3><span class="awb-title-spacer"></span><div class="title-sep-container"><div class="title-sep'+t+' "></div></div></div>'})}),jQuery(".products-6 li, .products-5 li, .products-4 li, .products-3 li, .products-2 li").removeClass("last"),jQuery("body").on("click",".fusion-quick-view",function(e){var t,i=jQuery(".fusion-woocommerce-quick-view-overlay"),o=jQuery(".fusion-woocommerce-quick-view-container"),r=o.find(".fusion-wqv-preview-image"),s=o.find(".fusion-wqv-content"),d=o.find(".fusion-wqv-close"),u=o.find(".fusion-wqv-loader"),c=jQuery(this).data("product-id"),l=jQuery(this).closest(".product"),f=l.length?l:jQuery(this).closest(".fusion-carousel-item"),h=f.find(".wp-post-image"),p=f.find(".onsale"),m=f.find(".fusion-out-of-stock"),w=f.find(".product-title").length?f.find(".product-title"):f.find(".fusion-rollover-title"),y=f.find(".fusion-price-rating").length?f.find(".fusion-price-rating"):f.find(".price").first(),g=parseInt(h.height(),10)/parseInt(h.width(),10),v={},j=!1,Q=!0,_="";e.preventDefault(),jQuery("body").addClass("fusion-wqv-open"),jQuery(".fusion-wqv-open").on("keydown",function(e){27===e.keyCode&&jQuery(".fusion-wqv-close button").trigger("click")}),void 0!==c&&(0===w.length&&void 0!==jQuery(this).data("product-title")&&(w=jQuery("<p>"+jQuery(this).data("product-title")+"</p>")),s.empty(),u.find(".entry-title, .star-rating, .price").empty(),jQuery(".fusion-footer-parallax").length&&(jQuery("#main").css("z-index","auto"),"fixed"===jQuery(".fusion-footer-parallax").css("position")&&(jQuery(".fusion-footer-parallax").css("z-index","-1"),jQuery("#sliders-container").find('.tfs-slider[data-parallax="1"]').length&&jQuery("#sliders-container").css("z-index","auto"))),o.stop().fadeIn("200"),r.fadeIn("200").html(h.clone()),i.stop().fadeIn("400"),(p.length||m.length)&&(r.prepend('<div class="fusion-woo-badges-wrapper"></div>'),m.length&&(o.addClass("outofstock"),r.find(".fusion-woo-badges-wrapper").append(m.clone())),p.length&&r.find(".fusion-woo-badges-wrapper").append(p.clone())),f.find("> span, > a, > div").fadeTo("200","0"),f.addClass("fusion-faded-out"),0===h.length?void 0!==(h=jQuery(e.currentTarget)).data("image-height")?(g=parseInt(h.data("image-height"),10)/parseInt(h.data("image-width"),10),v.startWidth=h.data("image-width"),v.startHeight=h.data("image-height")):(Q=!1,v.startWidth=400,v.startHeight=400):(v.startWidth=h.width(),v.startHeight=h.height()),v.startTop=h.offset().top-jQuery(window).scrollTop(),v.startLeft=h.offset().left,v.endWidth=400,1.77<1/g&&(v.endWidth=500),1.77<g&&(v.endWidth=300),v.endHeight=Math.floor(v.endWidth/v.startWidth*v.startHeight),v.endTop=Math.round((jQuery(window).height()-v.endHeight)/2),v.endLeft=Math.round((jQuery(window).width()-v.endWidth)/2),v.finalWidth=Math.round(v.endWidth+500),500>jQuery(window).width()-v.endWidth&&(v.finalWidth=Math.round(jQuery(window).width()-20)),v.finalLeft=Math.round((jQuery(window).width()-v.finalWidth)/2),o.css({top:v.startTop,left:v.startLeft,width:v.startWidth,height:v.startHeight,"background-color":avadaWooCommerceVars.shop_page_bg_color}),r.css({"max-width":v.startWidth>v.endWidth?"100%":v.endWidth,"max-height":v.startWidth>v.endWidth?"auto":v.endHeight}),r.find("img").removeAttr("style"),setTimeout(function(){o.animate({top:v.endTop+"px",left:v.endLeft+"px",width:v.endWidth+"px",height:v.endHeight+"px"},800,"easeInOutCubic",function(){v.startWidth>v.endWidth&&r.css({"max-width":v.endWidth,"max-height":v.endHeight})})},200),setTimeout(function(){o.animate({left:v.finalLeft+"px",width:v.finalWidth+"px"},600,"easeInOutCubic",function(){jQuery(this).addClass("complete"),jQuery(this).css("top",""),jQuery(this).css("left","")})},1e3),setTimeout(function(){d.fadeIn("300"),40>avadaWooCommerceVars.shop_page_bg_color_lightness&&d.find("button").addClass("light"),j=!0,o.hasClass("fusion-quick-view-loaded")||(w.length&&(u.find(".entry-title").html(w.text()),parseFloat(avadaWooCommerceVars.post_title_font_size)<parseFloat(u.find(".entry-title").css("font-size"))&&u.find(".entry-title").css("font-size",parseFloat(avadaWooCommerceVars.post_title_font_size)+"px")),y.length&&(u.find(".star-rating").show(),y.hasClass("fusion-price-rating")?u.find(".fusion-price-rating").html(y.children().clone()):(u.find(".fusion-price-rating .price").html(y.clone()),f.find(".star-rating").length&&u.find(".fusion-price-rating .star-rating").html(f.find(".star-rating").first().html())),u.find(".star-rating").is(":empty")&&u.find(".star-rating").hide()),u.css("left","calc(100% - "+Math.round((v.finalWidth-v.endWidth)/2)+"px)"),u.stop().fadeTo("300","1"))},1600),jQuery.post(avadaWooCommerceVars.ajaxurl,{action:"fusion_quick_view_load",nonce:quickViewNonce,product:jQuery(this).data("product-id")},function(e){"undefined"==typeof wc_add_to_cart_variation_params?e+='<script type="text/javascript">var wc_add_to_cart_variation_params = {};<\/script>':e+='<script type="text/javascript">var wc_add_to_cart_variation_params = '+JSON.stringify(wc_add_to_cart_variation_params)+";<\/script>",o.addClass("fusion-quick-view-loaded"),n=setInterval(function(){j&&(o.addClass("fusion-animate-content fusion-quick-view-loaded"),o.find(".fusion-wqv-content").show(),setTimeout(function(){s.html(e),!Q&&s.find(".woocommerce-product-gallery .wp-post-image").length&&(r.fadeIn("200").html(s.find(".woocommerce-product-gallery .wp-post-image").first().clone()),v.endHeight=r.find("img").height(),o.animate({height:v.endHeight+"px"},800,"easeInOutCubic")),s.find(".woocommerce-product-gallery").css("width",v.endWidth+"px"),s.find(".product").not(".bundled_product").css("max-height",v.endHeight+"px"),"undefined"!=typeof productBackgroundColor&&(o.css("background-color",productBackgroundColor),40>productBackgroundColorLightness&&d.find("button").addClass("light")),"undefined"!=typeof productQuickViewSingleURL&&o.find(".woocommerce-review-link").length&&(_=o.find(".woocommerce-review-link").prop("hash"),o.find(".woocommerce-review-link").prop("href",productQuickViewSingleURL+_).addClass("avada-noscroll")),u.stop().fadeTo("300","0"),o.find(".entry-summary").animate({opacity:"1"},500,"easeInOutCubic",function(){jQuery(this).scrollTop(0)}),o.find(".entry-summary").children().animate({"padding-top":"0"},500,"easeInOutCubic")},400),setTimeout(function(){(t=o.find(".fusion-button-view-details")).css("top",t.height()),t.animate({opacity:"1",top:"0"},200,"easeInOutCubic")},700),setTimeout(function(){o.removeClass("fusion-animate-content"),jQuery("body").trigger("quick-view-displayed")},900),setTimeout(function(){fusionInitPostFlexSlider(),jQuery(window).trigger("AddAvadaSelect"),"undefined"!=typeof wc_add_to_cart_variation_params&&jQuery(".variations_form").each(function(){jQuery(this).wc_variation_form()}),avadaAddQuantityBoxes()},400),a=setInterval(function(){10>Math.abs(o.find(".flex-active-slide").width()-o.find(".fusion-wqv-preview-image").width())&&(o.find(".fusion-wqv-preview-image").fadeOut("400"),clearInterval(a))},500),clearInterval(n))},25)}))}),jQuery(".fusion-wqv-close button").on("click",function(){var e=jQuery(this).closest(".fusion-woocommerce-quick-view-container");e.removeClass("fusion-quick-view-loaded"),clearInterval(n),clearInterval(a),jQuery(".fusion-wqv-open").off("keydown"),jQuery("body").removeClass("fusion-wqv-open"),jQuery(".fusion-woocommerce-quick-view-overlay").fadeOut("400"),e.stop().animate({width:e.width()/2,height:e.height()/2,opacity:"0"},300,"easeInOutCubic",function(){jQuery(this).hide(),jQuery(this).removeAttr("style"),jQuery(this).removeClass("complete"),jQuery(this).find(".fusion-wqv-preview-image").removeAttr("style"),jQuery(this).find(".entry-title").removeAttr("style"),jQuery(".fusion-footer-parallax").length&&(jQuery("#main").css("z-index",""),jQuery(".fusion-footer-parallax").css("z-index",""),jQuery("#sliders-container").css("z-index",""))}),e.find(".fusion-wqv-close").fadeOut("300"),jQuery(".fusion-faded-out").find("> span, > a, > div").fadeTo("300","1",function(){jQuery(this).css("opacity","")}),jQuery(".fusion-faded-out").removeClass("fusion-faded-out")}),jQuery(document).on("click",".fusion-woocommerce-quick-view-overlay",function(e){jQuery(".fusion-wqv-close button").trigger("click")}),jQuery(document).on("change",".fusion-post-card-cart .qty",function(e){void 0!==this.value&&jQuery(e.target).closest(".fusion-post-card-cart").find(".ajax_add_to_cart").attr("data-quantity",this.value)}),jQuery(window).on("resize",function(e){var t=jQuery(".fusion-woocommerce-quick-view-container"),i=t.find(".woocommerce-product-gallery").width(),o=jQuery(window).width();jQuery("body").hasClass("fusion-wqv-open")&&(t.width()<o-20&&i+500<=o-20?t.width(i+500):t.width(o-20))})}),jQuery(window).on("wcpf_after_ajax_filtering",function(){var e=new URLSearchParams(window.location.search);jQuery(".catalog-ordering").find("a").each(function(){var t,i=jQuery(this).attr("href");if(void 0!==i){for(t of e.entries())-1===i.indexOf(t[0])&&(i+="&"+t[0]+"="+t[1]);jQuery(this).attr("href",i)}})});