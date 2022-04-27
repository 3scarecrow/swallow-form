<template>
  <SwallowForm
    :model="formData"
    label-width="120px"
    :fields="fields"
  ></SwallowForm>
</template>

<script>
import { SwallowForm, add } from '../src'

const clock = {
  name: 'Clock',

  props: ['count', 'field', 'fieldModel'],

  data() {
    return {
      vcount: this.count
    }
  },

  render() {
    return (
      <div>
        <button
          on-click={() => {
            this.vcount++
            this.$emit('click', this.vcount)
          }}
        >
          {this.vcount}
        </button>
      </div>
    )
  }
}

add('clock', clock)

export default {
  name: 'App',

  components: {
    SwallowForm
  },

  data() {
    return {
      formData: {},
      options: [],
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
              // options: () => this.options,
              options: () => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve([
                      { label: '1', value: 1 },
                      { label: '2', value: 2 }
                    ])
                  }, 5000)
                })
              }
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
            type: 'clock',
            prop: 'xxx',
            props: { count: 12 },
            item: { label: '按钮' },
            layout: { span: 8 },
            on: { click: (val) => console.log(val) }
          }
        ]
      ]
    }
  }
}
</script>
