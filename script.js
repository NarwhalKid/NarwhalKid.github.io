let i = -1;
setInterval(()=>{
    i=(i+1)%360;
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    rs.getPropertyValue('--highlightColor');
    
    r.style.setProperty('--highlight-color', `hsl(${i} 100% 50%`);
},500)
