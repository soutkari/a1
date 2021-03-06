// **Instructions** **main.js**
// ------------
// In this document you will find instructions on how to adjust different parameters of the paradigm. You can apply the desired changes to the document main.js on your computer or server, using a source code editor.
// The following parameters are necessary to adjust: number of avatar images, and the redirect link at the end of the study. All other parameters have a default option and adjustments are optional.

// OBS!!! Condition med likes är overskrivet!
// condition1 = 4 klickar på George's länk i slutet
// condition2 = 1 klickar på George's länk i slutet
// Utöver detta är experimentet exakt lika för användaren.

$(function() {

  // **Parameters**
  // ------------
  function set_settings() {
    window.settings = [];
	
	// **Number** **of** **Avatar** **Images**   
	// Number of avatars the user can choose from. Can be changed to any number, depending on how many avatars you would like to display. Default: 82
	// The avatar images used in the online preview of the paradigm were created using by pickaface.net and due to their terms not available for redistribution. You should therefore create your own images. All images should be 250x250 pixels in size and carry the names "avatar_NUMBER.png" (e.g. avatar_1.png; "png" should be lower case; the numbers in the names should be consequtive, starting from 1). The number of avatars dependeds on the corresponding parameter. The images should be placed in folder "avatars," located in the main study folder extracted on your computer or server.

    settings.numberofavatars = 40;
    
	
    // **Redirection**    
	// After the introduction task is over participants should be redirected to a survey with manipulation checks and dependent measures, to subsequent tasks, or to further instructions. 
	// If the study is called with a parameter for redirection, as explained in the documentation, this value is overwritten. 
	// To the redirect link, the following information will be appended: (1) participant number, (2) condition, (3) username, (4) description submitted by participant. These variables can be extracted from the link, saved as data, and used for linking the Social Media Ostracism paradigm to subsequent tasks and measures. See documentation for more details.

    settings.defaultredirect = 'https://newqtrial2015az1.az1.qualtrics.com/SE/?SID=SV_6Lv1bs4HXcpMtNP';

	
	// **Tasklength**     
    // Length of the group introduction task in milliseconds. Can be changed to any number (in ms). Default: 180000 (3min) 
    settings.tasklength = 90000; 

	
	// **Number** **of** **"likes"**    
    // Each received "like" is indicated by the timepoint (in ms) at which the "like" will appear. To change the number of "likes" in each condition, add or remove timepoints. Make sure that every timepoint (except the first) is preceded by a single comma. 
	// In cases with only 1 "like," a second "like" is added with time point 9999999. This "like" is added for programming purposes and is never executed, as it is outside the task time

    // In condition 1, user will receive 5 likes at the following timepoints (in ms). Default: [10000, 15000,35000,80000,1320000,150000]
    settings.condition_1_likes = [17000, 9999999]; // 9

    // In condition 2, user will receive 6 likes at the following timepoints (in ms). Default: [10000, 15000,35000,80000,1320000,150000]
    settings.condition_2_likes = [12000,22000,29000,38000, 43000, 68000, 79000];  // 7

    settings.task_likes = [9000, 15000,22000,31000,39000];  // 5
	// **Others' likes**     
	// To keep the total distribution of "likes" constant across conditions, The "likes" received by one group member can be adjusted according to the participant's. By default, the other group member receives 9 "likes" in the participant-ostracism condition, 5 in the participant-inclusion condtion, and 1 in the participant-overinclusion condtion.
	settings.condition_1_adjusted_likes = [8000, 15000,19000,27000,39000,55000, 58000]; // 7
	settings.condition_2_adjusted_likes = [6000, 14000,15000,19000,25000]; // 5
	
    // Usernames by which the participant will receive "likes"
	// If group member names are changed, these should be changed accordingly.
    settings.likes_by = ['George','AncaD','Sarah','Arjen','Jane','Nick','Nicole','Heather','Ky'];
    //settings.likes_by_after = ['AncaD','Sarah','Jane','Nick','Dan','Heather','Ky'];
  }
  
  
  // -------------------
  // Above were the basic parameters you can adjust using the instructions. The remaining code is also annotated, but we do not recommend changing it, unless you are comfortable with web programming.
  // -------------------
  
  
  // **Slide:** **Intro**     
  // With instructions regarding the task. The intro container is shown, the continue calls the next slide when clicked.
  
  function init_intro() {
  	$('#intro').show();
  	$('#submit_intro').on('click',function() {
			$('#intro').hide();
  			init_name(); 
  	});	
  }
	
  function init_after_task_c1() {

	$('#after_task_c1').show();
	
  	$('#submit_after_task_c1').on('click',function() {
		$('#after_task_c1').hide();
		init_text1();
		
	});
  }
	
function init_after_task_c2() {

	$('#after_task_c2').show();
	
  	$('#submit_after_task_c2').on('click',function() {
		$('#after_task_c2').hide();
		init_text1();
		
	});
  }
	
  function init_profiles1() {
	  
	  $('#profiles1').show();
	  shortcut.add("Backspace",function() {});
	  jQuery("#countdown1").countDown({
  		startNumber: 60, // in seconds
  		callBack: function(me) {
  			console.log('over');
          $('#timer1').text('00:00');
  		}
  	  });
	  users = {
		  "posts" : [
			{
			  "avatar": 'avatars/' + window.avatar + '.png',
			  "username": window.username,
			  "userage": window.age,
			  "usergender": window.gender,
			  "userpolitic": window.politic,
			  "text": window.description1,
			  "likes": window.settings.condition_likes,
			  "usernames": window.settings.likes_by
			}
		  ]
		};
	  var tpl = $('#usertmp1').html(),html = Mustache.to_html(tpl, users);
	  $("#profiles1").append(html);
	  var tpl = $('#newtmp1').html(),html = Mustache.to_html(tpl, others3);
	  $("#profiles1").append(html);
	  setTimeout(function() {
    		$('#continue1').show();
		$('#timer1').text('00:00');
    	  	$('#continue1').on('click',function() {
		$('#profiles1').hide();
  		init_text2();
	  });
    	},60000);
   }
	
function init_profiles2() {
	  
	  $('#profiles2').show();
	  shortcut.add("Backspace",function() {});
	  jQuery("#countdown2").countDown({
  		startNumber: 60, // in seconds
  		callBack: function(me) {
  			console.log('over');
          $('#timer2').text('00:00');
  		}
  	  });
	users = {
		  "posts" : [
			{
			  "avatar": 'avatars/' + window.avatar + '.png',
			  "username": window.username,
			  "userage": window.age,
			  "usergender": window.gender,
			  "userpolitic": window.politic,
			  "text": window.description2,
			  "likes": window.settings.condition_likes,
			  "usernames": window.settings.likes_by
			}
		  ]
		};
	  var tpl = $('#usertmp1').html(),html = Mustache.to_html(tpl, users);
	  $("#profiles2").append(html);
	  var tpl = $('#newtmp2').html(),html = Mustache.to_html(tpl, others3);
	  $("#profiles2").append(html);
	  setTimeout(function() {
    		 $('#continue2').show();
		$('#timer2').text('00:00');
    		$('#continue2').on('click',function() {
		$('#profiles2').hide();
  		init_text3();
	  });
    
   	  },60000);
	  
	 
  }
	
function init_profiles3() {
	  
	  $('#profiles3').show();
	  shortcut.add("Backspace",function() {});
	  jQuery("#countdown3").countDown({
  		startNumber: 60, // in seconds
  		callBack: function(me) {
  			console.log('over');
          $('#timer3').text('00:00');
  		}
  	  });
	users = {
		  "posts" : [
			{
			  "avatar": 'avatars/' + window.avatar + '.png',
			  "username": window.username,
			  "userage": window.age,
			  "usergender": window.gender,
			  "userpolitic": window.politic,
			  "text": window.description3,
			  "likes": window.settings.condition_likes,
			  "usernames": window.settings.likes_by
			}
		  ]
		};
	  var tpl = $('#usertmp1').html(),html = Mustache.to_html(tpl, users);
	  $("#profiles3").append(html);
	  var tpl = $('#newtmp3').html(),html = Mustache.to_html(tpl, others3);
	  $("#profiles3").append(html);
	  setTimeout(function() {
    		$('#continue3').show();
		$('#timer3').text('00:00');
	  	$(window).unbind('beforeunload');
   	  	$('#continue3').on('click',function() {
			location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d1='+encodeURI(window.description1)+'&d2='+encodeURI(window.description2)+'&d3='+encodeURI(window.description3);
			//$('#profiles3').hide();
	  });
    
   	  },60000);
	   
  }
	


  // **Slide:** **Username**       
  // Note: Only alphanumeric usernames without spaces are accepted
  
  function init_name() {

  	$('#name').show();

    
  	$('#submit_username').on('click',function() {

  		var error = 0;
  		var uname = $('#username').val();

  		if(uname == "") {
  			error = 1;
  			errormsg = 'Please enter text';
  			uname = "undefined";
  		}
  		if(not_alphanumeric(uname)) {
  			error = 1;
  			errormsg = 'Please only letters (A-Z, a-z) and no spaces';
  		}  		

  		if(error == 0) {
			$('#name').hide();
			//window.username = $('#username').val();
			window.username = uname;
  			init_demo();  			
  		} else {
  			alertify.log(errormsg,"error");
  		}


  	});
  }

	
  // All the demographic data
	
  function init_demo() {

	$('#demo').show();
	  
	$("input[name=inter]").change(function(){
    		var max= 3;
    		if( $("input[name=inter]:checked").length == max ){
        		$("input[name=inter]").attr('disabled', 'disabled');
        		$("input[name=inter]:checked").removeAttr('disabled');
    		}else{
         		$("input[name=inter]").removeAttr('disabled');
   		 }
	});
	  
  	$('#submit_demo').on('click',function() {

  		var error = 0;
  		var uage = $('#age').val();
		var min = 1;
  			
		if ($("input[name=inter]:checked").length >= min) {           
		   /*function getCheckboxValues(interForm) {*/
  			var values = [];
  			var inters = interForm.inter;

  			for (var i=0, iLen=inters.length; i<iLen; i++) {
    				if (inters[i].checked) {
      					values.push(inters[i].value);
    				}
  			}
  		/*	return values;
		    }*/
			if (values.length == 1) {
				var upolitic = values[0];
			} else if (values.length == 2) {
				var upolitic = values[0] + " and " + values[1];
			} else if (values.length == 3) {
				var upolitic = values[0] + ", " + values[1] + " and " + values[2];
			}
		} else if($("input[name=inter]:checked").length < min) {
			error = 1;
			errormsg = 'Please state at least one interest';
			upolitic ='undefined';
		}
		
		if ($('input[name="gender"]:checked').val() != null) {           
		   var ugender = $('input[name="gender"]:checked').val();
		} else if($('input[name="gender"]:checked').val() == null) {
			error = 1;
			errormsg = 'Please state your gender';
			ugender ='undefined';
		}

  		if(uage == "") {
  			error = 1;
  			errormsg = 'Please enter your age';
  			uage = "undefined";
  		} else if(isNaN(uage)) {
  			error = 1;
  			errormsg = 'Please enter your age using numbers only';
  		}  

  		if(error == 0) {
			$('#demo').hide();
			window.age = uage;
			window.gender = ugender;
			window.politic = upolitic;
  			init_avatar();  			
  		} else {
  			alertify.log(errormsg,"error");
  		}


  	});
  }
  // **Slide:** **Avatar**       
  // Avatar slide in which the participant is asked to select an avatar
   
  function init_avatar() {
  	$('#avatar').show();

    var avatars = window.settings.numberofavatars;    
  	for(var i=0; i<avatars; i++) 
  	{ 
  		$('.avatars').append('<img id="avatar_' + i+ '" src="avatars/avatar_' + i + '.png" class="avatar" />');
  	} 

  	$('.avatar').on('click', function() {
  		$('.avatar').removeClass('selected');
  		$(this).addClass('selected');
  	});

    	$('#submit_avatar').on('click',function() {
    		if($('.selected').length == 1) {
  			$('#avatar').hide();
  			window.avatar = $('.selected').attr('id');
  			window.avatarexport = /avatar_([^\s]+)/.exec(window.avatar)[1];
    			//init_text(); 
			init_fb_intro();
    		} else {
    			alertify.log("Please select an avatar","error");
    		}
    	});

  }


  // **Slide:** **Description**   
  function init_text1() {
  	$('#text1').show();
	shortcut.remove("Backspace",function() {});
  	$("#description1").keyup(function(){
  	  $("#count1").text("Characters left: " + (400 - $(this).val().length));
  	});

  	$('#submit_text1').on('click',function() {

  		var error = 0;
  		if($('#description1').val() == "") {
  			error = 1;
  			errormsg = 'Please enter text';
  		}
  		if($('#description1').val() !== "" && $('#description1').val().length < 140) {
		
  			error = 1;
  			errormsg = 'Please write a bit more';
			}
  		if($('#description1').val().length > 401) {
  		
  			error = 1;
  			errormsg = 'Please enter less text';
  		}  		
  		if(error == 0) {
  			window.description1 = $('#description1').val();
			$("#loader1").show();
			setTimeout(function() {
  				$("#loader1").hide();
				$('#text1').hide();
				init_profiles1();
  			}, 8000);			
    		} else {
    			alertify.log(errormsg,"error");
    		}
  	});  	
  }
	
function init_text2() {
  	$('#text2').show();
	shortcut.remove("Backspace",function() {});
  	$("#description2").keyup(function(){
  	  $("#count2").text("Characters left: " + (400 - $(this).val().length));
  	});

  	$('#submit_text2').on('click',function() {

  		var error = 0;
  		if($('#description2').val() == "") {
  			error = 1;
  			errormsg = 'Please enter text';
  		}
  		if($('#description2').val() !== "" && $('#description2').val().length < 140) {
		
  			error = 1;
  			errormsg = 'Please write a bit more';
			}
  		if($('#description2').val().length > 401) {
  		
  			error = 1;
  			errormsg = 'Please enter less text';
  		}  		
  		if(error == 0) {
  			window.description2 = $('#description2').val();
    			$("#loader2").show();
			setTimeout(function() {
  				$("#loader2").hide();
				$('#text2').hide();
				init_profiles2();
  			}, 8000);  			
    		} else {
    			alertify.log(errormsg,"error");
    		}
  	});  	
  }
	
function init_text3() {
  	$('#text3').show();
	shortcut.remove("Backspace",function() {});
  	$("#description3").keyup(function(){
  	  $("#count3").text("Characters left: " + (400 - $(this).val().length));
  	});

  	$('#submit_text3').on('click',function() {

  		var error = 0;
  		if($('#description3').val() == "") {
  			error = 1;
  			errormsg = 'Please enter text';
  		}
  		if($('#description3').val() !== "" && $('#description3').val().length < 140) {
		
  			error = 1;
  			errormsg = 'Please write a bit more';
			}
  		if($('#description3').val().length > 401) {
  		
  			error = 1;
  			errormsg = 'Please enter less text';
  		}  		
  		if(error == 0) {
  			window.description3 = $('#description3').val();
    			$("#loader3").show();
			setTimeout(function() {
  				$("#loader3").hide();
				$('#text3').hide();
				init_profiles3();
  			}, 8000); 			
    		} else {
    			alertify.log(errormsg,"error");
    		}
  	});  	
  }


  // **Slide:** **Instructions**   
  function init_fb_intro() {
  	$('#fb_intro').show();
	
  	$('#submit_fb_intro').on('click',function() {

			$('#fb_intro').hide();
 			init_fb_login();  			

  	});	
  }


  // **Slide:** **Login** **Screen**   
  // Participant can continue after 8000ms = 8s      
  function init_fb_login() {
  	$('#fb_login').show();
	

  	setTimeout(function() {
  		$('#msg_all_done').show();
  		$("#loader").hide();
  	}, 8000);
	
  	$('#submit_fb_login').on('click',function() {
			$('#fb_login').hide();
  			init_task();
  	});	
  }
  
  // **Slide:** **Task**   
  function init_task() {
    
    $('#task').show();

	shortcut.add("Backspace",function() {});      

  	jQuery("#countdown").countDown({
  		startNumber: window.settings.tasklength/1000, // in seconds
  		callBack: function(me) {
  			console.log('over');
        $('#timer').text('00:00');
  		}
  	});
	   
		users = {
		  "posts" : [
			{
			  "avatar": 'avatars/' + window.avatar + '.png',
			  "username": window.username,
			  "userage": window.age,
			  "usergender": window.gender,
			  "userpolitic": window.politic,
			  "text": window.description,
			  "likes": window.settings.condition_likes,
			  "usernames": window.settings.likes_by
			}
		  ]
		};
		
    // Add user box to slide     
	  var tpl = $('#usertmp').html(),html = Mustache.to_html(tpl, users);
	  $("#task").append(html);
	  
    // Add other boxes to slide    
	  var tpl = $('#otherstmp').html(),html = Mustache.to_html(tpl, others);
	  $("#task").append(html);
 
    // Randomize order of other players boxes
    function reorder() {
       var grp = $("#others").children();
       var cnt = grp.length;

       var temp,x;
       for (var i = 0; i < cnt; i++) {
           temp = grp[i];
         x = Math.floor(Math.random() * cnt);
         grp[i] = grp[x];
         grp[x] = temp;
     }
     $(grp).remove();
     $("#others").append($(grp));
    }
    reorder();    

    // When user receives likes
	  $('.userslikes').each(function() {
  		var that = $(this);
  		var usernames = $(this).data('usernames').split(",");
  		var times = $(this).data('likes').split(",");

  		for(var i=0; i<times.length; i++) 
  		{ 
  			times[i] = +times[i]; 
  			
  			themsg = usernames[i] + " showed interest in your profile";

  			setTimeout(function(themsg) {
  				that.text(parseInt(that.text()) + 1);
  				alertify.success(themsg)

  			}, times[i], themsg);
  		} 		
	  });
	  
    // When others receive likes
	  $('.otherslikes').each(function() {
  		var that = $(this);
  		var times = $(this).data('likes').split(",");
  		
  		for(var i=0; i<times.length; i++) 
  		{ 
  			times[i] = +times[i]; 
  			
  			setTimeout(function () {
  				that.text(parseInt(that.text()) + 1);
  			}, times[i]);
  			
  		} 
	  });
	 

    // Initialize like buttons
	  $('.btn-like').on('click', function() {
		  $(this).prev().text(parseInt($(this).prev().text()) + 1);
      // Like buttons can only be clicked once
		  $(this).attr("disabled", true);
	  });
	
    // Initalize Masonry plugin
    // For display of user and other players boxes in columns without gaps
		$('#task').masonry({
		  itemSelector : '.entry',
		  columnWidth : 10
		});
   

    // Redirect, default after 180000ms = 180s = 3min
    setTimeout(function() {
    
    //$(window).unbind('beforeunload');
    
    $('#continue').show();

    $('#timer').text('00:00');
    
    $('#continue').on('click',function() {
			$('#task').hide();
	    		if (window.condition == 1)
				init_after_task_c1();
	    		else if (window.condition == 2)
  				init_after_task_c2();
    });
    
    },window.settings.tasklength); // timing for task

  }
	

  // Get URL parameters to set condition number and participant number
  function get_params() {
      // condition number must be 1, 2, or 3
    if(window.QueryString.c !== undefined && !isNaN(parseInt(window.QueryString.c)) && parseInt(window.QueryString.c) > 0 && parseInt(window.QueryString.c) < 4) {
      window.condition = parseInt(window.QueryString.c);
    } else {
      window.condition = Math.floor((Math.random() * 3) + 1); // a random condition is default
        //window.condition = 1; // condition defaults to 1
    }
    // participant number must be numeric
    if(window.QueryString.p !== undefined && !isNaN(parseInt(window.QueryString.p))) {
      window.participant = parseInt(window.QueryString.p);
    } else {
      window.participant = 0; // participant defaults to 0
    }    
    // If old avatars or not
    if(window.QueryString.old !== undefined && !isNaN(parseInt(window.QueryString.old))) {
      window.old = parseInt(window.QueryString.old);
    } else {
      window.old = 0; // participant defaults to 0
    } 
    // redirect
    if(window.QueryString.redirect !== undefined && window.QueryString.redirect !== "") {
      window.redirect = decode(window.QueryString.redirect);
    } else {
	  window.redirect = window.settings.defaultredirect;
	}
	
	var urlHasQuestionMark = (window.redirect.indexOf("?") > -1);
	if(!urlHasQuestionMark) {
		window.redirect = window.redirect+"?redir=1";
	}
	//alert(window.redirect);

  }
	
  // adjustments according to current condition
  function adjust_to_condition() {

    // the number of likes a person receives depends on the condition
	// in addition, the number of likes another person receives is adjusted, so that there is the same number of likes overall
	switch(condition) {
		case 1:
			window.settings.condition_likes = settings.condition_1_likes;
			window.others.posts[1].likes = settings.condition_1_adjusted_likes;
			break;
		case 2:
			window.settings.condition_likes = settings.condition_2_likes;
			window.others.posts[2].likes = settings.condition_2_adjusted_likes;
			break;
	}	
	  
  }
  /* spara detta nedan! funkar!
  // Setting the OnLinkClick to 1. This gets changed to 0 if Continue button at end of experiment is clicked
  // instead of the link.
  window.linkClick = 1;
  */
  window.linkClick = 0;
  // The variable QueryString contains the url parameters, i.e. condition no. and participant no.
  // via http://stackoverflow.com/a/979995
  window.QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
        // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = pair[1];
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    } 
      return query_string;
  } ();


  // Function to check letters and numbers
  // via http://www.w3resource.com/javascript/form/letters-numbers-field.php
  function not_alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(inputtxt.match(letterNumber)) {
        return false;
      } else { 
        return true; 
      }
  }


  // Function to add extra zeros infront of numbers (used for the countdown)
  // via http://stackoverflow.com/a/6466243
  function pad (str, max) {
    return str.length < max ? pad("0" + str, max) : str;
  }

  // Function for encoding and decoding URLs
  // via http://meyerweb.com/eric/tools/dencoder/
  function encode(unencoded) {
	return encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
  }
  function decode(encoded) {
	return decodeURIComponent(encoded.replace(/\+/g,  " "));
  }

  
  // Simple Countdown
  // via http://davidwalsh.name/jquery-countdown-plugin
  jQuery.fn.countDown = function(settings,to) {
    settings = jQuery.extend({
      startFontSize: "12px",
      endFontSize: "12px",
      duration: 1000,
      startNumber: 10,
      endNumber: 0,
      callBack: function() { }
    }, settings);
    return this.each(function() {
      if(!to && to != settings.endNumber) { to = settings.startNumber; }  
      jQuery(this).children('.secs').text(to);
      jQuery(this).animate({
        fontSize: settings.endFontSize
      }, settings.duration, "", function() {
        if(to > settings.endNumber + 1) {
          jQuery(this).children('.secs').text(to - 1);
          jQuery(this).countDown(settings, to - 1);
          var minutes = Math.floor(to / 60);
          var seconds = to - minutes * 60;
          jQuery(this).children('.cntr').text(pad(minutes.toString(),2) + ':' + pad(seconds.toString(),2));
        }
        else {
          settings.callBack(this);
        }
      });
    });
  };

  // Prevent that participants accidentally exit the experiment by disabling F5 and backspace keys
  shortcut.add("f5",function() {});  
  $(window).bind('beforeunload', function(){
    return 'Are you sure you want to quit the experiment completely?';
  });   

  // Set Settings, get Participant No. and Condition No.
  set_settings();
  get_params();
  adjust_to_condition();

  // Start with the intro slide
  init_intro();

});
