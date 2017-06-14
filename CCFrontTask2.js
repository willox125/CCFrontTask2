exports.damage = function(spellString)
{
	var spell = spellString.toLowerCase();
	var spellNew = "";
	var damage = 0;
	var correct = false;
	
	// if spell starts with "fe" and ends with "ai" -> spell is correct
	for(var i=0; i<=spell.length; i++)
	{
		if((spell.charAt(i) == 'f') && (spell.charAt(i+1) == 'e'))
		{
			for(var j=spell.length; j>i+1; j--)
			{
				if((spell.charAt(j) == 'i') && (spell.charAt(j-1) == 'a'))
				{
					spellNew = spell.substring(i,j+1); // removing unnecessary letters
					correct = true;
					spell = "";
				}
			}
		}
	}
	
	// if there is more than one "fe" -> spell is incorrect; function returns 0
	if(correct == true)
	{
		for(var i=2; i<=spellNew.length; i++)
		{
			if((spellNew.charAt(i) == 'f') && (spellNew.charAt(i+1) == 'e'))
			{
				correct = false;
				return 0;
			}
		}
	}
	
	// if spell is correct (starts with "fe", ends with "ai", contains only one "fe") -> find subspells, increase/decrease damage
	if(correct == true)
	{
		damage = damage + 1; // increase damage by 1 (because of "fe")
		
		var i = 2; // "while" starts from third letter
		while(i<spellNew.length)
		{
			if((spellNew.charAt(i) == 'j') && (spellNew.charAt(i+1) == 'e'))
			{
				damage = damage + 2;
				i = i + 2;
			}
			else if((spellNew.charAt(i) == 'n') && (spellNew.charAt(i+1) == 'e'))
			{
				damage = damage + 2;
				i = i + 2;
			}
			else if((spellNew.charAt(i) == 'a') && (spellNew.charAt(i+1) == 'i'))
			{
				damage = damage + 2;
				i = i + 2;
			}
			else if((spellNew.charAt(i) == 'j') && (spellNew.charAt(i+1) == 'e') && (spellNew.charAt(i+2) == 'e'))
			{
				damage = damage + 3;
				i = i + 3;
			}
			else if((spellNew.charAt(i) == 'a') && (spellNew.charAt(i+1) == 'i') && (spellNew.charAt(i+2) == 'n'))
			{
				damage = damage + 3;
				i = i + 3;
			}
			else if((spellNew.charAt(i) == 'd') && (spellNew.charAt(i+1) == 'a') && (spellNew.charAt(i+2) == 'i'))
			{
				damage = damage + 3;
				i = i + 3;
			}
			else
			{
				damage = damage - 1;
				i = i + 1;
			}
		}
	}
	
	if(damage<=0)
	{
		damage = 0;
	}

	return damage;
}