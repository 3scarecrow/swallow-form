<template>
  <SwallowForm
    :model="formData"
    label-width="120px"
    :fields="fields"
  ></SwallowForm>
</template>

<script>
import { SwallowForm, add } from '../src'

const abc = {
  name: 'abc',

  props: ['count', 'field', 'fieldModel'],

  data() {
    return {
      vcount: this.count
    }
  },

  render() {
    // const { prop } = this.field
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
        {
          // <input
          //   value={this.fieldModel[prop]}
          //   on-change={() => this.$set(this.fieldModel, prop, 12)}
          // ></input>
        }
      </div>
    )
  }
}

add('abc', abc)

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
            type: 'abc',
            prop: 'xxx',
            props: { count: 12 },
            item: { label: '按钮' },
            layout: { span: 8 },
            on: {
              click: (val) => console.log(val)
            }
          }
        ]
      ]
    }
  }
}
</script>
