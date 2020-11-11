const inject = (items,sections)=>{
    let output = [...items];
     for(let i=0;i<sections.length;i++){
         output.splice(sections[i].index+i,0,sections[i].content);
     }
     return output;
}
export {inject};