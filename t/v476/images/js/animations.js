;(function($, undefined) {
	
	/***/
	var objs = {
		'.block-9' : 'fadeInLeft',
		'.block-10' : 'fadeInRight',
		'.widget-33' : 'fadeInUp d1',
		'.blocklist-25 .header' : 'fadeInDown',
		'.blocklist-25 .item' : 'fadeIn s.5 d2',
		'.widget-12' : 'fadeIn s.5 d2',
		'.widget-13' : 'fadeIn s.5 d2',
		'.editable_block-71 .header' : 'fadeInLeft',
		'.editable_block-71 .title' : 'fadeInLeft',
		'.editable_block-71 .text p' : 'fadeInLeft',
		'.editable_block-71 .more' : 'fadeInLeft',
		'.widget-34' : 'fadeIn s.5 d2',
		'.block-19' : 'fadeInLeft',
		'.widget-25' : 'fadeIn s.5 d2',
	};
	/***/
	
	
	$(function() {
		for (var i in objs) {
			$(i).attr('data-s3-animator', objs[i]);
		}
	})
	var url = 'g/s3/misc/animator/1.0.0/css/s3.animator.scss.html';
	$.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                    if (!window.s3Animator) {
					$.getScript('g/s3/misc/animator/1.1.0/js/s3.animator.html').done(function() {
						window.s3Animator.once = true;
					});
	}
    });
})(jQuery)