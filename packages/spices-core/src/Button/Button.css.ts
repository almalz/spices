import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: '#FFAAAA',
  color: '#FFFFFF',
  padding: '4px 16px',
  borderRadius: '3px',
  border: 'none',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#FF9999',
  },
})
