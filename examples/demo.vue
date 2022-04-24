<template>
  <SwallowForm
    :model="formData"
    label-width="120px"
    :fields="fields"
  ></SwallowForm>
</template>

<script>
import { SwallowForm, register } from '../src'

const abc = {
  name: 'abc',

  props: ['field', 'fieldModel'],

  data() {
    return {
      count: 0
    }
  },

  render() {
    const { prop } = this.field
    return (
      <input
        value={this.fieldModel[prop]}
        on-change={() => this.$set(this.fieldModel, prop, 12)}
      ></input>
    )
  }
}

register('abc', abc)

export default {
  name: 'App',

  components: {
    SwallowForm
  },

  data() {
    return {
      formData: {},
      fields: [
        {
          type: 'row',
          children: [
            {
              type: 'input',
              prop: 'xxx',
              item: '输入框',
              layout: 8
            },
            {
              type: 'select',
              prop: 'yyy',
              item: { label: '选择框' },
              layout: { span: 8 },
              options: [
                { label: '1', value: 1 },
                { label: '2', value: 2 }
              ]
            },
            ({ model, renderField }) => {
              return renderField({
                type: 'text',
                layout: { span: 8 },
                item: { label: '谁谁谁' },
                render: () => <span>选中值：{model.yyy}</span>
              })
            }
          ]
        },
        [
          {
            type: 'input',
            prop: 'xxx',
            item: { label: '输入框' },
            layout: { span: 8 }
          },
          {
            type: 'input',
            prop: 'xxx',
            item: { label: '输入框' },
            layout: { span: 8 }
          },
          {
            type: 'input',
            prop: 'xxx',
            item: { label: '输入框' },
            layout: { span: 4 }
          },
          {
            type: 'input',
            prop: 'xxx',
            item: { label: '输入框' },
            layout: { span: 4 }
          }
          // {
          //   type: 'abc',
          //   prop: 'xxx',
          //   item: { label: '输入框' },
          //   layout: { span: 4 },
          // },
          // {
          //   type: 'abc',
          //   prop: 'abc',
          //   layout: { span: 4 },
          // },
        ]
      ]
    }
  }
}
</script>
