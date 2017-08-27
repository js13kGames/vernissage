import * as PARAM from '../../param'
import { drawCircle, clear, createBlank } from '../../util/rImage/draw'

import type { RImage, ADN, Dot } from '../../type'

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
