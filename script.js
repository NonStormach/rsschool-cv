$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  
    // copy coupone code to clipboard
    $(".btn").on("click", function() {
      copyToClipboard(".span");
      $(".copy-body").fadeIn("slow");
    });
  });
  