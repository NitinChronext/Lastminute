import Hotels from '../src/components/Hotels';
import { ThemeProvider } from 'styled-components/native';
import { themes } from '../src/themes/theme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('<Users component />', () => {
  //eslint-disable-next-line @typescript-eslint/require-await
  it('has 1 child', async () => {
    const component = shallow(
      <ThemeProvider theme={themes.default}>
        <Hotels />
      </ThemeProvider>,
    );

    setImmediate(() => {
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    component.unmount();
  });
});
