
<!DOCTYPE html>
<html>

<head>
<!--[if !lte IE 9]> --><meta name="viewport" content="width=device-width, initial-scale=1"><!-- <![endif]-->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script type="text/javascript" src="inYourWords.js"></script>

<style>
form{
    overflow:hidden;
}

textarea{
    width:100%;
    height:20rem;
}

@media screen and (min-width:768px){
    textarea{
        width:80%;
    }
}    
@media screen and (min-width:1024px){
    textarea{
        width:60%;
    }
}    
     
</style>
</head>
<body>
<form action="DEMO-resulting_text.php" method="POST">



    <textarea name="words" id="words" ></textarea>
<input type="submit">
</form>
<script type="text/javascript" src="googlefonts.inYourWords.js"></script>
<script>
 $(window).load(function(){
      
       google_fonts = ["Meie+Script", "Modern+Antiqua", "Frijole", "Gochi+Hand", "Voces","Akronim", "Mystery Quest"];  
        
          Editor_Google_Fonts(google_fonts);
      });
</script>
</body>
</html>

