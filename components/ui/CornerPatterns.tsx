'use client'

interface CornerPatternsProps {
  /** Pattern image URL */
  patternUrl?: string
  /** Opacity of the patterns (0-100) */
  opacity?: number
  /** Size of corner patterns */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Fill color for the wave (hex or rgb) */
  fillColor?: string
  /** Which corners to show */
  corners?: {
    topLeft?: boolean
    topRight?: boolean
    bottomLeft?: boolean
    bottomRight?: boolean
  }
}

// Responsive size classes: smaller on mobile, larger on desktop
const sizeClasses = {
  sm: 'w-[50px] h-[50px] md:w-[150px] md:h-[150px]',
  md: 'w-[66px] h-[66px] md:w-[200px] md:h-[200px]',
  lg: 'w-[82px] h-[82px] md:w-[280px] md:h-[280px]',
  xl: 'w-[114px] h-[114px] md:w-[350px] md:h-[350px]',
}

export function CornerPatterns({
  patternUrl = '/pattern_horizontal_continued_2.png',
  opacity = 100,
  size = 'md',
  fillColor = '#C41E3A',
  corners = {
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true,
  },
}: CornerPatternsProps) {
  const sizeClass = sizeClasses[size]

  return (
    <>
      {/* Top Left Corner - Organic wave blob */}
      {corners.topLeft && (
        <div
          className={`absolute top-0 left-0 pointer-events-none ${sizeClass}`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pattern-top-left"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href={patternUrl}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
              <clipPath id="wave-clip-top-left">
                <path d="M0,0 L300,0 L300,50 Q250,80 200,100 Q140,130 100,180 Q60,230 50,300 L0,300 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#wave-clip-top-left)">
              <rect
                width="300"
                height="300"
                fill={fillColor}
                style={{ opacity: opacity / 100 }}
              />
              <rect
                width="300"
                height="300"
                fill="url(#pattern-top-left)"
                style={{ opacity: 0.3, mixBlendMode: 'overlay' }}
              />
            </g>
          </svg>
        </div>
      )}

      {/* Top Right Corner - Organic wave blob */}
      {corners.topRight && (
        <div
          className={`absolute top-0 right-0 pointer-events-none ${sizeClass}`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pattern-top-right"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href={patternUrl}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
              <clipPath id="wave-clip-top-right">
                <path d="M0,0 L300,0 L300,300 L250,300 Q240,230 200,180 Q160,130 100,100 Q50,80 0,50 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#wave-clip-top-right)">
              <rect
                width="300"
                height="300"
                fill={fillColor}
                style={{ opacity: opacity / 100 }}
              />
              <rect
                width="300"
                height="300"
                fill="url(#pattern-top-right)"
                style={{ opacity: 0.3, mixBlendMode: 'overlay' }}
              />
            </g>
          </svg>
        </div>
      )}

      {/* Bottom Left Corner - Organic wave blob */}
      {corners.bottomLeft && (
        <div
          className={`absolute bottom-0 left-0 pointer-events-none ${sizeClass}`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pattern-bottom-left"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href={patternUrl}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
              <clipPath id="wave-clip-bottom-left">
                <path d="M0,0 L50,0 Q60,70 100,120 Q140,170 200,200 Q250,220 300,250 L300,300 L0,300 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#wave-clip-bottom-left)">
              <rect
                width="300"
                height="300"
                fill={fillColor}
                style={{ opacity: opacity / 100 }}
              />
              <rect
                width="300"
                height="300"
                fill="url(#pattern-bottom-left)"
                style={{ opacity: 0.3, mixBlendMode: 'overlay' }}
              />
            </g>
          </svg>
        </div>
      )}

      {/* Bottom Right Corner - Organic wave blob */}
      {corners.bottomRight && (
        <div
          className={`absolute bottom-0 right-0 pointer-events-none ${sizeClass}`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pattern-bottom-right"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image
                  href={patternUrl}
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
              <clipPath id="wave-clip-bottom-right">
                <path d="M300,0 L250,0 Q240,70 200,120 Q160,170 100,200 Q50,220 0,250 L0,300 L300,300 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#wave-clip-bottom-right)">
              <rect
                width="300"
                height="300"
                fill={fillColor}
                style={{ opacity: opacity / 100 }}
              />
              <rect
                width="300"
                height="300"
                fill="url(#pattern-bottom-right)"
                style={{ opacity: 0.3, mixBlendMode: 'overlay' }}
              />
            </g>
          </svg>
        </div>
      )}
    </>
  )
}
