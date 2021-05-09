import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import TrainingProgramsService from '../../services/TrainingProgramsService';
import TrainingProgramListCard from '../../components/training-program/TrainingProgramListCard';

export default function TrainingProgramDetails() {
  const params = useParams();

  const trainingProgram = TrainingProgramsService.findTrainingProgramById(params.id);
  if (!trainingProgram) {
    return <Alert variant="danger">Training program not found</Alert>;
  }
  return (
    <div>
      <h1>Training program Details</h1>
      <TrainingProgramListCard trainingProgram={trainingProgram} />
      <pre>{JSON.stringify(trainingProgram, null, 2)}</pre>
    </div>
  );
}
