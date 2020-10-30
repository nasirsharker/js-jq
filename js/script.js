//================JQUERY PULGIN================//
              //1---------------
              $(document).ready(function(){
                  $(".PP").click(function(){
                    $(this).hide();
                  });
                });
              ///2----------------
              $(document).ready(function(){
				  $("button").click(function(){
				    $(".pp2").hide();
				  });
				});
              //3------------
              $(document).ready(function(){
				  $("input").focus(function(){
				    $(this).css("background-color", "yellow");
				  });
				  $("input").blur(function(){
				    $(this).css("background-color", "green");
				  });
				});
              //4-------------
              $(document).ready(function(){
			  $(".pp4").on({
			    mouseenter: function(){
			      $(this).css("background-color", "lightgray");
			    },  
			    mouseleave: function(){
			      $(this).css("background-color", "lightblue");
			    }, 
			    click: function(){
			      $(this).css("background-color", "yellow");
				    }  
				  });
				});
              //5------------
              $(document).ready(function(){
				  $("#hide").click(function(){
				    $(".pp5").hide();
				  });
				  $("#show").click(function(){
				    $(".pp5").show();
				  });
				});
              //6----------------
              $(document).ready(function(){
				  $("#myInput").on("keyup", function() {
				    var value = $(this).val().toLowerCase();
				    $("#myTable tr").filter(function() {
				      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
				    });
				  });
				});
              //7----------
              $(document).ready(function(){
				  $(".pp7").last().css("background-color", "yellow");
				});
              //8---------------
              $(document).ready(function(){
				  $("span").parents().css({"color": "red", "border": "2px solid red"});
				});
              //9-------------
              $(document).ready(function(){
				  $("button").click(function(){
				    $(".pp9").css({"background-color": "yellow", "font-size": "200%"});
				  });
				});
              //10-------------
              $(document).ready(function(){
				  $("button").click(function(){
				    $(".pp10").toggleClass("blue");
				  });
				});
              //11----------
              function appendText(){
				  var txt1 = "<p5>Text.</p5>";        // Create text with HTML
				  var txt2 = $("<p5></p5>").text("Text.");  // Create text with jQuery
				  var txt3 = document.createElement("p5");
				  txt3.innerHTML = "Text.";         // Create text with DOM
				  $("body").append(txt1, txt2, txt3);   // Append new elements
				};
				//12------------------
				$(document).ready(function(){
				  $("#btn1").click(function(){
				    $(".pp12").append(" <b>Appended text</b>.");
				  });

				  $("#btn2").click(function(){
				    $("ol").append("<li>Appended item</li>");
				  });
				});
				//13--------------
				$(document).ready(function(){
				  $("#btn10").click(function(){
				    $("#test1").text(function(i, origText){
				      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
				    });
				  });

				  $("#btn20").click(function(){
				    $("#test2").html(function(i, origText){
				      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
				    });
				  });
				});
				//14---------------
				$(document).ready(function(){
				  $("#btn11").click(function(){
				    $("#test11").text("Hello world!");
				  });
				  $("#btn21").click(function(){
				    $("#test21").html("<b>Hello world!</b>");
				  });
				  $("#btn31").click(function(){
				    $("#test31").val("Dolly Duck");
				  });
				});
				//15----------
				$(document).ready(function(){
				  $("button").click(function(){
				    $("#p10").css("color", "red")
				      .slideUp(1000)
				      .slideDown(1000);
				  });
				});
				//16----------
				$(document).ready(function(){
				  $("#flip1").click(function(){
				    $("#panel1").slideDown(2000);
				  });
				  $("#stop1").click(function(){
				    $("#panel1").stop();
				  });
				});
				//17-------------
				$(document).ready(function(){
				  $(".button1").click(function(){
				    var div5 = $(".div5");  
				    div5.animate({left: '50px'}, "slow");
				    div5.animate({fontSize: '20px'}, "slow");
				  });
				});
				//18----------
				$(document).ready(function(){
				  $(".button11").click(function(){
				    var div18 = $(".div18");
				    div18.animate({height: '300px', opacity: '0.4'}, "slow");
				    div18.animate({width: '300px', opacity: '0.8'}, "slow");
				    div18.animate({height: '100px', opacity: '0.4'}, "slow");
				    div18.animate({width: '100px', opacity: '0.8'}, "slow");
				  });
				});
				//19---------
				$(document).ready(function(){
				  $(".btn19").click(function(){
				    $(".div19").animate({
				      height: 'toggle'
				    });
				  });
				});
				//20--------------
				$(document).ready(function(){
				  $("#flip2").click(function(){
				    $("#panel2").slideToggle("slow");
				  });
				});
				//21-------------
				$(document).ready(function(){
				  $(".btn21").click(function(){
				    $("#div21").fadeToggle();
				    $("#div22").fadeToggle("slow");
				    $("#div23").fadeToggle(3000);
				  });
				});
				//22-----------
				$(document).ready(function(){
				  $(".btn22").click(function(){
				    $(".p22").toggle();
				  });
				});
