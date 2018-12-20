import { color } from "@artsy/palette"
import React from "react"

interface IconProps {
  fill?: string
  width?: number
  height?: number
  selected?: boolean
  style?: any
}

export const Heart: React.SFC<IconProps> = ({
  fill = "#000",
  width = 20,
  height = 20,
  selected = false,
  style = {},
}) => {
  return selected ? (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 18 18"
      {...style}
    >
      <g fill="none" fillRule="evenodd">
        <g
          transform="translate(1 1)"
          fill={color("purple100")}
          fillRule="nonzero"
        >
          <path d="M11,2 C9.93881482,1.99916554 8.92078842,2.42004572 8.17,3.17 L8,3.34 L7.83,3.17 C6.26703416,1.60703416 3.73296584,1.60703416 2.17,3.17 C0.607034158,4.73296584 0.607034158,7.26703416 2.17,8.83 L7.65,14.3 C7.74073333,14.3966772 7.86741409,14.4515186 8,14.4515186 C8.13258591,14.4515186 8.25926667,14.3966772 8.35,14.3 L13.83,8.83 C14.9753208,7.6859537 15.3181603,5.96436955 14.6984897,4.46883954 C14.0788192,2.97330954 12.6188267,1.99872604 11,2 Z" />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 18 18"
      {...style}
    >
      <g fill={fill}>
        <path
          d="M11,2 C9.93881482,1.99916554 8.92078842,2.42004572 8.17,3.17 L8,3.34 L7.83,3.17 C6.26703416,1.60703416 3.73296584,1.60703416 2.17,3.17 C0.607034158,4.73296584 0.607034158,7.26703416 2.17,8.83 L7.65,14.3 C7.74073333,14.3966772 7.86741409,14.4515186 8,14.4515186 C8.13258591,14.4515186 8.25926667,14.3966772 8.35,14.3 L13.83,8.83 C14.9753208,7.6859537 15.3181603,5.96436955 14.6984897,4.46883954 C14.0788192,2.97330954 12.6188267,1.99872604 11,2 Z M13.12,8.12 L8,13.24 L2.88,8.12 C2.31723005,7.55793057 2.00070021,6.7953814 2,6 C2,4.34314575 3.34314575,3 5,3 C5.7953814,3.00070021 6.55793057,3.31723005 7.12,3.88 L7.65,4.4 L8,4.76 L8.35,4.4 L8.88,3.88 C9.44206943,3.31723005 10.2046186,3.00070021 11,3 C12.6568542,3 14,4.34314575 14,6 C13.9992998,6.7953814 13.6827699,7.55793057 13.12,8.12 Z"
          transform="translate(1 1)"
          fill={fill}
          stroke={fill}
          strokeWidth={0.3}
        />
      </g>
    </svg>
  )
}
