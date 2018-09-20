export function splitter(text: string, separator: string) {
    if (text.indexOf(separator) > -1) {
        return text.split(separator).filter((el) => {
            { return el.length !== 0; }
        });
    }
    return [text];
}

export function isEmptyOr(text: string, orText: string) {
    return (text === "" || text === orText);
}


export function replaceLastWordWith(text: string, newWord: string) {
    if (!newWord || newWord.length === 0) {
        return text;
    }
    const inputs = text.split(" ");
    const latestWord = inputs[inputs.length - 1];
    const lastIndex = text.lastIndexOf(latestWord);
    return text.substr(0, lastIndex) + "" + newWord;
}
