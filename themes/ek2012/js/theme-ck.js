$(document).ready(function(){updateCarouselIndicator=function(e){var t=$(this),n=t.find(".item.active").index(),r=t.find(".carousel-indicator li");r.removeClass("active");r.eq(n).addClass("active")};$("#basic-search").on({focus:function(){$(this).addClass("expanded");var e=this.value,t=$(this);t.val("");setTimeout(function(){t.val(e)},1)},blur:function(){$(this).removeClass("expanded")}},"input");$("#feature .carousel").carousel({interval:1e5}).on({slide:function(e){var t=e.relatedTarget||$(this).find(".item:first").get(0),n=$($(t).data("description"));n.siblings().removeClass("active");n.addClass("active")},slid:updateCarouselIndicator});$(".carousel-indicator").on({click:function(e){var t=$(e.target),n=t.data("slide_to");t.parents(".carousel").carousel(n)}},"a");$("#category-carousel").carousel({interval:2e4}).on({slid:updateCarouselIndicator});$("ul#carousel-section-nav > li").on({click:function(e){var t=$(this);$("#carousel-section-nav > li").removeClass("active");t.parent("li").addClass("active");$(".carousel-section-content").removeClass("active");$(t.data("section")).addClass("active");$(".carousel-section-content").not(".active").hide();$(".carousel-section-content.active").show();$("#feature .carousel").removeClass("active");$(t.data("carousel")).addClass("active")}},"a");$("#view-controls").on({click:function(e){e.preventDefault();var t=$(e.target),n=t.data("action"),r=t.data("target")||"#post-list";typeof viewControls[n]=="function"&&viewControls[n](r,e)}},"a");$("#cat-filters").on({click:function(e){$(e.target).attr("id")=="close-cat-filters"?$("#cat-filters").slideUp():$(this).parent("li").toggleClass("selected")}},"a");var e=$("#related-artists .post-list"),t=e.find(".post:first").outerWidth();$("#related-artists .post").width(t);var n=e.find(".post:first").outerWidth(!0)*3;$(".post-share").length&&$(".post-share li").each(function(e,t){$(this).hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")})});yepnope({test:$("#cat-filters, #filter-sfw").length,yep:themedir+"/js/spin.min.js",callback:function(){$("#main").on({click:filterPosts},"#filter-btn")}});yepnope({test:$("#related-artists").length,yep:themedir+"/js/spin.min.js",callback:function(){$("#related-artists").on({click:function(r){var i=$(r.target),s=e.data("cur_page"),o=e.data("max_page");if(i.hasClass("prev")){e.css("left","+="+n);e.data("cur_page",s-1);s-1==1&&i.css("visibility","hidden")}else if(i.hasClass("next"))if(s==o){var u=(new Spinner(spinnerOpts)).spin(i.parent().get(0));$.post(ajaxurl,{action:"ek_load_posts",nonce:e.data("nonce"),query:{posts_per_page:3,paged:e.data("max_page")+1,category__in:[e.data("cats")]}},function(r){u.stop();e.css({width:"+="+n,left:"-="+n});e.append($(r).find(".span4").width(t));e.data("max_page",e.data("max_page")+1);e.data("cur_page",e.data("cur_page")+1);e.data("nonce",$(r).filter("#nonce").text());i.prev(".prev").css("visibility","visible")})}else{e.css("left","-="+n);e.data("cur_page",e.data("cur_page")+1);i.prev(".prev").css("visibility","visible")}}},"a.prev, a.next")}});filterPosts=function(){var e=$(this),t=[];$("#cat-filters").find("li.selected").each(function(e,n){t.push($(n).data("cat_id"))});var n={category__in:t};$("#sfw-filter").hasClass("checked")&&(n.tag__not_in=$("#sfw-filter").data("nsfw_tagid"));var r=(new Spinner(spinnerOpts)).spin(e.parent().get(0));$("#post-list").load(ajaxurl,{action:"ek_load_posts",nonce:$("#cat-filters").data("nonce"),query:$.extend({},origQuery,n)},function(n){r.stop();t.length?$("#cat-filter").addClass("active").find("a").text("Filter By Category [on]"):$("#cat-filter").removeClass("active").find("a").text("Filter By Category");console.log(e);if(e.parent().attr("id")!="sfw-filter"){$("#close-cat-filters").trigger("click");var i=$("#view-controls").offset().top-10;$("#wpadminbar").length&&(i-=$("#wpadminbar").outerHeight());$("#cat-filters").data("nonce",$(n).filter("#nonce").text());$("html, body").animate({scrollTop:i},200)}})};$("ul.sub-menu").each(function(e,t){var n=$(this),r=n.closest("li");r.hover(function(){r.addClass("active")},function(){r.removeClass("active")})})});var viewControls={gridView:function(e){this.switchView("list","grid",e)},listView:function(e){this.switchView("grid","list",e)},switchView:function(e,t,n){$(n).removeClass(e).addClass(t)},showCatFilters:function(e){$("#cat-filters").slideToggle()},filterSfw:function(e,t){$("#sfw-filter").toggleClass("checked");filterPosts.call(t.target)}};spinnerOpts={lines:15,length:0,width:3,radius:10,corners:1,rotate:90,color:"#00B8EC",speed:1.4,trail:40,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:-10};