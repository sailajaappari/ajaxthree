// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26587,handler){
var map__26588 = p__26587;
var map__26588__$1 = ((((!((map__26588 == null)))?((((map__26588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26588):map__26588);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26588__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26588__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26588,map__26588__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26586_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__26586_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__26588,map__26588__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4653__auto___26596 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4653__auto___26596)){
var response_type_26597 = temp__4653__auto___26596;
this$__$1.responseType = cljs.core.name(response_type_26597);
} else {
}

var seq__26590_26598 = cljs.core.seq(headers);
var chunk__26591_26599 = null;
var count__26592_26600 = (0);
var i__26593_26601 = (0);
while(true){
if((i__26593_26601 < count__26592_26600)){
var vec__26594_26602 = chunk__26591_26599.cljs$core$IIndexed$_nth$arity$2(null,i__26593_26601);
var k_26603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26594_26602,(0),null);
var v_26604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26594_26602,(1),null);
this$__$1.setRequestHeader(k_26603,v_26604);

var G__26605 = seq__26590_26598;
var G__26606 = chunk__26591_26599;
var G__26607 = count__26592_26600;
var G__26608 = (i__26593_26601 + (1));
seq__26590_26598 = G__26605;
chunk__26591_26599 = G__26606;
count__26592_26600 = G__26607;
i__26593_26601 = G__26608;
continue;
} else {
var temp__4653__auto___26609 = cljs.core.seq(seq__26590_26598);
if(temp__4653__auto___26609){
var seq__26590_26610__$1 = temp__4653__auto___26609;
if(cljs.core.chunked_seq_QMARK_(seq__26590_26610__$1)){
var c__20666__auto___26611 = cljs.core.chunk_first(seq__26590_26610__$1);
var G__26612 = cljs.core.chunk_rest(seq__26590_26610__$1);
var G__26613 = c__20666__auto___26611;
var G__26614 = cljs.core.count(c__20666__auto___26611);
var G__26615 = (0);
seq__26590_26598 = G__26612;
chunk__26591_26599 = G__26613;
count__26592_26600 = G__26614;
i__26593_26601 = G__26615;
continue;
} else {
var vec__26595_26616 = cljs.core.first(seq__26590_26610__$1);
var k_26617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595_26616,(0),null);
var v_26618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595_26616,(1),null);
this$__$1.setRequestHeader(k_26617,v_26618);

var G__26619 = cljs.core.next(seq__26590_26610__$1);
var G__26620 = null;
var G__26621 = (0);
var G__26622 = (0);
seq__26590_26598 = G__26619;
chunk__26591_26599 = G__26620;
count__26592_26600 = G__26621;
i__26593_26601 = G__26622;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19863__auto__ = body;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
