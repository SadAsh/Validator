    $(document).ready(function(){
             
          
   $('#user_birthday').datepicker();
   
   $('[name="cookies"]').click(function(){
       if($(this).val()=='other')
           $('#cookies_input').show();
       else
           $('#cookies_input').hide();
   })
   
  });
$.fn.doValidate = function(defaults){ 

    this.submit(function(){
        
        var isValidate = true;
        if(!this.length>0)
            isValidate = false;
        for(var i in defaults.validate_objs){
            var obj = this.find(i);
            if(this.find(i).hasClass(defaults.ignor_class))
                isValidate=true;
            else
                isValidate=[defaults.validate_objs[i]](obj); 
        }
        return isValidate;
    })    
};


//--------------doValidate Arguments format begin
$('form').doValidate({
    validate_objs:{
        'field_selector1':{
            from_to:{
                min:'validation_type', 
                max:'sfs'
            }
        },
        'field_selector2':'validation_type'
    },
    error_class:'error',
    ignor_class:'ignor'
    
});
//--------------doValidate Arguments format end

function number(obj){
return /[-+]?[0-9]*\.?[0-9]+/.test(obj.val());
}
function email(obj){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(obj.val());
}

function from_to(obj){
    
}
