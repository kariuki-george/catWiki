import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {
            w: "300px",
            bg: "white",
          },
        }),
      },
    },
  },
  {
    breakpoints,
  }
);

const breakpoints = createBreakpoints({
  sm: "480px",
  md: "768px",
  lg: "1024px",
});
