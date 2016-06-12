// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20480__auto__,k__20481__auto__){
var self__ = this;
var this__20480__auto____$1 = this;
return cljs.core._lookup.call(null,this__20480__auto____$1,k__20481__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20482__auto__,k21710,else__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
var G__21712 = (((k21710 instanceof cljs.core.Keyword))?k21710.fqn:null);
switch (G__21712) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21710,else__20483__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__21713,opts){
var self__ = this;
var map__21714 = p__21713;
var map__21714__$1 = ((((!((map__21714 == null)))?((((map__21714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21714):map__21714);
var request__$1 = cljs.core.get.call(null,map__21714__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__21716 = this;
var map__21716__$1 = ((((!((map__21716 == null)))?((((map__21716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21716):map__21716);
var request__$2 = cljs.core.get.call(null,map__21716__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__21718,xhrio){
var self__ = this;
var map__21719 = p__21718;
var map__21719__$1 = ((((!((map__21719 == null)))?((((map__21719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21719):map__21719);
var response__$1 = cljs.core.get.call(null,map__21719__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__21721 = this;
var map__21721__$1 = ((((!((map__21721 == null)))?((((map__21721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21721):map__21721);
var response__$2 = cljs.core.get.call(null,map__21721__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20494__auto__,writer__20495__auto__,opts__20496__auto__){
var self__ = this;
var this__20494__auto____$1 = this;
var pr_pair__20497__auto__ = ((function (this__20494__auto____$1){
return (function (keyval__20498__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,cljs.core.pr_writer,""," ","",opts__20496__auto__,keyval__20498__auto__);
});})(this__20494__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,pr_pair__20497__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__20496__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21709){
var self__ = this;
var G__21709__$1 = this;
return (new cljs.core.RecordIter((0),G__21709__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20478__auto__){
var self__ = this;
var this__20478__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20474__auto__){
var self__ = this;
var this__20474__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20484__auto__){
var self__ = this;
var this__20484__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
var h__20301__auto__ = self__.__hash;
if(!((h__20301__auto__ == null))){
return h__20301__auto__;
} else {
var h__20301__auto____$1 = cljs.core.hash_imap.call(null,this__20475__auto____$1);
self__.__hash = h__20301__auto____$1;

return h__20301__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20476__auto__,other__20477__auto__){
var self__ = this;
var this__20476__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19854__auto__ = other__20477__auto__;
if(cljs.core.truth_(and__19854__auto__)){
var and__19854__auto____$1 = (this__20476__auto____$1.constructor === other__20477__auto__.constructor);
if(and__19854__auto____$1){
return cljs.core.equiv_map.call(null,this__20476__auto____$1,other__20477__auto__);
} else {
return and__19854__auto____$1;
}
} else {
return and__19854__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20489__auto__,k__20490__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__20490__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20489__auto____$1),self__.__meta),k__20490__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20490__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20487__auto__,k__20488__auto__,G__21709){
var self__ = this;
var this__20487__auto____$1 = this;
var pred__21723 = cljs.core.keyword_identical_QMARK_;
var expr__21724 = k__20488__auto__;
if(cljs.core.truth_(pred__21723.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21724))){
return (new ajax.core.StandardInterceptor(G__21709,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21723.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__21724))){
return (new ajax.core.StandardInterceptor(self__.name,G__21709,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21723.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__21724))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__21709,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20488__auto__,G__21709),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20492__auto__){
var self__ = this;
var this__20492__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20479__auto__,G__21709){
var self__ = this;
var this__20479__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__21709,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20485__auto__,entry__20486__auto__){
var self__ = this;
var this__20485__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20486__auto__)){
return cljs.core._assoc.call(null,this__20485__auto____$1,cljs.core._nth.call(null,entry__20486__auto__,(0)),cljs.core._nth.call(null,entry__20486__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20485__auto____$1,entry__20486__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__20514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__20514__auto__,writer__20515__auto__){
return cljs.core._write.call(null,writer__20515__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__21711){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21711),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__21711),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__21711),null,cljs.core.dissoc.call(null,G__21711,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__19866__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__21727,xhrio){
var map__21730 = p__21727;
var map__21730__$1 = ((((!((map__21730 == null)))?((((map__21730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730):map__21730);
var description = cljs.core.get.call(null,map__21730__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21736 = arguments.length;
var i__20925__auto___21737 = (0);
while(true){
if((i__20925__auto___21737 < len__20924__auto___21736)){
args__20931__auto__.push((arguments[i__20925__auto___21737]));

var G__21738 = (i__20925__auto___21737 + (1));
i__20925__auto___21737 = G__21738;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((3) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20932__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq21732){
var G__21733 = cljs.core.first.call(null,seq21732);
var seq21732__$1 = cljs.core.next.call(null,seq21732);
var G__21734 = cljs.core.first.call(null,seq21732__$1);
var seq21732__$2 = cljs.core.next.call(null,seq21732__$1);
var G__21735 = cljs.core.first.call(null,seq21732__$2);
var seq21732__$3 = cljs.core.next.call(null,seq21732__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__21733,G__21734,G__21735,seq21732__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__21739_SHARP_){
return [cljs.core.str(p1__21739_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20480__auto__,k__20481__auto__){
var self__ = this;
var this__20480__auto____$1 = this;
return cljs.core._lookup.call(null,this__20480__auto____$1,k__20481__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20482__auto__,k21742,else__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
var G__21744 = (((k21742 instanceof cljs.core.Keyword))?k21742.fqn:null);
switch (G__21744) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21742,else__20483__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__21745,request){
var self__ = this;
var map__21746 = p__21745;
var map__21746__$1 = ((((!((map__21746 == null)))?((((map__21746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21746):map__21746);
var content_type__$1 = cljs.core.get.call(null,map__21746__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__21748 = this;
var map__21748__$1 = ((((!((map__21748 == null)))?((((map__21748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21748):map__21748);
var content_type__$2 = cljs.core.get.call(null,map__21748__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__21748,map__21748__$1,content_type__$2,map__21746,map__21746__$1,content_type__$1){
return (function (p1__21740_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__19866__auto__ = p1__21740_SHARP_;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__21748,map__21748__$1,content_type__$2,map__21746,map__21746__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__21750,xhrio){
var self__ = this;
var map__21751 = p__21750;
var map__21751__$1 = ((((!((map__21751 == null)))?((((map__21751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21751):map__21751);
var format = map__21751__$1;
var read__$1 = cljs.core.get.call(null,map__21751__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__21753 = this;
var map__21753__$1 = ((((!((map__21753 == null)))?((((map__21753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21753):map__21753);
var format__$1 = map__21753__$1;
var read__$2 = cljs.core.get.call(null,map__21753__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__21756 = status;
switch (G__21756) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e21757){if((e21757 instanceof Object)){
var e = e21757;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e21757;

}
}
}
}catch (e21755){if((e21755 instanceof Object)){
var e = e21755;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e21755;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20494__auto__,writer__20495__auto__,opts__20496__auto__){
var self__ = this;
var this__20494__auto____$1 = this;
var pr_pair__20497__auto__ = ((function (this__20494__auto____$1){
return (function (keyval__20498__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,cljs.core.pr_writer,""," ","",opts__20496__auto__,keyval__20498__auto__);
});})(this__20494__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,pr_pair__20497__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__20496__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21741){
var self__ = this;
var G__21741__$1 = this;
return (new cljs.core.RecordIter((0),G__21741__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20478__auto__){
var self__ = this;
var this__20478__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20474__auto__){
var self__ = this;
var this__20474__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20484__auto__){
var self__ = this;
var this__20484__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
var h__20301__auto__ = self__.__hash;
if(!((h__20301__auto__ == null))){
return h__20301__auto__;
} else {
var h__20301__auto____$1 = cljs.core.hash_imap.call(null,this__20475__auto____$1);
self__.__hash = h__20301__auto____$1;

return h__20301__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20476__auto__,other__20477__auto__){
var self__ = this;
var this__20476__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19854__auto__ = other__20477__auto__;
if(cljs.core.truth_(and__19854__auto__)){
var and__19854__auto____$1 = (this__20476__auto____$1.constructor === other__20477__auto__.constructor);
if(and__19854__auto____$1){
return cljs.core.equiv_map.call(null,this__20476__auto____$1,other__20477__auto__);
} else {
return and__19854__auto____$1;
}
} else {
return and__19854__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20489__auto__,k__20490__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__20490__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20489__auto____$1),self__.__meta),k__20490__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20490__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20487__auto__,k__20488__auto__,G__21741){
var self__ = this;
var this__20487__auto____$1 = this;
var pred__21758 = cljs.core.keyword_identical_QMARK_;
var expr__21759 = k__20488__auto__;
if(cljs.core.truth_(pred__21758.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__21759))){
return (new ajax.core.ResponseFormat(G__21741,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21758.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__21759))){
return (new ajax.core.ResponseFormat(self__.read,G__21741,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21758.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__21759))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__21741,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20488__auto__,G__21741),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20492__auto__){
var self__ = this;
var this__20492__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20479__auto__,G__21741){
var self__ = this;
var this__20479__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__21741,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20485__auto__,entry__20486__auto__){
var self__ = this;
var this__20485__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20486__auto__)){
return cljs.core._assoc.call(null,this__20485__auto____$1,cljs.core._nth.call(null,entry__20486__auto__,(0)),cljs.core._nth.call(null,entry__20486__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20485__auto____$1,entry__20486__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__20514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__20514__auto__,writer__20515__auto__){
return cljs.core._write.call(null,writer__20515__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__21743){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__21743),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__21743),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__21743),null,cljs.core.dissoc.call(null,G__21743,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args21763 = [];
var len__20924__auto___21766 = arguments.length;
var i__20925__auto___21767 = (0);
while(true){
if((i__20925__auto___21767 < len__20924__auto___21766)){
args21763.push((arguments[i__20925__auto___21767]));

var G__21768 = (i__20925__auto___21767 + (1));
i__20925__auto___21767 = G__21768;
continue;
} else {
}
break;
}

var G__21765 = args21763.length;
switch (G__21765) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21763.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args21770 = [];
var len__20924__auto___21777 = arguments.length;
var i__20925__auto___21778 = (0);
while(true){
if((i__20925__auto___21778 < len__20924__auto___21777)){
args21770.push((arguments[i__20925__auto___21778]));

var G__21779 = (i__20925__auto___21778 + (1));
i__20925__auto___21778 = G__21779;
continue;
} else {
}
break;
}

var G__21772 = args21770.length;
switch (G__21772) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21770.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__21773){
var vec__21774 = p__21773;
var key = cljs.core.nth.call(null,vec__21774,(0),null);
var value = cljs.core.nth.call(null,vec__21774,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__21775){
var vec__21776 = p__21775;
var key = cljs.core.nth.call(null,vec__21776,(0),null);
var value = cljs.core.nth.call(null,vec__21776,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21783){
var vec__21784 = p__21783;
var k = cljs.core.nth.call(null,vec__21784,(0),null);
var v = cljs.core.nth.call(null,vec__21784,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20480__auto__,k__20481__auto__){
var self__ = this;
var this__20480__auto____$1 = this;
return cljs.core._lookup.call(null,this__20480__auto____$1,k__20481__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20482__auto__,k21787,else__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
var G__21789 = k21787;
switch (G__21789) {
default:
return cljs.core.get.call(null,self__.__extmap,k21787,else__20483__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21790){
var self__ = this;
var map__21791 = p__21790;
var map__21791__$1 = ((((!((map__21791 == null)))?((((map__21791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21791):map__21791);
var request = map__21791__$1;
var method = cljs.core.get.call(null,map__21791__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__21791,map__21791__$1,request,method){
return (function (p1__21785_SHARP_){
return ajax.core.uri_with_params.call(null,p1__21785_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__21791,map__21791__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20494__auto__,writer__20495__auto__,opts__20496__auto__){
var self__ = this;
var this__20494__auto____$1 = this;
var pr_pair__20497__auto__ = ((function (this__20494__auto____$1){
return (function (keyval__20498__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,cljs.core.pr_writer,""," ","",opts__20496__auto__,keyval__20498__auto__);
});})(this__20494__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,pr_pair__20497__auto__,"#ajax.core.ProcessGet{",", ","}",opts__20496__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21786){
var self__ = this;
var G__21786__$1 = this;
return (new cljs.core.RecordIter((0),G__21786__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20478__auto__){
var self__ = this;
var this__20478__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20474__auto__){
var self__ = this;
var this__20474__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20484__auto__){
var self__ = this;
var this__20484__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
var h__20301__auto__ = self__.__hash;
if(!((h__20301__auto__ == null))){
return h__20301__auto__;
} else {
var h__20301__auto____$1 = cljs.core.hash_imap.call(null,this__20475__auto____$1);
self__.__hash = h__20301__auto____$1;

return h__20301__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20476__auto__,other__20477__auto__){
var self__ = this;
var this__20476__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19854__auto__ = other__20477__auto__;
if(cljs.core.truth_(and__19854__auto__)){
var and__19854__auto____$1 = (this__20476__auto____$1.constructor === other__20477__auto__.constructor);
if(and__19854__auto____$1){
return cljs.core.equiv_map.call(null,this__20476__auto____$1,other__20477__auto__);
} else {
return and__19854__auto____$1;
}
} else {
return and__19854__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20489__auto__,k__20490__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__20490__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20489__auto____$1),self__.__meta),k__20490__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20490__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20487__auto__,k__20488__auto__,G__21786){
var self__ = this;
var this__20487__auto____$1 = this;
var pred__21793 = cljs.core.keyword_identical_QMARK_;
var expr__21794 = k__20488__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20488__auto__,G__21786),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20492__auto__){
var self__ = this;
var this__20492__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20479__auto__,G__21786){
var self__ = this;
var this__20479__auto____$1 = this;
return (new ajax.core.ProcessGet(G__21786,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20485__auto__,entry__20486__auto__){
var self__ = this;
var this__20485__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20486__auto__)){
return cljs.core._assoc.call(null,this__20485__auto____$1,cljs.core._nth.call(null,entry__20486__auto__,(0)),cljs.core._nth.call(null,entry__20486__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20485__auto____$1,entry__20486__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__20514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__20514__auto__,writer__20515__auto__){
return cljs.core._write.call(null,writer__20515__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__21788){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__21788),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20480__auto__,k__20481__auto__){
var self__ = this;
var this__20480__auto____$1 = this;
return cljs.core._lookup.call(null,this__20480__auto____$1,k__20481__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20482__auto__,k21798,else__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
var G__21800 = k21798;
switch (G__21800) {
default:
return cljs.core.get.call(null,self__.__extmap,k21798,else__20483__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21801){
var self__ = this;
var map__21802 = p__21801;
var map__21802__$1 = ((((!((map__21802 == null)))?((((map__21802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21802):map__21802);
var request = map__21802__$1;
var body = cljs.core.get.call(null,map__21802__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__21802__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20494__auto__,writer__20495__auto__,opts__20496__auto__){
var self__ = this;
var this__20494__auto____$1 = this;
var pr_pair__20497__auto__ = ((function (this__20494__auto____$1){
return (function (keyval__20498__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,cljs.core.pr_writer,""," ","",opts__20496__auto__,keyval__20498__auto__);
});})(this__20494__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,pr_pair__20497__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__20496__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21797){
var self__ = this;
var G__21797__$1 = this;
return (new cljs.core.RecordIter((0),G__21797__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20478__auto__){
var self__ = this;
var this__20478__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20474__auto__){
var self__ = this;
var this__20474__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20484__auto__){
var self__ = this;
var this__20484__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
var h__20301__auto__ = self__.__hash;
if(!((h__20301__auto__ == null))){
return h__20301__auto__;
} else {
var h__20301__auto____$1 = cljs.core.hash_imap.call(null,this__20475__auto____$1);
self__.__hash = h__20301__auto____$1;

return h__20301__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20476__auto__,other__20477__auto__){
var self__ = this;
var this__20476__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19854__auto__ = other__20477__auto__;
if(cljs.core.truth_(and__19854__auto__)){
var and__19854__auto____$1 = (this__20476__auto____$1.constructor === other__20477__auto__.constructor);
if(and__19854__auto____$1){
return cljs.core.equiv_map.call(null,this__20476__auto____$1,other__20477__auto__);
} else {
return and__19854__auto____$1;
}
} else {
return and__19854__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20489__auto__,k__20490__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__20490__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20489__auto____$1),self__.__meta),k__20490__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20490__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20487__auto__,k__20488__auto__,G__21797){
var self__ = this;
var this__20487__auto____$1 = this;
var pred__21804 = cljs.core.keyword_identical_QMARK_;
var expr__21805 = k__20488__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20488__auto__,G__21797),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20492__auto__){
var self__ = this;
var this__20492__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20479__auto__,G__21797){
var self__ = this;
var this__20479__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__21797,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20485__auto__,entry__20486__auto__){
var self__ = this;
var this__20485__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20486__auto__)){
return cljs.core._assoc.call(null,this__20485__auto____$1,cljs.core._nth.call(null,entry__20486__auto__,(0)),cljs.core._nth.call(null,entry__20486__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20485__auto____$1,entry__20486__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__20514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__20514__auto__,writer__20515__auto__){
return cljs.core._write.call(null,writer__20515__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__21799){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__21799),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20480__auto__,k__20481__auto__){
var self__ = this;
var this__20480__auto____$1 = this;
return cljs.core._lookup.call(null,this__20480__auto____$1,k__20481__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20482__auto__,k21809,else__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
var G__21811 = k21809;
switch (G__21811) {
default:
return cljs.core.get.call(null,self__.__extmap,k21809,else__20483__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21812){
var self__ = this;
var map__21813 = p__21812;
var map__21813__$1 = ((((!((map__21813 == null)))?((((map__21813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21813):map__21813);
var request = map__21813__$1;
var uri = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__21815 = ajax.core.get_request_format.call(null,format);
var map__21815__$1 = ((((!((map__21815 == null)))?((((map__21815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21815):map__21815);
var write = cljs.core.get.call(null,map__21815__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__21815__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__19866__auto__ = headers;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20494__auto__,writer__20495__auto__,opts__20496__auto__){
var self__ = this;
var this__20494__auto____$1 = this;
var pr_pair__20497__auto__ = ((function (this__20494__auto____$1){
return (function (keyval__20498__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,cljs.core.pr_writer,""," ","",opts__20496__auto__,keyval__20498__auto__);
});})(this__20494__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20495__auto__,pr_pair__20497__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__20496__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21808){
var self__ = this;
var G__21808__$1 = this;
return (new cljs.core.RecordIter((0),G__21808__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20478__auto__){
var self__ = this;
var this__20478__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20474__auto__){
var self__ = this;
var this__20474__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20484__auto__){
var self__ = this;
var this__20484__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
var h__20301__auto__ = self__.__hash;
if(!((h__20301__auto__ == null))){
return h__20301__auto__;
} else {
var h__20301__auto____$1 = cljs.core.hash_imap.call(null,this__20475__auto____$1);
self__.__hash = h__20301__auto____$1;

return h__20301__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20476__auto__,other__20477__auto__){
var self__ = this;
var this__20476__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19854__auto__ = other__20477__auto__;
if(cljs.core.truth_(and__19854__auto__)){
var and__19854__auto____$1 = (this__20476__auto____$1.constructor === other__20477__auto__.constructor);
if(and__19854__auto____$1){
return cljs.core.equiv_map.call(null,this__20476__auto____$1,other__20477__auto__);
} else {
return and__19854__auto____$1;
}
} else {
return and__19854__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20489__auto__,k__20490__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__20490__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20489__auto____$1),self__.__meta),k__20490__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20490__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20487__auto__,k__20488__auto__,G__21808){
var self__ = this;
var this__20487__auto____$1 = this;
var pred__21817 = cljs.core.keyword_identical_QMARK_;
var expr__21818 = k__20488__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20488__auto__,G__21808),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20492__auto__){
var self__ = this;
var this__20492__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20479__auto__,G__21808){
var self__ = this;
var this__20479__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__21808,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20485__auto__,entry__20486__auto__){
var self__ = this;
var this__20485__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20486__auto__)){
return cljs.core._assoc.call(null,this__20485__auto____$1,cljs.core._nth.call(null,entry__20486__auto__,(0)),cljs.core._nth.call(null,entry__20486__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20485__auto____$1,entry__20486__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__20514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__20514__auto__,writer__20515__auto__){
return cljs.core._write.call(null,writer__20515__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__21810){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__21810),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__21821){
var map__21824 = p__21821;
var map__21824__$1 = ((((!((map__21824 == null)))?((((map__21824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21824):map__21824);
var type = cljs.core.get.call(null,map__21824__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__19866__auto__ = type;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__19866__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args21826 = [];
var len__20924__auto___21829 = arguments.length;
var i__20925__auto___21830 = (0);
while(true){
if((i__20925__auto___21830 < len__20924__auto___21829)){
args21826.push((arguments[i__20925__auto___21830]));

var G__21831 = (i__20925__auto___21830 + (1));
i__20925__auto___21830 = G__21831;
continue;
} else {
}
break;
}

var G__21828 = args21826.length;
switch (G__21828) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21826.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__19866__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args21833 = [];
var len__20924__auto___21836 = arguments.length;
var i__20925__auto___21837 = (0);
while(true){
if((i__20925__auto___21837 < len__20924__auto___21836)){
args21833.push((arguments[i__20925__auto___21837]));

var G__21838 = (i__20925__auto___21837 + (1));
i__20925__auto___21837 = G__21838;
continue;
} else {
}
break;
}

var G__21835 = args21833.length;
switch (G__21835) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21833.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args21840 = [];
var len__20924__auto___21843 = arguments.length;
var i__20925__auto___21844 = (0);
while(true){
if((i__20925__auto___21844 < len__20924__auto___21843)){
args21840.push((arguments[i__20925__auto___21844]));

var G__21845 = (i__20925__auto___21844 + (1));
i__20925__auto___21844 = G__21845;
continue;
} else {
}
break;
}

var G__21842 = args21840.length;
switch (G__21842) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21840.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__19854__auto__ = prefix;
if(cljs.core.truth_(and__19854__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19854__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args21847 = [];
var len__20924__auto___21850 = arguments.length;
var i__20925__auto___21851 = (0);
while(true){
if((i__20925__auto___21851 < len__20924__auto___21850)){
args21847.push((arguments[i__20925__auto___21851]));

var G__21852 = (i__20925__auto___21851 + (1));
i__20925__auto___21851 = G__21852;
continue;
} else {
}
break;
}

var G__21849 = args21847.length;
switch (G__21849) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21847.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args21854 = [];
var len__20924__auto___21860 = arguments.length;
var i__20925__auto___21861 = (0);
while(true){
if((i__20925__auto___21861 < len__20924__auto___21860)){
args21854.push((arguments[i__20925__auto___21861]));

var G__21862 = (i__20925__auto___21861 + (1));
i__20925__auto___21861 = G__21862;
continue;
} else {
}
break;
}

var G__21856 = args21854.length;
switch (G__21856) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21854.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__21857){
var map__21858 = p__21857;
var map__21858__$1 = ((((!((map__21858 == null)))?((((map__21858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21858):map__21858);
var prefix = cljs.core.get.call(null,map__21858__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__21858__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__21858__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args21864 = [];
var len__20924__auto___21867 = arguments.length;
var i__20925__auto___21868 = (0);
while(true){
if((i__20925__auto___21868 < len__20924__auto___21867)){
args21864.push((arguments[i__20925__auto___21868]));

var G__21869 = (i__20925__auto___21868 + (1));
i__20925__auto___21868 = G__21869;
continue;
} else {
}
break;
}

var G__21866 = args21864.length;
switch (G__21866) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21864.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args21871 = [];
var len__20924__auto___21874 = arguments.length;
var i__20925__auto___21875 = (0);
while(true){
if((i__20925__auto___21875 < len__20924__auto___21874)){
args21871.push((arguments[i__20925__auto___21875]));

var G__21876 = (i__20925__auto___21875 + (1));
i__20925__auto___21875 = G__21876;
continue;
} else {
}
break;
}

var G__21873 = args21871.length;
switch (G__21873) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21871.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args21878 = [];
var len__20924__auto___21881 = arguments.length;
var i__20925__auto___21882 = (0);
while(true){
if((i__20925__auto___21882 < len__20924__auto___21881)){
args21878.push((arguments[i__20925__auto___21882]));

var G__21883 = (i__20925__auto___21882 + (1));
i__20925__auto___21882 = G__21883;
continue;
} else {
}
break;
}

var G__21880 = args21878.length;
switch (G__21880) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21878.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args21885 = [];
var len__20924__auto___21888 = arguments.length;
var i__20925__auto___21889 = (0);
while(true){
if((i__20925__auto___21889 < len__20924__auto___21888)){
args21885.push((arguments[i__20925__auto___21889]));

var G__21890 = (i__20925__auto___21889 + (1));
i__20925__auto___21889 = G__21890;
continue;
} else {
}
break;
}

var G__21887 = args21885.length;
switch (G__21887) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21885.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__21892){
var map__21895 = p__21892;
var map__21895__$1 = ((((!((map__21895 == null)))?((((map__21895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21895):map__21895);
var request = map__21895__$1;
var response_format = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args21897 = [];
var len__20924__auto___21900 = arguments.length;
var i__20925__auto___21901 = (0);
while(true){
if((i__20925__auto___21901 < len__20924__auto___21900)){
args21897.push((arguments[i__20925__auto___21901]));

var G__21902 = (i__20925__auto___21901 + (1));
i__20925__auto___21901 = G__21902;
continue;
} else {
}
break;
}

var G__21899 = args21897.length;
switch (G__21899) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21897.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__21904){
var map__21907 = p__21904;
var map__21907__$1 = ((((!((map__21907 == null)))?((((map__21907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21907):map__21907);
var request = map__21907__$1;
var response_format = cljs.core.get.call(null,map__21907__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args21909 = [];
var len__20924__auto___21912 = arguments.length;
var i__20925__auto___21913 = (0);
while(true){
if((i__20925__auto___21913 < len__20924__auto___21912)){
args21909.push((arguments[i__20925__auto___21913]));

var G__21914 = (i__20925__auto___21913 + (1));
i__20925__auto___21913 = G__21914;
continue;
} else {
}
break;
}

var G__21911 = args21909.length;
switch (G__21911) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21909.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__21916){
var map__21919 = p__21916;
var map__21919__$1 = ((((!((map__21919 == null)))?((((map__21919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21919):map__21919);
var opts = map__21919__$1;
var response_format = cljs.core.get.call(null,map__21919__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args21921 = [];
var len__20924__auto___21924 = arguments.length;
var i__20925__auto___21925 = (0);
while(true){
if((i__20925__auto___21925 < len__20924__auto___21924)){
args21921.push((arguments[i__20925__auto___21925]));

var G__21926 = (i__20925__auto___21925 + (1));
i__20925__auto___21925 = G__21926;
continue;
} else {
}
break;
}

var G__21923 = args21921.length;
switch (G__21923) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21921.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__21928){
var map__21931 = p__21928;
var map__21931__$1 = ((((!((map__21931 == null)))?((((map__21931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21931):map__21931);
var handler = cljs.core.get.call(null,map__21931__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__21933_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__19866__auto__ = p1__21933_SHARP_;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__21934){
var map__21937 = p__21934;
var map__21937__$1 = ((((!((map__21937 == null)))?((((map__21937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21937):map__21937);
var request = map__21937__$1;
var interceptors = cljs.core.get.call(null,map__21937__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__19866__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__21940 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__21940) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__21943 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__21943) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__21945_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__21945_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args21946 = [];
var len__20924__auto___21959 = arguments.length;
var i__20925__auto___21960 = (0);
while(true){
if((i__20925__auto___21960 < len__20924__auto___21959)){
args21946.push((arguments[i__20925__auto___21960]));

var G__21961 = (i__20925__auto___21960 + (1));
i__20925__auto___21960 = G__21961;
continue;
} else {
}
break;
}

var G__21948 = args21946.length;
switch (G__21948) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21946.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__21949,p__21950){
var map__21951 = p__21949;
var map__21951__$1 = ((((!((map__21951 == null)))?((((map__21951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21951):map__21951);
var handler = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__21951__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__21952 = p__21950;
var ok = cljs.core.nth.call(null,vec__21952,(0),null);
var result = cljs.core.nth.call(null,vec__21952,(1),null);
var temp__4651__auto___21963 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4651__auto___21963)){
var h_21964 = temp__4651__auto___21963;
h_21964.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__21954){
var map__21955 = p__21954;
var map__21955__$1 = ((((!((map__21955 == null)))?((((map__21955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21955):map__21955);
var handler = cljs.core.get.call(null,map__21955__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__21955__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__21955__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__21955,map__21955__$1,handler,error_handler,finally$){
return (function (p__21957){
var vec__21958 = p__21957;
var ok = cljs.core.nth.call(null,vec__21958,(0),null);
var result = cljs.core.nth.call(null,vec__21958,(1),null);
var temp__4651__auto___21965 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4651__auto___21965)){
var h_21966 = temp__4651__auto___21965;
h_21966.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__21955,map__21955__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__21967){
var map__21970 = p__21967;
var map__21970__$1 = ((((!((map__21970 == null)))?((((map__21970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21970):map__21970);
var opts = map__21970__$1;
var method = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__19866__auto__ = format;
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21974 = arguments.length;
var i__20925__auto___21975 = (0);
while(true){
if((i__20925__auto___21975 < len__20924__auto___21974)){
args__20931__auto__.push((arguments[i__20925__auto___21975]));

var G__21976 = (i__20925__auto___21975 + (1));
i__20925__auto___21975 = G__21976;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq21972){
var G__21973 = cljs.core.first.call(null,seq21972);
var seq21972__$1 = cljs.core.next.call(null,seq21972);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__21973,seq21972__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21979 = arguments.length;
var i__20925__auto___21980 = (0);
while(true){
if((i__20925__auto___21980 < len__20924__auto___21979)){
args__20931__auto__.push((arguments[i__20925__auto___21980]));

var G__21981 = (i__20925__auto___21980 + (1));
i__20925__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq21977){
var G__21978 = cljs.core.first.call(null,seq21977);
var seq21977__$1 = cljs.core.next.call(null,seq21977);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__21978,seq21977__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21984 = arguments.length;
var i__20925__auto___21985 = (0);
while(true){
if((i__20925__auto___21985 < len__20924__auto___21984)){
args__20931__auto__.push((arguments[i__20925__auto___21985]));

var G__21986 = (i__20925__auto___21985 + (1));
i__20925__auto___21985 = G__21986;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq21982){
var G__21983 = cljs.core.first.call(null,seq21982);
var seq21982__$1 = cljs.core.next.call(null,seq21982);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__21983,seq21982__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21989 = arguments.length;
var i__20925__auto___21990 = (0);
while(true){
if((i__20925__auto___21990 < len__20924__auto___21989)){
args__20931__auto__.push((arguments[i__20925__auto___21990]));

var G__21991 = (i__20925__auto___21990 + (1));
i__20925__auto___21990 = G__21991;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq21987){
var G__21988 = cljs.core.first.call(null,seq21987);
var seq21987__$1 = cljs.core.next.call(null,seq21987);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__21988,seq21987__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21994 = arguments.length;
var i__20925__auto___21995 = (0);
while(true){
if((i__20925__auto___21995 < len__20924__auto___21994)){
args__20931__auto__.push((arguments[i__20925__auto___21995]));

var G__21996 = (i__20925__auto___21995 + (1));
i__20925__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq21992){
var G__21993 = cljs.core.first.call(null,seq21992);
var seq21992__$1 = cljs.core.next.call(null,seq21992);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__21993,seq21992__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__20931__auto__ = [];
var len__20924__auto___21999 = arguments.length;
var i__20925__auto___22000 = (0);
while(true){
if((i__20925__auto___22000 < len__20924__auto___21999)){
args__20931__auto__.push((arguments[i__20925__auto___22000]));

var G__22001 = (i__20925__auto___22000 + (1));
i__20925__auto___22000 = G__22001;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq21997){
var G__21998 = cljs.core.first.call(null,seq21997);
var seq21997__$1 = cljs.core.next.call(null,seq21997);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__21998,seq21997__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__20931__auto__ = [];
var len__20924__auto___22004 = arguments.length;
var i__20925__auto___22005 = (0);
while(true){
if((i__20925__auto___22005 < len__20924__auto___22004)){
args__20931__auto__.push((arguments[i__20925__auto___22005]));

var G__22006 = (i__20925__auto___22005 + (1));
i__20925__auto___22005 = G__22006;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq22002){
var G__22003 = cljs.core.first.call(null,seq22002);
var seq22002__$1 = cljs.core.next.call(null,seq22002);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__22003,seq22002__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__20931__auto__ = [];
var len__20924__auto___22009 = arguments.length;
var i__20925__auto___22010 = (0);
while(true){
if((i__20925__auto___22010 < len__20924__auto___22009)){
args__20931__auto__.push((arguments[i__20925__auto___22010]));

var G__22011 = (i__20925__auto___22010 + (1));
i__20925__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var argseq__20932__auto__ = ((((1) < args__20931__auto__.length))?(new cljs.core.IndexedSeq(args__20931__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20932__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21574__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__21574__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21574__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq22007){
var G__22008 = cljs.core.first.call(null,seq22007);
var seq22007__$1 = cljs.core.next.call(null,seq22007);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__22008,seq22007__$1);
});

//# sourceMappingURL=core.js.map