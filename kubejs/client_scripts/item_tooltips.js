//Cyan Text
onEvent('item.tooltip', e => {
let t = (i, o, s) => {
  e.add(i, '')
  let line = ''
  o.split(' ').forEach(word => {
    line.length == 0 ? line = word : line += ` ${word}`
    if (line.length > 303) {
      e.add(item, Text.of(line).red())
      line = ''
    }
  })
  if (line.length > 0) e.add(i, Text.of(line).darkRed())
  if (s) e.add(i, Text.of(`   - ${s}`).darkRed())
  e.add(i, '')
}
//Andesite Alloy
//t('create:andesite_alloy', 'Only craftable with a Smeltery or a Mixer/Induction Smelter !')
})
