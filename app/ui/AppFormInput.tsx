import { ReactNode } from "react";

interface AppFormInputInterface {
  children: ReactNode;
  error: any;
}
function AppFormInput({ children, error }: AppFormInputInterface) {
  return (
    <div className="flex flex-col gap-y-1 ">
      {children}
      <label className="text-destructive text-xs">{error}</label>
    </div>
  );
}

export default AppFormInput