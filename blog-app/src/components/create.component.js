import { Component } from '../core/component'
import { Form } from "../core/form"
import { Validators } from "../core/validators"


export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))
    this.form = new Form(this.$el, {
      title: [Validators.required, Validators.maxLength(50)],
      fulltext: [Validators.required, Validators.minLength(10), Validators.maxLength(500)]
    })
  }
}

function submitHandler(event) {
  event.preventDefault()
  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }
    this.form.clearInputs()
    console.log(formData)
  }
}
