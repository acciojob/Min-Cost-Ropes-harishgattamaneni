function mincost(arr)
{ 
	arr.sort((a,b) => a-b)
	let ans=0
	while(arr.length>1){
        let temp=arr[0]+arr[1]
        ans+=temp
        arr.shift()
        arr.shift()
        arr.push(temp)
        arr.sort((a,b) => a-b)
    }
    return ans
}

module.exports=mincost;
