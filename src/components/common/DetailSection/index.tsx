import { ViewWrapper, Detail, Label } from './styles';

type DetailSectionProp = {
  label: string;
  value: string;
};
const DetailSection = ({ label, value }: DetailSectionProp) => {
  return (
    <ViewWrapper testID='detail_section'>
      <Label>{label}</Label>
      <Detail isEmail={value.indexOf('@') >= 0}>{value}</Detail>
    </ViewWrapper>
  );
};

export default DetailSection;
