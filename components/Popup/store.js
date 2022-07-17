import create from 'zustand'

export default create((set) => ({
  stack: [],
  open: params => set(state => ({ stack: state.stack.push(params)})),
  close: () => set(state => ({ stack: state.stack.slice(1) })),
}))
