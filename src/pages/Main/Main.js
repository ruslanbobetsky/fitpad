import { Row, Col } from 'react-bootstrap';
import TrainingProgramListCard from '../../components/training-program/TrainingProgramListCard';
import TrainingProgramsService from '../../services/TrainingProgramsService';

export default function Main() {
  const trainingPrograms = TrainingProgramsService.getTrainingPrograms();

  return (
    <>
      <h1>Training Programs</h1>
      <Row>
        {trainingPrograms.map((trainingProgram) => (
          <Col key={trainingProgram._id} lg="3" md="4" sm="6" xs="6" className="mb-4">
            <TrainingProgramListCard trainingProgram={trainingProgram} />
          </Col>
        ))}
      </Row>
    </>
    );
}
