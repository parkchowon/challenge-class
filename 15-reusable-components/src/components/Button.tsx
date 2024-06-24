import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "border rounded font-semibold transition hover:brightness-90 active:brightness-75",
  {
    variants: {
      intent: {
        primary: "bg-sky-500 border-sky-500 ",
        secondary: "bg-slate-500 border-slate-500 ",
        danger: "bg-red-500 border-red-500 ",
      },
      size: {
        sm: "px-3 py-1 rounded text-[13px]",
        md: "px-4 py-1.5 rounded text-[15px]",
        lg: "px-5 py-2 rounded text-[17px]",
      },
      variant: {
        outline: "bg-white",
        contained: "text-white",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "outline",
        className: "text-sky-500",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "text-slate-500",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "text-red-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

type ButtonProps = {} & ButtonVariant & ComponentProps<"button">;

function Button({
  intent,
  size,
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={buttonVariant({ intent, variant, size })} {...props}>
      {children}
    </button>
  );
}

export default Button;
