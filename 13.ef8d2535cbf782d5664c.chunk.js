webpackJsonp([13],{"P0/n":function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),p=s("7DMc"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"name",type:"input",templateOptions:{label:"Name (custom validation message declared in ngModule)",required:!0,maxLength:5}},{key:"ip",type:"input",templateOptions:{label:"IP Address (custom validation message through `validation` property)",required:!0,pattern:/(\d{1,3}\.){3}\d{1,3}/},validation:{messages:{pattern:function(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}}}},{key:"ip2",type:"input",templateOptions:{label:"IP Address (custom validation message through `validators` property)",required:!0},validators:{ip:{expression:function(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)},message:function(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Validation message",description:"\n              This demonstrates the different ways to define a custom validation message, globally or for a specific field.\n            ",component:o,files:[{file:"app.component.html",content:s("mPzV"),filecontent:s("VNCF")},{file:"app.component.ts",content:s("QqsB"),filecontent:s("r3MW")},{file:"app.module.ts",content:s("l9qq"),filecontent:s("m1cZ")}]}]},l=function(){},c=s("INQx"),u=s("cPG/"),i=s("OGTa"),r=s("z4JO"),m=s("WhiG"),k=s("XPYZ"),d=s("CoID"),g=s("QMRz"),f=s("SSjb"),y=s("tGRr"),h=s("qwng"),v=s("UFNd"),b=s("PV5Z"),M=s("dI39"),x=s("S3hu"),C=s("UJsg"),F=s("OiLZ"),O=s("cIfd"),w=s("njCa"),N=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,x.b,x.a)),t["\u0275did"](7,966656,null,0,C.a,[F.a,O.a,w.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,C.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,7,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var V=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,T,N)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),q=s("Xjw4"),A=s("9Sd6"),P=s("XHgV"),D=s("1T37"),I=s("+j5Y"),S=s("U/+3"),L=s("Mcof"),R=s("7u3n"),U=s("6sdf"),G=s("z7Rf"),E=s("ItHS"),j=s("OE0E"),Z=s("iLnc"),$=s("ApVT"),B=s("bkcK"),z=s("Uo70"),J=s("6GVX"),W=s("gsbp"),H=s("EPl/"),Q=s("kJ/S"),X=s("j06o"),Y=s("ZuzD"),_=s("sqmn"),K=s("255V"),nn=s("ixPN"),an=s("rK2e");function sn(n,a){return"Should have atleast "+a.templateOptions.minLength+" characters"}function tn(n,a){return"This value should be less than "+a.templateOptions.maxLength+" characters"}function pn(n,a){return"This value should be more than "+a.templateOptions.min}function on(n,a){return"This value should be less than "+a.templateOptions.max}var en=function(){},ln=s("bfOx"),cn=s("fCQL"),un=s("ByAW"),rn=s("9N4v"),mn=s("ykPx"),kn=s("nwY2"),dn=s("TqLH"),gn=s("R2dV"),fn=s("JkuO"),yn=s("BILt"),hn=s("H69Y"),vn=s("j/TD"),bn=s("daWb"),Mn=s("Dm6n"),xn=s("8F5j"),Cn=s("WIBo"),Fn=s("MjWI");s.d(a,"ConfigModuleNgFactory",function(){return On});var On=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,m.a,k.a,d.a,g.a,f.a,y.a,h.a,v.a,b.a,M.a,V]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,q.NgLocalization,q.NgLocaleLocalization,[t.LOCALE_ID,[2,q["\u0275a"]]]),t["\u0275mpd"](6144,A.b,null,[q.DOCUMENT]),t["\u0275mpd"](4608,A.c,A.c,[[2,A.b]]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](5120,D.d,D.b,[[3,D.d],t.NgZone,P.a]),t["\u0275mpd"](5120,D.g,D.f,[[3,D.g],P.a,t.NgZone]),t["\u0275mpd"](4608,I.i,I.i,[D.d,D.g,t.NgZone,q.DOCUMENT]),t["\u0275mpd"](5120,I.e,I.j,[[3,I.e],q.DOCUMENT]),t["\u0275mpd"](4608,I.h,I.h,[D.g,q.DOCUMENT]),t["\u0275mpd"](5120,I.f,I.m,[[3,I.f],q.DOCUMENT]),t["\u0275mpd"](4608,I.c,I.c,[I.i,I.e,t.ComponentFactoryResolver,I.h,I.f,t.ApplicationRef,t.Injector,t.NgZone,q.DOCUMENT]),t["\u0275mpd"](5120,I.k,I.l,[I.c]),t["\u0275mpd"](4608,S.k,S.k,[P.a]),t["\u0275mpd"](4608,S.j,S.j,[S.k,t.NgZone,q.DOCUMENT]),t["\u0275mpd"](136192,S.d,S.b,[[3,S.d],q.DOCUMENT]),t["\u0275mpd"](5120,S.n,S.m,[[3,S.n],[2,S.l],q.DOCUMENT]),t["\u0275mpd"](5120,S.i,S.g,[[3,S.i],t.NgZone,P.a]),t["\u0275mpd"](4608,L.d,L.d,[P.a]),t["\u0275mpd"](135680,L.a,L.a,[L.d,t.NgZone]),t["\u0275mpd"](5120,R.b,R.c,[I.c]),t["\u0275mpd"](4608,U.b,U.b,[]),t["\u0275mpd"](5120,G.d,G.a,[[3,G.d],[2,E.c],j.c,[2,q.DOCUMENT]]),t["\u0275mpd"](4608,Z.a,Z.a,[]),t["\u0275mpd"](4608,$.a,$.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,w.b,w.b,[w.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,F.a,F.a,[w.b,O.a]),t["\u0275mpd"](512,q.CommonModule,q.CommonModule,[]),t["\u0275mpd"](512,A.a,A.a,[]),t["\u0275mpd"](512,B.g,B.g,[]),t["\u0275mpd"](512,P.b,P.b,[]),t["\u0275mpd"](512,D.c,D.c,[]),t["\u0275mpd"](512,I.g,I.g,[]),t["\u0275mpd"](256,z.f,!0,[]),t["\u0275mpd"](512,z.n,z.n,[[2,z.f]]),t["\u0275mpd"](512,S.a,S.a,[]),t["\u0275mpd"](512,L.c,L.c,[]),t["\u0275mpd"](512,R.e,R.e,[]),t["\u0275mpd"](512,z.x,z.x,[]),t["\u0275mpd"](512,U.c,U.c,[]),t["\u0275mpd"](512,J.i,J.i,[]),t["\u0275mpd"](512,G.c,G.c,[]),t["\u0275mpd"](512,W.c,W.c,[]),t["\u0275mpd"](512,H.b,H.b,[]),t["\u0275mpd"](512,Q.h,Q.h,[]),t["\u0275mpd"](512,X.b,X.b,[]),t["\u0275mpd"](512,z.o,z.o,[]),t["\u0275mpd"](512,z.v,z.v,[]),t["\u0275mpd"](512,Y.b,Y.b,[]),t["\u0275mpd"](512,_.c,_.c,[]),t["\u0275mpd"](512,K.a,K.a,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,en,en,[]),t["\u0275mpd"](512,ln.r,ln.r,[[2,ln.w],[2,ln.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,R.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,Q.a,!1,[]),t["\u0275mpd"](1024,w.a,function(){return[{types:[{name:"formly-group",component:cn.a}]},{types:[{name:"input",component:un.a,wrappers:["fieldset","label"]},{name:"checkbox",component:rn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:gn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:fn.a},{name:"description",component:yn.a},{name:"validation-message",component:hn.a},{name:"fieldset",component:vn.a},{name:"addons",component:bn.a}],manipulators:[{class:Mn.a,method:"run"},{class:xn.a,method:"run"},{class:Cn.a,method:"run"}]},{types:[{name:"formly-group",component:cn.a}]},{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:sn},{name:"maxlength",message:tn},{name:"min",message:pn},{name:"max",message:on}]}]},[]),t["\u0275mpd"](1024,ln.m,function(){return[[{path:"",component:Fn.a,data:e}]]},[])])})},QqsB:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Name (custom validation message declared in ngModule)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        maxLength<span class="token punctuation" >:</span> <span class="token number" >5</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (custom validation message through `validation` property)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        pattern<span class="token punctuation" >:</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validation<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        messages<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          pattern<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>error<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip2\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (custom validation message through `validators` property)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        ip<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>c<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>c<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>error<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},VNCF:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},l9qq:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >minlengthValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`Should have atleast </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>minLength<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > characters`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >maxlengthValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be less than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>maxLength<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > characters`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >minValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be more than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>min<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >maxValidationMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`This value should be less than </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>max<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'minlength\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> minlengthValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'maxlength\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> maxlengthValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'min\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> minValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'max\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> maxValidationMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},m1cZ:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\nexport function minlengthValidationMessage(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nexport function maxlengthValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.maxLength} characters`;\n}\n\nexport function minValidationMessage(err, field) {\n  return `This value should be more than ${field.templateOptions.min}`;\n}\n\nexport function maxValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.max}`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessage },\n        { name: 'maxlength', message: maxlengthValidationMessage },\n        { name: 'min', message: minValidationMessage },\n        { name: 'max', message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},mPzV:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},r3MW:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'name',\n      type: 'input',\n      templateOptions: {\n        label: 'Name (custom validation message declared in ngModule)',\n        required: true,\n        maxLength: 5,\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (custom validation message through `validation` property)',\n        required: true,\n        pattern: /(\\d{1,3}\\.){3}\\d{1,3}/,\n      },\n      validation: {\n        messages: {\n          pattern: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n    {\n      key: 'ip2',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (custom validation message through `validators` property)',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: (c) => /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}});