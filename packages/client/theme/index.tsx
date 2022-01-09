import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Poppins, ${base.fonts?.body}`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("gray.700", "whiteAlpha.900")(props),
      },
    }),
  },
});

export default theme;
