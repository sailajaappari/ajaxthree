// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__21406_21410 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21407_21411 = null;
var count__21408_21412 = (0);
var i__21409_21413 = (0);
while(true){
if((i__21409_21413 < count__21408_21412)){
var k_21414 = cljs.core._nth.call(null,chunk__21407_21411,i__21409_21413);
var v_21415 = (b[k_21414]);
(a[k_21414] = v_21415);

var G__21416 = seq__21406_21410;
var G__21417 = chunk__21407_21411;
var G__21418 = count__21408_21412;
var G__21419 = (i__21409_21413 + (1));
seq__21406_21410 = G__21416;
chunk__21407_21411 = G__21417;
count__21408_21412 = G__21418;
i__21409_21413 = G__21419;
continue;
} else {
var temp__4653__auto___21420 = cljs.core.seq.call(null,seq__21406_21410);
if(temp__4653__auto___21420){
var seq__21406_21421__$1 = temp__4653__auto___21420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21406_21421__$1)){
var c__20669__auto___21422 = cljs.core.chunk_first.call(null,seq__21406_21421__$1);
var G__21423 = cljs.core.chunk_rest.call(null,seq__21406_21421__$1);
var G__21424 = c__20669__auto___21422;
var G__21425 = cljs.core.count.call(null,c__20669__auto___21422);
var G__21426 = (0);
seq__21406_21410 = G__21423;
chunk__21407_21411 = G__21424;
count__21408_21412 = G__21425;
i__21409_21413 = G__21426;
continue;
} else {
var k_21427 = cljs.core.first.call(null,seq__21406_21421__$1);
var v_21428 = (b[k_21427]);
(a[k_21427] = v_21428);

var G__21429 = cljs.core.next.call(null,seq__21406_21421__$1);
var G__21430 = null;
var G__21431 = (0);
var G__21432 = (0);
seq__21406_21410 = G__21429;
chunk__21407_21411 = G__21430;
count__21408_21412 = G__21431;
i__21409_21413 = G__21432;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args21433 = [];
var len__20924__auto___21436 = arguments.length;
var i__20925__auto___21437 = (0);
while(true){
if((i__20925__auto___21437 < len__20924__auto___21436)){
args21433.push((arguments[i__20925__auto___21437]));

var G__21438 = (i__20925__auto___21437 + (1));
i__20925__auto___21437 = G__21438;
continue;
} else {
}
break;
}

var G__21435 = args21433.length;
switch (G__21435) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21433.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21440 = (i + (2));
var G__21441 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21440;
ret = G__21441;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21442_21446 = cljs.core.seq.call(null,v);
var chunk__21443_21447 = null;
var count__21444_21448 = (0);
var i__21445_21449 = (0);
while(true){
if((i__21445_21449 < count__21444_21448)){
var x_21450 = cljs.core._nth.call(null,chunk__21443_21447,i__21445_21449);
ret.push(x_21450);

var G__21451 = seq__21442_21446;
var G__21452 = chunk__21443_21447;
var G__21453 = count__21444_21448;
var G__21454 = (i__21445_21449 + (1));
seq__21442_21446 = G__21451;
chunk__21443_21447 = G__21452;
count__21444_21448 = G__21453;
i__21445_21449 = G__21454;
continue;
} else {
var temp__4653__auto___21455 = cljs.core.seq.call(null,seq__21442_21446);
if(temp__4653__auto___21455){
var seq__21442_21456__$1 = temp__4653__auto___21455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21442_21456__$1)){
var c__20669__auto___21457 = cljs.core.chunk_first.call(null,seq__21442_21456__$1);
var G__21458 = cljs.core.chunk_rest.call(null,seq__21442_21456__$1);
var G__21459 = c__20669__auto___21457;
var G__21460 = cljs.core.count.call(null,c__20669__auto___21457);
var G__21461 = (0);
seq__21442_21446 = G__21458;
chunk__21443_21447 = G__21459;
count__21444_21448 = G__21460;
i__21445_21449 = G__21461;
continue;
} else {
var x_21462 = cljs.core.first.call(null,seq__21442_21456__$1);
ret.push(x_21462);

var G__21463 = cljs.core.next.call(null,seq__21442_21456__$1);
var G__21464 = null;
var G__21465 = (0);
var G__21466 = (0);
seq__21442_21446 = G__21463;
chunk__21443_21447 = G__21464;
count__21444_21448 = G__21465;
i__21445_21449 = G__21466;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21467_21471 = cljs.core.seq.call(null,v);
var chunk__21468_21472 = null;
var count__21469_21473 = (0);
var i__21470_21474 = (0);
while(true){
if((i__21470_21474 < count__21469_21473)){
var x_21475 = cljs.core._nth.call(null,chunk__21468_21472,i__21470_21474);
ret.push(x_21475);

var G__21476 = seq__21467_21471;
var G__21477 = chunk__21468_21472;
var G__21478 = count__21469_21473;
var G__21479 = (i__21470_21474 + (1));
seq__21467_21471 = G__21476;
chunk__21468_21472 = G__21477;
count__21469_21473 = G__21478;
i__21470_21474 = G__21479;
continue;
} else {
var temp__4653__auto___21480 = cljs.core.seq.call(null,seq__21467_21471);
if(temp__4653__auto___21480){
var seq__21467_21481__$1 = temp__4653__auto___21480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21467_21481__$1)){
var c__20669__auto___21482 = cljs.core.chunk_first.call(null,seq__21467_21481__$1);
var G__21483 = cljs.core.chunk_rest.call(null,seq__21467_21481__$1);
var G__21484 = c__20669__auto___21482;
var G__21485 = cljs.core.count.call(null,c__20669__auto___21482);
var G__21486 = (0);
seq__21467_21471 = G__21483;
chunk__21468_21472 = G__21484;
count__21469_21473 = G__21485;
i__21470_21474 = G__21486;
continue;
} else {
var x_21487 = cljs.core.first.call(null,seq__21467_21481__$1);
ret.push(x_21487);

var G__21488 = cljs.core.next.call(null,seq__21467_21481__$1);
var G__21489 = null;
var G__21490 = (0);
var G__21491 = (0);
seq__21467_21471 = G__21488;
chunk__21468_21472 = G__21489;
count__21469_21473 = G__21490;
i__21470_21474 = G__21491;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21492_21496 = cljs.core.seq.call(null,v);
var chunk__21493_21497 = null;
var count__21494_21498 = (0);
var i__21495_21499 = (0);
while(true){
if((i__21495_21499 < count__21494_21498)){
var x_21500 = cljs.core._nth.call(null,chunk__21493_21497,i__21495_21499);
ret.push(x_21500);

var G__21501 = seq__21492_21496;
var G__21502 = chunk__21493_21497;
var G__21503 = count__21494_21498;
var G__21504 = (i__21495_21499 + (1));
seq__21492_21496 = G__21501;
chunk__21493_21497 = G__21502;
count__21494_21498 = G__21503;
i__21495_21499 = G__21504;
continue;
} else {
var temp__4653__auto___21505 = cljs.core.seq.call(null,seq__21492_21496);
if(temp__4653__auto___21505){
var seq__21492_21506__$1 = temp__4653__auto___21505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21492_21506__$1)){
var c__20669__auto___21507 = cljs.core.chunk_first.call(null,seq__21492_21506__$1);
var G__21508 = cljs.core.chunk_rest.call(null,seq__21492_21506__$1);
var G__21509 = c__20669__auto___21507;
var G__21510 = cljs.core.count.call(null,c__20669__auto___21507);
var G__21511 = (0);
seq__21492_21496 = G__21508;
chunk__21493_21497 = G__21509;
count__21494_21498 = G__21510;
i__21495_21499 = G__21511;
continue;
} else {
var x_21512 = cljs.core.first.call(null,seq__21492_21506__$1);
ret.push(x_21512);

var G__21513 = cljs.core.next.call(null,seq__21492_21506__$1);
var G__21514 = null;
var G__21515 = (0);
var G__21516 = (0);
seq__21492_21496 = G__21513;
chunk__21493_21497 = G__21514;
count__21494_21498 = G__21515;
i__21495_21499 = G__21516;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args21517 = [];
var len__20924__auto___21528 = arguments.length;
var i__20925__auto___21529 = (0);
while(true){
if((i__20925__auto___21529 < len__20924__auto___21528)){
args21517.push((arguments[i__20925__auto___21529]));

var G__21530 = (i__20925__auto___21529 + (1));
i__20925__auto___21529 = G__21530;
continue;
} else {
}
break;
}

var G__21519 = args21517.length;
switch (G__21519) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21517.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21520 = obj;
G__21520.push(kfn.call(null,k),vfn.call(null,v));

return G__21520;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21521 = cljs.core.clone.call(null,handlers);
x21521.forEach = ((function (x21521,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21522 = cljs.core.seq.call(null,coll);
var chunk__21523 = null;
var count__21524 = (0);
var i__21525 = (0);
while(true){
if((i__21525 < count__21524)){
var vec__21526 = cljs.core._nth.call(null,chunk__21523,i__21525);
var k = cljs.core.nth.call(null,vec__21526,(0),null);
var v = cljs.core.nth.call(null,vec__21526,(1),null);
f.call(null,v,k);

var G__21532 = seq__21522;
var G__21533 = chunk__21523;
var G__21534 = count__21524;
var G__21535 = (i__21525 + (1));
seq__21522 = G__21532;
chunk__21523 = G__21533;
count__21524 = G__21534;
i__21525 = G__21535;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__21522);
if(temp__4653__auto__){
var seq__21522__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21522__$1)){
var c__20669__auto__ = cljs.core.chunk_first.call(null,seq__21522__$1);
var G__21536 = cljs.core.chunk_rest.call(null,seq__21522__$1);
var G__21537 = c__20669__auto__;
var G__21538 = cljs.core.count.call(null,c__20669__auto__);
var G__21539 = (0);
seq__21522 = G__21536;
chunk__21523 = G__21537;
count__21524 = G__21538;
i__21525 = G__21539;
continue;
} else {
var vec__21527 = cljs.core.first.call(null,seq__21522__$1);
var k = cljs.core.nth.call(null,vec__21527,(0),null);
var v = cljs.core.nth.call(null,vec__21527,(1),null);
f.call(null,v,k);

var G__21540 = cljs.core.next.call(null,seq__21522__$1);
var G__21541 = null;
var G__21542 = (0);
var G__21543 = (0);
seq__21522 = G__21540;
chunk__21523 = G__21541;
count__21524 = G__21542;
i__21525 = G__21543;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21521,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21521;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args21544 = [];
var len__20924__auto___21550 = arguments.length;
var i__20925__auto___21551 = (0);
while(true){
if((i__20925__auto___21551 < len__20924__auto___21550)){
args21544.push((arguments[i__20925__auto___21551]));

var G__21552 = (i__20925__auto___21551 + (1));
i__20925__auto___21551 = G__21552;
continue;
} else {
}
break;
}

var G__21546 = args21544.length;
switch (G__21546) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21544.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit21547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit21547 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta21548){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta21548 = meta21548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit21547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21549,meta21548__$1){
var self__ = this;
var _21549__$1 = this;
return (new cognitect.transit.t_cognitect$transit21547(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta21548__$1));
});

cognitect.transit.t_cognitect$transit21547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21549){
var self__ = this;
var _21549__$1 = this;
return self__.meta21548;
});

cognitect.transit.t_cognitect$transit21547.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21547.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21547.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21547.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta21548","meta21548",-800779808,null)], null);
});

cognitect.transit.t_cognitect$transit21547.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit21547.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit21547";

cognitect.transit.t_cognitect$transit21547.cljs$lang$ctorPrWriter = (function (this__20464__auto__,writer__20465__auto__,opt__20466__auto__){
return cljs.core._write.call(null,writer__20465__auto__,"cognitect.transit/t_cognitect$transit21547");
});

cognitect.transit.__GT_t_cognitect$transit21547 = (function cognitect$transit$__GT_t_cognitect$transit21547(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21548){
return (new cognitect.transit.t_cognitect$transit21547(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21548));
});

}

return (new cognitect.transit.t_cognitect$transit21547(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__19866__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__19866__auto__)){
return or__19866__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map