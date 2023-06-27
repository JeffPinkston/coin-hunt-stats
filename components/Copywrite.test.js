import renderer from 'react-test-renderer'
import Copywrite from '../app/components/Copywrite'

it('sets the copywrite title', () => {
    const component = renderer.create(
        <Copywrite title="Copywrite" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})