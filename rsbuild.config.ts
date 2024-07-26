import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  performance: {
    chunkSplit: {
      override: {
        cacheGroups: {
          baseStyle: {
            test: /main\.less|tea\.css/,
            name: 'baseStyle',
            chunks: 'all',
            priority: 10,
          },
          tea: {
            test: /tea-component/,
            name: 'tea',
            chunks: 'all',
            minSize: 0
          },
          rocketDesign: {
            test: /@tencent[\\/]rocket-design/,
            name: 'rocketDesign',
            chunks: 'all',
            minSize: 0,
          }
        },
      },
    },
  },
  tools: {
    rspack(config, { appendPlugins }) {
      // 仅在 RSDOCTOR 为 true 时注册插件，因为插件会增加构建耗时
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // 插件选项
            supports: {
              generateTileGraph: true,
            },
          }),
        );
      }
      config.ignoreWarnings = [
        /Critical dependency: the request of a dependency is an expression/,
      ];
    },
  },
});
