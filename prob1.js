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

function countChar(str,letter)
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

console.log('BoBBLinG')
console.log(countChar('opportunnity','o'))