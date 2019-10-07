import { push, pop, peek } from '../src/heapify'

test('test push', () => {
  const heap = [{ dueTime: 1 }, { dueTime: 3 }]
  const heap2 = [{ dueTime: 3 }]

  const newTask = {
    dueTime: 2
  }

  push(heap, newTask)
  push(heap2, newTask)
  const first = peek(heap)

  expect(heap).toStrictEqual([{ dueTime: 1 }, { dueTime: 3 }, { dueTime: 2 }])
  expect(heap2).toStrictEqual([{ dueTime: 2 }, { dueTime: 3 }])
  expect(first).toStrictEqual({ dueTime: 1 })
})

test('test pop', () => {
  const heap1 = [{ dueTime: 1 }, { dueTime: 2 }, { dueTime: 3 }]
  pop(heap1)

  const heap2 = [{ dueTime: 3 }, { dueTime: 1 }, { dueTime: 2 }, { dueTime: 5 }]
  pop(heap2)
  pop(heap2)

  let heap3 = []
  heap3 = pop(heap3)

  let heap4 = [{ dueTime: 2 }, { dueTime: 4 }, { dueTime: 3 }]
  pop(heap4)

  // const heap4 = [{ dueTime: 3 }, { dueTime: 0.5 },{ dueTime: 1 }, { dueTime: 2 }]
  // pop(heap4)
  // pop(heap4)
  // pop(heap4)

  expect(heap1).toStrictEqual([{ dueTime: 2 }, { dueTime: 3 }])
  expect(heap2).toStrictEqual([{ dueTime: 1 }, { dueTime: 5 }])
  expect(heap3).toStrictEqual(null)
  expect(heap4).toStrictEqual([{ dueTime: 3 }, { dueTime: 4 }])
})
