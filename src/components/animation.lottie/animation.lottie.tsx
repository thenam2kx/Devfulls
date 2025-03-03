'use client'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useEffect, useMemo, useRef } from 'react'

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationPath: any
  width?: string
}

const AnimationLottie = ({ animationPath, width = '95%' }: IProps) => {

  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const defaultOptions = useMemo(
    () => {
      return {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
          width
        },
        lottieRef: lottieRef
      }
    },
    [animationPath, width]
  )

  useEffect(() => {
    return () => {
      if (lottieRef && lottieRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        lottieRef?.current.destroy()
      }
    }
  }, [])

  return (
    <Lottie
      {...defaultOptions} />
  )
}

export default AnimationLottie