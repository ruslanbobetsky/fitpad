import { Link, generatePath } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import paths from '../../router/paths';
import classNames from './TrainingProgramListCard.module.scss';

export default function TrainingProgramListCard({ trainingProgram }) {
  return (
    <Link
      to={generatePath(paths.trainingProgramDetails, { id: trainingProgram._id })}
      className={classNames.cardLink}
    >
      <Card>
        <Card.Img
          variant="top"
          src={trainingProgram.featuredImage}
          alt={`${trainingProgram.name} image`}
        />
        <Card.Body>
          <Card.Title>{trainingProgram.name}</Card.Title>
          <Card.Text>
            {trainingProgram.notes}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
