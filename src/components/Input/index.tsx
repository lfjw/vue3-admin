import { defineComponent } from "vue";

export default defineComponent({
  name: 'dp-input',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  render() {
    return (
      <div>
        <input></input>
      </div>
    )
  }
})