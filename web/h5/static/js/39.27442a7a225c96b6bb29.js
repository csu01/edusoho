webpackJsonp([39],{X0ui:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("//Fk"),n=i.n(s),a=i("mvHQ"),r=i.n(a),c=i("woOf"),o=i.n(c),u=i("fZjL"),l=i.n(u),m=(i("eqfM"),i("/QYm")),h=i("Dd8w"),d=i.n(h),f=(i("XmAh"),i("il3B")),p=(i("nsZj"),i("J1XP")),v=i("gyMJ"),g=i("NYxO"),w=i("Du/2"),_=i("acEQ"),b=i("0Otq"),T=i("xPBg"),I=i("y1zP"),y=i("mtMv"),x="",R={name:"testpaperDo",mixins:[I.a,y.a],data:function(){return{cardSeq:0,testpaper:{},testpaperResult:{},info:[],answer:{},cardShow:!1,items:{},time:null,timeMeter:null,timeWarn:!1,isHandExam:!1,localtime:null,localtimeName:null,localanswerName:null,localuseTime:null,lastAnswer:null,lastTime:null,startTime:null,backUrl:"",slideIndex:0}},created:function(){this.getData()},components:{itemBank:b.a,guidePage:_.a,vanOverlay:p.a},filters:{type:function(t){switch(t){case"single_choice":return"单选题";case"choice":return"多选题";case"essay":return"问答题";case"uncertain_choice":return"不定项选择题";case"determine":return"判断题";case"fill":return"填空题";case"material":return"材料题"}}},beforeRouteEnter:function(t,e,i){x="/"===e.fullPath?"/":"",i()},beforeRouteLeave:function(t,e,i){0==this.info.length||this.isHandExam||"doing"!=this.testpaperResult.status?i():this.submitPaper().then(function(){i()}).catch(function(){i(!1)})},beforeDestroy:function(){this.clearTime(),f.a.close()},computed:d()({},Object(g.mapState)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),watch:{answer:{handler:"saveAnswer",deep:!0}},methods:d()({},Object(g.mapActions)("course",["handExamdo"]),{getData:function(){var e=this,t=this.$route.query.testId,i=this.$route.query.targetId,s=this.$route.query.action;v.a.getExamInfo({query:{testId:t},data:{action:s,targetId:i,targetType:"task"}}).then(function(t){e.afterGetData(t)}).catch(function(t){4032207==t.code||4032204==t.code?e.toIntro():(m.a.fail(t.message),e.showResult())})},afterGetData:function(t){this.$store.commit(w.k,this.$route.query.title),this.items=t.items,this.testpaper=t.testpaper,t.testpaperResult.limitedTime=Number(t.testpaperResult.limitedTime),this.testpaperResult=t.testpaperResult,this.isDoing()||(this.localanswerName=this.user.id+"-"+this.testpaperResult.id,this.localtimeName=this.user.id+"-"+this.testpaperResult.id+"-time",this.lastTime=localStorage.getItem(this.localtimeName),this.lastAnswer=JSON.parse(localStorage.getItem(this.localanswerName)),this.formatData(t),this.interruption(),this.saveTime(),this.timer())},isDoing:function(){return"doing"!=this.testpaperResult.status&&(this.showResult(),!0)},interruption:function(){var s=this;this.$route.params.KeepDoing||this.canDoing(this.testpaperResult,this.user.id).then(function(){}).catch(function(t){var e=t.answer,i=t.endTime;s.submitExam(e,i)})},formatData:function(t){var n=this,e=t.items;l()(e).forEach(function(t){"material"!=t&&e[t].forEach(function(t){var e=n.sixType(t.type,t,n.lastAnswer);n.$set(n.answer,t.id,e.answer),n.info.push(e.item)}),"material"==t&&e[t].forEach(function(s){var a=o()({},s,{subs:""});s.subs.forEach(function(t,e){t.parentTitle=a,t.parentType=s.type,t.materialIndex=e+1;var i=n.sixType(t.type,t,n.lastAnswer);n.$set(n.answer,t.id,i.answer),n.info.push(i.item)})})})},formatStatus:function(t,e){var i=0;return("single_choice"==t||"choice"==t||"uncertain_choice"==t||"determine"==t)&&0<this.answer[e].length?i=1:"essay"==t&&""!=this.answer[e][0]?i=1:"fill"==t?i=Number(this.answer[e].some(function(t){return""!=t})):i},slideToNumber:function(t){var e=Number(t);this.cardSeq=e,this.cardShow=!1},timer:function(t){var a=this,n=0,r=60*this.testpaperResult.limitedTime*1e3;if(!(r<=0)){if(this.lastTime){var e=Math.ceil((new Date).getTime()-1e3*this.testpaperResult.beginTime);r-=e}this.timeMeter=setInterval(function(){var t=Object(T.getCountDown)(r,n++),e=t.hours,i=t.minutes,s=t.seconds;a.time=e+":"+i+":"+s,0==e&&0==i&&s<60&&(a.timeWarn=!0),(0==Number(e)&&0==Number(i)&&0==Number(s)||Number(s)<0)&&(a.clearTime(),a.submitExam())},1e3)}},clearTime:function(){clearInterval(this.timeMeter),this.timeMeter=null,clearInterval(this.localtime),this.localtime=null},submitPaper:function(){var t=this,e=0,s="题目已经做完，确认交卷吗?",a=JSON.parse(r()(this.answer));return l()(a).forEach(function(t){a[t]=a[t].filter(function(t){return""!==t}),0===a[t].length&&e++}),0<e&&(s="还有"+e+"题未做，确认交卷吗？"),new n.a(function(e,i){f.a.confirm({title:"交卷",cancelButtonText:"确认交卷",confirmButtonText:"检查一下",message:s}).then(function(){t.cardShow=!0,i()}).catch(function(){t.clearTime(),t.submitExam(a).then(function(t){e()}).catch(function(t){i()})})})},submitExam:function(e,t){var s=this;e||(e=JSON.parse(r()(this.answer)),l()(e).forEach(function(t){e[t]=e[t].filter(function(t){return""!==t})})),t=t||(new Date).getTime();var a={answer:e,resultId:this.testpaperResult.id,userId:this.user.id,endTime:t,beginTime:Number(this.testpaperResult.beginTime)};return new n.a(function(e,i){s.handExamdo(a).then(function(t){s.isHandExam=!0,e(),s.showResult()}).catch(function(t){i(),m.a.fail(t.message),s.isHandExam=!0,s.showResult()})})},saveAnswer:function(t){localStorage.setItem(this.localanswerName,r()(t))},saveTime:function(){var t=this;this.localuseTime=this.user.id+"-"+this.testpaperResult.id+"-usedTime";var e=localStorage.getItem(this.localuseTime)||0;this.localtime=setInterval(function(){t.testpaperResult.limitedTime||localStorage.setItem(t.localuseTime,++e),localStorage.setItem(t.localtimeName,(new Date).getTime())},1e3)},showResult:function(){this.$router.replace({name:"testpaperResult",query:{resultId:this.testpaperResult.id,testId:this.$route.query.testId,targetId:this.$route.query.targetId,backUrl:x}})},toIntro:function(){this.$router.replace({name:"testpaperIntro",query:{testId:this.$route.query.testId,targetId:this.$route.query.targetId}})}})},S={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"paper-swiper"},[i.isLoading?s("e-loading"):i._e(),i._v(" "),0<i.info.length?s("item-bank",{attrs:{current:i.cardSeq,info:i.info,answer:i.answer,slideIndex:i.slideIndex,all:i.info.length},on:{"update:current":function(t){i.cardSeq=t},"update:answer":function(t){i.answer=t},"update:slideIndex":function(t){i.slideIndex=t}}}):i._e(),i._v(" "),s("guide-page"),i._v(" "),s("div",{staticClass:"paper-footer"},[s("div",[s("span",{on:{click:function(t){i.cardShow=!0}}},[s("i",{staticClass:"iconfont icon-Questioncard"}),i._v("\n        题卡\n      ")])]),i._v(" "),s("div",[s("span",{on:{click:function(t){i.submitPaper()}}},[s("i",{staticClass:"iconfont icon-submit"}),i._v("\n      交卷\n      ")])])]),i._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:i.cardShow,callback:function(t){i.cardShow=t},expression:"cardShow"}},[0<i.info.length?s("div",{staticClass:"card"},[s("div",{staticClass:"card-title"},[s("div",[s("span",{staticClass:"card-finish"},[i._v("已完成")]),i._v(" "),s("span",{staticClass:"card-nofinish"},[i._v("未完成")])]),i._v(" "),s("i",{staticClass:"iconfont icon-no",on:{click:function(t){i.cardShow=!1}}})]),i._v(" "),s("div",{staticClass:"card-list"},i._l(i.items,function(t,e){return s("div",{key:e,staticClass:"card-item"},[s("div",{staticClass:"card-item-title"},[i._v(i._s(i._f("type")(e)))]),i._v(" "),"material"!=e?s("div",{staticClass:"card-item-list"},i._l(i.items[e],function(e){return s("div",{key:e.id,class:["list-cicle",1==i.formatStatus(e.type,e.id)?"cicle-active":""],on:{click:function(t){i.slideToNumber(e.seq)}}},[i._v("\n              "+i._s(e.seq)+"\n            ")])})):i._e(),i._v(" "),"material"==e?s("div",{staticClass:"card-item-list"},[i._l(i.items[e],function(t){return i._l(t.subs,function(e){return s("div",{key:e.id,class:["list-cicle",1==i.formatStatus(e.type,e.id)?"cicle-active":""],on:{click:function(t){i.slideToNumber(e.seq)}}},[i._v("\n                "+i._s(e.seq)+"\n              ")])})})],2):i._e()])}))]):i._e()]),i._v(" "),s("div",{class:["time",i.timeWarn?"warn":""]},[i._v("\n    "+i._s(i.time)+"\n  ")])],1)},staticRenderFns:[]},N=i("VU/8")(R,S,!1,null,null,null);e.default=N.exports}});