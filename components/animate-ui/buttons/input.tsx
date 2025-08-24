"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import * as React from "react";

type InputButtonContextType = {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};
const InputButtonContext = React.createContext<InputButtonContextType | undefined>(undefined);

const useInputButton = (): InputButtonContextType => {
  const context = React.useContext(InputButtonContext);
  if (!context) {
    throw new Error("useInputButton must be used within a InputButton");
  }
  return context;
};

type InputButtonProviderProps = React.ComponentProps<"div"> & Partial<InputButtonContextType>;

function InputButtonProvider({
  className,
  showInput,
  setShowInput,
  id,
  ...props
}: InputButtonProviderProps) {
  const localId = React.useId();
  const [localShowInput, setLocalShowInput] = React.useState(false);

  return (
    <InputButtonContext.Provider
      value={{
        showInput: showInput ?? localShowInput,
        setShowInput: setShowInput ?? setLocalShowInput,
        id: id ?? localId,
      }}
    >
      <div
        data-slot="input-button-provider"
        className={cn(
          "relative flex h-10 w-fit items-center justify-center transition-all duration-300 ease-in-out",
          (showInput || localShowInput) && "w-full max-w-[400px]",
          className,
        )}
        {...props}
      />
    </InputButtonContext.Provider>
  );
}

type InputButtonProps = React.ComponentProps<"div">;

function InputButton({ className, ...props }: InputButtonProps) {
  return <div data-slot="input-button" className={cn("flex size-full", className)} {...props} />;
}

type InputButtonActionProps = React.ComponentProps<"button">;

function InputButtonAction({ className, ...props }: InputButtonActionProps) {
  const { setShowInput } = useInputButton();

  return (
    <button
      data-slot="input-button-action"
      className={cn(
        "text-background-foreground size-full shrink-0 cursor-pointer rounded-full border bg-background pr-12 pl-4 text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:shrink-0",
        className,
      )}
      onClick={() => setShowInput((prev) => !prev)}
      {...props}
    />
  );
}

type InputButtonSubmitProps = React.ComponentProps<"button"> & {
  icon?: React.ElementType;
};

function InputButtonSubmit({
  className,
  children,
  icon: Icon = ArrowRight,
  ...props
}: InputButtonSubmitProps) {
  const { showInput, setShowInput } = useInputButton();

  return (
    <button
      data-slot="input-button-submit"
      className={cn(
        "absolute inset-y-1 right-1 z-[1] flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-sm font-medium whitespace-nowrap text-primary-foreground transition-all duration-300 ease-in-out outline-none hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        showInput ? "px-4" : "aspect-square",
        className,
      )}
      onClick={() => setShowInput((prev) => !prev)}
      {...props}
    >
      {showInput ? (
        <span className="animate-in fade-in-0 zoom-in-95 duration-200">{children}</span>
      ) : (
        <span className="animate-in fade-in-0 zoom-in-95 duration-200">
          <Icon className="size-4" />
        </span>
      )}
    </button>
  );
}

type InputButtonInputProps = React.ComponentProps<"input">;

function InputButtonInput({ className, ...props }: InputButtonInputProps) {
  const { showInput } = useInputButton();

  if (!showInput) return null;

  return (
    <div className="animate-in fade-in-0 absolute inset-0 flex size-full items-center justify-center duration-300">
      <div className="relative flex size-full items-center rounded-full bg-background transition-all duration-300 ease-in-out">
        <input
          data-slot="input-button-input"
          className={cn(
            "absolute inset-0 size-full shrink-0 rounded-full border bg-background py-2 pr-32 pl-4 text-sm selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}

export {
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonProvider,
  InputButtonSubmit,
  useInputButton,
  type InputButtonActionProps,
  type InputButtonInputProps,
  type InputButtonProps,
  type InputButtonProviderProps,
  type InputButtonSubmitProps,
};
