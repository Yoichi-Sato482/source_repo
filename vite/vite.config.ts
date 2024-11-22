import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { oml2d } from 'vite-plugin-oh-my-live2d'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    oml2d({
      // menus:{
      //   disable: true
      // },
      models: [
        {
          path: 'https://model.oml2d.com/Pio/model.json',
          scale: 0.35,
          position: [0, 50],
          stageStyle: {
            height: 260,
          },
        },
      ],
      tips: {
        style: {
          fontSize: '14px',
        },
        welcomeTips: {
          message:{
            morning: 'Hanlo,上午好,今天有什么安排呢？',
            daybreak: '早上好，今天是元气满满的一天！',
            afternoon: '下午好，今天过得还好吗？',
            dusk: '傍晚了，一天工作辛苦啦！',
            lateNight: '笨蛋！这么晚了还不去休息！zzzzz',
            noon: '午餐时间！吃点什么吧~',
            weeHours:'大！笨！蛋！这么晚了还不睡？当心熬夜变成大秃头！'
          }
        },
        idleTips: {
          wordTheDay: (wordTheDayData) => {
            return wordTheDayData.hitokoto;
          },
        },
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  }
})
