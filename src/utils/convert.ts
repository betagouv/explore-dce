import { toKebabCaseProps } from "./camelToKebabCase";

export const convertLineToTable = (...data: any) => {
    if (!data.every((d: any) => JSON.stringify(d.x) === JSON.stringify(data[0].x))) {
        throw new Error("All 'x' elements must be equal across data sets.");
    }
    const x = data[0].x.flat();
    const y = data.reduce((acc: any[], curr: any) => {
        return [...acc, ...curr?.y];
    }, []);
    const name = data.reduce((acc: any[], curr: any) => {
        return [...acc, ...curr?.name];
    }, []);
    const t = {
        "x": x,
        "y": y,
        "name": name,
    }
    return toKebabCaseProps(t);
}

export const convertBarToTable = (...data: any) => {
    return convertLineToTable(...data);
}

export const convertBarlineToTable = (...data: any) => {
    if (!data.every((d: any) => JSON.stringify(d.x) === JSON.stringify(data[0].x))) {
        throw new Error("All 'x' elements must be equal across data sets.");
    }
    const x = data[0].x.flat();
    const y = data.reduce((acc: any[], curr: any) => {
        return [
            ...acc,
            ...(curr?.yLines ?? []),
            ...(curr?.yBars ?? [])
        ];
    }, []);
    const name = data.reduce((acc: any[], curr: any) => {
        return [
            ...acc,
            ...(curr?.nameLines ?? []),
            ...(curr?.nameBars ?? [])
        ];
    }, []);

    const t = {
        "x": x,
        "y": y,
        "name": name,
    }
    return toKebabCaseProps(t);
}

export const convertArealineToTable = (...data: any) => {
    if (!data.every((d: any) => JSON.stringify(d.x) === JSON.stringify(data[0].x))) {
        throw new Error("All 'x' elements must be equal across data sets.");
    }
    const x = data[0].x.flat();
    const y = data.reduce((acc: any[], curr: any) => {
        return [
            ...acc,
            ...(curr?.yLines ?? []),
            ...(curr?.yAreas ?? [])
        ];
    }, []);
    const name = data.reduce((acc: any[], curr: any) => {
        return [
            ...acc,
            ...(curr?.nameLines ?? []),
            ...(curr?.nameAreas ?? [])
        ];
    }, []);

    const t = {
        "x": x,
        "y": y,
        "name": name,
    }
    return toKebabCaseProps(t);
}

export const convertTreeToTable = (data: any) => {
    const t = {
        "x": data.names,
        "y": [data.tree],
        "name": ["Valeurs"],
    }
    return toKebabCaseProps(t);
}