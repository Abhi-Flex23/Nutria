import{h as d}from"./chunk.RLLTRZYL.js";import{a as s,b as t}from"./chunk.GVR6SJVE.js";import{c as r,h as o}from"./chunk.7EIHAL55.js";import{g as i}from"./chunk.OAQCUA7X.js";var e=class extends o{constructor(){super(...arguments);this.localize=new d(this);this.date=new Date;this.hourFormat="auto"}render(){let n=new Date(this.date),h=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(n.getMilliseconds()))return r`
      <time datetime=${n.toISOString()}>
        ${this.localize.date(n,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:h})}
      </time>
    `}};i([t()],e.prototype,"date",2),i([t()],e.prototype,"lang",2),i([t()],e.prototype,"weekday",2),i([t()],e.prototype,"era",2),i([t()],e.prototype,"year",2),i([t()],e.prototype,"month",2),i([t()],e.prototype,"day",2),i([t()],e.prototype,"hour",2),i([t()],e.prototype,"minute",2),i([t()],e.prototype,"second",2),i([t({attribute:"time-zone-name"})],e.prototype,"timeZoneName",2),i([t({attribute:"time-zone"})],e.prototype,"timeZone",2),i([t({attribute:"hour-format"})],e.prototype,"hourFormat",2),e=i([s("sl-format-date")],e);export{e as a};