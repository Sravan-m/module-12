var deepEqual = function(a,b)
{
	if(a === b)
	{
		return true
	}
	else if((typeof a == "object" && a!=null) && (typeof b == "object" && b!=null)) 
	{
		if (Object.keys(a).length != Object.keys(b).length) 
		{
			return false
		}
		for(var i in a)
		{
			if(b.hasOwnProperty(i))
			{
				if(!deepEqual(a[i],b[i]))
				{
					return false
				}
			}
			else
			{
				return false
			}
		}
		return true
	}
	else
	{
		return false
	}
}
obj = {
	name: 'Sravan',
	age: 26,
	city: 'Chirala'
}
obj1 = {
	name: 'Sravan',
	age: 26,
	city: 'Chirala'
}
console.log(deepEqual(obj,obj1))