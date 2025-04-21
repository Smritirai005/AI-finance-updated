"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ 
  className, 
  value, 
  extraStyles, // Explicitly destructure the extraStyles prop
  style,
  ...props 
}, ref) => {
  // Properly merge style objects
  const mergedStyles = React.useMemo(() => {
    return {
      transform: `translateX(-${100 - (value || 0)}%)`,
      ...(typeof extraStyles === 'object' ? extraStyles : {}),
      ...(style || {})
    }
  }, [value, extraStyles, style]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={mergedStyles}
      />
    </ProgressPrimitive.Root>
  );
})

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
