

$(document).ready(function () {
  $("#d1").click(function () {
    $("#drop").hide();
  });
  $("#d2").click(function () {
    $("#drop").show();
  });
});



// enable & disable inputs

$("#yes").click(function () {

  $("#pid").prop('disabled', false);

});

$("#no").click(function () {

  $("#pid").prop('disabled', true);
  $("#pid").val("");

});


//blur validation number only & letters only


$(document).on('keyup blur','.numeric_value',function(){	
	$(this).val( $(this).val().replace(/[^0-9]/g,'') ); 
});





//jquery plugin validation

$(document).ready(function(){

  jQuery.validator.addMethod('letter_rule', function (value, element) {
		if (/^[a-zA-Z ]+$/.test(value)) {
			return true;
		} else {
			return false;
		};
	});

 

  jQuery.validator.addMethod('email_rule', function (value, element) {
		if (/^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value)) {
			return true;
		} else {
			return false;
		};
	});

  
  // jQuery.validator.addMethod('p_number', function (value, element) {
  //   if (/^[6666666666]$/.test(value)||/^[7777777777]$/.test(value)||/^[8888888888]$/.test(value)||/^[9999999999]$/.test(value)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	};
	// });

  
  jQuery.validator.addMethod('p_rule', function (value, element) {
    if (/^[6-9]{1}[0-9]{9}$/.test(value)) {
			return true;
		} else {
			return false;
		};
	});


  $("#form").validate({
    
    rules:{
     pname:{
       required:true,
       letter_rule:true,

     },

     fname:{
       required:true,
       letter_rule:true,
     },
    
     mail:{
       required:true,
       email_rule:true,
     },

     mobile:{
       required:true,
      p_rule:true

     },

     gender_mode:{
       required:true,
     },

     regular_mode:{
       required:true,
     },

    

    
    },

   //alert message of empty inputs
    messages:{
              pname:{required:'please enter name',
                     letter_rule:'only alphabets'
               },

               mail:{
                 required:'please enter mail',
                 email_rule:'Invalid email address',

               },

               mobile:{
                 required:'please enter mobileno',
                p_rule:'invalid phone number',
                
               },

               fname:{
                 required:'please enter fathername',
                 letter_rule:'only alphabets'
               },

               gender_mode:{
                 required:'please choose gender',
               },

               regular_mode:{

                required:'please choose this feild',

               }

          },
               errorPlacement: function(error, element) 
               {
                   if ( element.is(":radio") ) 
                   {
                       error.appendTo( element.parents('.gender_radio, .patient_mode') );
                   }
                   else 
                   { // This is the default behavior 
                       error.insertAfter( element );
                   }
                }
  });
});
