/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  
  // dynamically update copyright year in footer
  document.getElementById("copyright_year").innerHTML = new Date().getFullYear();
  
  // change placeholder in searchbar
  //$('input#query').prop('placeholder', 'Search our knowledge base');
  
  // add bookmarks to h2 in category tree
  $("div.category-tree h2" ).prepend('<span class="bookmark txt-orange"><img src="https://coursehero.com/img/icon-bookmark.png" /></span>');
  //$("div.category-tree ul.article-list li a").prepend('<i class="icon-help-circle"></i>');
  
  /*$(".category-tree .section h3 a").prepend('<i class="icon-down-open txt-blue"></i>');*/
  
  $('ul.article-list').show();
  $('.see-all-articles').show();
  
  /*$(".category-tree .section h3 a").click(function(){
  $(this).children('i').toggleClass('icon-right-open icon-down-open');
  });*/
  
  $('.search-results-subheading').html("Can't find what you're looking for? Try browsing our <a href=\"/hc/en-us?preview%5Btheme_id%5D=200439140&amp;preview_as_role=manager\" class=\"search-results-subheading-link\">Knowledge Base</a>.");

  // toggle categories and sections on the home page
  /*$(".category-tree").on("click", "h2 a, h3 a", function() {
    $(this).parent().nextAll().toggle();
    return false;
  });*/

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });
  
  $(".support_search_popup_link").magnificPopup({
    type: 'inline'
  });
  
  $(".support_ticket_background").click(function(){
    $("#support_ticket_overlay").hide();
    return false;
  });
  
  $(".support_ticket_close").click(function(){
    $("#support_ticket_overlay").hide();
    return false;
  });
});

