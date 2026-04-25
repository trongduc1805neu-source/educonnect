import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  /* Base styles: 
     - Sử dụng font-medium và tracking-wide (khoảng cách chữ rộng)
     - Bo góc nhẹ nhàng (rounded-lg) tạo cảm giác hiện đại nhưng vẫn mực thước
     - Chuyển động (transition) mượt mà 
  */
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium tracking-wide ring-offset-paper transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-700 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* Default: Xanh ngọc bích thẫm, chữ trắng - Sang trọng và tin cậy */
        default:
          "bg-primary-700 text-white hover:bg-primary-900 shadow-sm hover:shadow-md",

        /* Destructive: Màu cam gạch ấm, thay vì màu đỏ gắt của AI thông thường */
        destructive: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",

        /* Outline: Đường viền mỏng manh, chữ đen thẫm */
        outline:
          "border border-primary-200 bg-transparent text-ink hover:bg-primary-50 hover:border-primary-300",

        /* Secondary: Màu của các khối thông tin phụ trên tạp chí */
        secondary: "bg-primary-50 text-primary-900 hover:bg-primary-100",

        /* Ghost: Tối giản tối đa, chỉ hiện diện khi tương tác */
        ghost: "hover:bg-primary-50 hover:text-primary-800 text-ink/70",

        /* Link: Áp dụng hiệu ứng gạch dưới mỏng (editorial underline) */
        link: "text-primary-700 underline-offset-8 hover:underline decoration-[1px]",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
