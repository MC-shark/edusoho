webpackJsonp([13],{P8if:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("jW8y"),a=i("gMS5"),o=i("NYxO"),c=i("Du/2"),u={components:{Directory:r.a,DetailHead:a.a},computed:n()({},Object(o.mapState)("course",{details:function(e){return e.details}}),Object(o.mapState)({isLoading:function(e){return e.isLoading}})),beforeRouteLeave:function(e,t,i){this.$store.commit("course/"+c.k,{sourceType:"img"}),i()}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail try"},[this.isLoading?t("e-loading"):this._e(),this._v(" "),t("detail-head",{attrs:{courseSet:this.details.courseSet}}),this._v(" "),t("directory",{attrs:{hiddeTitle:!0,courseItems:this.details.courseItems}})],1)},staticRenderFns:[]},d=i("VU/8")(u,l,!1,null,null,null);t.default=d.exports},gMS5:function(e,t,i){"use strict";var s=i("//Fk"),n=i.n(s),r=i("Xxa5"),a=i.n(r),o=i("woOf"),c=i.n(o),u=(i("eqfM"),i("/QYm")),l=i("exGp"),d=i.n(l),p=i("Dd8w"),v=i.n(p),y=i("PirY"),m=i.n(y),h=i("NYxO"),f=i("gyMJ"),_={components:{countDown:i("lpC9").a},data:function(){return{isEncryptionPlus:!1,mediaOpts:{},isCoverOpen:!1,isPlaying:!1,player:null,counting:!0,isEmpty:!1}},props:{courseSet:{type:Object,default:function(){return{}}},seckillActivities:{type:Object,default:null}},computed:v()({},Object(h.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}}),{textContent:function(){return this.mediaOpts.text}}),watch:{taskId:function(e,t){e>0&&t>0&&this.initHead()}},created:function(){this.initHead()},methods:{initHead:function(){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())},viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return!this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return d()(a.a.mark(function t(){var i,s,n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),t.next=3,f.a.getMedia(e.getParams()).catch(function(t){var i=Number(e.details.id);4040101==t.code&&e.$router.push({name:"login",query:{redirect:"/course/"+i}}),u.a.fail(t.message)});case 3:if(i=t.sent){t.next=6;break}return t.abrupt("return");case 6:if("video"!==i.mediaType||i.media.url){t.next=9;break}return Object(u.a)("课程内容准备中，请稍候查看"),t.abrupt("return");case 9:if(s=i.media.timeLimit,e.isEncryptionPlus=i.media.isEncryptionPlus,!i.media.isEncryptionPlus){t.next=14;break}return Object(u.a)("该浏览器不支持云视频播放，请下载App"),t.abrupt("return");case 14:n=i.media,r={id:"course-detail__head--video",user:e.user,playlist:n.url,autoplay:!0,disableFullscreen:"audio"===e.sourceType,isAudio:"audio"===e.sourceType,pluck:{timelimit:s},resId:n.resId,disableDataUpload:!0},e.mediaOpts=c()({text:i.media.text},r),e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(t){e.$store.commit("UPDATE_LOADING_STATUS",!1);var i=new t(r);i.on("playing",function(){e.isPlaying=!0}),i.on("paused",function(){e.isPlaying=!1}),e.player=i});case 19:case"end":return t.stop()}},t,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new n.a(function(t,i){m()(e,function(e){e&&i(e),t(window.VideoPlayerSDK)})})}return n.a.resolve(window.VideoPlayerSDK)},expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"course-detail__head"},[e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus&&!e.isCoverOpen,expression:"['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen"}],staticClass:"course-detail__nav--btn",on:{click:e.viewAudioDoc}},[e._v("\n    文稿\n  ")]):e._e(),e._v(" "),e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:e.isCoverOpen}},[i("div",{staticClass:"media-text",domProps:{innerHTML:e._s(e.textContent)}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:e.handlePlayer}},[i("i",{staticClass:"h5-icon",class:e.isPlaying?"h5-icon-zanting":"h5-icon-bofang"})]),e._v(" "),i("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:e.hideAudioDoc}},[i("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"img"===e.sourceType||e.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[e.courseSet.cover?i("img",{attrs:{src:e.courseSet.cover.large,alt:""}}):e._e(),e._v(" "),e.seckillActivities&&"ongoing"===e.seckillActivities.status&&e.counting&&!e.isEmpty?i("countDown",{attrs:{activity:e.seckillActivities},on:{timesUp:e.expire,sellOut:e.sellOut}}):e._e()],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},P=i("VU/8")(_,w,!1,null,null,null);t.a=P.exports}});