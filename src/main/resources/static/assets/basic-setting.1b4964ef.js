import{r as k}from"./base.76093c7f.js";/* empty css                */import{Z as y,a as h}from"./ZFormItem.62945b35.js";/* empty css               */import{E as v}from"./radio.9828800c.js";import{E as L}from"./switch.09e60e1b.js";/* empty css              */import{a as f,f as E,u as e,P as m,b as z,e as l,p as T,h as a,Q as u,I as U,k as g,J as i}from"./index.ce603f74.js";import{u as x}from"./useLinkSetting.8e2c3364.js";import{E as B}from"./index.c4011240.js";import{v as R}from"./directive.33b051f1.js";import"./index.c92ded65.js";import"./event.776e7e11.js";import"./validator.760d9d24.js";import"./admin-setting.71c32571.js";import"./request.e22ac619.js";const S={class:"zfile-admin-down-link-body"},P=i(" \u76F4\u94FE\u8BBE\u7F6E "),A=i(" \u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u76F4\u94FE\u76F8\u5173\u8BBE\u7F6E "),C=i(" \u76F4\u94FE\u5730\u5740\u524D\u7F00, \u5982 http(s)://ip:port/${\u76F4\u94FE\u524D\u7F00}/path/filename "),D=i(" \u4EC5\u63A7\u5236\u662F\u5426\u663E\u793A\u76F4/\u77ED\u94FE\u751F\u6210\u6309\u94AE\uFF0C\u4E0D\u5F71\u54CD\u4F7F\u7528\u5141\u8BB8\u4F7F\u7528\u76F4/\u77ED\u94FE\u4E0B\u8F7D "),N=i(" \u662F\u5426\u8BB0\u5F55\u76F4\u94FE\u4E0B\u8F7D\u65E5\u5FD7 "),I=i(" \u63A7\u5236\u662F\u5426\u751F\u6210\u76F4\u94FE\u65F6\u663E\u793A\u77ED\u94FE\u8DEF\u5F84\u53CA\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u77ED\u94FE\u8FDB\u884C\u4E0B\u8F7D "),Z=i(" \u63A7\u5236\u662F\u5426\u751F\u6210\u76F4\u94FE\u65F6\u663E\u793A\u76F4\u94FE\u8DEF\u5F84\u53CA\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u76F4\u94FE\u8FDB\u884C\u4E0B\u8F7D "),F=i("\u4E0D\u542F\u7528 Referer \u9632\u76D7\u94FE"),J=i("\u542F\u7528\u767D\u540D\u5355"),Q=i("\u542F\u7528\u9ED1\u540D\u5355"),$=i(" \u9632\u76D7\u94FE\u652F\u6301\u8BBF\u95EE\u6587\u4EF6\u76F4\u94FE\u6216\u77ED\u94FE\u65F6\u6821\u9A8C\uFF0C\u5982\u7528\u6237\u76F4\u63A5\u8BBF\u95EE\u76F4\u94FE\u8DF3\u8F6C\u540E\u7684\u5B58\u50A8\u6E90\u539F\u59CB\u94FE\u63A5\uFF0C\u65E0\u6CD5\u8FDB\u884C\u6821\u9A8C\u548C\u62E6\u622A\u3002 "),j=i("\u5141\u8BB8 Referer \u4E3A\u7A7A"),q=i("\u7981\u6B62 Referer \u4E3A\u7A7A"),G=i(" \u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D\uFF0C\u652F\u6301 * \u901A\u914D\u7B26\uFF0C\u5982\u767D\u540D\u5355 *zfile.vip \u5C06\u53EA\u5141\u8BB8 zfile.vip\u3001www.zfile.vip\u3001demo.zfile.vip \u7B49\u7F51\u7AD9\u8BBF\u95EE\u3002 "),H=i(" \u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D\uFF0C\u652F\u6301 * \u901A\u914D\u7B26\uFF0C\u5982\u9ED1\u540D\u5355 *zfile.vip \u5C06\u7981\u6B62\u6240\u6709\u5982 zfile.vip\u3001www.zfile.vip\u3001demo.zfile.vip \u7B49\u7F51\u7AD9\u8BBF\u95EE\u3002 "),K={class:"dialog-footer"},M=i("\u4FDD\u5B58"),_e={__name:"basic-setting",setup(O){const{data:o,saveData:_,saveLoading:V}=x();return(W,t)=>{const p=B,d=y,s=L,n=v,w=k,b=h,c=R;return f(),E("div",S,[e(o)?m((f(),z(b,{key:0,model:e(o),"element-loading-text":"\u4FDD\u5B58\u4E2D..."},{"form-title":l(()=>[P]),"form-sub-title":l(()=>[A]),footer:l(()=>[T("span",K,[a(w,{type:"primary",onClick:e(_)},{default:l(()=>[M]),_:1},8,["onClick"])])]),default:l(()=>[a(d,{label:"\u76F4\u94FE\u5730\u5740\u524D\u7F00"},{tips:l(()=>[C]),default:l(()=>[a(p,{modelValue:e(o).directLinkPrefix,"onUpdate:modelValue":t[0]||(t[0]=r=>e(o).directLinkPrefix=r)},null,8,["modelValue"])]),_:1}),a(d,{label:"\u663E\u793A\u751F\u6210\u76F4/\u77ED\u94FE\u529F\u80FD"},{tips:l(()=>[D]),default:l(()=>[a(s,{modelValue:e(o).showLinkBtn,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).showLinkBtn=r)},null,8,["modelValue"])]),_:1}),a(d,{label:"\u8BB0\u5F55\u4E0B\u8F7D\u65E5\u5FD7"},{tips:l(()=>[N]),default:l(()=>[a(s,{modelValue:e(o).recordDownloadLog,"onUpdate:modelValue":t[2]||(t[2]=r=>e(o).recordDownloadLog=r)},null,8,["modelValue"])]),_:1}),a(d,{label:"\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u77ED\u94FE"},{tips:l(()=>[I]),default:l(()=>[a(s,{modelValue:e(o).showShortLink,"onUpdate:modelValue":t[3]||(t[3]=r=>e(o).showShortLink=r)},null,8,["modelValue"])]),_:1}),a(d,{label:"\u662F\u5426\u5141\u8BB8\u4F7F\u7528\u76F4\u94FE\uFF08\u8DEF\u5F84\uFF09"},{tips:l(()=>[Z]),default:l(()=>[a(s,{modelValue:e(o).showPathLink,"onUpdate:modelValue":t[4]||(t[4]=r=>e(o).showPathLink=r)},null,8,["modelValue"])]),_:1}),a(d,{label:"Referer \u9632\u76D7\u94FE"},{tips:l(()=>[$]),default:l(()=>[a(n,{modelValue:e(o).refererType,"onUpdate:modelValue":t[5]||(t[5]=r=>e(o).refererType=r),label:"off"},{default:l(()=>[F]),_:1},8,["modelValue"]),a(n,{modelValue:e(o).refererType,"onUpdate:modelValue":t[6]||(t[6]=r=>e(o).refererType=r),label:"white_list"},{default:l(()=>[J]),_:1},8,["modelValue"]),a(n,{modelValue:e(o).refererType,"onUpdate:modelValue":t[7]||(t[7]=r=>e(o).refererType=r),label:"black_list"},{default:l(()=>[Q]),_:1},8,["modelValue"])]),_:1}),m(a(d,{label:"Referer \u914D\u7F6E"},{default:l(()=>[a(n,{modelValue:e(o).refererAllowEmpty,"onUpdate:modelValue":t[8]||(t[8]=r=>e(o).refererAllowEmpty=r),label:!0},{default:l(()=>[j]),_:1},8,["modelValue"]),a(n,{modelValue:e(o).refererAllowEmpty,"onUpdate:modelValue":t[9]||(t[9]=r=>e(o).refererAllowEmpty=r),label:!1},{default:l(()=>[q]),_:1},8,["modelValue"])]),_:1},512),[[u,e(o).refererType!=="no"]]),m(a(d,{label:"\u767D\u540D\u5355"},U({default:l(()=>[a(p,{type:"textarea",rows:6,placeholder:"\u6BCF\u884C\u8F93\u5165\u4E00\u4E2A\u57DF\u540D",modelValue:e(o).refererValue,"onUpdate:modelValue":t[10]||(t[10]=r=>e(o).refererValue=r)},null,8,["modelValue"])]),_:2},[e(o).refererType==="white_list"?{name:"tips",fn:l(()=>[G])}:void 0,e(o).refererType==="black_list"?{name:"tips",fn:l(()=>[H])}:void 0]),1536),[[u,e(o).refererType!=="no"]])]),_:1},8,["model"])),[[c,e(V)]]):g("",!0)])}}};export{_e as default};
