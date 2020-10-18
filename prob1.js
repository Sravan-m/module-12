function count(str,letter)
{
	var letter_count = 0;
	for(let i=0; i<str.length; i++)
	{
		if(str.charAt(i) === letter)
		{
			letter_count++
		}
	}
	return letter_count
}

console.log(count('BoBBLinG','B'))