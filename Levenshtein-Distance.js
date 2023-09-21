/*
In information theory and computer science, 
the Levenshtein distance is a string metric for measuring the difference between two sequences. 
Informally, the Levenshtein distance between two words is the minimum number of single-character edits 
(i.e. insertions, deletions or substitutions) required to change one word into the other.

Your task is to implement a function which calculates the Levenshtein distance for two arbitrary strings.
*/


// Solution

function levenshtein(a, b) {
  return distance(a, b, a.length, b.length)
  
  function distance(a, b, x, y) {
    if (!x) return y
    if (!y) return x
    
    return Math.min(
      distance(a, b, x - 1, y) + 1,
      distance(a, b, x, y - 1) + 1,
      distance(a, b, x - 1, y - 1) + (a[x - 1] != b[y - 1] ? 1 : 0)
    )
  }
}

//or

function levenshtein(str1,str2) {
  const edits = []
	for(let i = 0; i < str2.length + 1; i++){
		const row = []
		for(let j = 0; j < str1.length + 1; j++){
			row.push(j)
		}
		row[0] = i
		edits.push(row)
	}
	for(let i = 1; i < str2.length + 1; i++){
		for(let j = 1; j < str1.length + 1; j++){
			if(str2[i - 1] === str1[j - 1]){
				edits[i][j] = edits[i - 1][j - 1];
			}else{
				edits[i][j] = 1 + Math.min(edits[i - 1][j], edits[i-1][j-1], edits[i][j-1])
			}
		}
	}
	return edits[str2.length][str1.length]
}