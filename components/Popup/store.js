import create from 'zustand'

import templates from './templates'

export default create((set) => ({
  stack: [],
  open: id => {
    const template = templates[id]
    if(template) {
      set(state => ({ stack: [...state.stack, templates[id]]}))
    }
  },
  close: () => set(state => ({ stack: state.stack.slice(1) })),
}))
