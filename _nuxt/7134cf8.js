(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},200:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("0aa10238",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("b7a40b86",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("f99eb718",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("1b7833da",content,!0,{sourceMap:!1})},204:function(t,e,n){t.exports=n.p+"img/1.87a0de3.jpg"},205:function(t,e,n){t.exports=n.p+"img/bg-qna.16a0812.jpg"},206:function(t,e,n){"use strict";n.r(e);n(46);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-box"},[e("img",{attrs:{src:n(237),alt:"썸네일"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"start-subtitle"},[this._v("\n        심리테스트로 알아보는 나!"),e("br"),this._v("\n        내가 커피라면?"),e("br"),this._v(" "),e("sub",[this._v("with 커피창고")])])}],o={methods:{goStart:function(){this.$emit("goStart")}}},c=(n(238),n(26)),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[n("div",{staticClass:"start-card"},[t._m(0),t._v(" "),n("div",{staticClass:"start-textbox"},[n("h1",{staticClass:"start-title"},[t._v("\n        커피 유형 테스트\n      ")]),t._v(" "),t._m(1),t._v(" "),n("button",{staticClass:"btn start-btn",attrs:{type:"button"},on:{click:t.goStart}},[t._v("\n        START\n      ")])])])])}),r,!1,null,"28d65eaf",null).exports,f=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-box"},[e("img",{staticClass:"qna-img-1",attrs:{src:n(204),alt:"질문지 이미지"}}),this._v(" "),e("img",{staticClass:"qna-img-2",attrs:{src:n(241),alt:"질문지 이미지"}}),this._v(" "),e("img",{staticClass:"qna-img-3",attrs:{src:n(242),alt:"질문지 이미지"}}),this._v(" "),e("img",{staticClass:"qna-img-4",attrs:{src:n(243),alt:"질문지 이미지"}}),this._v(" "),e("img",{staticClass:"qna-img-5",attrs:{src:n(244),alt:"질문지 이미지"}})])}],l=(n(32),n(33),n(34),n(245)),x={props:["propsdata"],data:function(){return{questionList:l.map((function(t){return t.q})),answerList:l.map((function(t){return t.a})),sum:0}},mounted:function(){setTimeout((function(){document.querySelector(".qna-img-1").style.opacity=1,document.querySelector(".qna").className="qna"}),0)},methods:{select:function(t){var e=this;this.$emit("select",t+1),document.querySelector(".answer-box").childNodes.forEach((function(t){return t.disabled=!0})),5!==this.propsdata&&setTimeout((function(){document.querySelector(".qna-img-".concat(e.propsdata-1)).className="qna-img-".concat(e.propsdata-1),document.querySelector(".qna-img-".concat(e.propsdata)).className="qna-img-".concat(e.propsdata," visible"),document.querySelector(".qna-card").className="qna-card bg-".concat(e.propsdata),document.querySelector(".answer-box").childNodes.forEach((function(t){return t.disabled=!1}))}),400)}}},m=(n(246),{props:["sum"],mounted:function(){this.sum<8?this.$router.push("/result/Americano"):this.sum<11?this.$router.push("./result/Espresso"):this.sum<14?this.$router.push("./result/Latte"):this.sum<17?this.$router.push("./result/RoomCoffee"):this.$router.push("./result/Frappuccino")}}),h={components:{Start:d,Qna:Object(c.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qna invisible"},[n("div",{staticClass:"qna-card bg-1"},[t._m(0),t._v(" "),n("div",{staticClass:"qna-textbox"},[n("h4",{staticClass:"question"},[t._v("\n        "+t._s(t.propsdata)+". "+t._s(this.questionList[t.propsdata-1])+"\n      ")]),t._v(" "),n("div",{staticClass:"answer-box"},t._l(t.answerList[t.propsdata-1],(function(e,r){return n("button",{key:r,staticClass:"answer",on:{click:function(e){return t.select(r)}}},[t._v("\n          "+t._s(r+1)+") "+t._s(e)+"\n        ")])})),0)])])])}),f,!1,null,"a20ff8a4",null).exports,Result:Object(c.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports},data:function(){return{step:0,sum:0,qIndex:1}},methods:{goStart:function(){var t=this,e=document.querySelector(".start");document.querySelector(".start-btn").disabled=!0,e.className+=" fade-out",setTimeout((function(){t.step=1}),500),setTimeout((function(){document.querySelector(".qna").className+=" fade-in"}),500)},select:function(t){var e=this;document.querySelector(".qna").className+=" fade-out",this.sum+=t,setTimeout((function(){6!=++e.qIndex?document.querySelector(".qna").className="qna fade-in":e.step=2}),400)}},computed:{goStep:function(){switch(this.step){case 0:return"Start";case 1:return"Qna";case 2:return"Result"}}}},v=(n(248),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e(this.goStep,{tag:"component",attrs:{propsdata:this.qIndex,sum:this.sum},on:{goStart:this.goStart,select:this.select}}),this._v(" "),e("img",{staticStyle:{display:"none"},attrs:{src:n(204)}})],1)}),[],!1,null,"d67e347e",null));e.default=v.exports},237:function(t,e,n){t.exports=n.p+"img/main-thumbnail.cbb995c.jpg"},238:function(t,e,n){"use strict";var r=n(200);n.n(r).a},239:function(t,e,n){var r=n(73),o=n(189),c=n(240);e=r(!1);var d=o(c);e.push([t.i,"*[data-v-28d65eaf]{-webkit-transition:all .3s;transition:all .3s}.start[data-v-28d65eaf]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;min-height:100vh;background:url("+d+");background-size:cover}.start-card[data-v-28d65eaf]{-ms-flex-item-align:center;align-self:center;background:rgba(255,251,243,.9);border-radius:20px;width:260px;height:480px}.img-box[data-v-28d65eaf]{width:260px;background:#fff;height:200px}.img-box[data-v-28d65eaf],img[data-v-28d65eaf]{border-radius:20px 20px 0 0}img[data-v-28d65eaf]{max-width:100%;-o-object-fit:cover;object-fit:cover;margin:10px 0}.start-textbox[data-v-28d65eaf]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:230px;text-align:center}.start-textbox>*[data-v-28d65eaf]{margin:15px 20px}.start-title[data-v-28d65eaf]{font-size:1.5rem}.start-subtitle[data-v-28d65eaf]{font-size:.9rem}.start-btn[data-v-28d65eaf]{-ms-flex-item-align:center;align-self:center;width:70px;height:35px;font-size:.75rem;background:#7ec0ee;border:2px solid #fff;border-radius:20px;-webkit-box-shadow:0 0 0 2px #7ec0ee;box-shadow:0 0 0 2px #7ec0ee;-webkit-transition:all .3s;transition:all .3s}.start-btn[data-v-28d65eaf]:hover{background:#56adeb;-webkit-box-shadow:0 0 0 2px #56adeb;box-shadow:0 0 0 2px #56adeb}@media (min-width:375px){.start-card[data-v-28d65eaf]{border-radius:25px;width:310px;height:600px}.img-box[data-v-28d65eaf]{width:310px;height:250px}.img-box[data-v-28d65eaf],img[data-v-28d65eaf]{border-radius:25px 25px 0 0}img[data-v-28d65eaf]{margin:15px 0}.start-textbox[data-v-28d65eaf]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:290px}.start-textbox[data-v-28d65eaf]>:first-child{margin-top:50px}.start-title[data-v-28d65eaf]{font-size:1.7rem}.start-subtitle[data-v-28d65eaf]{font-size:1.1rem}.start-btn[data-v-28d65eaf]{width:90px;height:40px;font-size:.9rem}}@media (min-width:768px){.start-card[data-v-28d65eaf]{border-radius:30px;width:500px;height:700px}.img-box[data-v-28d65eaf]{width:500px;height:320px}.img-box[data-v-28d65eaf],img[data-v-28d65eaf]{border-radius:30px 30px 0 0}.start-textbox[data-v-28d65eaf]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:360px}.start-textbox[data-v-28d65eaf]>:first-child{margin-top:80px}.start-title[data-v-28d65eaf]{font-size:2.2rem}.start-subtitle[data-v-28d65eaf]{font-size:1.2rem}.start-btn[data-v-28d65eaf]{width:120px;height:50px;border-radius:25px;font-size:1.1rem;border:2.5px solid #fff;-webkit-box-shadow:0 0 0 2.5px #7ec0ee;box-shadow:0 0 0 2.5px #7ec0ee}.start-btn[data-v-28d65eaf]:hover{-webkit-box-shadow:0 0 0 2.5px #56adeb;box-shadow:0 0 0 2.5px #56adeb}}",""]),t.exports=e},240:function(t,e,n){t.exports=n.p+"img/bg-start.742ad96.jpg"},241:function(t,e,n){t.exports=n.p+"img/2.f0b2137.jpg"},242:function(t,e,n){t.exports=n.p+"img/3.81db660.jpg"},243:function(t,e,n){t.exports=n.p+"img/4.c65de48.jpg"},244:function(t,e,n){t.exports=n.p+"img/5.aeb2a55.jpg"},245:function(t){t.exports=JSON.parse('[{"q":"정신없을 한 주의 시작 월요일!\\n카페인 충전을 위해 자연스레 커피창고 앱을 켜고 제일 먼저 눌러보는 것은?","a":["이벤트","추천 커피","신상품","리얼후기"]},{"q":"오늘따라 커피의 향이 기가 막히네요.\\n당신은 이 커피를 누구와 함께할까요?","a":["혼자 좋아하는 영화를 보며 느긋한 커피타임을 보내고 싶어요","가족과 함께 식사 후 디저트 타임을 가지고 싶어요","애인과 드라이브하는 차 안에서 음미하고 싶어요","함께 일하는 직장 동료들과 함께하고 싶어요"]},{"q":"이것저것 하다 보니 어느덧 10시, 이제 잠을 청해야 하는 당신.\\n잠들기 전에 마지막으로 하는 것은 무엇인가요?","a":["내일의 날씨를 확인한다","밀린 인스타를 확인한다","내일 아침 커피와 함께 할 브런치 메뉴를 찾아본다","숙면에 좋은 음악을 틀고 잠을 청한다"]},{"q":"눈 깜짝할 사이에 행복한 주말 아침!\\n커피 한 잔으로 주말을 시작하는 당신의 눈에 가장 먼저 들어오는 것은 무엇인가요?","a":["충전불이 깜박이는 휴대폰","아침 해가 따사로운 창밖 풍경","전날 아무렇게나 벗어놓은 옷가지","밥 달라고 낑낑대는 강아지"]},{"q":"한가로운 주말 취미 생활과 커피 한 잔에 곁들일 음악을 고른다면?","a":["영원한 오빠 나훈아의 \'잡초\'","글로벌 아이돌 BTS의 \'다이너마이트\'","뮤지컬 오페라의 유령 ost","클래식의 아버지 바흐의 \'G선상의 아리아\'"]}]')},246:function(t,e,n){"use strict";var r=n(201);n.n(r).a},247:function(t,e,n){var r=n(73),o=n(189),c=n(205);e=r(!1);var d=o(c);e.push([t.i,"*[data-v-a20ff8a4]{-webkit-transition:all .3s;transition:all .3s}.qna[data-v-a20ff8a4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;min-height:100vh;background:url("+d+") rgba(182,171,136,.85);background-size:contain;text-align:center}.invisible[data-v-a20ff8a4]{opacity:0}.qna-card[data-v-a20ff8a4]{-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:center;align-content:center;border-radius:20px;width:260px;height:480px}.img-box[data-v-a20ff8a4]{position:relative;width:260px;height:200px}.img-box[data-v-a20ff8a4],img[data-v-a20ff8a4]{border-radius:20px 20px 0 0}img[data-v-a20ff8a4]{position:absolute;top:0;left:0;opacity:0;max-width:100%;-o-object-fit:cover;object-fit:cover;-webkit-transition:all .3s;transition:all .3s}.visible[data-v-a20ff8a4]{opacity:1}.qna-textbox[data-v-a20ff8a4]{z-index:10;-ms-flex-item-align:center;align-self:center;background:#fffcf5;border-radius:15px;width:220px;height:240px;margin-top:20px;padding:20px}.question[data-v-a20ff8a4]{font-size:.85rem}.answer-box[data-v-a20ff8a4]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center}.answer[data-v-a20ff8a4]{font-size:.7rem;border:none;display:block;padding:2px 0;background:transparent;cursor:pointer}@media (min-width:375px){.qna-card[data-v-a20ff8a4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:25px;width:310px;height:600px}.img-box[data-v-a20ff8a4]{width:310px;height:250px}.img-box[data-v-a20ff8a4],img[data-v-a20ff8a4]{border-radius:25px 25px 0 0}.qna-textbox[data-v-a20ff8a4]{width:270px;height:300px}.question[data-v-a20ff8a4]{font-size:1rem}.answer-box[data-v-a20ff8a4]{margin-top:30px}.answer[data-v-a20ff8a4]{font-size:.85rem}}@media (min-width:768px){.qna-card[data-v-a20ff8a4]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;border-radius:30px;width:500px;height:700px}.img-box[data-v-a20ff8a4]{width:500px;height:350px}.img-box[data-v-a20ff8a4],img[data-v-a20ff8a4]{border-radius:30px 30px 0 0}.qna-textbox[data-v-a20ff8a4]{padding:30px;margin-top:30px;width:420px;height:300px}.question[data-v-a20ff8a4]{font-size:1.2rem}.answer[data-v-a20ff8a4]{font-size:1rem;padding:4px 0}}",""]),t.exports=e},248:function(t,e,n){"use strict";var r=n(202);n.n(r).a},249:function(t,e,n){var r=n(73),o=n(189),c=n(205);e=r(!1);var d=o(c);e.push([t.i,"#wrap[data-v-d67e347e]{max-width:100%;min-height:100vh;background:url("+d+");background-size:contain}",""]),t.exports=e},250:function(t,e,n){"use strict";var r=n(203);n.n(r).a},251:function(t,e,n){(e=n(73)(!1)).push([t.i,":root{--bg-1:#d5c2b4;--bg-2:#fdae32;--bg-3:#d5c7bc;--bg-4:#d5c7bc;--bg-5:#ffe3e2}.bg-1{background:#d5c2b4;background:var(--bg-1)}.bg-2{background:#fdae32;background:var(--bg-2)}.bg-3{background:#d5c7bc;background:var(--bg-3)}.bg-4{background:#d5c7bc;background:var(--bg-4)}.bg-5{background:#ffe3e2;background:var(--bg-5)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0;display:none}}@keyframes fade-out{0%{opacity:1}to{opacity:0;display:none}}.fade-in{-webkit-animation:fade-in 1s forwards;animation:fade-in 1s forwards}.fade-out{-webkit-animation:fade-out .8s forwards;animation:fade-out .8s forwards}.btn{color:#fff;cursor:pointer}",""]),t.exports=e},257:function(t,e,n){"use strict";n.r(e);n(206);var r={},o=(n(250),n(26)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("App")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{App:n(206).default})}}]);