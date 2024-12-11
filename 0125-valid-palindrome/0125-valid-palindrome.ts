function isPalindrome(s: string): boolean {
    let word = s.toLowerCase();
    console.log(word.length);
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/g;
    
    word = word.replace(reg, '');
    console.log(word);
    
    for(let i = 0; i < word.length; i++) {
        for(let j = word.length-i-1; j >= word.length-i-1; j--) {
            console.log(word[i], '===', word[j])
            if(word[i] !== word[j]) return false;
        }   
    }
    return true;
};