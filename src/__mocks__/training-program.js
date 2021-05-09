import faker from 'faker';

function foodImageFactory({ width = 320, height = 240 } = {}) {
  return `https://loremflickr.com/${width}/${height}/fintess?random=${faker.datatype.number()}`;
}

function unitFactory() {
  const units = [
    'pc',
    'kg',
    'g',
    'ml',
    'l',
    'teaspoon',
    'tablespoon',
    'cup',
    'slice',
  ];
  return faker.random.arrayElement(units);
}

function trainingProgram() {
  const images = [
    ...new Array(faker.datatype.number({ min: 1, max: 4 })),
  ].map(() => foodImageFactory());
  return {
    _id: faker.datatype.uuid(),
    name: faker.lorem.words(),
    featuredImage: images[0],
    images,
    trainingMinutes: faker.datatype.number({ min: 10, max: 2 * 60 }),
    authorId: faker.datatype.uuid(),
    notes: faker.lorem.sentences(),
    instructions: [...new Array(faker.datatype.number({ min: 3, max: 7 }))].map(
      faker.lorem.paragraph
    ),
  };
}

export default function trainingProgramListFactory(n = 50) {
  return [...new Array(n)].map(trainingProgram);
}
