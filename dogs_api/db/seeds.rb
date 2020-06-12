Bone.destroy_all
Dog.destroy_all

bixby = Dog.create({ name: "Bixby", age: 7 })
fluffy = Dog.create({ name: "Fluffy", age: 3 })
floofy = Dog.create({ name: "Floofy", age: 6 })
fleming = Dog.create({ name: "Fleming", age: 1 })
dory = Dog.create({ name: "Dory", age: 11 })
sunshine = Dog.create({ name: "Sunshine", age: 10 })
snickers = Dog.create({ name: "Snickers", age: 13 })
ranger = Dog.create({ name: "Ranger", age: 5 })

Bone.create(name: 'Beef', quality: '4', dog: bixby)
Bone.create(name: 'Elk', quality: '4', dog: fluffy)
Bone.create(name: 'Moose', quality: '4', dog: dory)
Bone.create(name: 'Buffalo', quality: '5', dog: fleming)
Bone.create(name: 'Beef', quality: '4', dog: sunshine)
Bone.create(name: 'Antler', quality: '5', dog: bixby)
Bone.create(name: 'Elk', quality: '4', dog: snickers)
Bone.create(name: 'Beef', quality: '4', dog: ranger)