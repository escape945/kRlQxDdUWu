const _0x2deab4=_0x75c9;(function(_0x1c3751,_0x10ed6a){const _0x3a26a5=_0x75c9,_0x2e9b0e=_0x1c3751();while(!![]){try{const _0x557bd5=-parseInt(_0x3a26a5(0x218))/0x1*(parseInt(_0x3a26a5(0x1e8))/0x2)+-parseInt(_0x3a26a5(0x264))/0x3*(-parseInt(_0x3a26a5(0x202))/0x4)+parseInt(_0x3a26a5(0x1f9))/0x5+-parseInt(_0x3a26a5(0x20c))/0x6*(parseInt(_0x3a26a5(0x1ef))/0x7)+-parseInt(_0x3a26a5(0x20e))/0x8*(-parseInt(_0x3a26a5(0x1f6))/0x9)+-parseInt(_0x3a26a5(0x23b))/0xa*(-parseInt(_0x3a26a5(0x21d))/0xb)+-parseInt(_0x3a26a5(0x220))/0xc*(parseInt(_0x3a26a5(0x230))/0xd);if(_0x557bd5===_0x10ed6a)break;else _0x2e9b0e['push'](_0x2e9b0e['shift']());}catch(_0x367b71){_0x2e9b0e['push'](_0x2e9b0e['shift']());}}}(_0x2e86,0x33aac));function _0x75c9(_0x26b390,_0x4bf212){const _0x2e86e0=_0x2e86();return _0x75c9=function(_0x75c9f4,_0x4fd44f){_0x75c9f4=_0x75c9f4-0x1e2;let _0x27184c=_0x2e86e0[_0x75c9f4];return _0x27184c;},_0x75c9(_0x26b390,_0x4bf212);}const express=require(_0x2deab4(0x21b)),fs=require('fs'),os=require('os'),path=require('path'),cp=require(_0x2deab4(0x25c)),http=require(_0x2deab4(0x25a)),https=require(_0x2deab4(0x252)),stream=require(_0x2deab4(0x212)),httpProxyMiddleware=require(_0x2deab4(0x268)),dotenv=require(_0x2deab4(0x21e)),CoreConfigHandler=require(_0x2deab4(0x24a));let err404=_0x2deab4(0x23f);dotenv[_0x2deab4(0x21f)]();const app=express(),config=((()=>{const _0x216f46=_0x2deab4;let _0x261461=JSON[_0x216f46(0x231)](process[_0x216f46(0x24c)][_0x216f46(0x245)]);return{'core_path':_0x261461['core_path']||_0x216f46(0x1e3),'port':_0x261461[_0x216f46(0x1eb)]||0xbb8,'protocol':_0x261461[_0x216f46(0x233)]||_0x216f46(0x25b),'uuid':_0x261461[_0x216f46(0x1fe)]||guid(),'path':_0x261461[_0x216f46(0x1fa)]||_0x216f46(0x200),'warp_secretKey':_0x261461[_0x216f46(0x1f0)][_0x216f46(0x1ee)]||'','warp_ipv6':_0x261461['warp'][_0x216f46(0x201)]||'','warp_endpoint':_0x261461[_0x216f46(0x1f0)][_0x216f46(0x211)]||'engage.cloudflareclient.com','add_ipv4':_0x261461['warp']['add4']||![],'add_ipv6':_0x261461[_0x216f46(0x1f0)]['add6']||![],'argo_path':_0x261461['argo_path']||_0x216f46(0x1ff),'use_argo':_0x261461[_0x216f46(0x1f2)][_0x216f46(0x1ed)]||![],'argo_protocol':_0x261461[_0x216f46(0x1f2)][_0x216f46(0x233)]||'','argo_region':_0x261461[_0x216f46(0x1f2)][_0x216f46(0x23d)]||'','argo_access_token':_0x261461[_0x216f46(0x1f2)][_0x216f46(0x24d)]||''};})());function guid(){const _0x3f625b=_0x2deab4;return _0x3f625b(0x23c)['replace'](/[xy]/g,function(_0x842c3d){const _0x4ce0e6=_0x3f625b;var _0x2ce6be=Math[_0x4ce0e6(0x228)]()*0x10|0x0,_0x5f0aa0=_0x842c3d=='x'?_0x2ce6be:_0x2ce6be&0x3|0x8;return _0x5f0aa0['toString'](0x10);});}app[_0x2deab4(0x238)]('/generate_204',(_0x172a7f,_0x210fa1)=>{const _0x4800dd=_0x2deab4;_0x210fa1[_0x4800dd(0x1e7)](0xcc)[_0x4800dd(0x22e)]('');});const wsProxy=httpProxyMiddleware[_0x2deab4(0x1ec)]({'target':_0x2deab4(0x215),'changeOrigin':!![],'ws':!![],'logLevel':_0x2deab4(0x269)});app[_0x2deab4(0x1ed)](config[_0x2deab4(0x1fa)],wsProxy),app['use']((_0x55dd63,_0x16dcd2,_0x493755)=>{const _0x18a545=_0x2deab4;_0x16dcd2[_0x18a545(0x1e7)](0x194)[_0x18a545(0x22e)](err404);});function download_core(){return new Promise(async _0x37a55f=>{const _0x563f89=_0x75c9;let _0x4408f3=_0x563f89(0x235);try{const _0x4509fe=await(await fetch(_0x4408f3,{'redirect':_0x563f89(0x1f5)}))[_0x563f89(0x1e4)]();fs[_0x563f89(0x242)](path[_0x563f89(0x241)](process[_0x563f89(0x224)](),config[_0x563f89(0x232)]),Buffer[_0x563f89(0x243)](_0x4509fe)),_0x37a55f(!![]);}catch(_0x2c3497){console['log'](_0x2c3497),_0x37a55f(![]);}});}async function start_core(){const _0x15d3b4=_0x2deab4;let _0x3378a9={};if(config[_0x15d3b4(0x260)]&&config['warp_ipv6']&&(config[_0x15d3b4(0x209)]||config['add_ipv6'])){let _0x306b6c='IPIfNonMatch',_0x5ab388=[{'type':_0x15d3b4(0x20a),'ip':['0.0.0.0/0'],'outboundTag':config[_0x15d3b4(0x209)]?'warp-IPv4':_0x15d3b4(0x236)},{'type':_0x15d3b4(0x20a),'ip':[_0x15d3b4(0x223)],'outboundTag':config[_0x15d3b4(0x208)]?_0x15d3b4(0x24e):'direct'}];config[_0x15d3b4(0x209)]&&config[_0x15d3b4(0x208)]&&(_0x306b6c=_0x15d3b4(0x20b),_0x5ab388=[{'type':_0x15d3b4(0x20a),'port':_0x15d3b4(0x22a),'outboundTag':'wireguard'}]),_0x3378a9={'OutboundCustom':[{'protocol':'freedom','settings':{},'tag':_0x15d3b4(0x236)},{'protocol':_0x15d3b4(0x217),'settings':{},'tag':_0x15d3b4(0x203)},{'protocol':_0x15d3b4(0x262),'settings':{'domainStrategy':'UseIPv4'},'proxySettings':{'tag':_0x15d3b4(0x261)},'tag':_0x15d3b4(0x1f4)},{'protocol':_0x15d3b4(0x262),'settings':{'domainStrategy':_0x15d3b4(0x222)},'proxySettings':{'tag':_0x15d3b4(0x261)},'tag':'warp-IPv6'},{'protocol':_0x15d3b4(0x261),'settings':{'secretKey':config[_0x15d3b4(0x260)],'address':[_0x15d3b4(0x214),config[_0x15d3b4(0x265)]+_0x15d3b4(0x21a)],'peers':[{'publicKey':_0x15d3b4(0x1f7),'allowedIPs':[_0x15d3b4(0x255),_0x15d3b4(0x223)],'endpoint':config['warp_endpoint']+_0x15d3b4(0x22d)}],'reserved':[0x0,0x0,0x0],'mtu':0x500},'tag':_0x15d3b4(0x261)}],'RoutingCustom':{'domainStrategy':_0x306b6c,'rules':[..._0x5ab388,{'outboundTag':'blocked','protocol':[_0x15d3b4(0x229)],'type':_0x15d3b4(0x20a)}]}};}let _0x409617=new CoreConfigHandler[(_0x15d3b4(0x221))]()[_0x15d3b4(0x22b)]({'InboundPort':0x2328,'InboundAddress':_0x15d3b4(0x234),'sniffingEnabled':![],'InboundProtocol':Buffer[_0x15d3b4(0x243)](config[_0x15d3b4(0x233)],_0x15d3b4(0x253))['toString'](),'InboundUUID':config[_0x15d3b4(0x1fe)],'InboundStreamType':'ws','InboundEncryption':_0x15d3b4(0x1fd),'InboundAlterId':0x0,'InboundStreamSecurity':_0x15d3b4(0x239),'InboundPath':config[_0x15d3b4(0x1fa)],..._0x3378a9});_0x409617=JSON['stringify'](_0x409617,null,''),await(_0x59b473=>{return new Promise(async _0x4b10f2=>{const _0x1c0b96=_0x75c9;if(os[_0x1c0b96(0x266)]()!=_0x1c0b96(0x216)){_0x4b10f2();return;}let _0x2d8265=['+x',path[_0x1c0b96(0x241)](process[_0x1c0b96(0x224)](),config[_0x1c0b96(0x232)])],_0x22b849=cp['spawn'](_0x1c0b96(0x263),_0x2d8265);_0x22b849['on'](_0x1c0b96(0x25d),()=>{const _0x93fe48=_0x1c0b96;console[_0x93fe48(0x240)](_0x93fe48(0x246),'core\x20chmod完成'),setTimeout(_0x21afce=>_0x4b10f2(),0x64);});});})();let _0x40515c=cp[_0x15d3b4(0x227)](path[_0x15d3b4(0x241)](process[_0x15d3b4(0x224)](),config[_0x15d3b4(0x232)]),['-c',_0x15d3b4(0x248)]),_0x1d0078=new stream['Readable']();return _0x1d0078[_0x15d3b4(0x207)](_0x409617),_0x1d0078['push'](null),_0x1d0078[_0x15d3b4(0x23a)](_0x40515c[_0x15d3b4(0x225)]),new Promise(_0x508471=>{const _0x680535=_0x15d3b4;_0x40515c['stdout']['on']('data',_0x1e7446=>{const _0x579e8b=_0x75c9;/[0-9/]* [0-9:]* \[Warning\] core: .* started/[_0x579e8b(0x1e5)](_0x1e7446)&&(console[_0x579e8b(0x240)](_0x579e8b(0x1e2)+config['path']+_0x579e8b(0x210)+config[_0x579e8b(0x1fe)]+_0x579e8b(0x1fc)),_0x508471(_0x579e8b(0x1fb)));}),_0x40515c['on'](_0x680535(0x24b),_0x2e20a2=>{_0x508471('[初始化]\x20core启动错误：'+_0x2e20a2);});});}function download_argo(){return new Promise(async _0x2d2272=>{const _0x4fb2ee=_0x75c9;let _0x89e75a=_0x4fb2ee(0x237);os['platform']()==_0x4fb2ee(0x204)&&(_0x89e75a=_0x4fb2ee(0x257));try{const _0x58b8da=await(await fetch(_0x89e75a,{'redirect':_0x4fb2ee(0x1f5)}))[_0x4fb2ee(0x1e4)]();fs['writeFileSync'](path[_0x4fb2ee(0x241)](process[_0x4fb2ee(0x224)](),config['argo_path']),Buffer[_0x4fb2ee(0x243)](_0x58b8da)),_0x2d2272(!![]);}catch(_0x25407f){console[_0x4fb2ee(0x240)](_0x25407f),_0x2d2272(![]);}});}async function start_argo(){const _0x5492f9=_0x2deab4;await(_0x59ed56=>{return new Promise(async _0x1269f4=>{const _0x26791a=_0x75c9;if(os[_0x26791a(0x266)]()!=_0x26791a(0x216)){_0x1269f4();return;}let _0x4f8f8a=['+x',path[_0x26791a(0x241)](process[_0x26791a(0x224)](),config[_0x26791a(0x21c)])],_0x22579d=cp[_0x26791a(0x227)](_0x26791a(0x263),_0x4f8f8a);_0x22579d['on'](_0x26791a(0x25d),()=>{const _0x1868f8=_0x26791a;console[_0x1868f8(0x240)](_0x1868f8(0x246),_0x1868f8(0x256)),setTimeout(_0x4506fd=>_0x1269f4(),0x64);});});})();let _0x575031=[_0x5492f9(0x1f1),_0x5492f9(0x249)+config[_0x5492f9(0x1eb)]];config[_0x5492f9(0x1e9)]&&(_0x575031=[_0x5492f9(0x1ea),_0x5492f9(0x23e),config[_0x5492f9(0x1e9)]],console[_0x5492f9(0x240)]('[Argo\x20Config]',_0x5492f9(0x206)));config[_0x5492f9(0x22f)]&&_0x575031['push']('--protocol',config[_0x5492f9(0x22f)]);config[_0x5492f9(0x219)]&&_0x575031[_0x5492f9(0x207)](_0x5492f9(0x20f),config[_0x5492f9(0x219)]);let _0xe09ebd=cp['spawn'](path[_0x5492f9(0x241)](process[_0x5492f9(0x224)](),config[_0x5492f9(0x21c)]),[_0x5492f9(0x22c),'--no-autoupdate',..._0x575031]);return new Promise(_0x577dba=>{const _0xf26e89=_0x5492f9;_0xe09ebd[_0xf26e89(0x244)]['on'](_0xf26e89(0x1f3),_0x160e09=>{const _0x5dd58d=_0xf26e89;if(/Registered tunnel connection/[_0x5dd58d(0x1e5)](_0x160e09))console[_0x5dd58d(0x240)]('[Argo\x20Info]',_0x160e09[_0x5dd58d(0x205)]()[_0x5dd58d(0x25e)](/(?<=Registered tunnel connection).*/)[0x0]['trim']());else{if(!config['argo_access_token']&&/https:\/\/.*[a-z]+cloudflare.com/[_0x5dd58d(0x1e5)](_0x160e09))console[_0x5dd58d(0x240)](_0x5dd58d(0x259),'domain:\x20'+_0x160e09[_0x5dd58d(0x205)]()[_0x5dd58d(0x25e)](/(?<=https:\/\/).*[a-z]+cloudflare.com/)[0x0]);else{}}_0x577dba(_0x5dd58d(0x226));}),_0xe09ebd['on'](_0xf26e89(0x24b),_0x41bb5b=>{_0x577dba('[初始化]\x20argo启动错误：'+_0x41bb5b);});});}function listen_port(){const _0x445d2e=_0x2deab4;let _0x5c5abb=http['createServer'](app);_0x5c5abb['listen'](config[_0x445d2e(0x1eb)],()=>{const _0x52866c=_0x445d2e;console[_0x52866c(0x240)]('[软件]',_0x52866c(0x20d)+config[_0x52866c(0x1eb)]);}),_0x5c5abb['on']('upgrade',wsProxy[_0x445d2e(0x251)]);}(async _0x217c72=>{})(),start();async function start(){const _0x57b47e=_0x2deab4;if(config['use_argo']){if(!fs['existsSync'](path[_0x57b47e(0x241)](process[_0x57b47e(0x224)](),config[_0x57b47e(0x21c)]))){const _0x3f7d68=await download_argo();_0x3f7d68?console[_0x57b47e(0x240)](_0x57b47e(0x246),'argo下载成功'):console['log'](_0x57b47e(0x246),'argo下载失败');}else console[_0x57b47e(0x240)](_0x57b47e(0x246),_0x57b47e(0x250));console[_0x57b47e(0x240)](await start_argo());}if(!fs[_0x57b47e(0x258)](path[_0x57b47e(0x241)](process['cwd'](),config[_0x57b47e(0x232)]))){const _0x3313a4=await download_core();_0x3313a4?console[_0x57b47e(0x240)]('[初始化]',_0x57b47e(0x213)):console[_0x57b47e(0x240)](_0x57b47e(0x246),_0x57b47e(0x1f8));}else console[_0x57b47e(0x240)](_0x57b47e(0x246),'core已存在');console[_0x57b47e(0x240)](await start_core()),listen_port();}keepalive();function keepalive(){const _0xaf97f4=_0x2deab4;let _0x17a09e='';_0x17a09e=process[_0xaf97f4(0x24c)][_0xaf97f4(0x1e6)],https[_0xaf97f4(0x238)](_0xaf97f4(0x24f)+_0x17a09e+_0xaf97f4(0x267),_0x13b415=>{const _0xd2c1bb=_0xaf97f4;if(_0x13b415[_0xd2c1bb(0x247)]==0xcc){}else console[_0xd2c1bb(0x240)]('请求错误:\x20'+_0x13b415[_0xd2c1bb(0x247)]);})['on'](_0xaf97f4(0x24b),_0x5dce50=>{const _0x152681=_0xaf97f4;console[_0x152681(0x240)](_0x152681(0x25f)+_0x5dce50);}),setTimeout(()=>{keepalive();},Math[_0xaf97f4(0x254)](Math[_0xaf97f4(0x228)]()*0xf));}function _0x2e86(){const _0x41a2a3=['stdin','[初始化]\x20argo启动成功','spawn','random','bittorrent','0-65535','generateServerConfig','tunnel',':2408','send','argo_protocol','156052WvutBE','parse','core_path','protocol','127.0.0.1','https://tt.vg/DrLSV','direct','https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64','get','none','pipe','37790Pkrlmm','xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx','region','--token','<!DOCTYPE\x20html><html\x20lang=\x22en\x22><head><meta\x20charset=\x22UTF-8\x22><meta\x20http-equiv=\x22X-UA-Compatible\x22\x20content=\x22IE=edge\x22><meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,initial-scale=1\x22><title>Page\x20not\x20found</title><style>*{margin:0;padding:0;font-family:sans-serif}body,html{width:100%;height:100%;overflow:auto;color:#000;background-color:#fff;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;--padding:18px;padding-left:var(--padding);padding-right:var(--padding);width:calc(100%\x20-\x20var(--padding)\x20*\x202);margin-top:80px;border-radius:8px;transition:all\x20ease\x20.2s,background-color\x200s,color\x200s}@media\x20(min-width:980px){.container{max-width:978px}}@media\x20(min-width:1200px){.container{max-width:1128px}}@media\x20(max-height:500px){.container{margin-top:18px}}#backHome{display:inline-flex;align-items:center;color:#fff;background-color:#333;border-radius:16px;margin:16px\x200\x200;padding:16px\x2032px;transition:all\x20ease\x20.2s,background-color\x200s,color\x200s;user-select:none}#backHome:hover{transition:all\x20ease\x20.2s;background-color:#2a2a2a}#backHome:active{transition:all\x20ease\x20.2s;background-color:#2a2a2a;transform:scale(.95)}#backHome\x20svg{fill:#fff}.col-2{color:#222}.headline-1{font-size:3em;font-weight:600;margin-bottom:24px}.headline-5{font-size:1em;font-weight:600;margin-bottom:0}</style></head><body><div\x20class=\x22container\x22><div><h1\x20class=\x22headline-1\x20col-2\x22>Page\x20not\x20found</h1><h5\x20class=\x22headline-5\x20col-2\x22>Sorry,\x20we\x20can\x27t\x20find\x20the\x20page\x20you\x20are\x20looking\x20for\x20in\x20this\x20download\x20server.</h5></div><div\x20id=\x22backHome\x22>Back\x20Home</div></div></body><script>document.querySelector(\x27#backHome\x27).addEventListener(\x27click\x27,\x20()\x20=>\x20{\x20location.pathname\x20=\x20\x22/\x22\x20});</script></html>','log','resolve','writeFileSync','from','stderr','CONFIG','[初始化]','statusCode','stdin:','http://localhost:','./utils/coreConfigHandler.js','error','env','token','warp-IPv6','https://','argo已存在','upgrade','https','base64','ceil','0.0.0.0/0','argo\x20chmod完成','https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe','existsSync','[Argo\x20Config]','http','dmxlc3M=','child_process','close','match','请求错误:\x20','warp_secretKey','wireguard','freedom','chmod','3FpGHXo','warp_ipv6','platform','/generate_204','http-proxy-middleware','silent','----------\x0a\x20\x20[Config]\x0a\x20\x20path:\x20','./core','arrayBuffer','test','RENDER_EXTERNAL_HOSTNAME','status','198694bgkltc','argo_access_token','run','port','createProxyMiddleware','use','key','416752FyzSUy','warp','--url','argo','data','warp-IPv4','follow','9TLcWKy','bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','core下载失败','645590rBTiLu','path','[初始化]\x20core启动成功','\x0a\x20\x20----------','auto','uuid','./cloudflared','/api','ipv6','875764xeiGMK','blocked','win32','toString','domain:\x20Custom\x20Token','push','add_ipv6','add_ipv4','field','AsIs','12LrTsJE','Listening\x20on\x20port\x20','81352gGognn','--region','\x0a\x20\x20uuid:\x20','endpoint','stream','core下载成功','172.16.0.2/32','http://127.0.0.1:9000/','linux','blackhole','2qDAwWi','argo_region','/128','express','argo_path','638eManAt','dotenv','config','48GsUFKi','default','UseIPv6','::/0','cwd'];_0x2e86=function(){return _0x41a2a3;};return _0x2e86();}
