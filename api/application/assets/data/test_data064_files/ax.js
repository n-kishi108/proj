CCAX_V="1.1";CCAX_ST=new Date();window.onpageshow=function(e){if(e.persisted)CCAX_AX()};function CCAX_AX(){var doc=CCAX_O(window.document),scr=CCAX_O(window.screen),nav=CCAX_O(window.navigator),tid=CCAX_GI(CCAX_ST.getTime()),sid,vid,dsp,lng,brp="0",plg,trk,tit,i;if(!(sid=CCAX_GC("sid")))CCAX_SC("sid",sid=tid);if(!(vid=CCAX_GC("vid")))vid=tid;CCAX_SC("vid",vid,10540800000);if(vid==tid)vid=CCAX_GC("vid");dsp=(scr.width||"")+"x"+(scr.height||"")+"&"+(scr.colorDepth||"");lng=nav.browserLanguage||nav.language||"";if(window.ActiveXObject)eval("try{if(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))brp='1'}catch(e){}");else if(plg=nav.plugins)for(i=0;i<plg.length;i++){if(plg[i].name.indexOf("Shockwave Flash")!=-1){brp="1";break;}}else brp="-";brp+=(nav.javaEnabled()?"1":"0");trk=escape(doc.referrer)+"&"+escape(doc.URL);tit=escape(CCAX_BT)+"&"+escape(CCAX_ET);(new Image(1,1)).src="http://"+CCAX_SV+"/ax.gif?"+CCAX_ID+"&"+CCAX_V+"&"+tid+"&"+vid+"&"+dsp+"&"+lng+"&"+brp+"&"+trk+"&"+tit+"&"+sid;}function CCAX_O(o){return o||new Object()}function CCAX_GI(n){var rn="00000"+Math.floor(Math.random()*0x1000000).toString(16),sh="0000"+(Math.floor(n/0x100000)&0xFFFFF).toString(16),sl="0000"+((n%0x100000)&0xFFFFF).toString(16);return(rn.substring(rn.length-6)+sh.substring(sh.length-5)+sl.substring(sl.length-5)).toUpperCase();}function CCAX_GC(n){n="CCAX_"+n+"=";var c=document.cookie+";";var p=c.indexOf(n)+n.length;return p<n.length?"":unescape(c.substring(p,c.indexOf(";",p)));}function CCAX_SC(n,v,e){document.cookie="CCAX_"+n+"="+escape(v)+"; path=/"+(e?"; expires="+(new Date(CCAX_ST.getTime()+e)).toGMTString():"")}CCAX_AX();