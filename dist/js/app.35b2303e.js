(function(e){function t(t){for(var i,c,l=t[0],a=t[1],s=t[2],u=0,b=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);p&&p(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},o=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/frontend/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07bd":function(e){e.exports=JSON.parse('{"listForm":{"Herdingspikes2":{"filename":"herdingspikes","paramset":{"clustering_bandwidth":["float",5.5],"clustering_alpha":["float",5.5],"clustering_n_jobs":["number",-1],"clustering_bin_seeding":["text","True"],"clustering_min_bin_freq":["number",16],"clustering_subset":["text","None"],"left_cutout_time":["float",0.3],"right_cutout_time":["float",1.8],"detect_threshold":["number",20],"probe_masked_channels":["text","[]"],"probe_inner_radius":["number",70],"probe_neighbor_radius":["number",90],"probe_event_length":["float",0.26],"probe_peak_jitter":["float",0.2],"t_inc":["number",100000],"num_com_centers":["number",1],"maa":["number",12],"ahpthr":["number",11],"out_file_name":["text","HS2_detected"],"decay_filtering":["text","False"],"save_all":["text","False"],"amp_evaluation_time":["float",0.4],"spk_evaluation_time":["float",1],"pca_ncomponents":["number",2],"pca_whiten":["text","True"],"freq_min":["float",300],"freq_max":["float",6000],"filter":["text","True"],"pre_scale":["text","True"],"pre_scale_value":["float",20],"filter_duplicates":["text","True"]}},"MountainSort4":{"filename":"mountainsort4","paramset":{"detect_sign":["number",-1],"adjacency_radius":["number",-1],"freq_min":["number",300],"freq_max":["number",6000],"filter":["text","True"],"whiten":["text","True"],"num_workers":["number",1],"clip_size":["number",50],"detect_threshold":["number",3],"detect_interval":["number",10]}}}}')},"162a":function(e,t,n){"use strict";n("20e5")},"185d":function(e,t,n){"use strict";n("3424")},"194b":function(e,t,n){},"20e5":function(e,t,n){},3424:function(e,t,n){},5439:function(e){e.exports=JSON.parse('{"listForm":{"Bandpass filter":{"description":"Bandpass filter of a recording","filename":"bandpass_filter","paramset":{"freq_min":["float",300],"freq_max":["float",6000],"margin_ms":["float",5],"dType":["text","None"]}},"Scale":{"description":"Scale traces from the given recording extractor with a scalar and offset. New traces = traces*scalar + offset.","filename":"normalize_scale","paramset":{"gain":["float",1],"offset":["float",0]}},"Whiten":{"description":"Whitens the recording extractor traces.","filename":"whiten","paramset":{"by_property":["text","None"]}}}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t){var n=Object(i["x"])("router-view");return Object(i["s"])(),Object(i["d"])(n)}n("185d");var o=n("6b0d"),c=n.n(o);const l={},a=c()(l,[["render",r]]);var s=a,p=n("6c02"),u={class:"home"},b={class:"content"},f={class:"steps-wrapper"},d=Object(i["g"])("h4",null,"Choose one of the steps below:",-1),O={class:"checkbox-wrapper-outer",style:{"margin-top":"30px"}},j=["id","value"],m=["for"],g={key:0,class:"parameters-wrapper"},h=Object(i["g"])("h5",null,"The list of preprocessors available are:",-1),v=Object(i["g"])("hr",null,null,-1),S=["id","value"],k=["for"],y={key:1,class:"parameters-wrapper"},_=Object(i["g"])("h5",null,"The list of spike sorters available are:",-1),w=Object(i["g"])("hr",null,null,-1),x=["id","value"],P=["for"],T={key:2,class:"parameters-wrapper"},F=Object(i["g"])("h5",null,"The list of postprocessors available are:",-1),B=Object(i["g"])("hr",null,null,-1),z=["id","value"],I=["for"],E=Object(i["g"])("label",{for:"ref"},[Object(i["g"])("b",null,"Reference")],-1),N=Object(i["g"])("input",{name:"ref",type:"text"},null,-1),C=["for"],J=["type","value","step","id","name"],M=Object(i["g"])("input",{type:"submit",value:"Submit"},null,-1),q=Object(i["g"])("label",{for:"ref"},[Object(i["g"])("b",null,"Reference")],-1),D=Object(i["g"])("input",{name:"ref",type:"text"},null,-1),R=["for"],L=["type","value","step","id","name"],U=["value"],A=Object(i["g"])("input",{type:"submit",value:"Submit"},null,-1),H=Object(i["g"])("label",{for:"ref"},[Object(i["g"])("b",null,"Reference")],-1),V=Object(i["g"])("input",{name:"ref",type:"text"},null,-1),G=["for"],W=["type","value","step","id","name"],$=Object(i["g"])("input",{type:"submit",value:"Submit"},null,-1),K={class:"pipeline-structure"},Q={key:0},X={class:"error-handling"},Y=Object(i["g"])("h3",null,"Status of pipeline, error messages",-1);function Z(e,t,n,r,o,c){var l=Object(i["x"])("TopBar"),a=Object(i["x"])("ErrorModal"),s=Object(i["x"])("CloseIcon");return Object(i["s"])(),Object(i["f"])("div",u,[Object(i["i"])(l),o.runPipelineError?(Object(i["s"])(),Object(i["d"])(a,{key:0})):Object(i["e"])("",!0),Object(i["g"])("div",b,[Object(i["g"])("div",f,[d,Object(i["g"])("div",O,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.currentSteps,(function(e){return Object(i["s"])(),Object(i["f"])("div",{class:"checkbox-wrapper",key:e.id},[Object(i["D"])(Object(i["g"])("input",{type:"radio",class:"main-labels",name:"steps",id:e.id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.pickStep=e}),value:e.id},null,8,j),[[i["B"],o.pickStep]]),Object(i["g"])("label",{class:"main-labels",for:e.id},Object(i["z"])(e.something),9,m)])})),128))]),"preprocessing"==o.pickStep?(Object(i["s"])(),Object(i["f"])("div",g,[h,v,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfPreprocessingSteps,(function(e,n){return Object(i["s"])(),Object(i["f"])("div",{key:n},[Object(i["D"])(Object(i["g"])("input",{type:"radio",id:n,name:"substeps","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.pickSubStep=e}),value:n},null,8,S),[[i["B"],o.pickSubStep]]),Object(i["g"])("label",{for:n},Object(i["z"])(n),9,k)])})),128))])):Object(i["e"])("",!0),"spikesorting"==o.pickStep?(Object(i["s"])(),Object(i["f"])("div",y,[_,w,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfSpikeSorters,(function(e,n){return Object(i["s"])(),Object(i["f"])("div",{key:n},[Object(i["D"])(Object(i["g"])("input",{type:"radio",id:n,name:"substeps","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.pickSubStep=e}),value:n},null,8,x),[[i["B"],o.pickSubStep]]),Object(i["g"])("label",{for:n},Object(i["z"])(n),9,P)])})),128))])):Object(i["e"])("",!0),"postprocessing"==o.pickStep?(Object(i["s"])(),Object(i["f"])("div",T,[F,B,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfPostprocessingSteps,(function(e,n){return Object(i["s"])(),Object(i["f"])("div",{key:n},[Object(i["D"])(Object(i["g"])("input",{type:"radio",id:n,name:"substeps","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.pickSubStep=e}),value:n},null,8,z),[[i["B"],o.pickSubStep]]),Object(i["g"])("label",{for:n},Object(i["z"])(n),9,I)])})),128))])):Object(i["e"])("",!0),"none"!=o.pickSubStep&&"preprocessing"==o.pickStep?(Object(i["s"])(),Object(i["f"])("form",{key:3,class:"params",id:"params-form",onSubmit:t[4]||(t[4]=Object(i["E"])((function(e){return c.addStep()}),["prevent"]))},[E,N,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfPreprocessingSteps[o.pickSubStep].paramset,(function(e,t){return Object(i["s"])(),Object(i["f"])("div",{key:t,class:"individual-labels"},[Object(i["g"])("label",{for:t},Object(i["z"])(t),9,C),Object(i["g"])("input",{type:e[0],value:e[1],step:"number"===e[0]?1:.01,id:t,name:t},null,8,J)])})),128)),M],32)):"none"!=o.pickSubStep&&"spikesorting"==o.pickStep?(Object(i["s"])(),Object(i["f"])("form",{key:4,class:"params",id:"params-form",onSubmit:t[5]||(t[5]=Object(i["E"])((function(e){return c.addStep()}),["prevent"]))},[q,D,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfSpikeSorters[o.pickSubStep].paramset,(function(e,t){return Object(i["s"])(),Object(i["f"])("div",{key:t,class:"individual-labels"},[Object(i["g"])("label",{for:t},Object(i["z"])(t),9,R),Object(i["g"])("input",{type:e[0],value:e[1],step:"number"===e[0]?1:.01,id:t,name:t},null,8,L)])})),128)),Object(i["g"])("input",{value:o.listOfSpikeSorters[o.pickSubStep].filename,name:"filename",style:{display:"none"}},null,8,U),A],32)):"none"!=o.pickSubStep&&"postprocessing"==o.pickStep?(Object(i["s"])(),Object(i["f"])("form",{key:5,class:"params",id:"params-form",onSubmit:t[6]||(t[6]=Object(i["E"])((function(e){return c.addStep()}),["prevent"]))},[H,V,(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(o.listOfPostprocessingSteps[o.pickSubStep].paramset,(function(e,t){return Object(i["s"])(),Object(i["f"])("div",{key:t,class:"individual-labels"},[Object(i["g"])("label",{for:t},Object(i["z"])(t),9,G),Object(i["g"])("input",{type:e[0],value:e[1],step:"number"===e[0]?1:.01,id:t,name:t},null,8,W)])})),128)),$],32)):Object(i["e"])("",!0)]),Object(i["g"])("div",K,[Object(i["g"])("div",null,[Object(i["g"])("button",{class:"btn btn-info",onClick:t[7]||(t[7]=function(){return c.onPickFile&&c.onPickFile.apply(c,arguments)})}," Upload pipeline "),Object(i["g"])("input",{type:"file",style:{display:"none"},ref:"fileInput",accept:"application/JSON",onChange:t[8]||(t[8]=function(){return c.onFilePicked&&c.onFilePicked.apply(c,arguments)})},null,544),Object(i["g"])("ol",null,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(c.thePipeline,(function(e){return Object(i["s"])(),Object(i["f"])("li",{class:"pipeline-structure-one-unit",key:e.nameOfStep},[Object(i["h"])(Object(i["z"])(e.nameOfStep)+" ",1),e.ref?(Object(i["s"])(),Object(i["f"])("span",Q,"Ref: "+Object(i["z"])(e.ref),1)):Object(i["e"])("",!0),Object(i["i"])(s,{class:"close",onClick:function(t){return c.removeStep(e.id)}},null,8,["onClick"])])})),128))]),Object(i["g"])("button",{onClick:t[9]||(t[9]=function(e){return c.runPipeline()})},"Run pipeline"),Object(i["g"])("button",{onClick:t[10]||(t[10]=function(e){return c.downloadPipeline()})},"Download pipeline")]),Object(i["g"])("div",X,[Y,Object(i["g"])("p",null,Object(i["z"])(o.info),1),Object(i["g"])("p",null,Object(i["z"])(o.additionalInfo),1)])])])])}n("d3b7"),n("159b"),n("e9c4"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("4de4");var ee={class:"top-bar"},te=Object(i["g"])("h1",null,"SpikeInterface - the web application",-1);function ne(e,t,n,r,o,c){var l=Object(i["x"])("LoginButton");return Object(i["s"])(),Object(i["f"])("div",ee,[te,Object(i["i"])(l)])}var ie={class:"button"},re=Object(i["g"])("a",null,"Login",-1),oe=Object(i["g"])("a",{target:"_blank",href:"https://spikeinterface.readthedocs.io/en/latest/overview.html"},"About SpikeInterface",-1),ce=Object(i["g"])("a",{target:"_blank",href:"https://github.com/SpikeInterface"},"GitHub",-1),le=[re,oe,ce];function ae(e,t,n,r,o,c){return Object(i["s"])(),Object(i["f"])("div",ie,le)}var se={name:"LoginButton",props:{username:String}};n("b00c");const pe=c()(se,[["render",ae]]);var ue=pe,be={name:"TopBar",data:function(){return{name:"Matthias"}},components:{LoginButton:ue}};n("fdcd");const fe=c()(be,[["render",ne]]);var de=fe;function Oe(e,t,n,r,o,c){return Object(i["s"])(),Object(i["f"])("div",null," An error has been encountered ")}var je={name:"ErrorModal"};const me=c()(je,[["render",Oe]]);var ge=me,he=n("7eb5"),ve=n("5439"),Se=n("07bd"),ke=n("7ab0"),ye={name:"HomePage",data:function(){return{currentSteps:[{id:"preprocessing",something:"Preprocessing"},{id:"spikesorting",something:"Spike sorting"},{id:"postprocessing",something:"Postprocessing"}],pickStep:"none",pickSubStep:"none",listOfPreprocessingSteps:ve.listForm,listOfSpikeSorters:Se.listForm,listOfPostprocessingSteps:ke.listForm,pipeline:[],availableDatasets:[],runPipelineError:!1,info:"All good so far!",additionalInfo:""}},components:{TopBar:de,CloseIcon:he["a"],ErrorModal:ge},watch:{pickStep:function(){this.pickSubStep="none","Pipeline running"!==this.info&&(this.info="All good so far!"),this.additionalInfo=""}},computed:{thePipeline:function(){return this.pipeline}},methods:{addStep:function(){console.log(this.pipeline);var e=document.getElementById("params-form"),t=new FormData(e),n={},i={nameOfStep:this.pickSubStep,category:this.pickStep,id:this.pipeline.length};t.forEach((function(e,t){n[t]=e})),i.params=n,console.log(this.pipeline),console.log("before pushing informaiton"),this.pipeline.push(i),console.log(JSON.stringify(this.pipeline))},downloadPipeline:function(){if(0!==this.pipeline.length){var e=JSON.stringify(this.pipeline,null,4),t=new Blob([e]),n=document.createElement("a");n.download="download.json",n.href=window.URL.createObjectURL(t),n.textContent="Download ready",n.style="display:none",n.click()}else this.info="The pipeline is currently empty - cannot download!"},removeStep:function(e){this.pipeline=this.pipeline.filter((function(t){return t.id!==e}))},runPipeline:function(){var e=this;if(0===this.pipeline.length)return this.info="The pipeline is currently empty - cannot run!",void(this.additionalInfo="");"Pipeline running"===this.info&&(this.additionalInfo="There is a pipeline already running, please wait");var t="http://127.0.0.1:5000/run",n=JSON.stringify(this.pipeline);console.log(n),this.info="Pipeline running",this.axios.post(t,n,{headers:{"Content-Type":"application/json"}}).then((function(t){e.info=t,console.log("We've reached here"),console.log(e.info)})).catch((function(t){console.log(t.response.data),e.info=t.response.data.message}))},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=document.querySelector("input[type=file]").files[0];console.log(t);var n=new FileReader;n.addEventListener("load",function(){this.pipeline=JSON.parse(n.result),console.log(this.pipeline[0].nameOfStep),this.info="pipeline uploaded successfully"}.bind(this)),t&&n.readAsText(t)}}};n("162a");const _e=c()(ye,[["render",Z]]);var we=_e,xe=[{path:"/",name:"Home page",component:we}],Pe=Object(p["a"])({history:Object(p["b"])("/frontend/"),routes:xe}),Te=Pe,Fe=n("bc3a"),Be=n.n(Fe),ze=n("130e");Object(i["c"])(s).use(Te).use(ze["a"],Be.a).mount("#app")},6687:function(e,t,n){},"7ab0":function(e){e.exports=JSON.parse('{"listForm":{"Get template amplitudes":{"description":"Get amplitude per channel for each unit","filename":"idk","paramset":{"peak_sign":["text","neg"],"mode":["str","extremum"]}}}}')},b00c:function(e,t,n){"use strict";n("6687")},fdcd:function(e,t,n){"use strict";n("194b")}});
//# sourceMappingURL=app.35b2303e.js.map