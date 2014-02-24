

      
      
      
      function Editor_Google_Fonts(fonts){
          $(fonts).each(function(index,  value){
           $("head").append("<link href='http://fonts.googleapis.com/css?family="+value+"' rel='stylesheet' type='text/css'>");
           $('#InYourWords').contents().find("head").append("<link href='http://fonts.googleapis.com/css?family="+value+"' rel='stylesheet' type='text/css'>");
            
           var new_font = value.split("+").join(" ");
            
           $('#edit_font_list').append('<li onclick="edit_font(\''+new_font+'\', this);" style="font-family:\''+new_font+'\';">'+new_font+'</li>');   
          });
      }
      
     