import { FontAwesome } from '@expo/vector-icons';

export type IconProps = {
  isActive: boolean;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
};

export const Icon = (props: IconProps) => {
  const { isActive, icon, size = 24, color } = props;
  return (
    <FontAwesome
      name={icon}
      style={{ marginBottom: 3, opacity: isActive ? 1.0 : 0.5 }}
      size={size}
      color={color}
    />
  );
};
