import * as PARAM from '../param'
import { drawCircle, clear, createBlank } from '../util/rImage/draw'

import type { ADN, Dot } from './type'
import type { RImage } from '../type'

export const ADNtoRImage = (adn: ADN, targetRImage: RImage | null): RImage => {
    const rImage: RImage = targetRImage ? clear(targetRImage) : createBlank()

    adn.forEach(({ x, y, r, color, opacity }) =>
        drawCircle(
            rImage,
            x,
            y,
            PARAM.RADIUS_AVAILABLE[r],
            PARAM.COLOR_PALETTE[color],
            PARAM.OPACITY_AVAILABLE[opacity]
        )
    )

    return rImage
}

const createMemoizedADNtoRImage = () => {
    const memory = []
    const getRImage = (adn: ADN) => {
        const x = memory.find(x => x.adn === adn)

        if (x) return x.rImage

        let rImage = null
        while (memory.length > 50) rImage = memory.shift().rImage

        rImage = ADNtoRImage(adn, rImage)

        memory.push({ adn, rImage })

        return rImage
    }

    return getRImage
}

export const getRImage = createMemoizedADNtoRImage()
