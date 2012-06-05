$(document).ready(function() {
	
	//Sortable is applied on columns, and not on individual items
	$("#column1, #column2, #column3").sortable({ //defining sortable property
	handle: ".widget-head",	//to be held for sorting
	connectWith: ".column",//to be able to connect with other columns
	containment: "document",//limitation of sorting
	placeholder: "widget-placeholder",//the dotted destination of element
        
    });
	
//MINIMIZING THE WIDGET              
		$(".collapse").toggle(function(){
		$(this).css({backgroundPosition: '-38px 0'});
		$(this).parent().siblings(".widget-content").hide();
		},function(){
		//changes the direction of arrow
		$(this).css({backgroundPosition: ''});
		//displays the content
				$(this).parent().siblings(".widget-content").show();	
		});
					

//DELETING THE WIDGET
	
	//when clicked on element of class remove	
	$(".remove").click(function(){
			//the widget is two levels higher than the class, so directly removed
			$(this).parent().parent().remove();
	});


//EDITING THE WIDGET

	//when clicked on element of class edit
	$(".edit").toggle(function(){
		//changes the png image from "Edit" to "Close Edit"		
		$(this).css({backgroundPosition: '-66px 0', width: '55px'});
		//displays edit box
		$(this).parent().siblings(".edit-box").show();
		self = $(this).siblings(".editable"); 		
		txt = self.text();//acquires olf text
		self.html('<input typr="text" value="'+txt+'">')//creates editable title
		.find('input').bind('blur',function(e){
			txt = $(this).val();
			self.text(txt);//puts new title
		 }).focus();	

		$("ul.colors li").click(function(){
			col = $(this).attr("class");//retreives the color class
			par = $(this).parent().parent().parent().parent().parent();//traces to widget
			id = par.attr("id");//acquires id		    
			$("#"+id).removeClass();//removes previous class			
			$("#"+id).addClass("widget "+col);//adds new color		
			
		});	
	
			
		},  function(){
		//Reverts back the png image
		$(this).css({backgroundPosition: '', width: ''});
		//hides the edit box
		$(this).parent().siblings(".edit-box").hide();
	
	});	
	
	
});
