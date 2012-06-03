$(document).ready(function() {
	
    
	var dropped = false;
    var draggable_sibling;
	//Sortable is applied on columns, and not on individual items
	$(".column").sortable({ //defining sortable property
	handle: ".widget-head",	//to be held for sorting
	connectWith: ".column",//to be able to connect with other columns
	containment: "document",//limitation of sorting
	placeholder: "widget-placeholder",//the dotted destination of element
		//on initiation of sorting
        start: function(event, ui) {//this funciton is from ui.jquery
            draggable_sibling = $(ui.item).prev();//the prior item
        },
		//on cease of sorting
        stop: function(event, ui) {
            if (dropped) {//status to indicate if the element is dropped
                if (draggable_sibling.length == 0)//if any element has actually been sorted
                    $('#sortable').prepend(ui.item);

                draggable_sibling.after(ui.item);//item is placed after
                dropped = false;
            }
        }
    });
	
	//on dropping of element
    $(".column").droppable({
        drop:function(event,ui){
            dropped = true;
            $(event.target).addClass('dropped');
        }
    });

//DEFINING THE EDIT BOX
	$(".edit-box")  
				//THE NEW TITLE PROMPT
                .append('<ul><li class="item"><label>Change the title?</label><input value=""/></li>')  
                .append(function(){//THE COLORLIST  
                    var colorList = '<li class="item"><label>Available colors:</label><ul class="colors">';  
                      
                    return colorList + '</ul>';  
                })  
                .append('</ul>');	 
				//this edit box is not fully functional and is only as a dummy 
				

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
			
	},  function(){
	//Reverts back the png image
	$(this).css({backgroundPosition: '', width: ''})
	//hides the edit box
	.parents().find(id+" .edit-box").hide();
	
	});	
	//alternative function for toggle
	},function(){});
});
