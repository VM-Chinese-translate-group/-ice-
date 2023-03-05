//Blocks
onEvent('block.registry', event => {
  //Frozen Wood
  event.create('frozen_oak').material('wood').hardness(2).displayName('Frozen Oak')
})

//Items
onEvent('item.registry', event => {

//Uncompleted Time in a Bottle
event.create('un_tiab').displayName('Uncompleted Time in a Bottle')
//Gelid Enderium Ingot
event.create('gelid_enderium_ingot').displayName('Gelid Enderium Ingot')
//Gelid Processor
event.create('gelid_processor').displayName('Gelid Processor')
//Dielectric Mixture
event.create('dielectric_mixture').displayName('Dielectric Mixture')
//Void Metal
event.create('void_metal').displayName('Void Metal')
//Freezed Nitro Ingot
event.create('nitrozed_ingot').displayName('Freezed Nitro Ingot')
//Condensed Energy
event.create('ce').displayName('Condensed Energy')
})

//Fluids
onEvent('fluid.registry', event => {
  //Liquid Aura
  event.create('liquid_aura').textureThick(0x258503).bucketColor(0x258503).displayName('Liquid Aura')
  //Gelid Cryotheum
  event.create('gelid_cryotheum').textureThick(0x73deff).bucketColor(0x73deff).displayName('Gelid Cryotheum')
  //Dielectric Liquid
  event.create('dielectric_liquid').textureThick(0x212121).bucketColor(0x212121).displayName('Dielectric Liquid')
})
