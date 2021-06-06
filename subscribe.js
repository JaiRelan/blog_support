$('.click__btn').on('click', function (e) {
    const $btn = $(this);
    if ($btn.hasClass('active') == false) { //if button never activated
        $btn.empty();
        $btn.append('<input type="text" placeholder="ENTER EMAIL HERE" />');
        $btn.append('<div class="send__btn">Send</div>');
        $btn.addClass('active');
    }

    $btn.on('click', '.send__btn', function (e) { //when send button clicked
        //verify email
        let emailContent = $(e.target).parent().find('input[type=text]').val();
        if (isEmail(emailContent)) {
            //valid email
            $btn.empty();
            $btn.append('Thank you!');
            $btn.addClass('thank-you');
        }
    });
});

function isEmail(email) { //check if email
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}