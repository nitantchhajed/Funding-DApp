import{S as h,C as d,_ as e,a as l,D as p,b as u,c as m,d as g,e as C,f as w,g as v,h as y,G as W,i as f,j as E,E as A,P as R,k as T,l as b,A as k}from"./index.8437fde8.js";class n extends h{constructor(t,r,s){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,r,i,a);super(c,s,o),e(this,"abi",void 0),e(this,"sales",void 0),e(this,"platformFees",void 0),e(this,"encoder",void 0),e(this,"estimator",void 0),e(this,"events",void 0),e(this,"metadata",void 0),e(this,"roles",void 0),e(this,"royalties",void 0),e(this,"claimConditions",void 0),e(this,"checkout",void 0),e(this,"history",void 0),e(this,"interceptor",void 0),e(this,"erc1155",void 0),e(this,"owner",void 0),this.abi=i,this.metadata=new l(this.contractWrapper,p,this.storage),this.roles=new u(this.contractWrapper,n.contractRoles),this.royalties=new m(this.contractWrapper,this.metadata),this.sales=new g(this.contractWrapper),this.claimConditions=new C(this.contractWrapper,this.metadata,this.storage),this.events=new w(this.contractWrapper),this.history=new v(this.events),this.encoder=new y(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.platformFees=new f(this.contractWrapper),this.interceptor=new E(this.contractWrapper),this.erc1155=new A(this.contractWrapper,this.storage,o),this.checkout=new R(this.contractWrapper),this.owner=new T(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(b("transfer"),k)}async createBatch(t,r){return this.erc1155.lazyMint(t,r)}async getClaimTransaction(t,r,s){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,s,{checkERC20Allowance:a})}async claimTo(t,r,s){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.claimTo(t,r,s,{checkERC20Allowance:a})}async claim(t,r){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=await this.contractWrapper.getSignerAddress();return this.claimTo(a,t,r,s)}async burnTokens(t,r){return this.erc1155.burn(t,r)}async call(t){for(var r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return this.contractWrapper.call(t,...s)}}e(n,"contractRoles",["admin","minter","transfer"]);export{n as EditionDrop};
