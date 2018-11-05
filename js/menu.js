$(function (){
   $('.menu_item').click(function (){
        $(this).find('>.dropdown_menu_border').show();
        $(this).find('>.sub_menu').show(); 
   });
   $('.sub_menu_item').click(function (){
        $(this).find('>.sub_menu_border').show();
        $(this).find('>.sub_menu').show(); 
   });
   
   isMenuHidden = true;
   $('.nav_menu_mobile img').click(function (){
       if(isMenuHidden){
            $('.menu').show();
            isMenuHidden = false;
       }
        else{
            $('.menu').hide();
            isMenuHidden = true;
        }
         
   });
});