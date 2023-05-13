$( document ).ready(function() {
    $("input").on('input',function(e){
        if ($(this).val() % 2) {
            $("#result").html('tek')
        } else {
            $("#result").html('çift')
        }
      });
});