export default function list(list = {
  index: 2,
  data: [
    {
      id: 0,
      title: '列表项-0'
    },
    {
      id: 1,
      title: '列表项-1'
    }
  ]
}, action) {
  switch (action.type) {
    case 'list/add':
      let { index } = list
      return {
        index: index + 1,
        data: [
          ...list.data,
          { id: index, title: action.title }
        ]
      }
    case 'list/remove':
      return {
        index: list.index,
        data: list.data.filter(item => item.id !== action.id)
      }
    default:
      return list
  }
}
