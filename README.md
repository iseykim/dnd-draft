- [dnd guide](https://vijayt.com/post/drag-and-drop-using-react-dnd/)
- [immer](https://immerjs.github.io/immer/example-setstate)

### Create minimal DnD with Immer

- In `App.tsx`, uses `useImmer` to mutate without the use of manual deep copy.
- Box and Card shows minimal example
  - in `Box.tsx`, `drop` function in `useDrop` hook fires after successful drop (can be blocked by `canDrop`?)
  - `Card.tsx` shows minimal `useDrag` with conditional styling (Tailwind works with interpolation now?)

### TODO

- [ ] Create nested list visualization and data structure to mock
- [ ] Separately test `immer` updates
- [ ] Implement simplest implementations


https://user-images.githubusercontent.com/76843977/192199215-0ebe4033-49f4-4fc9-85a1-9ce7374151b5.mp4

