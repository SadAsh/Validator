$(document).ready(function(){

    $('#user_birthday').datepicker({
        format:'dd/mm/yyyy'
    });
    
    if( $('[name="cookies"]:checked').val()=='other') {
        $('#cookies_input').show();
    }
   
    $('[name="cookies"]').click(function(){
        if($(this).val()=='other'){
            $('#cookies_input').show();
            $('#cookies_input').val('');
        }
        else{
            $('#cookies_input').hide();
            $('#cookies_input').val($(this).val());
        }
    })
    $('#registerHere').submit(function(){
       
        return  $( this).doValidate({
            validate_objs:{
                '#cookies_input':{
                    validator:  text,
                    pattern:  /^\s?/,
                    not_equal: '',
                    required: true
                },
                '#user_firstname':{
                    validator:  text,
                    pattern:   /^\s?/,
                    not_equal: '',
                    required: true
                },
                '#user_lastname':{
                    validator:  text,
                    pattern:  /^\s?/,
                    not_equal: '',
                    required: true
                },
                '#user_email':{
                    validator:  email,
                    required: true
                },
                '#user_birthday':{
                    validator:  date,
                    age_limit: 16,
                    required: true
                },
                '#user_address1':{
                    validator:  text,
                    pattern:  /^\s?/,
                    not_equal: '',
                    required: true
                },
                '#user_country':{
                    validator:  text,
                    pattern: /^\s?/,
                    not_equal: 'NK',
                    required: true
                },
                '#user_city':{
                    validator:  text,
                    pattern: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
                    not_equal: '',
                    required: true
                },
                '#user_zip':{
                    validator:  text,
                    pattern: /^\d{5}([\-]\d{4})?$/,
                    not_equal: '',
                    required: true
                },
                '#terms':{
                    validator:  check,
                    is_checked: true
                }
            },
            error_class:'error'
        });
    });

});

$.fn.doValidate = function(options){ 
    var isValidate = true;
    if(!this.length>0)
        isValidate = false;
    for(var i in options.validate_objs){
        var form_obj = this.find(i);
        var options_obj  = options.validate_objs[i];
        if(!options_obj.validator(form_obj, options_obj)){
            isValidate=false;
            form_obj.parents('.control-group').addClass(options.error_class);
        }else
            form_obj.parents('.control-group').removeClass(options.error_class);
    }
    return isValidate;
};


//--------------doValidate Arguments format begin

//--------------doValidate Arguments format end

function number(obj){
    return /[-+]?[0-9]*\.?[0-9]+/.test(obj.val());
}

function email(form_obj, options_obj){
    var isValid = true;
    
    if(options_obj.required)
        isValid = isNaN(form_obj.val());
        
    if(isValid)
        isValid =  /^([a-z0-9!\#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!\#$%\&'\*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)|)$/.test(form_obj.val());
   
    return isValid;
}
function check(form_obj, options_obj){
    var isValid = true;
    
    if(options_obj.is_checked)
        isValid = form_obj.prop("checked");
    
    return    isValid;
    
}
function text(form_obj, options_obj){
    var isValid = true;
    
    if(options_obj.required)
        isValid = form_obj.val()!='';
    if (isValid && !options_obj.pattern.test(form_obj.val()))
        isValid =false;
    
    if (isValid && !isNaN(options_obj.not_equal) && form_obj.val() == options_obj.not_equal)
        isValid = false;
    
    return isValid;
}

function date(form_obj, options_obj){
    var isValid = true;
    
    if(options_obj.required)
        isValid = isNaN(form_obj.val());
    
    if(isValid)
        isValid =  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))|)$/.test(form_obj.val());
   
   if(isValid && options_obj.age_limit ){
       var date = form_obj.val().split('/');
      date = new Date(date[1]+'/'+date[0]+'/'+date[2]);
      var age = (new Date().getTime() - date.getTime())/31556926/1000;
      isValid =  age >options_obj.age_limit; 
    }
        
       
    return isValid;
}


function from_to(obj){
    
}
