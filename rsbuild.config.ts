import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  performance: {
    chunkSplit: {
      override: {
        cacheGroups: {
          baseStyle: {
            test: /main\.less|tea\.css/,
          },
        },
      },
    },
  },
});
