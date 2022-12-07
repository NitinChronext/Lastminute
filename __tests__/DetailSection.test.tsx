import renderer from 'react-test-renderer';
import DetailSection from '../src/components/common/DetailSection';
import { ThemeProvider } from 'styled-components/native';
import { themes } from '../src/themes/theme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Text } from 'react-native';

describe('<DetailSection />', () => {
  it('has 1 child', () => {
    const component = shallow(
      <ThemeProvider theme={themes.default}>
        <DetailSection label='label' value='value' />
      </ThemeProvider>,
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    component.unmount();
  });

  it('should render detail section', () => {
    const tree = renderer.create(
      <ThemeProvider theme={themes.default}>
        <DetailSection label='label' value='value' />
      </ThemeProvider>,
    );

    const detail = tree.root.findByProps({ testID: 'detail_section' });
    expect(detail).toBeDefined();
    tree.unmount();
  });

  it('should have 2 text fields', () => {
    const tree = renderer.create(
      <ThemeProvider theme={themes.default}>
        <DetailSection label='label' value='value' />
      </ThemeProvider>,
    );

    const textInst = tree.root.findAllByType(Text);
    expect(textInst.length).toBe(2);
    tree.unmount();
  });
});
