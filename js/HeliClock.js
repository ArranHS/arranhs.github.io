function runHeliTimer(waitIntervalSeconds, delayedAction, progressIntervalSeconds, progressAction) {
  var startTime = new Date().getTime();
  var iid = setInterval(function() {
     var curTime = new Date().getTime()
     var elapsedSeconds = (curTime - startTime)/1000;
     if(elapsedSeconds >= waitIntervalSeconds) {
        clearInterval(iid);
        delayedAction();
     }
     else {
       progressAction(Math.round(elapsedSeconds));
     }
  }, progressIntervalSeconds*1000);
}

jQuery(function($) {
  $('.helibutton').click(function() {
         runHeliTimer(180*60, function() {
          window.alert("Heli should be arriving soon!")
       }, 
       60, function(elapsed){
         console.log("No heli yet! " + elapsed);
    });
    return false;
  });
});