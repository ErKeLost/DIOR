				function getstyle(obj,name){
				if(obj.currentStyle){
					return obj.currentStyle[name];
				}else{
					return getComputedStyle(obj,false)[name];
				}
			}
			function startmove(obj,json,fnend)
			{
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var stop=true;//全到了
					
				for(var attr in json)
				{
					
					var cur=0;
					if(attr=='opaity'){
						cur=Math.round(parseFloat(getstyle(obj,attr))*100);
						
					}else{
						cur=parseInt(getstyle(obj,attr));
					}
					var speed=(json[attr]-cur)/30;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cur!=json[attr]){
					stop=false;
				}
						if(attr=='opacity'){
							obj.style.filter='alpha(opacity:'+(cur+speed)+')';
							obj.style.opacity=(cur+speed);
						}else{
						obj.style[attr]=cur+speed+'px';
					}
					}
					if(stop){
						clearInterval(obj.timer);
					if(fnend){
					fnend();
					}
					}
				},30);
			}