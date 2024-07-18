import rocketLoader from '@tencent/rocket-design/lib/libs/loader/json';


(window as any).RocketConfig = {
  COS: 'https://tcbi-1258344699.cos.ap-guangzhou.myqcloud.com',
};

export default {
  async list(name: string) {
    return await rocketLoader({
      url: `${(window as any).RocketConfig?.COS}/open/tcbi/static/prod/geo-json/${name}.json`,
      windowAttrName: name,
    });
  },
  async areaList() {
    return await rocketLoader({
      url: `${(window as any).RocketConfig?.COS}/open/tcbi/static/prod/geo-json/191106_0p2hjc.json`,
      windowAttrName: 'list',
    });
  },
};
