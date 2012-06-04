$(document).ready(function() {
	
    
	
	//Sortable is applied on columns, and not on individual items
	$("#column1, #column2, #column3").sortable({ //defining sortable property
	handle: ".widget-head",	//to be held for sorting
	connectWith: ".column",//to be able to connect with other columns
	containment: "document",//limitation of sorting
	placeholder: "widget-placeholder",//the dotted destination of element
		//on initiation of sorting
        
    });
	
	

//DEFINING THE EDIT BOX
	$(".edit-box")  
				//THE NEW TITLE PROMPT ND COLOR LIST
                .append('<ul><li class="item"><label>Change the title?</label><input value=""/></li><li class="item"><label>Available colors:</label><ul class="colors"> <li class=color-yellow/><li class=color-blue/><li class=color-red/><li class=color-orange/><li class=color-white/><li class=color-green/></ul></li></ul>');  
              
				

	var id='';
//WIDGET CUSTOMIZATION	
//Adapts the ID of the widget over which it is hovered	
	$(".widget").hover(function(){
		id = "#" + $(this).attr("id");			

//MINIMIZING THE WIDGET
	
	//when clicked on element of class collapse	
	$(".collapse").mousedown(function(e){
		//stops the bubbling of event
		e.stopPropagation();})
	.toggle(function(){
		//changes the png image, direction of arrow
		$(this).css({backgroundPosition: '-38px 0'});
		//hides the content
		$(this).parents().find(id +" .widget-content").hide();
	},function(){
		//changes the direction of arrow
		$(this).css({backgroundPosition: ''});
		//displays the content
		$(this).parents().find(id+" .widget-content").show();
	});	


//DELETING THE WIDGET
	
	//when clicked on element of class remove	
	$(".remove").mousedown(function(e){
		//stops the bubbling of event
		e.stopPropagation();})
	.click(function(){
			//the widget is two levels higher than the class, so directly removed
			$(this).parent().parent().remove();
	});



//EDITING THE WIDGET
//Not fully functional till now

	//when clicked on element of class edit
	$(".edit").mousedown(function(e){
		//stops the bubbling of event
		e.stopPropagation();})
	.toggle(function(){
		//changes the png image from "Edit" to "Close Edit"		
		$(this).css({backgroundPosition: '-66px 0', width: '55px'});
		//displays edit box
		$(this).parents().find(id+" .edit-box").show();
		$(id+" .edit-box input").change(function(){
			$(this).parents().find(id+' h3').text($(this).val())
		});
		$(id+" .edit-box ul.colors li").click(function(){
			col = $(this).attr("class");
			$(id).removeClass();
			$(id).addClass("widget "+col);
			//$(this).parents().find(id+" .widget").removeClass(old).addClass("widget "+col); old = "widget "+col;
		});	
	
			
	},  function(){
	//Reverts back the png image
	$(this).css({backgroundPosition: '', width: ''})
	//hides the edit box
	.parents().find(id+" .edit-box").hide();
	
	});	
	//alternative function for toggle
	},function(){});
});
