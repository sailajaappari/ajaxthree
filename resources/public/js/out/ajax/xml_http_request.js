// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21364,handler){
var map__21365 = p__21364;
var map__21365__$1 = ((((!((map__21365 == null)))?((((map__21365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21365):map__21365);
var uri = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21365__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__21365,map__21365__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__21363_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21363_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__21365,map__21365__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4653__auto___21373 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4653__auto___21373)){
var response_type_21374 = temp__4653__auto___21373;
this$__$1.responseType = cljs.core.name.call(null,response_type_21374);
} else {
}

var seq__21367_21375 = cljs.core.seq.call(null,headers);
var chunk__21368_21376 = null;
var count__21369_21377 = (0);
var i__21370_21378 = (0);
while(true){
if((i__21370_21378 < count__21369_21377)){
var vec__21371_21379 = cljs.core._nth.call(null,chunk__21368_21376,i__21370_21378);
var k_21380 = cljs.core.nth.call(null,vec__21371_21379,(0),null);
var v_21381 = cljs.core.nth.call(null,vec__21371_21379,(1),null);
this$__$1.setRequestHeader(k_21380,v_21381);

var G__21382 = seq__21367_21375;
var G__21383 = chunk__21368_21376;
var G__21384 = count__21369_21377;
var G__21385 = (i__21370_21378 + (1));
seq__21367_21375 = G__21382;
chunk__21368_21376 = G__21383;
count__21369_21377 = G__21384;
i__21370_21378 = G__21385;
continue;
} else {
var temp__4653__auto___21386 = cljs.core.seq.call(null,seq__21367_21375);
if(temp__4653__auto___21386){
var seq__21367_21387__$1 = temp__4653__auto___21386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21367_21387__$1)){
var c__20669__auto___21388 = cljs.core.chunk_first.call(null,seq__21367_21387__$1);
var G__21389 = cljs.core.chunk_rest.call(null,seq__21367_21387__$1);
var G__21390 = c__20669__auto___21388;
var G__21391 = cljs.core.count.call(null,c__20669__auto___21388);
var G__21392 = (0);
seq__21367_21375 = G__21389;
chunk__21368_21376 = G__21390;
count__21369_21377 = G__21391;
i__21370_21378 = G__21392;
continue;
} else {
var vec__21372_21393 = cljs.core.first.call(null,seq__21367_21387__$1);
var k_21394 = cljs.core.nth.call(null,vec__21372_21393,(0),null);
var v_21395 = cljs.core.nth.call(null,vec__21372_21393,(1),null);
this$__$1.setRequestHeader(k_21394,v_21395);

var G__21396 = cljs.core.next.call(null,seq__21367_21387__$1);
var G__21397 = null;
var G__21398 = (0);
var G__21399 = (0);
seq__21367_21375 = G__21396;
chunk__21368_21376 = G__21397;
count__21369_21377 = G__21398;
i__21370_21378 = G__21399;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19866__auto__ = body;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map