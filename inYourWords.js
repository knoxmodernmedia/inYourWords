    /**
     *   @author Knox Modern Media
     * 
     * 
     *   @Copyright (c) 2014 Knox Modern Media
     *   
     *   Permission is hereby granted, free of charge, to any person obtaining a copy
     *   of this software and associated documentation files (the "Software"), to deal
     *   in the Software without restriction, including without limitation the rights
     *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     *   copies of the Software, and to permit persons to whom the Software is
     *   furnished to do so, subject to the following conditions:
     *   
     *   The above copyright notice and this permission notice shall be included in
     *   all copies or substantial portions of the Software.
     *   
     *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     *   THE SOFTWARE.
     *  
     *   @license http://opensource.org/licenses/MIT
     *   @version 1.1.0
     */


    function create_editor(){
       var height = $('#words').height();
       var width = $('#words').width();
       var parent = $('#words').parent();
       
       $(parent).prepend(
       '<style>\n@font-face{font-family:InYourWords; src:url("inyourwords.woff") format("woff"), url("inyourwords.eot") format("eot"), url("inyourwords.ttf") format("truetype"), url("inyourwords.svg") format("svg");\n}\n\r'+     
       '#InYourWords{\nborder-bottom-left-radius:.25rem;\nborder-bottom-right-radius:.25rem;\nbox-sizing:border-box;\n-moz-box-sizing:border-box;\n-webkit-box-sizing:border-box;\nborder:thick solid #777;\n}\n\r'+
       '#IYW_controls button, .IYW_button{\nfont-family:"InYourWords";\nwidth:33.333%;\nmargin:0%;\npadding:0;\nheight:3rem;\ntext-align:center;\nvertical-align:middle;\nborder:none;\nborder-left:thick solid #777;\nborder-bottom:thick solid #777;\nbackground:linear-gradient(to  bottom right,#ccc 80%, #fff 100% );'+
       '\n-webkit-transition:all,.25s;\n-moz-transition:all,.25s;\ntransition:all,.25s;\n}\n\r'+
       '\n@media screen and (min-width:480px){\n#IYW_controls button, .IYW_button{\nwidth:25%;\n}\n}\n\r'+
       '\n@media screen and (min-width:768px){\n#IYW_controls button, .IYW_button{\nborder-bottom:none;\nwidth:8.333%;\n}\n}\n\r'+
       '#IYW_controls{\nborder-right:thick solid #777;\nborder-top:thick solid #777;\nborder-top-right-radius:.25rem;\nborder-top-left-radius:.25rem;\nbox-sizing:border-box;\n-moz-box-sizing:border-box;\n-webkit-box-sizing:border-box;\n}\n\rli{\nbackground:#222;\n}\n\r'+
       '#IYW_controls button:hover, .IYW_button:hover{\nbackground:linear-gradient(to  bottom right,#222 80%, #fff 100% ); color:#FFF;\n}\n\r@-moz-document url('+document.URL+'){\nselect{\npadding-top:1rem!important;\n-moz-appearance:none; text-indent:0.01px; text-overflow:"";\n}\n}\n\r'+
       '#IYW_controls ul{\ndisplay:none;\nposition:absolute;background:#222;\nmargin-top:0;\ncolor:#fff;\nlist-style-type:none;\npadding:.25rem;\n}\n\r'+
       '#IYW_controls ul li{\nfont-family:"inYourWords";\ncursor:pointer;\n}\n\r#IYW_controls ul li:hover{\nbackground:#ccc;\ncolor:#222;\n}\n\r'+
       '.edit_select_open{\ndisplay:inline-block!important;\n}\n\r'+
       '#edit_colors_options li{\ntext-align:center;\nbackground:#777;\n}\n\r'+
       '#IYW_frame_wrapper{\ndisplay:inline-block;\nbackground:#fff;\nbackground-image:url(IYW_logo.png);\nbackground-repeat:no-repeat;\nbackground-position:calc(100% - 1rem) calc(100% - 1rem);\n}\n\r'+
       '</style>'+    
       '<div id="IYW_controls" name="IYW_controls">'+
       '<button id="select_font_name" onclick="edit_show_select(this);return false;" >'+
       '&#xe447;'+
       '</button>'+
       '<ul id="edit_font_list">'+
       '<li onclick="edit_font(\'arial\', this);" style="font-family:arial;">Arial</li>'+
       '<li onclick="edit_font(\'Verdana\', this);" style="font-family:Verdana;">Verdana</li>'+
       '<li onclick="edit_font(\'Helvetica\', this);" style="font-family:Helvetica;">Helvetica</li>'+
       '<li onclick="edit_font(\'Tahoma\', this);" style="font-family:Tahoma;">Tahoma</li>'+
       '<li onclick="edit_font(\'impact\', this);" style="font-family:impact;">Impact</li>'+
       '<li onclick="edit_font(\'monospace\', this);" style="font-family:monospace;">Monospace</li>'+
       '<li onclick="edit_font(\'comic sans ms\', this);" style="font-family:\'comic sans ms\';">Comic Sans</li>'+
       '</ul>'+
       '<button title="font-size"  id="select_size" onclick="edit_show_select(this);return false;">'+
       '&#xe448;'+
       '</button>'+
       '<ul >'+
       '<li onclick="edit_font_size(\'1\', this);" style="font-size:10px">Aa</li>'+
       '<li onclick="edit_font_size(\'2\', this);" style="font-size:13px">Aa</li>'+
       '<li onclick="edit_font_size(\'3\', this);" style="font-size:16px">Aa</li>'+
       '<li onclick="edit_font_size(\'4\', this);" style="font-size:18px">Aa</li>'+
       '<li onclick="edit_font_size(\'5\', this);" style="font-size:24px">Aa</li>'+
       '<li onclick="edit_font_size(\'6\', this);" style="font-size:32px">Aa</li>'+
       '<li onclick="edit_font_size(\'7\', this);" style="font-size:48px">Aa</li>'+
       '</ul>'+
       '<button title="bold" onclick="edit_bold();return false;">&#xe44e;</button>'+ 
       '<button title="italic" onclick="edit_italic();return false;">&#xe456;</button>'+
       '<button title="underline" onclick="edit_underline();return false;">&#xe44f;</button>'+
       '<button title="color" id="select_color" onclick="edit_show_select(this);return false;" >'+
       '&#xe021;'+
       '</button>'+
       '<ul id="edit_colors_options">'+
       '<li onclick="edit_color(\'#000000\', this);" style="color:#000000;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#FFFFFF\', this);" style="color:#FFFFFF;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#FF0000\', this);" style="color:#FF0000;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#00FF00\', this);" style="color:#00FF00;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#0000FF\', this);" style="color:#0000FF;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#FFFF00\', this);" style="color:#FFFF00;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#663399\', this);" style="color:#663399;" >&#xe025;</li>'+
       '<li onclick="edit_color(\'#FFa500\', this);" style="color:#FFa500;" >&#xe025;</li>'+
       '</ul>'+
       '<button title="hyperlink" onclick="edit_link();return false;">&#xe2c9;</button>'+
       '<button title="remove hyperlink" onclick="edit_unlink();return false;">&#xe2ca;</button>'+
       '<button title="horizontal rule" onclick="edit_hr();return false;">&#xe375;</button>'+
       '<button title="numbered list" onclick="edit_ol();return false;">&#xe29c;</button>'+
       '<button title="unordered list" onclick="edit_ul();return false;">&#xe29b;</button>'+
       '<button title="undo" onclick="edit_undo();return false;">&#xe14b;</button>'+
       '</div><div id="IYW_frame_wrapper"><iframe name="InYourWords" id="InYourWords" >\n</iframe><div>');
       $(parent).css("overflow","hidden");
       
       var target = $('#InYourWords'); 
       var controls = $('#IYW_controls');
              
       $('#words').hide();
       
       
       $(target).css({
           height:height,
           width:width
       });
       
       $(controls).css("width",width);
           setTimeout(function(){
             InYourWords.document.designMode = "On";
               
           },20);
   
       $('#IYW_controls ul').mouseleave(function(){
          $(this).removeClass('edit_select_open'); 
       });         
       
    }
   
   $(document).ready(function(){
    create_editor();
   
   });
    
    function position_selects(){
        $('#IYW_controls ul').each(function(){
            var p_offset = $(this).prev('button').offset();
            var p_height = $(this).prev('button').height(); 
            var p_width = $(this).prev('button').width();
            $(this).css({
               top:p_offset.top +p_height,
               left:p_offset.left,
               minWidth:p_width 
            });   
        });
    }
    
    function edit_bold(){
        InYourWords.document.execCommand('bold',false,null);    
    }
    
    function edit_italic(){
        InYourWords.document.execCommand('italic',false,null);    
    }
    
    function edit_underline(){
        InYourWords.document.execCommand('underline',false,null);    
    }
    function edit_font_size(size, t){
        InYourWords.document.execCommand('FontSize',false,size);    
        $(t).parent('ul').toggleClass('edit_select_open');
    }
    function edit_color(color,t){
        InYourWords.document.execCommand('ForeColor',false,color);    
        $(t).parent('ul').toggleClass('edit_select_open');
    }
    function edit_hr(){
        InYourWords.document.execCommand('inserthorizontalrule',false,null);
    }    
    function edit_ul(){
        InYourWords.document.execCommand('InsertUnorderedList',false,null);
    }
    function edit_ol(){
        InYourWords.document.execCommand('InsertOrderedList',false,null);
    }    
    function edit_link(){
        var link = prompt("Link URL:","http://");
        InYourWords.document.execCommand('CreateLink',false,link);
    }
     function edit_unlink(){
        InYourWords.document.execCommand('Unlink',false, null);
    }
    function edit_undo(){
        InYourWords.document.execCommand('undo',false, null);
    }
    
    function edit_show_select(t){
        $(t).next('ul').toggleClass('edit_select_open');
        
    }
    
    function edit_font(value,t){
        InYourWords.document.execCommand('fontName',false,value);
        $(t).parent('ul').toggleClass('edit_select_open');
    }
    
   
    function edit_submit(){
        var data = (InYourWords.document.body.innerHTML);
        $('#words').val(data);
        $('#words').closest('form').submit();
    }
    
    $(document).ready(function(){
        $('#words').closest('form').children('input[type="submit"]').click(function(){
           edit_submit();
           });
       position_selects();
       });
    
    function done_resisizng(){
       $('#words').show();
       var height = $('#words').height();
       var width = $('#words').width();
       
       $('#InYourWords').css({
           height:height,
           width:width
        });
       $('#IYW_controls').css({
           width:width
       }); 
       
        $('#words').hide();
        position_selects();
    }
    
    var watch_for_resize;
    $(window).resize(function(){
        clearTimeout(watch_for_resize);
        watch_for_resize = setTimeout(done_resisizng,150);
    });
    
        
    
    

   
