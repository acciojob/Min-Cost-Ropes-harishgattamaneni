function mincost(arr)
{ 
	arr.sort()
	let ans=0
	while(arr.length>1){
        let temp=arr[0]+arr[1]
        ans+=temp
        arr.shift()
        arr.shift()
        arr.push(temp)
        arr.sort()
    }
    return ans
}

module.exports=mincost;
