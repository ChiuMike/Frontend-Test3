const findMatch=(teams,setResult)=>{
    let result={};
    for(let i=0;i<5;i++){
        var games=Math.floor(Math.random()*10)+1;
        result[i]=new Array();
        var d=[];
        for(let j=0;j<games;j++){
            var t=Math.floor(Math.random()*30)+1
            if(!d.includes(t)){
                d.push(t);
            }else{
                t=Math.floor(Math.random()*30)+(t);
                d.push(t);
            }
            var timestamp=Math.random()
            var match=[...teams]
            var index1=Math.floor(Math.random()*match.length);
            var temp=[];
            temp.push(match[index1]);
            match.splice(index1, 1);
            var index2=Math.floor(Math.random()*match.length);
            temp.push(match[index2]);
            temp.push(timestamp)
            result[i].push(temp);
        }
        d.sort((x, y) => {return x - y})
        result[i].forEach((item)=>{
            item.push(d.shift())
        })
    }
    setResult(result);
}
export default findMatch;