import type { RImage, Color } from '../type'

export type Dot = {
    x: number,
    y: number,

    // index in the available values array
    r: number,

    // index in the available values param array
    color: number,

    // index in the available values param array
    opacity: number,
}

export type Mutation = {
    type : 'dot_mutation',

    k : number,

    dot : Dot,
} | {
    type : 'dot_permutation',

    a : number,
    b : number,
}

export type ADN = Dot[]
