// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajaxthree.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
ajaxthree.core.loaded_stuff = reagent.core.atom.call(null,null);
ajaxthree.core.contacts = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contact1","Contact2","Contact3"], null));
ajaxthree.core.handleClick = (function ajaxthree$core$handleClick(evt){
return ajax.core.GET.call(null,"/get-clicks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
return cljs.core.reset_BANG_.call(null,ajaxthree.core.loaded_stuff,cljs.core.get.call(null,data,new cljs.core.Keyword(null,"message","message",-406056002)));
})], null));
});
ajaxthree.core.add_contact = (function ajaxthree$core$add_contact(c){
return cljs.core.swap_BANG_.call(null,ajaxthree.core.contacts,cljs.core.conj,c);
});
ajaxthree.core.new_contact = (function ajaxthree$core$new_contact(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Contact Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__22101_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__22101_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
var temp__4653__auto__ = cljs.core.deref.call(null,val);
if(cljs.core.truth_(temp__4653__auto__)){
var c = temp__4653__auto__;
ajaxthree.core.add_contact_BANG_.call(null,c);

return cljs.core.reset_BANG_.call(null,val,"");
} else {
return null;
}
});})(val))
], null),"Add"], null)], null);
});
;})(val))
});
ajaxthree.core.contact = (function ajaxthree$core$contact(c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(c)].join('')], null)], null);
});
ajaxthree.core.contact_list = (function ajaxthree$core$contact_list(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Contact List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20638__auto__ = (function ajaxthree$core$contact_list_$_iter__22106(s__22107){
return (new cljs.core.LazySeq(null,(function (){
var s__22107__$1 = s__22107;
while(true){
var temp__4653__auto__ = cljs.core.seq.call(null,s__22107__$1);
if(temp__4653__auto__){
var s__22107__$2 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22107__$2)){
var c__20636__auto__ = cljs.core.chunk_first.call(null,s__22107__$2);
var size__20637__auto__ = cljs.core.count.call(null,c__20636__auto__);
var b__22109 = cljs.core.chunk_buffer.call(null,size__20637__auto__);
if((function (){var i__22108 = (0);
while(true){
if((i__22108 < size__20637__auto__)){
var c = cljs.core._nth.call(null,c__20636__auto__,i__22108);
cljs.core.chunk_append.call(null,b__22109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.contact,c], null));

var G__22110 = (i__22108 + (1));
i__22108 = G__22110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22109),ajaxthree$core$contact_list_$_iter__22106.call(null,cljs.core.chunk_rest.call(null,s__22107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22109),null);
}
} else {
var c = cljs.core.first.call(null,s__22107__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.contact,c], null),ajaxthree$core$contact_list_$_iter__22106.call(null,cljs.core.rest.call(null,s__22107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20638__auto__.call(null,cljs.core.deref.call(null,ajaxthree.core.contacts));
})()], null)], null);
});
});
ajaxthree.core.root_component = (function ajaxthree$core$root_component(){
ajax.core.GET.call(null,"/load-stuff",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
return cljs.core.reset_BANG_.call(null,ajaxthree.core.loaded_stuff,data);
})], null));

return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello world! How r u"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Loaded stuff in the background:",[cljs.core.str(cljs.core.deref.call(null,ajaxthree.core.loaded_stuff))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),ajaxthree.core.handleClick], null),"Click Me"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.new_contact], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Contact List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20638__auto__ = (function ajaxthree$core$root_component_$_iter__22115(s__22116){
return (new cljs.core.LazySeq(null,(function (){
var s__22116__$1 = s__22116;
while(true){
var temp__4653__auto__ = cljs.core.seq.call(null,s__22116__$1);
if(temp__4653__auto__){
var s__22116__$2 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22116__$2)){
var c__20636__auto__ = cljs.core.chunk_first.call(null,s__22116__$2);
var size__20637__auto__ = cljs.core.count.call(null,c__20636__auto__);
var b__22118 = cljs.core.chunk_buffer.call(null,size__20637__auto__);
if((function (){var i__22117 = (0);
while(true){
if((i__22117 < size__20637__auto__)){
var c = cljs.core._nth.call(null,c__20636__auto__,i__22117);
cljs.core.chunk_append.call(null,b__22118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.contact,c], null));

var G__22119 = (i__22117 + (1));
i__22117 = G__22119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22118),ajaxthree$core$root_component_$_iter__22115.call(null,cljs.core.chunk_rest.call(null,s__22116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22118),null);
}
} else {
var c = cljs.core.first.call(null,s__22116__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.contact,c], null),ajaxthree$core$root_component_$_iter__22115.call(null,cljs.core.rest.call(null,s__22116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20638__auto__.call(null,cljs.core.deref.call(null,ajaxthree.core.contacts));
})()], null)], null)], null);
});
});
ajaxthree.core.main = (function ajaxthree$core$main(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajaxthree.core.root_component], null),document.getElementById("app"));
});
goog.exportSymbol('ajaxthree.core.main', ajaxthree.core.main);

//# sourceMappingURL=core.js.map