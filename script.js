function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s1 === '' || s2 === '') {
        return -1;
    }

	s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    // Check if s1 includes s2 (case-sensitive)
    if (s1.includes(s2)) {
        let index = s1.indexOf(s2);
        return index;
    } else {
        return -1;
    }

}
// Please do not change the code below
const s1 = prompt("Enter s1:"); const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
