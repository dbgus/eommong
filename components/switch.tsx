import { Button } from "grommet";

export interface SwitchProps {
  status: boolean;
  onToggle: () => void;
}
export function Switch({ status, onToggle }: SwitchProps) {
  return <Button primary onClick={onToggle} label="Toggle" />;
}
