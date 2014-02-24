inYourWords
======
a simple *responsive* WYSIWYG editor plugin for jQuery
------------------------------------------------------

* inYourWords is a simple html WYSIWYG editor jQuery Plugin. This is not nearly as sophisticated or robust as tinyMCE, 
* but if you just want basic WYSIWYG capabilites this will fit the bill nicely. Works With modern jQuery (requires 1.3+),
* and at a little over 2k (minified) it is pretty small.
* Works with Firefox, Chrome, and IE 10+ (still working on the few bugs with IE8 & 9).
* This script uses _execCommand_ to generate the WYSIWYG html, which can be spotty with the <font> tags etc.).
* class.inYourWords.php ~~sanitizes the text and reformats the tags to modern elements/measurments~~ does basic
  sanitizing for now- nothing I would trust to a public-facing input yet. Use a purifier for now if the content
  will not be from trusted sources. Also still working on converting to modern tags. 

* ~~(along with any other fields that were posted) to your back-end script.~~ Pretty nifty huh?
* Down the road I'm working on adding an ext that will add support for the google fonts library as font options, 
* a color picker, who knows. **update** added a Google fonts plugin that supports the google fonts library.   

### EASY USE EXAMPLES ###

1.Drop the entire inYourWords folder somewhere accessable in your project.
2.Add the script tag to your .html / .php / .asp file, after jQuery:

				<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
				<script type="text/javascript" src="/path_to_folder/inYourWords.min.js"></script>

3.Create your form like usual, with all the inputs/selects/radios you desire. When you are ready for your WYSIWYG editor,
 create a textarea with the id "words", like so:
				<textarea name="words" id="words" ></textarea>
style the width and height the same size you want the new WYSIWYG editor to be 
(inYourWords is responsive, so feel free to use em/rem/% measures).

**Note** 
Just like the default textarea, the inYourWords element will have a display of ```:inline-block```. Later on I'll
get you the handle for editing that.

4.Use a "submit" type input, not a button, to submit the form:

				<input type="submit" value="Publish">

(inYourWords grabs this tag).

_That is basically it for simple use._ 

The script will handle the rest. If your want to grab the elements and style them, here you go:

				#"IYW_frame_wrapper"
				
is the frame containing div. Change the background, background images, display properties, margins etc. on this guy.

				#"IYW_controls"

is the control button div. You can grab the box and change it as you wish. The buttons and selects are in 
			
				class="IYW_button"
				
so that's how you grab them. Want to change an individual button? Easy. Just look at the source from a rendered page
and grab it by the title (they all have one).
				
				button[title="bold"]
				
**Note**
I would suggest putting any CSS at the very *end* of the page, as inYourWords renders the styling when it inserts 
the new content, and that is pretty far down the DOM. I doubt you will have any FOUC issues with this little guy, but 
if you are super concerned maybe put them in a little css file or (gasp) put them in a <style> tag. 

That is all, I am open to suggestions, improvements, feel free to grab a fork and start improving. Thanks!


###ADDED GOOGLE FONTS SUPPORT###
to add google fonts to your project, add the google fonts script right before the body close tag:

				<script type="text/javascript" src="googlefonts.inYourWords.js"></script>

Then inside a script create an array of the google fonts you want to use, URL encoding them with + signs:

				google_fonts = ["Meie+Script", "Modern+Antiqua", "Frijole", "Gochi+Hand", "Voces","Akronim", "Mystery Quest"];  

finally call the script with your array (use $(window).load to make sure the editor has already loaded):
	
				$(window).load(function(){
      			    Editor_Google_Fonts(google_fonts);
      			});

the editor will load the fonts, tag them and the php class will insert scripts to add the fonts in the output product. Note 
this means you cannot sanitize after the class has run, or you will lose the fonts.  
