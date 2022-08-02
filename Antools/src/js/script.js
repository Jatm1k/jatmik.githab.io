$('.icon-like').click(function () {
	if ($(this).hasClass('like-active')) {
		$(this).removeClass('like-active');
	} else {
		$(this).addClass('like-active');
	}
});

$('.icon-folder').click(function () {
	if ($(this).hasClass('folder-active')) {
		$(this).removeClass('folder-active');
	} else {
		$(this).addClass('folder-active');
	}
});
