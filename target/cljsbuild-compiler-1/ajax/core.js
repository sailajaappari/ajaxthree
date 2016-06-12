// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
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
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20477__auto____$1,k__20478__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k26855,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__26857 = (((k26855 instanceof cljs.core.Keyword))?k26855.fqn:null);
switch (G__26857) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26855,else__20480__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__26858,opts){
var self__ = this;
var map__26859 = p__26858;
var map__26859__$1 = ((((!((map__26859 == null)))?((((map__26859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26859):map__26859);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26859__$1,cljs.core.cst$kw$request);
var map__26861 = this;
var map__26861__$1 = ((((!((map__26861 == null)))?((((map__26861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26861):map__26861);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__26863,xhrio){
var self__ = this;
var map__26864 = p__26863;
var map__26864__$1 = ((((!((map__26864 == null)))?((((map__26864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26864):map__26864);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26864__$1,cljs.core.cst$kw$response);
var map__26866 = this;
var map__26866__$1 = ((((!((map__26866 == null)))?((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26866):map__26866);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer(writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20492__auto__,pr_pair__20494__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__20493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26854){
var self__ = this;
var G__26854__$1 = this;
return (new cljs.core.RecordIter((0),G__26854__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20298__auto__ = self__.__hash;
if(!((h__20298__auto__ == null))){
return h__20298__auto__;
} else {
var h__20298__auto____$1 = cljs.core.hash_imap(this__20472__auto____$1);
self__.__hash = h__20298__auto____$1;

return h__20298__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19851__auto__)){
var and__19851__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19851__auto____$1){
return cljs.core.equiv_map(this__20473__auto____$1,other__20474__auto__);
} else {
return and__19851__auto____$1;
}
} else {
return and__19851__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__20487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20487__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__26854){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__26868 = cljs.core.keyword_identical_QMARK_;
var expr__26869 = k__20485__auto__;
if(cljs.core.truth_((pred__26868.cljs$core$IFn$_invoke$arity$2 ? pred__26868.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__26869) : pred__26868.call(null,cljs.core.cst$kw$name,expr__26869)))){
return (new ajax.core.StandardInterceptor(G__26854,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26868.cljs$core$IFn$_invoke$arity$2 ? pred__26868.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$request,expr__26869) : pred__26868.call(null,cljs.core.cst$kw$request,expr__26869)))){
return (new ajax.core.StandardInterceptor(self__.name,G__26854,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26868.cljs$core$IFn$_invoke$arity$2 ? pred__26868.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response,expr__26869) : pred__26868.call(null,cljs.core.cst$kw$response,expr__26869)))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__26854,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20485__auto__,G__26854),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__26854){
var self__ = this;
var this__20476__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__26854,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20483__auto__)){
return cljs.core._assoc(this__20482__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__20511__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__20511__auto__,writer__20512__auto__){
return cljs.core._write(writer__20512__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__26856){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__26856),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__26856),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__26856),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26856,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__19863__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__26872,xhrio){
var map__26875 = p__26872;
var map__26875__$1 = ((((!((map__26875 == null)))?((((map__26875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26875):map__26875);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26875__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(ajax.core.exception_message(e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__20928__auto__ = [];
var len__20921__auto___26881 = arguments.length;
var i__20922__auto___26882 = (0);
while(true){
if((i__20922__auto___26882 < len__20921__auto___26881)){
args__20928__auto__.push((arguments[i__20922__auto___26882]));

var G__26883 = (i__20922__auto___26882 + (1));
i__20922__auto___26882 = G__26883;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((3) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20929__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq26877){
var G__26878 = cljs.core.first(seq26877);
var seq26877__$1 = cljs.core.next(seq26877);
var G__26879 = cljs.core.first(seq26877__$1);
var seq26877__$2 = cljs.core.next(seq26877__$1);
var G__26880 = cljs.core.first(seq26877__$2);
var seq26877__$3 = cljs.core.next(seq26877__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__26878,G__26879,G__26880,seq26877__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26884_SHARP_){
return [cljs.core.str(p1__26884_SHARP_),cljs.core.str("; charset=utf-8")].join('');
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
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20477__auto____$1,k__20478__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k26887,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__26889 = (((k26887 instanceof cljs.core.Keyword))?k26887.fqn:null);
switch (G__26889) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26887,else__20480__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__26890,request){
var self__ = this;
var map__26891 = p__26890;
var map__26891__$1 = ((((!((map__26891 == null)))?((((map__26891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26891):map__26891);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,cljs.core.cst$kw$content_DASH_type);
var map__26893 = this;
var map__26893__$1 = ((((!((map__26893 == null)))?((((map__26893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26893):map__26893);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26893__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__26893,map__26893__$1,content_type__$2,map__26891,map__26891__$1,content_type__$1){
return (function (p1__26885_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__19863__auto__ = p1__26885_SHARP_;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__26893,map__26893__$1,content_type__$2,map__26891,map__26891__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__26895,xhrio){
var self__ = this;
var map__26896 = p__26895;
var map__26896__$1 = ((((!((map__26896 == null)))?((((map__26896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26896):map__26896);
var format = map__26896__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26896__$1,cljs.core.cst$kw$read);
var map__26898 = this;
var map__26898__$1 = ((((!((map__26898 == null)))?((((map__26898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26898):map__26898);
var format__$1 = map__26898__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26898__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__26901 = status;
switch (G__26901) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request failed.",cljs.core.cst$kw$failed) : fail.call(null,"Request failed.",cljs.core.cst$kw$failed));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request aborted by client.",cljs.core.cst$kw$aborted) : fail.call(null,"Request aborted by client.",cljs.core.cst$kw$aborted));
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request timed out.",cljs.core.cst$kw$timeout) : fail.call(null,"Request timed out.",cljs.core.cst$kw$timeout));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__26903 = ajax.protocols._status_text(xhrio);
var G__26904 = cljs.core.cst$kw$error;
var G__26905 = cljs.core.cst$kw$response;
var G__26906 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__26903,G__26904,G__26905,G__26906) : fail.call(null,G__26903,G__26904,G__26905,G__26906));
}
}catch (e26902){if((e26902 instanceof Object)){
var e = e26902;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e26902;

}
}
}
}catch (e26900){if((e26900 instanceof Object)){
var e = e26900;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e26900;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer(writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20492__auto__,pr_pair__20494__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__20493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26886){
var self__ = this;
var G__26886__$1 = this;
return (new cljs.core.RecordIter((0),G__26886__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),cljs.core._iterator(self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20298__auto__ = self__.__hash;
if(!((h__20298__auto__ == null))){
return h__20298__auto__;
} else {
var h__20298__auto____$1 = cljs.core.hash_imap(this__20472__auto____$1);
self__.__hash = h__20298__auto____$1;

return h__20298__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19851__auto__)){
var and__19851__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19851__auto____$1){
return cljs.core.equiv_map(this__20473__auto____$1,other__20474__auto__);
} else {
return and__19851__auto____$1;
}
} else {
return and__19851__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__20487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20487__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__26886){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__26907 = cljs.core.keyword_identical_QMARK_;
var expr__26908 = k__20485__auto__;
if(cljs.core.truth_((pred__26907.cljs$core$IFn$_invoke$arity$2 ? pred__26907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$read,expr__26908) : pred__26907.call(null,cljs.core.cst$kw$read,expr__26908)))){
return (new ajax.core.ResponseFormat(G__26886,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26907.cljs$core$IFn$_invoke$arity$2 ? pred__26907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$description,expr__26908) : pred__26907.call(null,cljs.core.cst$kw$description,expr__26908)))){
return (new ajax.core.ResponseFormat(self__.read,G__26886,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26907.cljs$core$IFn$_invoke$arity$2 ? pred__26907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content_DASH_type,expr__26908) : pred__26907.call(null,cljs.core.cst$kw$content_DASH_type,expr__26908)))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__26886,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20485__auto__,G__26886),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__26886){
var self__ = this;
var this__20476__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__26886,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20483__auto__)){
return cljs.core._assoc(this__20482__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__20511__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__20511__auto__,writer__20512__auto__){
return cljs.core._write(writer__20512__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__26888){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__26888),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__26888),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__26888),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26888,cljs.core.cst$kw$read,cljs.core.array_seq([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return (function (){var G__26913 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__26913);
})().toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args26914 = [];
var len__20921__auto___26923 = arguments.length;
var i__20922__auto___26924 = (0);
while(true){
if((i__20922__auto___26924 < len__20921__auto___26923)){
args26914.push((arguments[i__20922__auto___26924]));

var G__26925 = (i__20922__auto___26924 + (1));
i__20922__auto___26924 = G__26925;
continue;
} else {
}
break;
}

var G__26916 = args26914.length;
switch (G__26916) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26914.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__26917 = prefix;
var G__26918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__26917,G__26918) : ajax.core.param_to_str.call(null,G__26917,G__26918));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__26919 = prefix;
var G__26920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__26919,G__26920) : ajax.core.param_to_str.call(null,G__26919,G__26920));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__26921 = prefix;
var G__26922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__26921,G__26922) : ajax.core.param_to_str.call(null,G__26921,G__26922));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args26927 = [];
var len__20921__auto___26934 = arguments.length;
var i__20922__auto___26935 = (0);
while(true){
if((i__20922__auto___26935 < len__20921__auto___26934)){
args26927.push((arguments[i__20922__auto___26935]));

var G__26936 = (i__20922__auto___26935 + (1));
i__20922__auto___26935 = G__26936;
continue;
} else {
}
break;
}

var G__26929 = args26927.length;
switch (G__26929) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26927.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__26930){
var vec__26931 = p__26930;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26931,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26931,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__26932){
var vec__26933 = p__26932;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26933,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.array_seq([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26940){
var vec__26941 = p__26940;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26941,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.array_seq([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
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
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20477__auto____$1,k__20478__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k26944,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__26946 = k26944;
switch (G__26946) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26944,else__20480__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__26947){
var self__ = this;
var map__26948 = p__26947;
var map__26948__$1 = ((((!((map__26948 == null)))?((((map__26948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26948):map__26948);
var request = map__26948__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,((function (___$1,map__26948,map__26948__$1,request,method){
return (function (p1__26942_SHARP_){
return ajax.core.uri_with_params(p1__26942_SHARP_,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__26948,map__26948__$1,request,method))
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

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer(writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20492__auto__,pr_pair__20494__auto__,"#ajax.core.ProcessGet{",", ","}",opts__20493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26943){
var self__ = this;
var G__26943__$1 = this;
return (new cljs.core.RecordIter((0),G__26943__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20298__auto__ = self__.__hash;
if(!((h__20298__auto__ == null))){
return h__20298__auto__;
} else {
var h__20298__auto____$1 = cljs.core.hash_imap(this__20472__auto____$1);
self__.__hash = h__20298__auto____$1;

return h__20298__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19851__auto__)){
var and__19851__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19851__auto____$1){
return cljs.core.equiv_map(this__20473__auto____$1,other__20474__auto__);
} else {
return and__19851__auto____$1;
}
} else {
return and__19851__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__20487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20487__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__26943){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__26950 = cljs.core.keyword_identical_QMARK_;
var expr__26951 = k__20485__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20485__auto__,G__26943),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__26943){
var self__ = this;
var this__20476__auto____$1 = this;
return (new ajax.core.ProcessGet(G__26943,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20483__auto__)){
return cljs.core._assoc(this__20482__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__20511__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__20511__auto__,writer__20512__auto__){
return cljs.core._write(writer__20512__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__26945){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__26945),null));
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
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20477__auto____$1,k__20478__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k26955,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__26957 = k26955;
switch (G__26957) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26955,else__20480__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__26958){
var self__ = this;
var map__26959 = p__26958;
var map__26959__$1 = ((((!((map__26959 == null)))?((((map__26959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26959):map__26959);
var request = map__26959__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26959__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer(writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20492__auto__,pr_pair__20494__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__20493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26954){
var self__ = this;
var G__26954__$1 = this;
return (new cljs.core.RecordIter((0),G__26954__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20298__auto__ = self__.__hash;
if(!((h__20298__auto__ == null))){
return h__20298__auto__;
} else {
var h__20298__auto____$1 = cljs.core.hash_imap(this__20472__auto____$1);
self__.__hash = h__20298__auto____$1;

return h__20298__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19851__auto__)){
var and__19851__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19851__auto____$1){
return cljs.core.equiv_map(this__20473__auto____$1,other__20474__auto__);
} else {
return and__19851__auto____$1;
}
} else {
return and__19851__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__20487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20487__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__26954){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__26961 = cljs.core.keyword_identical_QMARK_;
var expr__26962 = k__20485__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20485__auto__,G__26954),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__26954){
var self__ = this;
var this__20476__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__26954,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20483__auto__)){
return cljs.core._assoc(this__20482__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__20511__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__20511__auto__,writer__20512__auto__){
return cljs.core._write(writer__20512__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__26956){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__26956),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
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
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20477__auto____$1,k__20478__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k26966,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__26968 = k26966;
switch (G__26968) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26966,else__20480__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__26969){
var self__ = this;
var map__26970 = p__26969;
var map__26970__$1 = ((((!((map__26970 == null)))?((((map__26970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26970):map__26970);
var request = map__26970__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__26972 = ajax.core.get_request_format(format);
var map__26972__$1 = ((((!((map__26972 == null)))?((((map__26972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26972):map__26972);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26972__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26972__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__19863__auto__ = headers;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.array_seq([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer(writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20492__auto__,pr_pair__20494__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__20493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26965){
var self__ = this;
var G__26965__$1 = this;
return (new cljs.core.RecordIter((0),G__26965__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20298__auto__ = self__.__hash;
if(!((h__20298__auto__ == null))){
return h__20298__auto__;
} else {
var h__20298__auto____$1 = cljs.core.hash_imap(this__20472__auto____$1);
self__.__hash = h__20298__auto____$1;

return h__20298__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19851__auto__)){
var and__19851__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19851__auto____$1){
return cljs.core.equiv_map(this__20473__auto____$1,other__20474__auto__);
} else {
return and__19851__auto____$1;
}
} else {
return and__19851__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__20487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20487__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__26965){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__26974 = cljs.core.keyword_identical_QMARK_;
var expr__26975 = k__20485__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20485__auto__,G__26965),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__26965){
var self__ = this;
var this__20476__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__26965,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20483__auto__)){
return cljs.core._assoc(this__20482__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__20511__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__20511__auto__,writer__20512__auto__){
return cljs.core._write(writer__20512__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__26967){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__26967),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__26978){
var map__26981 = p__26978;
var map__26981__$1 = ((((!((map__26981 == null)))?((((map__26981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26981):map__26981);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26981__$1,cljs.core.cst$kw$type);
var or__19863__auto__ = type;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__19863__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args26983 = [];
var len__20921__auto___26986 = arguments.length;
var i__20922__auto___26987 = (0);
while(true){
if((i__20922__auto___26987 < len__20921__auto___26986)){
args26983.push((arguments[i__20922__auto___26987]));

var G__26988 = (i__20922__auto___26987 + (1));
i__20922__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var G__26985 = args26983.length;
switch (G__26985) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26983.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__19863__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read(reader,ajax.protocols._body(response));
if(cljs.core.truth_(cljs.core.cst$kw$raw.cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args26990 = [];
var len__20921__auto___26993 = arguments.length;
var i__20922__auto___26994 = (0);
while(true){
if((i__20922__auto___26994 < len__20921__auto___26993)){
args26990.push((arguments[i__20922__auto___26994]));

var G__26995 = (i__20922__auto___26994 + (1));
i__20922__auto___26994 = G__26995;
continue;
} else {
}
break;
}

var G__26992 = args26990.length;
switch (G__26992) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26990.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args26997 = [];
var len__20921__auto___27000 = arguments.length;
var i__20922__auto___27001 = (0);
while(true){
if((i__20922__auto___27001 < len__20921__auto___27000)){
args26997.push((arguments[i__20922__auto___27001]));

var G__27002 = (i__20922__auto___27001 + (1));
i__20922__auto___27001 = G__27002;
continue;
} else {
}
break;
}

var G__26999 = args26997.length;
switch (G__26999) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26997.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__19851__auto__ = prefix;
if(cljs.core.truth_(and__19851__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__19851__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args27004 = [];
var len__20921__auto___27007 = arguments.length;
var i__20922__auto___27008 = (0);
while(true){
if((i__20922__auto___27008 < len__20921__auto___27007)){
args27004.push((arguments[i__20922__auto___27008]));

var G__27009 = (i__20922__auto___27008 + (1));
i__20922__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var G__27006 = args27004.length;
switch (G__27006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27004.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
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
var args27011 = [];
var len__20921__auto___27017 = arguments.length;
var i__20922__auto___27018 = (0);
while(true){
if((i__20922__auto___27018 < len__20921__auto___27017)){
args27011.push((arguments[i__20922__auto___27018]));

var G__27019 = (i__20922__auto___27018 + (1));
i__20922__auto___27018 = G__27019;
continue;
} else {
}
break;
}

var G__27013 = args27011.length;
switch (G__27013) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27011.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__27014){
var map__27015 = p__27014;
var map__27015__$1 = ((((!((map__27015 == null)))?((((map__27015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27015):map__27015);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args27021 = [];
var len__20921__auto___27024 = arguments.length;
var i__20922__auto___27025 = (0);
while(true){
if((i__20922__auto___27025 < len__20921__auto___27024)){
args27021.push((arguments[i__20922__auto___27025]));

var G__27026 = (i__20922__auto___27025 + (1));
i__20922__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__27023 = args27021.length;
switch (G__27023) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27021.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args27028 = [];
var len__20921__auto___27031 = arguments.length;
var i__20922__auto___27032 = (0);
while(true){
if((i__20922__auto___27032 < len__20921__auto___27031)){
args27028.push((arguments[i__20922__auto___27032]));

var G__27033 = (i__20922__auto___27032 + (1));
i__20922__auto___27032 = G__27033;
continue;
} else {
}
break;
}

var G__27030 = args27028.length;
switch (G__27030) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27028.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
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
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
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
var args27035 = [];
var len__20921__auto___27038 = arguments.length;
var i__20922__auto___27039 = (0);
while(true){
if((i__20922__auto___27039 < len__20921__auto___27038)){
args27035.push((arguments[i__20922__auto___27039]));

var G__27040 = (i__20922__auto___27039 + (1));
i__20922__auto___27039 = G__27040;
continue;
} else {
}
break;
}

var G__27037 = args27035.length;
switch (G__27037) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27035.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args27042 = [];
var len__20921__auto___27045 = arguments.length;
var i__20922__auto___27046 = (0);
while(true){
if((i__20922__auto___27046 < len__20921__auto___27045)){
args27042.push((arguments[i__20922__auto___27046]));

var G__27047 = (i__20922__auto___27046 + (1));
i__20922__auto___27046 = G__27047;
continue;
} else {
}
break;
}

var G__27044 = args27042.length;
switch (G__27044) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27042.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__27049){
var map__27052 = p__27049;
var map__27052__$1 = ((((!((map__27052 == null)))?((((map__27052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27052):map__27052);
var request = map__27052__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27052__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args27054 = [];
var len__20921__auto___27057 = arguments.length;
var i__20922__auto___27058 = (0);
while(true){
if((i__20922__auto___27058 < len__20921__auto___27057)){
args27054.push((arguments[i__20922__auto___27058]));

var G__27059 = (i__20922__auto___27058 + (1));
i__20922__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var G__27056 = args27054.length;
switch (G__27056) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27054.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__27061){
var map__27064 = p__27061;
var map__27064__$1 = ((((!((map__27064 == null)))?((((map__27064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27064):map__27064);
var request = map__27064__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27064__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.array_seq([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args27066 = [];
var len__20921__auto___27069 = arguments.length;
var i__20922__auto___27070 = (0);
while(true){
if((i__20922__auto___27070 < len__20921__auto___27069)){
args27066.push((arguments[i__20922__auto___27070]));

var G__27071 = (i__20922__auto___27070 + (1));
i__20922__auto___27070 = G__27071;
continue;
} else {
}
break;
}

var G__27068 = args27066.length;
switch (G__27068) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27066.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__27073){
var map__27076 = p__27073;
var map__27076__$1 = ((((!((map__27076 == null)))?((((map__27076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27076):map__27076);
var opts = map__27076__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27076__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args27078 = [];
var len__20921__auto___27081 = arguments.length;
var i__20922__auto___27082 = (0);
while(true){
if((i__20922__auto___27082 < len__20921__auto___27081)){
args27078.push((arguments[i__20922__auto___27082]));

var G__27083 = (i__20922__auto___27082 + (1));
i__20922__auto___27082 = G__27083;
continue;
} else {
}
break;
}

var G__27080 = args27078.length;
switch (G__27080) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27078.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__27085){
var map__27088 = p__27085;
var map__27088__$1 = ((((!((map__27088 == null)))?((((map__27088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27088):map__27088);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27088__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = (function (){var G__27090 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27090) : cljs.core.atom.call(null,G__27090));
})();
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__27091_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__19863__auto__ = p1__27091_SHARP_;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ajax.core.default_interceptors) : cljs.core.deref.call(null,ajax.core.default_interceptors));
}
})(),cljs.core.array_seq([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__27092){
var map__27095 = p__27092;
var map__27095__$1 = ((((!((map__27095 == null)))?((((map__27095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27095):map__27095);
var request = map__27095__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27095__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__19863__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__27098 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27098) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_element(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__27103 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27103) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

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
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27105_SHARP_){
return ajax.core.keyword_response_format_element(p1__27105_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args27106 = [];
var len__20921__auto___27119 = arguments.length;
var i__20922__auto___27120 = (0);
while(true){
if((i__20922__auto___27120 < len__20921__auto___27119)){
args27106.push((arguments[i__20922__auto___27120]));

var G__27121 = (i__20922__auto___27120 + (1));
i__20922__auto___27120 = G__27121;
continue;
} else {
}
break;
}

var G__27108 = args27106.length;
switch (G__27108) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27106.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__27109,p__27110){
var map__27111 = p__27109;
var map__27111__$1 = ((((!((map__27111 == null)))?((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27111):map__27111);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27111__$1,cljs.core.cst$kw$finally);
var vec__27112 = p__27110;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27112,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27112,(1),null);
var temp__4651__auto___27123 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4651__auto___27123)){
var h_27124 = temp__4651__auto___27123;
(h_27124.cljs$core$IFn$_invoke$arity$1 ? h_27124.cljs$core$IFn$_invoke$arity$1(result) : h_27124.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__27114){
var map__27115 = p__27114;
var map__27115__$1 = ((((!((map__27115 == null)))?((((map__27115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27115):map__27115);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.cst$kw$finally);
return ((function (map__27115,map__27115__$1,handler,error_handler,finally$){
return (function (p__27117){
var vec__27118 = p__27117;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27118,(1),null);
var temp__4651__auto___27125 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4651__auto___27125)){
var h_27126 = temp__4651__auto___27125;
(h_27126.cljs$core$IFn$_invoke$arity$1 ? h_27126.cljs$core$IFn$_invoke$arity$1(result) : h_27126.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__27115,map__27115__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__27127){
var map__27130 = p__27127;
var map__27130__$1 = ((((!((map__27130 == null)))?((((map__27130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27130):map__27130);
var opts = map__27130__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27130__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__19863__auto__ = format;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
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
var args__20928__auto__ = [];
var len__20921__auto___27134 = arguments.length;
var i__20922__auto___27135 = (0);
while(true){
if((i__20922__auto___27135 < len__20921__auto___27134)){
args__20928__auto__.push((arguments[i__20922__auto___27135]));

var G__27136 = (i__20922__auto___27135 + (1));
i__20922__auto___27135 = G__27136;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq27132){
var G__27133 = cljs.core.first(seq27132);
var seq27132__$1 = cljs.core.next(seq27132);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__27133,seq27132__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27139 = arguments.length;
var i__20922__auto___27140 = (0);
while(true){
if((i__20922__auto___27140 < len__20921__auto___27139)){
args__20928__auto__.push((arguments[i__20922__auto___27140]));

var G__27141 = (i__20922__auto___27140 + (1));
i__20922__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq27137){
var G__27138 = cljs.core.first(seq27137);
var seq27137__$1 = cljs.core.next(seq27137);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__27138,seq27137__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27144 = arguments.length;
var i__20922__auto___27145 = (0);
while(true){
if((i__20922__auto___27145 < len__20921__auto___27144)){
args__20928__auto__.push((arguments[i__20922__auto___27145]));

var G__27146 = (i__20922__auto___27145 + (1));
i__20922__auto___27145 = G__27146;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq27142){
var G__27143 = cljs.core.first(seq27142);
var seq27142__$1 = cljs.core.next(seq27142);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__27143,seq27142__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27149 = arguments.length;
var i__20922__auto___27150 = (0);
while(true){
if((i__20922__auto___27150 < len__20921__auto___27149)){
args__20928__auto__.push((arguments[i__20922__auto___27150]));

var G__27151 = (i__20922__auto___27150 + (1));
i__20922__auto___27150 = G__27151;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq27147){
var G__27148 = cljs.core.first(seq27147);
var seq27147__$1 = cljs.core.next(seq27147);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__27148,seq27147__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27154 = arguments.length;
var i__20922__auto___27155 = (0);
while(true){
if((i__20922__auto___27155 < len__20921__auto___27154)){
args__20928__auto__.push((arguments[i__20922__auto___27155]));

var G__27156 = (i__20922__auto___27155 + (1));
i__20922__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq27152){
var G__27153 = cljs.core.first(seq27152);
var seq27152__$1 = cljs.core.next(seq27152);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__27153,seq27152__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27159 = arguments.length;
var i__20922__auto___27160 = (0);
while(true){
if((i__20922__auto___27160 < len__20921__auto___27159)){
args__20928__auto__.push((arguments[i__20922__auto___27160]));

var G__27161 = (i__20922__auto___27160 + (1));
i__20922__auto___27160 = G__27161;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq27157){
var G__27158 = cljs.core.first(seq27157);
var seq27157__$1 = cljs.core.next(seq27157);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__27158,seq27157__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27164 = arguments.length;
var i__20922__auto___27165 = (0);
while(true){
if((i__20922__auto___27165 < len__20921__auto___27164)){
args__20928__auto__.push((arguments[i__20922__auto___27165]));

var G__27166 = (i__20922__auto___27165 + (1));
i__20922__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq27162){
var G__27163 = cljs.core.first(seq27162);
var seq27162__$1 = cljs.core.next(seq27162);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__27163,seq27162__$1);
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
var args__20928__auto__ = [];
var len__20921__auto___27169 = arguments.length;
var i__20922__auto___27170 = (0);
while(true){
if((i__20922__auto___27170 < len__20921__auto___27169)){
args__20928__auto__.push((arguments[i__20922__auto___27170]));

var G__27171 = (i__20922__auto___27170 + (1));
i__20922__auto___27170 = G__27171;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21571__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__21571__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__21571__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq27167){
var G__27168 = cljs.core.first(seq27167);
var seq27167__$1 = cljs.core.next(seq27167);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__27168,seq27167__$1);
});
