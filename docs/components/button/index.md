<!--
 * @Author: your name
 * @Date: 2021-11-12 14:41:14
 * @LastEditTime: 2021-11-12 16:40:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /stree-design/stree-design/docs/components/button/index.md
-->
- 按钮基础 
:::demo 按钮的 type 分别为 default、primary、info、success、warning 和 error。
```vue
<template>
   <s-button style="margin-right:12px;">Default</s-button>
   <s-button style="margin-right:12px;" type="primary">Primary</s-button>
   <s-button style="margin-right:12px;" type="info">Info</s-button>
   <s-button style="margin-right:12px;" type="success">Success</s-button>
   <s-button style="margin-right:12px;" type="warning">Warning</s-button>
   <s-button style="margin-right:12px;" type="error">Error</s-button>
</template>
```
:::

- 虚线按钮

:::demo 使用 dashed 来使用虚线按钮。
```vue
<template>
   <s-button style="margin-right:12px;" dashed>Default</s-button>
   <s-button style="margin-right:12px;" type="primary" dashed>Primary</s-button>
   <s-button style="margin-right:12px;" type="info" dashed>Info</s-button>
   <s-button style="margin-right:12px;" type="success" dashed>Success</s-button>
   <s-button style="margin-right:12px;" type="warning" dashed>Warning</s-button>
   <s-button style="margin-right:12px;" type="error" dashed>Error</s-button>
</template>
```
:::

- 尺寸

:::demo 有 tiny、small、medium 和 large 尺寸。
```vue
<template>
   <s-button style="margin-right:12px;" size="tiny">小小</s-button>
   <s-button style="margin-right:12px;" size="small">小</s-button>
   <s-button style="margin-right:12px;" size="medium">不小</s-button>
   <s-button style="margin-right:12px;" size="large">不不小</s-button>
</template>
```
:::

- 图标

:::demo icon-placement 默认居左 right居右
```vue
<template>
   <s-button type="default" style="margin-right:12px;">
        <template #icon>
          <s-icon>
            <s-ios-american-football/>
          </s-icon>
        </template>
        100元
      </s-button>
      <s-button type="default" icon-placement="right">
        <template #icon>
          <s-icon>
            <s-ios-american-football/>
          </s-icon>
        </template>
        100元
      </s-button>
</template>
```
:::