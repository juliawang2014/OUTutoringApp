import { render, screen } from '@testing-library/react';
import HomePage from '../frontend/components/Home/HomePage';

test('renders Homepage and its components', () => {
    //Arrange
    render(<HomePage />);

    //Act
    //no acts to test

    //Assert
    const TutorDenLogo = screen.getByText('TutorDen');
    expect(TutorDenLogo).toBeInTheDocument();
});