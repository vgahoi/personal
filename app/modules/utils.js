function range(a, b, c) {
    c = [];
    while (a--) c[a] = a + b;
    return c
};

function validateEmail(elementValue) {
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegEx.test(elementValue);
}

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
    
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
        $this.removeClass('collapse');
		$this.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	}
})