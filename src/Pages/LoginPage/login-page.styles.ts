import { cva } from "class-variance-authority"

export const loginWrapper = cva("min-h-svh w-full", {
  variants: {
    variant: {
      dark: "bg-gray-700",
      light: "bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
})

export const loginContainer = "flex min-h-svh w-full items-center justify-center p-6 md:p-10 rounded-md"
export const loginCard = "w-full max-w-sm bg-white"

export const styles = {
  wrapper: "min-h-svh w-full bg-gray-700",
  container: "flex min-h-svh w-full items-center justify-center p-6 md:p-10 rounded-md",
  card: "w-full max-w-sm bg-white",
}