- 基础 
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