import { ReactNode } from 'react'
import { TitleContainer } from './style'

interface ITitleProps {
  size: 'small' | 'middle' | 'large'
  children: ReactNode
}

export function Title({ size, children }: ITitleProps) {
  return <TitleContainer size={size}>{children}</TitleContainer>
}