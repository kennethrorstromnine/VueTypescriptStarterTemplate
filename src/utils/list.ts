export function findByAttr(list: any[], attr: string, attrValue: any) {
    for (const o of list) {
        if (o[attr] === attrValue) {
            return o;
        }
    }
    return null;
}

export function matchStartsWithByAttr(list: any[], attr: string, match: any) {
    const r: any[] = [];
    list.forEach((l) => {
        if (l[attr].substr(0, match.length) === match) {
            r.push(l[attr]);
        }
    });
    return r;
}

export function filterByAttr(list: any[], attr: string, match: any) {
    const r: any = [];
    list.forEach((l) => {
        if (l[attr] === match) {
            r.push(l[attr]);
        }
    });
    return r;
}

export function hasByAttr(list: any[], attr: string, attrValue: any) {
    return (findByAttr(list, attr, attrValue) != null);
}
