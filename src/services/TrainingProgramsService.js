import trainingProgramListFactory from '../__mocks__/training-program';

class TrainingProgramsService {
  constructor() {
    this.trainingPrograms = trainingProgramListFactory();
  }

  getTrainingPrograms() {
    return this.trainingPrograms;
  }

  findTrainingProgramById(id) {
    return this.trainingPrograms.find((trainingProgram) => trainingProgram._id === id);
  }

  findTrainingProgramByType(type) {
    return this.trainingPrograms.filter((trainingProgram) => trainingProgram.type === type);
  }
}

export default new TrainingProgramsService();
