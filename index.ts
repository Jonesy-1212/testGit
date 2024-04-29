const a = 1234

const fun = ({ item }: { item: any }) => {
  console.log('item', item)
}

fun({ item: 1 })
