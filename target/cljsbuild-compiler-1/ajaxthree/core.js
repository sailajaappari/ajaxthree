// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('ajaxthree.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_();
ajaxthree.core.root_component = (function ajaxthree$core$root_component(){
var loaded_stuff = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/load-stuff",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,((function (loaded_stuff){
return (function (data){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(loaded_stuff,data) : cljs.core.reset_BANG_.call(null,loaded_stuff,data));
});})(loaded_stuff))
], null)], 0));

return ((function (loaded_stuff){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Hello world!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Loaded stuff in the background:",[cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(loaded_stuff) : cljs.core.deref.call(null,loaded_stuff)))].join('')], null)], null);
});
;})(loaded_stuff))
});
ajaxthree.core.main = (function ajaxthree$core$main(){
var G__27564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.root_component], null);
var G__27565 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__27564,G__27565) : reagent.core.render_component.call(null,G__27564,G__27565));
});
goog.exportSymbol('ajaxthree.core.main', ajaxthree.core.main);
