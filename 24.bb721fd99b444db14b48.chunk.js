webpackJsonp([24],{"+SSt":function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},BnyX:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      modelOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        debounce<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >default</span><span class="token punctuation" >:</span> <span class="token number" >2000</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Debounce\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},HbhV:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},biXb:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},"e+pq":function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      modelOptions: {\n        debounce: {\n          default: 2000,\n        },\n      },\n      templateOptions: {\n        label: 'Debounce',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},eVfW:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},n4QH:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),o=s("7DMc"),p=function(){function n(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"input",modelOptions:{debounce:{default:2e3}},templateOptions:{label:"Debounce"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"modelOptions",description:"",component:p,files:[{file:"app.component.html",content:s("+SSt"),filecontent:s("HbhV")},{file:"app.component.ts",content:s("BnyX"),filecontent:s("e+pq")},{file:"app.module.ts",content:s("eVfW"),filecontent:s("biXb")}]}]},l=function(){},c=s("INQx"),u=s("cPG/"),i=s("OGTa"),m=s("z4JO"),r=s("WhiG"),k=s("XPYZ"),d=s("CoID"),f=s("QMRz"),g=s("SSjb"),b=s("tGRr"),y=s("qwng"),C=s("UFNd"),v=s("PV5Z"),F=s("dI39"),M=s("S3hu"),O=s("UJsg"),w=s("OiLZ"),N=s("cIfd"),x=s("njCa"),h=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var o=!0,p=n.component;return"submit"===a&&(o=!1!==t["\u0275nov"](n,2).onSubmit(s)&&o),"reset"===a&&(o=!1!==t["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===a&&(o=!1!==p.submit()&&o),o},null,null)),t["\u0275did"](1,16384,null,0,o["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),t["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[o.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,M.b,M.a)),t["\u0275did"](7,966656,null,0,O.a,[w.a,N.a,x.b,[2,o.NgForm],[2,o.FormGroupDirective],[3,O.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,7,0,s.model,s.form,s.fields,s.options)},function(n,a){var s=a.component;n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending),n(a,9,0,!s.form.valid)})}var S=t["\u0275ccf"]("formly-app-example",p,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,h)),t["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),R=s("Xjw4"),T=s("9Sd6"),U=s("XHgV"),G=s("1T37"),E=s("+j5Y"),j=s("U/+3"),A=s("Mcof"),B=s("7u3n"),I=s("6sdf"),V=s("z7Rf"),Z=s("ItHS"),L=s("OE0E"),P=s("iLnc"),H=s("ApVT"),J=s("bkcK"),W=s("Uo70"),X=s("6GVX"),z=s("gsbp"),q=s("EPl/"),Q=s("kJ/S"),Y=s("j06o"),_=s("ZuzD"),K=s("sqmn"),$=s("255V"),nn=s("ixPN"),an=s("rK2e"),sn=function(){},tn=s("bfOx"),on=s("fCQL"),pn=s("ByAW"),en=s("9N4v"),ln=s("ykPx"),cn=s("nwY2"),un=s("TqLH"),mn=s("R2dV"),rn=s("JkuO"),kn=s("BILt"),dn=s("H69Y"),fn=s("j/TD"),gn=s("daWb"),bn=s("Dm6n"),yn=s("8F5j"),Cn=s("WIBo"),vn=s("MjWI");s.d(a,"ConfigModuleNgFactory",function(){return Fn});var Fn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,m.a,r.a,k.a,d.a,f.a,g.a,b.a,y.a,C.a,v.a,F.a,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[t.LOCALE_ID,[2,R["\u0275a"]]]),t["\u0275mpd"](6144,T.b,null,[R.DOCUMENT]),t["\u0275mpd"](4608,T.c,T.c,[[2,T.b]]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](5120,G.d,G.b,[[3,G.d],t.NgZone,U.a]),t["\u0275mpd"](5120,G.g,G.f,[[3,G.g],U.a,t.NgZone]),t["\u0275mpd"](4608,E.i,E.i,[G.d,G.g,t.NgZone,R.DOCUMENT]),t["\u0275mpd"](5120,E.e,E.j,[[3,E.e],R.DOCUMENT]),t["\u0275mpd"](4608,E.h,E.h,[G.g,R.DOCUMENT]),t["\u0275mpd"](5120,E.f,E.m,[[3,E.f],R.DOCUMENT]),t["\u0275mpd"](4608,E.c,E.c,[E.i,E.e,t.ComponentFactoryResolver,E.h,E.f,t.ApplicationRef,t.Injector,t.NgZone,R.DOCUMENT]),t["\u0275mpd"](5120,E.k,E.l,[E.c]),t["\u0275mpd"](4608,j.k,j.k,[U.a]),t["\u0275mpd"](4608,j.j,j.j,[j.k,t.NgZone,R.DOCUMENT]),t["\u0275mpd"](136192,j.d,j.b,[[3,j.d],R.DOCUMENT]),t["\u0275mpd"](5120,j.n,j.m,[[3,j.n],[2,j.l],R.DOCUMENT]),t["\u0275mpd"](5120,j.i,j.g,[[3,j.i],t.NgZone,U.a]),t["\u0275mpd"](4608,A.d,A.d,[U.a]),t["\u0275mpd"](135680,A.a,A.a,[A.d,t.NgZone]),t["\u0275mpd"](5120,B.b,B.c,[E.c]),t["\u0275mpd"](4608,I.b,I.b,[]),t["\u0275mpd"](5120,V.d,V.a,[[3,V.d],[2,Z.c],L.c,[2,R.DOCUMENT]]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,H.a,H.a,[]),t["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),t["\u0275mpd"](4608,o["\u0275i"],o["\u0275i"],[]),t["\u0275mpd"](4608,x.b,x.b,[x.a]),t["\u0275mpd"](4608,N.a,N.a,[]),t["\u0275mpd"](4608,w.a,w.a,[x.b,N.a]),t["\u0275mpd"](512,R.CommonModule,R.CommonModule,[]),t["\u0275mpd"](512,T.a,T.a,[]),t["\u0275mpd"](512,J.g,J.g,[]),t["\u0275mpd"](512,U.b,U.b,[]),t["\u0275mpd"](512,G.c,G.c,[]),t["\u0275mpd"](512,E.g,E.g,[]),t["\u0275mpd"](256,W.f,!0,[]),t["\u0275mpd"](512,W.n,W.n,[[2,W.f]]),t["\u0275mpd"](512,j.a,j.a,[]),t["\u0275mpd"](512,A.c,A.c,[]),t["\u0275mpd"](512,B.e,B.e,[]),t["\u0275mpd"](512,W.x,W.x,[]),t["\u0275mpd"](512,I.c,I.c,[]),t["\u0275mpd"](512,X.i,X.i,[]),t["\u0275mpd"](512,V.c,V.c,[]),t["\u0275mpd"](512,z.c,z.c,[]),t["\u0275mpd"](512,q.b,q.b,[]),t["\u0275mpd"](512,Q.h,Q.h,[]),t["\u0275mpd"](512,Y.b,Y.b,[]),t["\u0275mpd"](512,W.o,W.o,[]),t["\u0275mpd"](512,W.v,W.v,[]),t["\u0275mpd"](512,_.b,_.b,[]),t["\u0275mpd"](512,K.c,K.c,[]),t["\u0275mpd"](512,$.a,$.a,[]),t["\u0275mpd"](512,o["\u0275ba"],o["\u0275ba"],[]),t["\u0275mpd"](512,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,sn,sn,[]),t["\u0275mpd"](512,tn.r,tn.r,[[2,tn.w],[2,tn.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,B.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,Q.a,!1,[]),t["\u0275mpd"](1024,x.a,function(){return[{types:[{name:"formly-group",component:on.a}]},{types:[{name:"input",component:pn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:en.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:ln.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:rn.a},{name:"description",component:kn.a},{name:"validation-message",component:dn.a},{name:"fieldset",component:fn.a},{name:"addons",component:gn.a}],manipulators:[{class:bn.a,method:"run"},{class:yn.a,method:"run"},{class:Cn.a,method:"run"}]},{types:[{name:"formly-group",component:on.a}]},{}]},[]),t["\u0275mpd"](1024,tn.m,function(){return[[{path:"",component:vn.a,data:e}]]},[])])})}});