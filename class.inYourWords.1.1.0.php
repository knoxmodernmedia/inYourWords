<?php

class inYourWords {
        
    
    protected $google_scripts;
    public $output;
        
        
    function __construct($text){
        $this->google_scripts = "";    
        $this->find_google_fonts($text);
        $this->mini_clean($text);
        $this->add_google_fonts();
        return $this->output;    
    }


    protected function find_google_fonts($text){
        $used_fonts = array();    
        
        $standard_fonts=array("arial",
                              "Verdana",
                              "Helvetica",
                              "impact",
                              "Tahoma",
                              "monospace",
                              "comic sans ms");
        
        $dom = new DOMDocument;
        $dom->loadHTML($text);
        $fonts = $dom->getElementsByTagName('font');
        foreach($fonts as $font){
            $used_fonts[] = $font->getAttribute('face');
        }
        
        foreach($used_fonts as $font){
            if(!in_array($font,$standard_fonts)){
                $font = str_replace(" ","+",trim($font));
                $this->google_scripts .= 'link = document.createElement("link"); link.href="http://fonts.googleapis.com/css?family='.$font.'"; link.rel ="stylesheet"; link.type = "text/css"; document.getElementsByTagName("head")[0].appendChild(link);'."\n";
            }
        }
        if(!empty($this->google_scripts)){
            $this->google_scripts = '<script type="text/javascript">'.$this->google_scripts.'</script>';
        }
         
    }
    
    protected function mini_clean($text){
        $ok_tags ='<p><br><a><font><hr><b><i><u><ul><li><ol>';   
        $text = str_replace(";","&#59;",$text);
        $text = str_replace("(","&#40;", $text);
        $text = str_replace(")","&#41;", $text);
        $text = str_replace("script","`script`", $text);
        $this->output = strip_tags($text,$ok_tags);
    }  

    protected function add_google_fonts(){
        $this->output = $this->output.$this->google_scripts;
    }


    


  //in the works right now - not usable methods yet  
    protected function replace_font_tags($text){
     
    $text = str_replace("<font", "<span", $text); 
    $text = str_replace("</font>", "</span>", $text); 
     
        
    }
    
    



    
}
