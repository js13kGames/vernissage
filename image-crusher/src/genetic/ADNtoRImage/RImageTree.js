import { ADNtoRImage } from './ADNtoRImage'
import { draw, add } from '../'
import { SIZE } from '../../param'

import type { RImage, ADN, Mutation } from '../../type'

export type RImageTree =
    | { rImage: RImage, children: [RImageTree, RImageTree] }
    | RImage
    | null

export const create = (adn: ADN): RImageTree => {
    switch (adn.length) {
        case 0:
            return null
        case 1:
            return ADNtoRImage(adn, null)
        default: {
            const k = Math.floor(adn.length / 2)

            const children = [create(adn.slice(0, k)), create(adn.slice(k))]

            const rImage = add(children[0], children[1])

            return { children, rImage }
        }
    }
}

const DEPTH = Math.ceil(Math.log(SIZE) / Math.LN2) -1

const mutateDot = (
    ancestor: RImageTree,
    mutation: Mutation,
    k: number,
    n: number
) => {
    if (k == 1) return ADNtoRImage([mutation.dot], null)

    const next = +(!!mutation.k & k)

    }
}

export const mutate = (ancestor: RImageTree, mutation: Mutation) => {
    switch (mutation.type) {
        case 'dot':
            return mutateDot(ancestor, mutation, 1 << DEPTH, 0)

        default:
            return create(applyMutation(ancestor, mutation))
    }
}
