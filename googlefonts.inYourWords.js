

      
      
      
      function Editor_Google_Fonts(fonts){
          $(fonts).each(function(index,  value){
           $("head").append("<link href='http://fonts.googleapis.com/css?family="+value+"' rel='stylesheet' type='text/css'>");
           $('#InYourWords').contents().find("head").append("<link href='http://fonts.googleapis.com/css?family="+value+"' rel='stylesheet' type='text/css'>");
            
           var new_font = value.split("+").join(" ");
            
           $('#edit_font_list').append('<li onclick="edit_font(\''+new_font+'\', this);" style="font-family:\''+new_font+'\';">'+new_font+'</li>');   
          });
      }
      
      $(window).load(function(){
      
       google_fonts = ["Meie+Script", "Modern+Antiqua", "Frijole", "Gochi+Hand", "Voces","Akronim", "Mystery Quest"];  
        
          Editor_Google_Fonts(google_fonts);
      });
      
      
/*
       $(window).load(function(){ 
           $('#InYourWords').contents().find("head").append('<style>'+
    	   '@font-face {font-family: "Meie Script";font-style: normal;font-weight: 400;src: local("Meie Script"), local("MeieScript-Regular"), url(http://themes.googleusercontent.com/static/fonts/meiescript/v2/lwxuZ_zJQzRwnOocgbPAFIbN6UDyHWBl620a-IRfuBk.woff) format("woff");\n}\n\r'+
    	   '@font-face {font-family: "Modern Antiqua"; src:url("http://themes.googleusercontent.com/static/fonts/modernantiqua/v4/8qX_tr6Xzy4t9fvZDXPkh9K4x0DJI-T8q5ozNuxBQHo.woff") format("woff");}\n\r'+        
       	   '</style>'); 
       	   
       	   $('#edit_font_list').append('<li onclick="edit_font(\'Meie Script\', this);" style="font-family:\'Meie Script\';">Meie Script</li>'+
                                       '<li onclick="edit_font(\'Modern Antiqua\', this);" style="font-family:\'Modern Antiqua\';">Modern Antiqua</li>');
        });
*/
