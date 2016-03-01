//imgload
;(function($,undefined){'use strict';var BLANK='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';$.fn.imagesLoaded=function(callback){var $this=this,deferred=$.isFunction($.Deferred)?$.Deferred():0,hasNotify=$.isFunction(deferred.notify),$images=$this.find('img').add($this.filter('img')),loaded=[],proper=[],broken=[];function doneLoading(){var $proper=$(proper),$broken=$(broken);if(deferred){if(broken.length){deferred.reject($images,$proper,$broken);}else{deferred.resolve($images);}}
if($.isFunction(callback)){callback.call($this,$images,$proper,$broken);}}
function imgLoaded(img,isBroken){if(img.src===BLANK||$.inArray(img,loaded)!==-1){return;}
loaded.push(img);if(isBroken){broken.push(img);}else{proper.push(img);}
$.data(img,'imagesLoaded',{isBroken:isBroken,src:img.src});if(hasNotify){deferred.notifyWith($(img),[isBroken,$images,$(proper),$(broken)]);}
if($images.length===loaded.length){setTimeout(doneLoading);$images.unbind('.imagesLoaded');}}
if(!$images.length){doneLoading();}else{$images.bind('load.imagesLoaded error.imagesLoaded',function(event){imgLoaded(event.target,event.type==='error');}).each(function(i,el){var src=el.src;var cached=$.data(el,'imagesLoaded');if(cached&&cached.src===src){imgLoaded(el,cached.isBroken);return;}
if(el.complete&&el.naturalWidth!==undefined){imgLoaded(el,el.naturalWidth===0||el.naturalHeight===0);return;}
if(el.readyState||el.complete){el.src=BLANK;el.src=src;}});}
return deferred?deferred.promise($this):$this;};})(jQuery);