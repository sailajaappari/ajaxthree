// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
reagent.ratom._STAR_ratom_context_STAR_;
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
}
reagent.ratom.running = (function reagent$ratom$running(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.ratom._running) : cljs.core.deref.call(null,reagent.ratom._running));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_27232 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_27232;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$new_DASH_value)], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$meta,cljs.core.cst$sym$validator,cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__20461__auto__,writer__20462__auto__,opt__20463__auto__){
return cljs.core._write(writer__20462__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var args27233 = [];
var len__20921__auto___27241 = arguments.length;
var i__20922__auto___27242 = (0);
while(true){
if((i__20922__auto___27242 < len__20921__auto___27241)){
args27233.push((arguments[i__20922__auto___27242]));

var G__27243 = (i__20922__auto___27242 + (1));
i__20922__auto___27242 = G__27243;
continue;
} else {
}
break;
}

var G__27237 = args27233.length;
switch (G__27237) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__20940__auto__ = (new cljs.core.IndexedSeq(args27233.slice((1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20940__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__27238){
var map__27239 = p__27238;
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27239):map__27239);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27239__$1,cljs.core.cst$kw$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27239__$1,cljs.core.cst$kw$validator);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq27234){
var G__27235 = cljs.core.first(seq27234);
var seq27234__$1 = cljs.core.next(seq27234);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__27235,seq27234__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);
reagent.ratom.make_reaction;

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = ((((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || (self__.ratom.cljs$core$IDeref$))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){var G__27252 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ratom) : cljs.core.deref.call(null,self__.ratom)),self__.path);
});})(this$))
;
var G__27253 = cljs.core.cst$kw$on_DASH_set;
var G__27254 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__27252,G__27253,this$){
return (function (p1__27246_SHARP_,p2__27245_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ratom,p2__27245_SHARP_) : cljs.core.reset_BANG_.call(null,self__.ratom,p2__27245_SHARP_));
});})(G__27252,G__27253,this$))
:((function (G__27252,G__27253,this$){
return (function (p1__27248_SHARP_,p2__27247_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__27247_SHARP_);
});})(G__27252,G__27253,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__27252,G__27253,G__27254) : reagent.ratom.make_reaction.call(null,G__27252,G__27253,G__27254));
})():(function (){var G__27255 = ((function (this$){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(this$))
;
var G__27256 = cljs.core.cst$kw$on_DASH_set;
var G__27257 = ((function (G__27255,G__27256,this$){
return (function (p1__27250_SHARP_,p2__27249_SHARP_){
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,p2__27249_SHARP_) : self__.ratom.call(null,self__.path,p2__27249_SHARP_));
});})(G__27255,G__27256,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__27255,G__27256,G__27257) : reagent.ratom.make_reaction.call(null,G__27255,G__27256,G__27257));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_27258 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_27258;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ratom,cljs.core.cst$sym$path,cljs.core.with_meta(cljs.core.cst$sym$reaction,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__20461__auto__,writer__20462__auto__,opt__20463__auto__){
return cljs.core._write(writer__20462__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if(((!((path == null)))?((((path.cljs$lang$protocol_mask$partition0$ & (32768))) || (path.cljs$core$IDeref$))?true:(((!path.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,path):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,path))){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if(((!((path == null)))?(((false) || (path.reagent$ratom$IReactiveAtom$))?true:(((!path.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,path):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,path))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IReactiveAtom,cljs.core.cst$sym$path)], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__19863__auto__ = ((!((src == null)))?(((false) || (src.reagent$ratom$IReactiveAtom$))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src));
if(or__19863__auto__){
return or__19863__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IReactiveAtom,cljs.core.cst$sym$src),cljs.core.list(cljs.core.cst$sym$and,cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$src),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$src))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__20518__auto__ = (((this$ == null))?null:this$);
var m__20519__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__20518__auto__)]);
if(!((m__20519__auto__ == null))){
return (m__20519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto__.call(null,this$));
} else {
var m__20519__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__20519__auto____$1 == null))){
return (m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__20518__auto__ = (((this$ == null))?null:this$);
var m__20519__auto__ = (reagent.ratom.run[goog.typeOf(x__20518__auto__)]);
if(!((m__20519__auto__ == null))){
return (m__20519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto__.call(null,this$));
} else {
var m__20519__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__20519__auto____$1 == null))){
return (m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IComputedImpl = function(){};

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((!((this$ == null))) && (!((this$.reagent$ratom$IComputedImpl$_update_watching$arity$2 == null)))){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__20518__auto__ = (((this$ == null))?null:this$);
var m__20519__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__20518__auto__)]);
if(!((m__20519__auto__ == null))){
return (m__20519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__20519__auto__.cljs$core$IFn$_invoke$arity$2(this$,derefed) : m__20519__auto__.call(null,this$,derefed));
} else {
var m__20519__auto____$1 = (reagent.ratom._update_watching["_"]);
if(!((m__20519__auto____$1 == null))){
return (m__20519__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__20519__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,derefed) : m__20519__auto____$1.call(null,this$,derefed));
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((!((k == null))) && (!((k.reagent$ratom$IComputedImpl$_handle_change$arity$4 == null)))){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__20518__auto__ = (((k == null))?null:k);
var m__20519__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__20518__auto__)]);
if(!((m__20519__auto__ == null))){
return (m__20519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__20519__auto__.cljs$core$IFn$_invoke$arity$4(k,sender,oldval,newval) : m__20519__auto__.call(null,k,sender,oldval,newval));
} else {
var m__20519__auto____$1 = (reagent.ratom._handle_change["_"]);
if(!((m__20519__auto____$1 == null))){
return (m__20519__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__20519__auto____$1.cljs$core$IFn$_invoke$arity$4(k,sender,oldval,newval) : m__20519__auto____$1.call(null,k,sender,oldval,newval));
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IComputedImpl$_peek_at$arity$1 == null)))){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__20518__auto__ = (((this$ == null))?null:this$);
var m__20519__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__20518__auto__)]);
if(!((m__20519__auto__ == null))){
return (m__20519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto__.call(null,this$));
} else {
var m__20519__auto____$1 = (reagent.ratom._peek_at["_"]);
if(!((m__20519__auto____$1 == null))){
return (m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__20519__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__20519__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IComputedImpl}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__19851__auto__)){
return !((oldval === newval));
} else {
return and__19851__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__19863__auto__ = self__.auto_run;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__27267_27286 = cljs.core.seq(derefed);
var chunk__27268_27287 = null;
var count__27269_27288 = (0);
var i__27270_27289 = (0);
while(true){
if((i__27270_27289 < count__27269_27288)){
var w_27290 = chunk__27268_27287.cljs$core$IIndexed$_nth$arity$2(null,i__27270_27289);
if(cljs.core.contains_QMARK_(self__.watching,w_27290)){
} else {
cljs.core.add_watch(w_27290,this$__$1,reagent.ratom._handle_change);
}

var G__27291 = seq__27267_27286;
var G__27292 = chunk__27268_27287;
var G__27293 = count__27269_27288;
var G__27294 = (i__27270_27289 + (1));
seq__27267_27286 = G__27291;
chunk__27268_27287 = G__27292;
count__27269_27288 = G__27293;
i__27270_27289 = G__27294;
continue;
} else {
var temp__4653__auto___27295 = cljs.core.seq(seq__27267_27286);
if(temp__4653__auto___27295){
var seq__27267_27296__$1 = temp__4653__auto___27295;
if(cljs.core.chunked_seq_QMARK_(seq__27267_27296__$1)){
var c__20666__auto___27297 = cljs.core.chunk_first(seq__27267_27296__$1);
var G__27298 = cljs.core.chunk_rest(seq__27267_27296__$1);
var G__27299 = c__20666__auto___27297;
var G__27300 = cljs.core.count(c__20666__auto___27297);
var G__27301 = (0);
seq__27267_27286 = G__27298;
chunk__27268_27287 = G__27299;
count__27269_27288 = G__27300;
i__27270_27289 = G__27301;
continue;
} else {
var w_27302 = cljs.core.first(seq__27267_27296__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_27302)){
} else {
cljs.core.add_watch(w_27302,this$__$1,reagent.ratom._handle_change);
}

var G__27303 = cljs.core.next(seq__27267_27296__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27267_27286 = G__27303;
chunk__27268_27287 = G__27304;
count__27269_27288 = G__27305;
i__27270_27289 = G__27306;
continue;
}
} else {
}
}
break;
}

var seq__27271_27307 = cljs.core.seq(self__.watching);
var chunk__27272_27308 = null;
var count__27273_27309 = (0);
var i__27274_27310 = (0);
while(true){
if((i__27274_27310 < count__27273_27309)){
var w_27311 = chunk__27272_27308.cljs$core$IIndexed$_nth$arity$2(null,i__27274_27310);
if(cljs.core.contains_QMARK_(derefed,w_27311)){
} else {
cljs.core.remove_watch(w_27311,this$__$1);
}

var G__27312 = seq__27271_27307;
var G__27313 = chunk__27272_27308;
var G__27314 = count__27273_27309;
var G__27315 = (i__27274_27310 + (1));
seq__27271_27307 = G__27312;
chunk__27272_27308 = G__27313;
count__27273_27309 = G__27314;
i__27274_27310 = G__27315;
continue;
} else {
var temp__4653__auto___27316 = cljs.core.seq(seq__27271_27307);
if(temp__4653__auto___27316){
var seq__27271_27317__$1 = temp__4653__auto___27316;
if(cljs.core.chunked_seq_QMARK_(seq__27271_27317__$1)){
var c__20666__auto___27318 = cljs.core.chunk_first(seq__27271_27317__$1);
var G__27319 = cljs.core.chunk_rest(seq__27271_27317__$1);
var G__27320 = c__20666__auto___27318;
var G__27321 = cljs.core.count(c__20666__auto___27318);
var G__27322 = (0);
seq__27271_27307 = G__27319;
chunk__27272_27308 = G__27320;
count__27273_27309 = G__27321;
i__27274_27310 = G__27322;
continue;
} else {
var w_27323 = cljs.core.first(seq__27271_27317__$1);
if(cljs.core.contains_QMARK_(derefed,w_27323)){
} else {
cljs.core.remove_watch(w_27323,this$__$1);
}

var G__27324 = cljs.core.next(seq__27271_27317__$1);
var G__27325 = null;
var G__27326 = (0);
var G__27327 = (0);
seq__27271_27307 = G__27324;
chunk__27272_27308 = G__27325;
count__27273_27309 = G__27326;
i__27274_27310 = G__27327;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_27275 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_27275;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__27276_27328 = cljs.core.seq(self__.watching);
var chunk__27277_27329 = null;
var count__27278_27330 = (0);
var i__27279_27331 = (0);
while(true){
if((i__27279_27331 < count__27278_27330)){
var w_27332 = chunk__27277_27329.cljs$core$IIndexed$_nth$arity$2(null,i__27279_27331);
cljs.core.remove_watch(w_27332,this$__$1);

var G__27333 = seq__27276_27328;
var G__27334 = chunk__27277_27329;
var G__27335 = count__27278_27330;
var G__27336 = (i__27279_27331 + (1));
seq__27276_27328 = G__27333;
chunk__27277_27329 = G__27334;
count__27278_27330 = G__27335;
i__27279_27331 = G__27336;
continue;
} else {
var temp__4653__auto___27337 = cljs.core.seq(seq__27276_27328);
if(temp__4653__auto___27337){
var seq__27276_27338__$1 = temp__4653__auto___27337;
if(cljs.core.chunked_seq_QMARK_(seq__27276_27338__$1)){
var c__20666__auto___27339 = cljs.core.chunk_first(seq__27276_27338__$1);
var G__27340 = cljs.core.chunk_rest(seq__27276_27338__$1);
var G__27341 = c__20666__auto___27339;
var G__27342 = cljs.core.count(c__20666__auto___27339);
var G__27343 = (0);
seq__27276_27328 = G__27340;
chunk__27277_27329 = G__27341;
count__27278_27330 = G__27342;
i__27279_27331 = G__27343;
continue;
} else {
var w_27344 = cljs.core.first(seq__27276_27338__$1);
cljs.core.remove_watch(w_27344,this$__$1);

var G__27345 = cljs.core.next(seq__27276_27338__$1);
var G__27346 = null;
var G__27347 = (0);
var G__27348 = (0);
seq__27276_27328 = G__27345;
chunk__27277_27329 = G__27346;
count__27278_27330 = G__27347;
i__27279_27331 = G__27348;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(oldval,newval) : self__.on_set.call(null,oldval,newval));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__27280 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__27280) : f__$1.call(null,G__27280));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__27281 = reagent.ratom._peek_at(a__$1);
var G__27282 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__27281,G__27282) : f__$1.call(null,G__27281,G__27282));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__27283 = reagent.ratom._peek_at(a__$1);
var G__27284 = x;
var G__27285 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__27283,G__27284,G__27285) : f__$1.call(null,G__27283,G__27284,G__27285));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f__$1.call(null,key,this$__$1,oldval,newval));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__19863__auto__ = self__.auto_run;
if(cljs.core.truth_(or__19863__auto__)){
return or__19863__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_27349 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((oldstate_27349 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_27349,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$dirty_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$active_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watching,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$auto_DASH_run,cljs.core.cst$sym$on_DASH_set,cljs.core.cst$sym$on_DASH_dispose], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__20461__auto__,writer__20462__auto__,opt__20463__auto__){
return cljs.core._write(writer__20462__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__20928__auto__ = [];
var len__20921__auto___27355 = arguments.length;
var i__20922__auto___27356 = (0);
while(true){
if((i__20922__auto___27356 < len__20921__auto___27355)){
args__20928__auto__.push((arguments[i__20922__auto___27356]));

var G__27357 = (i__20922__auto___27356 + (1));
i__20922__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__20929__auto__ = ((((1) < args__20928__auto__.length))?(new cljs.core.IndexedSeq(args__20928__auto__.slice((1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20929__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__27352){
var map__27353 = p__27352;
var map__27353__$1 = ((((!((map__27353 == null)))?((((map__27353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27353):map__27353);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.cst$kw$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.cst$kw$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.cst$kw$on_DASH_dispose);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27353__$1,cljs.core.cst$kw$derefed);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq27350){
var G__27351 = cljs.core.first(seq27350);
var seq27350__$1 = cljs.core.next(seq27350);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__27351,seq27350__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__19851__auto__ = self__.changed;
if(cljs.core.truth_(and__19851__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__19851__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$callback,cljs.core.with_meta(cljs.core.cst$sym$changed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__20461__auto__,writer__20462__auto__,opt__20463__auto__){
return cljs.core._write(writer__20462__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
