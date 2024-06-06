import { useForm } from "react-hook-form";
import { IconInput } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import {
  EMAIL,
  EMAIL_FVM,
  FIRST_NAME,
  FIRST_NAME_FVM,
  GET_IN_TOUCH,
  LAST_NAME,
  LAST_NAME_FVM,
  MESSAGE,
  MESSAGE_FVM,
  PHONE,
  PHONE_FVM,
  READY_FOR_NEXT_PROJECT,
  SUMBIT,
} from "../utils/appConstants";
import AppFormInput from "./AppFormInput";
function BottomNav() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function notify(vals: any) {
    console.log(vals);
  }
  return (
    <div className="flex flex-col gap-y-6 bg-background lg:flex-row lg:bg-primary lg:p-10 lg:justify-center lg:items-center">
      <div className="flex h-fit w-full flex-col gap-2 bg-primary p-3 text-center text-primary-foreground lg:items-center lg:justify-center">
        <h2 className="text-3xl font-bold">{READY_FOR_NEXT_PROJECT}</h2>
        <p className="text-sm  font-normal">{GET_IN_TOUCH}</p>
        <img src="homeMain1.jpg" className="mt-6 w-[40vw] h-[40vh]  rounded-lg hidden lg:block " />
      </div>
      <form
        onSubmit={handleSubmit(notify)}
        className="flex w-full flex-col gap-y-5 px-6 lg:w-[50vw] lg:bg-background lg:py-6 lg:rounded-lg"
      >
        <AppFormInput error={errors?.FN?.message}>
          <IconInput
            {...register("FN", {
              required: FIRST_NAME_FVM,
            })}
            accept={FIRST_NAME}
            alt="FN"
          />
        </AppFormInput>
        <AppFormInput error={errors?.LN?.message}>
          <IconInput
            {...register("LN", {
              required: LAST_NAME_FVM,
            })}
            accept={LAST_NAME}
            alt="LN"
          />
        </AppFormInput>
        <AppFormInput error={errors?.PHONE?.message}>
          <IconInput
            {...register("PHONE", {
              required: PHONE_FVM,
            })}
            accept={PHONE}
            alt="PHONE"
          />
        </AppFormInput>
        <AppFormInput error={errors?.EMAIL?.message}>
          <IconInput
            {...register("EMAIL", {
              required: EMAIL_FVM,
            })}
            accept={EMAIL}
            alt="EMAIL"
          />
        </AppFormInput>
        <AppFormInput error={errors?.MESSAGE?.message}>
          <IconInput
            {...register("MESSAGE", {
              required: MESSAGE_FVM,
            })}
            placeholder={MESSAGE}
            className="h-[10vh] w-[95vw] 
    text-wrap px-2"
          />
        </AppFormInput>
        <div className="mt-3">
          <Button className=" lg:bg-destructive lg:hover:scale-105  lg:hover:bg-destructive">{SUMBIT}</Button>
        </div>
      </form>
    </div>
  );
}
export default BottomNav;
