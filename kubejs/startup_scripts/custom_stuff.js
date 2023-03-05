//Blocks
onEvent('block.registry', event => {
  //Frozen Wood
  event.create('frozen_oak').material('wood').hardness(2).displayName('冰封橡木')
})

//Items
onEvent('item.registry', event => {

//Uncompleted Time in a Bottle
event.create('un_tiab').displayName('未完成的时间之瓶')
//Gelid Enderium Ingot
event.create('gelid_enderium_ingot').displayName('极寒末影锭')
//Gelid Processor
event.create('gelid_processor').displayName('极寒处理器')
//Dielectric Mixture
event.create('dielectric_mixture').displayName('介质混合物')
//Void Metal
event.create('void_metal').displayName('虚空金属')
//Freezed Nitro Ingot
event.create('nitrozed_ingot').displayName('冷冻硝基锭')
//Condensed Energy
event.create('ce').displayName('浓缩能量')
})

//Fluids
onEvent('fluid.registry', event => {
  //Liquid Aura
  event.create('liquid_aura').textureThick(0x258503).bucketColor(0x258503).displayName('液体灵气')
  //Gelid Cryotheum
  event.create('gelid_cryotheum').textureThick(0x73deff).bucketColor(0x73deff).displayName('极寒之凛冰')
  //Dielectric Liquid
  event.create('dielectric_liquid').textureThick(0x212121).bucketColor(0x212121).displayName('液体介质')
})
