function countBs(str)
{
	var letter_count = 0;
	for(let i=0; i<str.length; i++)
	{
		if(str.charAt(i) === 'B')
		{
			letter_count++
		}
	}
	return letter_count
}

console.log(countBs('BoBBLinG'))