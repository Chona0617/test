export const Test = r => {
  require.ensure(
    [],
    () => {
      r(require('@/components/test/test'))
    },
    'test'
  )
}
